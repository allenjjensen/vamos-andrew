/* Books: listen to the same audiobook in English and Spanish, a chunk at a time.
   This file reads the chapter marks inside the audio files, pairs the English
   chapters with the Spanish ones, and draws the Books screens. */
(function () {
  'use strict';

  // ---------- reading files a piece at a time (books are hundreds of MB) ----------
  async function bytesAt(file, start, len) {
    return new DataView(await file.slice(start, start + len).arrayBuffer());
  }
  function u64(dv, at) { return dv.getUint32(at) * 4294967296 + dv.getUint32(at + 4); }
  function type4(dv, at) { return String.fromCharCode(dv.getUint8(at), dv.getUint8(at + 1), dv.getUint8(at + 2), dv.getUint8(at + 3)); }
  const utf8 = new TextDecoder('utf-8');

  // How long a file plays, asked from the browser itself (works for any format it can play).
  function audioDuration(file) {
    return new Promise(resolve => {
      const a = document.createElement('audio');
      const url = URL.createObjectURL(file);
      const done = d => { URL.revokeObjectURL(url); a.removeAttribute('src'); resolve(d); };
      a.preload = 'metadata';
      a.onloadedmetadata = () => done(isFinite(a.duration) ? a.duration : 0);
      a.onerror = () => done(0);
      a.src = url;
    });
  }

  // ---------- M4B / M4A / MP4 ----------
  // Finds the 'moov' box (the file's index; at the start or the very end) without reading the audio.
  async function findMoov(file) {
    let pos = 0;
    while (pos + 8 <= file.size) {
      const dv = await bytesAt(file, pos, 16);
      let size = dv.getUint32(0);
      const type = type4(dv, 4);
      let head = 8;
      if (size === 1) { size = u64(dv, 8); head = 16; } else if (size === 0) size = file.size - pos;
      if (size < 8) return null;
      if (type === 'moov') return { dv: await bytesAt(file, pos, size), head };
      pos += size;
    }
    return null;
  }
  // The boxes directly inside a box: [{type, at, size, body}] (positions within dv).
  function children(dv, start, end) {
    const out = [];
    let at = start;
    while (at + 8 <= end) {
      let size = dv.getUint32(at), head = 8;
      const type = type4(dv, at + 4);
      if (size === 1) { size = u64(dv, at + 8); head = 16; } else if (size === 0) size = end - at;
      if (size < 8 || at + size > end) break;
      out.push({ type, at, size, body: at + head, end: at + size });
      at += size;
    }
    return out;
  }
  function child(dv, box, type) { return children(dv, box.body, box.end).find(b => b.type === type); }
  function path(dv, box, ...types) {
    for (const t of types) { if (!box) return null; box = child(dv, box, t); }
    return box;
  }

  // Nero chapters ('chpl'): start times in 100-nanosecond steps, then a title.
  function readChpl(dv, box) {
    let at = box.body;
    const version = dv.getUint8(at); at += 4;
    if (version >= 1) at += 4;
    const count = dv.getUint8(at); at += 1;
    const list = [];
    for (let i = 0; i < count && at + 9 <= box.end; i++) {
      const start = u64(dv, at) / 1e7; at += 8;
      const len = dv.getUint8(at); at += 1;
      const title = utf8.decode(new Uint8Array(dv.buffer, dv.byteOffset + at, len)); at += len;
      list.push({ title, start });
    }
    return list;
  }

  // QuickTime chapters: a text track whose samples are the chapter titles.
  async function readTextTrack(file, dv, trak) {
    const mdia = child(dv, trak, 'mdia');
    const mdhd = child(dv, mdia, 'mdhd');
    const v = dv.getUint8(mdhd.body);
    const scale = dv.getUint32(mdhd.body + (v === 1 ? 20 : 12));
    const stbl = path(dv, mdia, 'minf', 'stbl');
    const stts = child(dv, stbl, 'stts'), stsc = child(dv, stbl, 'stsc'), stsz = child(dv, stbl, 'stsz');
    const stco = child(dv, stbl, 'stco') || child(dv, stbl, 'co64');
    if (!stts || !stsc || !stsz || !stco) return [];
    // start time of every sample
    const times = [];
    let t = 0;
    for (let i = 0, n = dv.getUint32(stts.body + 4); i < n; i++) {
      const count = dv.getUint32(stts.body + 8 + i * 8), delta = dv.getUint32(stts.body + 12 + i * 8);
      for (let k = 0; k < count; k++) { times.push(t / scale); t += delta; }
    }
    // size of every sample
    const fixed = dv.getUint32(stsz.body + 4), nSamples = dv.getUint32(stsz.body + 8);
    const sizes = [];
    for (let i = 0; i < nSamples; i++) sizes.push(fixed || dv.getUint32(stsz.body + 12 + i * 4));
    // file position of every sample (chunks hold one or more samples in a row)
    const wide = stco.type === 'co64';
    const nChunks = dv.getUint32(stco.body + 4);
    const chunkAt = k => wide ? u64(dv, stco.body + 8 + k * 8) : dv.getUint32(stco.body + 8 + k * 4);
    const runs = [];
    for (let i = 0, n = dv.getUint32(stsc.body + 4); i < n; i++) {
      runs.push({ first: dv.getUint32(stsc.body + 8 + i * 12) - 1, per: dv.getUint32(stsc.body + 12 + i * 12) });
    }
    const offsets = [];
    for (let r = 0; r < runs.length; r++) {
      const last = r + 1 < runs.length ? runs[r + 1].first : nChunks;
      for (let c = runs[r].first; c < last; c++) {
        let at = chunkAt(c);
        for (let k = 0; k < runs[r].per && offsets.length < nSamples; k++) { offsets.push(at); at += sizes[offsets.length - 1]; }
      }
    }
    const list = [];
    for (let i = 0; i < nSamples; i++) {
      const s = await bytesAt(file, offsets[i], Math.min(sizes[i], 600));
      const len = Math.min(s.getUint16(0), s.byteLength - 2);
      const raw = new Uint8Array(s.buffer, s.byteOffset + 2, len);
      const title = raw[0] === 0xfe && raw[1] === 0xff ? new TextDecoder('utf-16be').decode(raw.subarray(2)) : utf8.decode(raw);
      list.push({ title, start: times[i] || 0 });
    }
    return list;
  }

  // Where every AAC frame of the sound track sits, so any stretch of the book can be decoded
  // on its own (wrapped as ADTS) without loading the whole file.
  function aacIndex(dv, trak) {
    const mdia = child(dv, trak, 'mdia');
    const mdhd = child(dv, mdia, 'mdhd');
    const v = dv.getUint8(mdhd.body);
    const scale = dv.getUint32(mdhd.body + (v === 1 ? 20 : 12));
    const stbl = path(dv, mdia, 'minf', 'stbl');
    const stsd = child(dv, stbl, 'stsd');
    // stsd → mp4a → esds → the 2-byte AudioSpecificConfig
    const mp4a = children(dv, stsd.body + 8, stsd.end).find(b => b.type === 'mp4a');
    if (!mp4a) return null;
    const esds = children(dv, mp4a.body + 28, mp4a.end).find(b => b.type === 'esds');
    if (!esds) return null;
    let config = null;
    for (let at = esds.body + 4; at < esds.end - 2; at++) {
      if (dv.getUint8(at) !== 0x05) continue; // DecoderSpecificInfo tag
      let p = at + 1, len = 0, b;
      do { b = dv.getUint8(p++); len = (len << 7) | (b & 0x7f); } while (b & 0x80 && p < esds.end);
      if (len >= 2 && len < 64) { config = [dv.getUint8(p), dv.getUint8(p + 1)]; break; }
    }
    if (!config) return null;
    const objectType = config[0] >> 3;
    const freqIndex = ((config[0] & 7) << 1) | (config[1] >> 7);
    const channels = (config[1] >> 3) & 15;
    const stts = child(dv, stbl, 'stts'), stsc = child(dv, stbl, 'stsc'), stsz = child(dv, stbl, 'stsz');
    const stco = child(dv, stbl, 'stco') || child(dv, stbl, 'co64');
    const n = dv.getUint32(stsz.body + 8), fixed = dv.getUint32(stsz.body + 4);
    const sizes = new Uint32Array(n);
    for (let i = 0; i < n; i++) sizes[i] = fixed || dv.getUint32(stsz.body + 12 + i * 4);
    const wide = stco.type === 'co64';
    const nChunks = dv.getUint32(stco.body + 4);
    const offsets = new Float64Array(n);
    const runs = [];
    for (let i = 0, m = dv.getUint32(stsc.body + 4); i < m; i++) {
      runs.push({ first: dv.getUint32(stsc.body + 8 + i * 12) - 1, per: dv.getUint32(stsc.body + 12 + i * 12) });
    }
    let s = 0;
    for (let r = 0; r < runs.length; r++) {
      const last = r + 1 < runs.length ? runs[r + 1].first : nChunks;
      for (let c = runs[r].first; c < last && s < n; c++) {
        let at = wide ? u64(dv, stco.body + 8 + c * 8) : dv.getUint32(stco.body + 8 + c * 4);
        for (let k = 0; k < runs[r].per && s < n; k++) { offsets[s] = at; at += sizes[s]; s++; }
      }
    }
    const frame = dv.getUint32(stts.body + 12) || 1024; // samples per frame (stts delta)
    return { scale, frame, sizes, offsets, objectType, freqIndex, channels };
  }

  async function mp4Info(file) {
    const moov = await findMoov(file);
    if (!moov) return { chapters: [], aac: null };
    const dv = moov.dv;
    const root = { body: moov.head, end: dv.byteLength };
    let chapters = [], aac = null;
    for (const trak of children(dv, root.body, root.end).filter(b => b.type === 'trak')) {
      const hdlr = path(dv, trak, 'mdia', 'hdlr');
      const kind = hdlr && type4(dv, hdlr.body + 8);
      if (kind === 'text' && !chapters.length) chapters = await readTextTrack(file, dv, trak);
      if (kind === 'soun' && !aac) aac = aacIndex(dv, trak);
    }
    if (!chapters.length) {
      const chpl = path(dv, root, 'udta', 'chpl');
      if (chpl) chapters = readChpl(dv, chpl);
    }
    return { chapters, aac };
  }

  // Decodes seconds [from, to) of a part into sound the page can measure.
  let decodeCtx = null;
  async function decodeRange(part, from, to) {
    const ix = part.aac;
    decodeCtx = decodeCtx || new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 1, 8000);
    if (!ix) {
      // MP3: frames carry their own headers, so a byte slice decodes as is.
      const a = Math.floor(part.file.size * from / part.duration), b = Math.ceil(part.file.size * to / part.duration);
      return decodeCtx.decodeAudioData(await part.file.slice(a, b).arrayBuffer());
    }
    const per = ix.frame / ix.scale;
    const first = Math.max(0, Math.floor(from / per)), last = Math.min(ix.sizes.length, Math.ceil(to / per));
    if (last <= first) return null;
    const start = ix.offsets[first], end = ix.offsets[last - 1] + ix.sizes[last - 1];
    const raw = new Uint8Array(await part.file.slice(start, end).arrayBuffer());
    let total = 0;
    for (let i = first; i < last; i++) total += ix.sizes[i] + 7;
    const out = new Uint8Array(total);
    const profile = Math.max(0, Math.min(3, (ix.objectType === 5 || ix.objectType === 29 ? 2 : ix.objectType) - 1));
    let w = 0;
    for (let i = first; i < last; i++) {
      const len = ix.sizes[i] + 7, src = ix.offsets[i] - start;
      out[w] = 0xff; out[w + 1] = 0xf1;
      out[w + 2] = (profile << 6) | (ix.freqIndex << 2) | (ix.channels >> 2);
      out[w + 3] = ((ix.channels & 3) << 6) | (len >> 11);
      out[w + 4] = (len >> 3) & 0xff;
      out[w + 5] = ((len & 7) << 5) | 0x1f;
      out[w + 6] = 0xfc;
      out.set(raw.subarray(src, src + ix.sizes[i]), w + 7);
      w += len;
    }
    return decodeCtx.decodeAudioData(out.buffer);
  }

  // ---------- MP3: chapter frames (CHAP) in the ID3 tag, if it has them ----------
  async function mp3Chapters(file) {
    const head = await bytesAt(file, 0, 10);
    if (type4(head, 0).slice(0, 3) !== 'ID3') return [];
    const major = head.getUint8(3);
    const syncsafe = (d, at) => (d.getUint8(at) << 21) | (d.getUint8(at + 1) << 14) | (d.getUint8(at + 2) << 7) | d.getUint8(at + 3);
    const tagSize = syncsafe(head, 6);
    const dv = await bytesAt(file, 10, tagSize);
    const frameSize = at => major === 4 ? syncsafe(dv, at) : dv.getUint32(at);
    const text = (at, len) => {
      const enc = dv.getUint8(at);
      const raw = new Uint8Array(dv.buffer, dv.byteOffset + at + 1, len - 1);
      const dec = enc === 1 ? 'utf-16' : enc === 2 ? 'utf-16be' : enc === 3 ? 'utf-8' : 'latin1';
      return new TextDecoder(dec).decode(raw).replace(/\0+$/, '');
    };
    const list = [];
    let at = 0;
    while (at + 10 <= dv.byteLength) {
      const id = type4(dv, at), size = frameSize(at + 4);
      if (!/^[A-Z0-9]{4}$/.test(id) || size <= 0) break;
      if (id === 'CHAP') {
        const body = at + 10, end = body + size;
        let p = body;
        while (p < end && dv.getUint8(p) !== 0) p++;
        const start = dv.getUint32(p + 1) / 1000;
        let title = '';
        for (let q = p + 17; q + 10 <= end;) {
          const sid = type4(dv, q), ssize = frameSize(q + 4);
          if (sid === 'TIT2') title = text(q + 10, ssize);
          q += 10 + ssize;
        }
        list.push({ title, start });
      }
      at += 10 + size;
    }
    return list.sort((a, b) => a.start - b.start);
  }

  // One audio file → { file, name, duration, chapters: [{ title, start }] }.
  async function readPart(file) {
    const isMp4 = /\.(m4b|m4a|mp4|aac)$/i.test(file.name) || /mp4|m4a|m4b/.test(file.type);
    let chapters = [], aac = null;
    try {
      if (isMp4) ({ chapters, aac } = await mp4Info(file));
      else chapters = await mp3Chapters(file);
    } catch (e) { chapters = []; }
    const duration = await audioDuration(file);
    chapters = chapters.filter(c => c.start < duration || !duration);
    if (!chapters.length || chapters[0].start > 1) chapters.unshift({ title: chapters.length ? 'Start' : niceName(file.name), start: 0 });
    return { file, name: file.name, duration, chapters, aac };
  }
  function niceName(name) { return name.replace(/\.[^.]+$/, '').replace(/[_]+/g, ' '); }

  // A book is one or more files (one M4B, or an MP3 per chapter) played in a row.
  // Its chapters are laid out on one timeline: { title, start, end } in seconds from the very start.
  async function readBook(files) {
    const list = [...files].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    const parts = [];
    for (const f of list) parts.push(await readPart(f));
    const chapters = [];
    let offset = 0;
    parts.forEach((p, k) => {
      p.offset = offset;
      p.chapters.forEach((c, i) => {
        const end = i + 1 < p.chapters.length ? p.chapters[i + 1].start : p.duration;
        chapters.push({ title: parts.length > 1 && p.chapters.length === 1 ? niceName(p.name) : c.title, start: offset + c.start, end: offset + end, part: k });
      });
      offset += p.duration;
    });
    return { parts, chapters, duration: offset, name: niceName(list[0] ? list[0].name : '') };
  }

  // ---------- pauses: found by decoding 10-minute blocks, kept on the phone ----------
  const BLOCK = 600;
  let dbp = null;
  function db() {
    if (!dbp) {
      dbp = new Promise((res, rej) => {
        const r = indexedDB.open('vamos-books', 1);
        r.onupgradeneeded = () => r.result.createObjectStore('pauses');
        r.onsuccess = () => res(r.result);
        r.onerror = () => rej(r.error);
      }).catch(() => null);
    }
    return dbp;
  }
  async function dbGet(key) {
    const d = await db();
    if (!d) return null;
    return new Promise(res => {
      try {
        const q = d.transaction('pauses').objectStore('pauses').get(key);
        q.onsuccess = () => res(q.result || null);
        q.onerror = () => res(null);
      } catch (e) { res(null); }
    });
  }
  async function dbSet(key, val) {
    const d = await db();
    if (!d) return;
    try { d.transaction('pauses', 'readwrite').objectStore('pauses').put(val, key); } catch (e) { /* not kept */ }
  }

  // Every pause of a quarter second or more, as [at, length, at, length, …].
  // "Quiet" is measured against each block, since narrators and recordings differ.
  function findPauses(buf, offset) {
    const d = buf.getChannelData(0), win = Math.round(buf.sampleRate * 0.05);
    const lv = new Float32Array(Math.floor(d.length / win));
    for (let j = 0; j < lv.length; j++) {
      let s = 0;
      for (let k = j * win, e = k + win; k < e; k++) s += d[k] * d[k];
      lv[j] = Math.sqrt(s / win);
    }
    const sorted = Float32Array.from(lv).sort();
    const floor = sorted[Math.floor(sorted.length * 0.05)] || 0, speech = sorted[Math.floor(sorted.length * 0.6)] || 0;
    const quiet = floor + (speech - floor) * 0.12;
    const out = [];
    let run = 0;
    for (let j = 0; j <= lv.length; j++) {
      if (j < lv.length && lv[j] < quiet) { run++; continue; }
      if (run >= 5) out.push(offset + (j - run) * 0.05, run * 0.05);
      run = 0;
    }
    return Float32Array.from(out);
  }

  const blocks = new Map();
  function blockPauses(part, k) {
    const key = `${part.name}|${part.file.size}|${k}`;
    if (!blocks.has(key)) {
      blocks.set(key, (async () => {
        const kept = await dbGet(key);
        if (kept) return kept;
        const from = k * BLOCK, to = Math.min(part.duration, from + BLOCK);
        const buf = await decodeRange(part, from, to);
        const arr = buf ? findPauses(buf, from) : new Float32Array(0);
        dbSet(key, arr);
        return arr;
      })().catch(e => { blocks.delete(key); throw e; }));
    }
    return blocks.get(key);
  }
  // The pauses between two times on a book's timeline: [{ at, len }].
  async function pausesIn(book, from, to) {
    const list = [];
    for (const part of book.parts) {
      const a = Math.max(0, from - part.offset), b = Math.min(part.duration, to - part.offset);
      if (b <= a) continue;
      for (let k = Math.floor(a / BLOCK); k * BLOCK < b; k++) {
        const arr = await blockPauses(part, k);
        for (let i = 0; i < arr.length; i += 2) list.push({ at: arr[i] + part.offset, len: arr[i + 1] });
      }
    }
    list.sort((x, y) => x.at - y.at);
    const merged = []; // a pause cut in two by a block edge is one pause
    for (const p of list) {
      const last = merged[merged.length - 1];
      if (last && p.at <= last.at + last.len + 0.06) last.len = Math.max(last.len, p.at + p.len - last.at);
      else merged.push({ at: p.at, len: p.len });
    }
    return merged.filter(p => p.at + p.len > from && p.at < to);
  }

  // ---------- the pair of books and its sync points ----------
  // The chapters to match come from the Spanish book (the English one if the Spanish has none,
  // and a stop every 20 minutes if neither does). For each one, Andrew picks where it starts in
  // the other book; those picks keep the two in step.
  const STORE = 'vamos-books-v1';
  const LANG = { en: 'English', es: 'Spanish' };
  let pair = null; // { en, es, d, f, key, title, sections, made }

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORE)) || { books: {} }; } catch (e) { return { books: {} }; }
  }
  function writeState(s) {
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) { /* not saved */ }
  }
  function bookState() {
    return loadState().books[pair.key] || { anchors: {}, skipped: {} };
  }
  function updateBook(fn) {
    const s = loadState();
    const b = s.books[pair.key] || { anchors: {}, skipped: {} };
    fn(b);
    s.books[pair.key] = b;
    s.last = { title: pair.title, en: pair.en.name, es: pair.es.name };
    writeState(s);
  }

  function sectionsOf(book) {
    let list = book.chapters.map(c => ({ title: c.title, start: c.start, end: c.end }));
    let made = false;
    if (list.length < 3) {
      made = true;
      list = [];
      for (let t = 0; t < book.duration; t += 1200) list.push({ title: `Part ${list.length + 1}`, start: t, end: Math.min(book.duration, t + 1200) });
    }
    const out = [];
    let carry = null; // tiny chapters (credits, titles) join the next one
    for (const c of list) {
      if (c.end - c.start < 90) { if (carry === null) carry = c.start; continue; }
      out.push({ title: c.title, start: carry === null ? c.start : carry, end: c.end });
      carry = null;
    }
    if (carry !== null && out.length) out[out.length - 1].end = book.duration;
    if (!out.length) out.push({ title: 'Whole book', start: 0, end: book.duration });
    return { sections: out, made };
  }

  function makePair(en, es) {
    const dLang = es.chapters.length >= 3 || en.chapters.length < 3 ? 'es' : 'en';
    const d = dLang === 'es' ? es : en, f = dLang === 'es' ? en : es;
    const { sections, made } = sectionsOf(d);
    const id = b => b.parts.map(p => `${p.name}:${p.file.size}`).join(',');
    return {
      en, es, d, f, dLang, fLang: dLang === 'es' ? 'en' : 'es', sections, made,
      key: `${id(es)}|${id(en)}`,
      title: niceName(en.parts[0].name) || niceName(es.parts[0].name),
    };
  }

  // Known matching points (driver time → follower time), in order.
  function knownPoints(skip) {
    const st = bookState();
    const pts = [];
    pair.sections.forEach((s, i) => {
      if (i !== skip && st.anchors[i] != null) pts.push({ d: s.start, f: st.anchors[i] });
    });
    if (!pts.length || pts[0].d > 0) pts.unshift({ d: 0, f: 0 });
    return pts.sort((a, b) => a.d - b.d);
  }
  // Where a driver time probably is in the follower: between two known points if there are
  // known points on both sides, otherwise carried on at the pace of the last stretch.
  function guessTime(t, skip) {
    const pts = knownPoints(skip);
    const after = pts.find(p => p.d > t);
    const before = pts.filter(p => p.d <= t);
    const a = before[before.length - 1];
    if (after) return a.f + (t - a.d) * (after.f - a.f) / Math.max(1, after.d - a.d);
    const b = before[before.length - 2];
    const pace = b && a.d - b.d > 60 ? (a.f - b.f) / (a.d - b.d) : pair.f.duration / pair.d.duration;
    return Math.min(pair.f.duration, a.f + (t - a.d) * pace);
  }

  // The likely starting spots for section i in the follower: the longest pauses near the guess.
  async function candidates(i, wide) {
    const s = pair.sections[i];
    const pts = knownPoints(i);
    const guess = guessTime(s.start, i);
    const lo = Math.max(0, ...pts.filter(p => p.d < s.start).map(p => p.f));
    const hiPts = pts.filter(p => p.d > s.start);
    const hi = hiPts.length ? hiPts[0].f : pair.f.duration;
    const near = Math.min(...pts.map(p => Math.abs(p.d - s.start)));
    const reach = Math.min(900, Math.max(240, near * 0.15)) * (1 + 1.5 * (wide || 0));
    const from = Math.max(lo + 1, guess - reach), to = Math.min(hi - 1, guess + reach);
    if (to <= from) return [];
    const found = (await pausesIn(pair.f, from, to)).filter(p => p.len >= 0.8);
    return found.sort((a, b) => b.len - a.len).slice(0, wide ? 6 : 4)
      .map(p => ({ at: Math.max(0, p.at + p.len - 0.3) }))
      .sort((a, b) => a.at - b.at);
  }

  // ---------- paragraph matching inside a chapter ----------
  // Narrators pause longer between paragraphs, and both books have the same paragraphs.
  // Between fixed points (the chapter's two ends and any nudges), the longer pauses of the two
  // books are paired in order, staying near the straight line between the fixed points.
  // A first pass pairs only long pauses; a second pass, guided by those, pairs shorter ones.
  function mapThrough(points, t) {
    let k = 1;
    while (k < points.length - 1 && points[k].d < t) k++;
    const a = points[k - 1], b = points[k];
    return a.f + (t - a.d) * (b.f - a.f) / Math.max(0.001, b.d - a.d);
  }
  function pairUp(A, B, guide, tol, minLen) {
    const a = A.filter(p => p.len >= minLen), b = B.filter(p => p.len >= minLen);
    const n = a.length, m = b.length;
    if (!n || !m) return [];
    const W = m + 1;
    const S = new Float32Array((n + 1) * W), how = new Uint8Array((n + 1) * W); // 1 skip a, 2 skip b, 3 pair
    for (let i = 1; i <= n; i++) {
      const want = mapThrough(guide, a[i - 1].t);
      for (let j = 1; j <= m; j++) {
        let best = S[(i - 1) * W + j], dir = 1;
        if (S[i * W + j - 1] > best) { best = S[i * W + j - 1]; dir = 2; }
        const off = Math.abs(b[j - 1].t - want);
        if (off < tol) {
          const s = Math.min(a[i - 1].len, b[j - 1].len, 4) - minLen * 0.8 - (off / tol) ** 2;
          if (s > 0 && S[(i - 1) * W + j - 1] + s > best) { best = S[(i - 1) * W + j - 1] + s; dir = 3; }
        }
        S[i * W + j] = best;
        how[i * W + j] = dir;
      }
    }
    const out = [];
    for (let i = n, j = m; i > 0 && j > 0;) {
      const dir = how[i * W + j];
      if (dir === 3) { out.push({ d: a[i - 1].t, f: b[j - 1].t, len: Math.min(a[i - 1].len, b[j - 1].len) }); i--; j--; } else if (dir === 1) i--; else j--;
    }
    return out.reverse();
  }
  // Drops pairs that would make one book race or crawl compared with the other. When two
  // neighbours disagree, the weaker one (the shorter pause) goes.
  function keepSteady(points, pace) {
    const list = points.slice();
    for (let round = 0; round < 2000; round++) {
      let worst = -1;
      for (let k = 1; k < list.length; k++) {
        const s = (list[k].f - list[k - 1].f) / Math.max(0.001, list[k].d - list[k - 1].d);
        if (s >= pace * 0.55 && s <= pace * 1.8) continue;
        const a = list[k - 1], b = list[k];
        const drop = a.fixed ? k : b.fixed ? k - 1 : (a.len || 0) < (b.len || 0) ? k - 1 : k;
        if (!list[drop].fixed) { worst = drop; break; }
      }
      if (worst < 0) break;
      list.splice(worst, 1);
    }
    return list;
  }

  // Everything the player needs for one section: the matching points and both books' pauses.
  const aligned = new Map();
  function sectionEnds(i) {
    const st = bookState(), s = pair.sections[i];
    const fS = st.anchors[i] != null ? st.anchors[i] : i === 0 ? 0 : guessTime(s.start);
    const next = pair.sections[i + 1];
    const fE = next && st.anchors[i + 1] != null ? st.anchors[i + 1] : guessTime(s.end);
    return { dS: s.start, dE: s.end, fS, fE: Math.max(fE, fS + 1) };
  }
  async function alignRange(ends, fine, opts = {}) {
    const [A, B] = await Promise.all([pausesIn(pair.d, ends.dS, ends.dE), pausesIn(pair.f, ends.fS, ends.fE)]);
    const mid = list => list.map(p => ({ t: p.at + p.len / 2, len: p.len }));
    const a = mid(A), b = mid(B);
    const fixed = [{ d: ends.dS, f: ends.fS, fixed: true }, ...fine.map(p => ({ d: p.d, f: p.f, fixed: true })), { d: ends.dE, f: ends.fE, fixed: true }]
      .sort((x, y) => x.d - y.d);
    const pace = (ends.fE - ends.fS) / Math.max(1, ends.dE - ends.dS);
    const span = ends.dE - ends.dS;
    // Biggest pauses first (scene breaks), loosely; then each pass pairs shorter pauses,
    // more tightly, along the pairs found so far.
    const passes = opts.passes || [[2, Math.max(30, 0.06 * span)], [1, 15], [0.5, 4]];
    let guide = fixed, coarse = fixed;
    for (const [minLen, tol] of passes) {
      guide = keepSteady([...fixed, ...pairUp(a, b, guide, tol, minLen)].sort((x, y) => x.d - y.d), pace);
      if (minLen >= 1) coarse = guide;
    }
    const points = guide;
    // remember which driver pauses got a partner
    const partner = new Map(points.filter(p => !p.fixed).map(p => [p.d.toFixed(3), p.f]));
    a.forEach(p => { const f = partner.get(p.t.toFixed(3)); if (f != null) p.f = f; });
    return { ...ends, points, coarse, a, b, pace };
  }
  function alignSection(i) {
    const ends = sectionEnds(i);
    const fine = (bookState().fine || []).filter(p => p.d > ends.dS + 1 && p.d < ends.dE - 1);
    const key = `${i}|${ends.fS}|${ends.fE}|${fine.map(p => p.d + ':' + p.f).join(',')}`;
    if (!aligned.has(key)) {
      const job = alignRange(ends, fine).then(al => ({ i, ...al }));
      aligned.set(key, job);
      job.catch(() => aligned.delete(key));
    }
    return aligned.get(key);
  }

  // ---------- playing short clips ----------
  const audio = document.createElement('audio');
  audio.preload = 'metadata';
  let clipTimer = 0, clipBtn = null;
  function urlOf(part) { return part.url || (part.url = URL.createObjectURL(part.file)); }
  function locate(book, t) {
    let part = book.parts[0];
    for (const p of book.parts) if (t >= p.offset) part = p;
    return { part, local: t - part.offset };
  }
  function stopClip() {
    clearTimeout(clipTimer);
    audio.pause();
    if (clipBtn) { clipBtn.classList.remove('playing'); clipBtn.textContent = '▶'; clipBtn = null; }
  }
  function stop() { stopClip(); stopPlayer(); }
  function playClip(book, t, secs, btn) {
    const same = clipBtn === btn;
    stopClip();
    if (same) return; // tapping the playing clip stops it
    const { part, local } = locate(book, t);
    const url = urlOf(part);
    const go = () => { audio.currentTime = Math.max(0, local); audio.play().catch(() => {}); };
    if (audio.src === url && audio.readyState >= 1) go();
    else { audio.addEventListener('loadedmetadata', go, { once: true }); audio.src = url; }
    clipBtn = btn;
    btn.classList.add('playing');
    btn.textContent = '⏸';
    clipTimer = setTimeout(stopClip, secs * 1000);
  }

  // ---------- the player: a chunk in one language, then the same chunk in the other ----------
  // Chunk lengths are book time (where the audio is), so they stay the same at any speed.
  const SIZES = [
    ['sentence', 'One sentence', 5], ['few', 'A few sentences', 12], ['para', 'A paragraph', 25],
    ['s30', 'About 30 seconds', 30], ['m1', 'About 1 minute', 60],
    ...[2, 3, 4, 5, 6, 7, 8, 9, 10].map(m => [`m${m}`, `About ${m} minutes`, m * 60]),
  ];
  const ORDERS = [
    ['en-es', 'English, then Spanish'], ['es-en-es', 'Spanish, English, Spanish again'],
    ['es-en', 'Spanish, then English'], ['es', 'Spanish only'],
  ];
  const SPEEDS = ['0.5', '0.6', '0.7', '0.75', '0.8', '0.85', '0.9', '1', '1.1', '1.2', '1.25', '1.3', '1.4', '1.5', '1.75', '2', '2.25', '2.5', '2.75', '3']
    .map(v => [v, v === '1' ? '1x (normal)' : `${v}x`]);
  const LABELS = { size: 'Switch languages every', order: 'Play order', speedEn: 'English speed', speed: 'Spanish speed' };
  function settings() { return Object.assign({ size: 's30', order: 'en-es', speed: '1', speedEn: '1' }, loadState().settings); }
  function rateOf(lang) { const st = settings(); return +(lang === 'es' ? st.speed : st.speedEn) || 1; }
  function setSetting(k, v) {
    const s = loadState();
    s.settings = Object.assign({}, s.settings, { [k]: v });
    writeState(s);
  }

  // The nearest pause to t (within reach), else t itself.
  function snapTo(list, t, reach) {
    let best = null;
    for (const p of list) {
      const off = Math.abs(p.t - t);
      if (off <= reach && (!best || off < best.off)) best = { t: p.t, off };
    }
    return best ? best.t : t;
  }
  // The next chunk from (d0, f0): it ends at a pause near the chosen length, preferring
  // pauses that were paired with the other book, so both halves end at the same place.
  function nextChunk(al, d0, f0, size) {
    const T = (SIZES.find(s => s[0] === size) || SIZES[3])[2];
    // short chunks can stretch a lot to find a good pause; long ones stay close to the length asked for
    const lo = T < 60 ? 0.6 : 0.85, hi = T < 60 ? 1.7 : 1.2;
    if (al.dE - d0 <= T * (T < 60 ? 1.6 : 1.3)) return { d0, f0, d1: al.dE, f1: al.fE, last: true };
    let best = null;
    for (const p of al.a) {
      const len = p.t - d0;
      if (len < T * lo) continue;
      if (len > T * hi) break;
      const s = Math.min(p.len, 2) * (size === 'para' ? 2 : 1) + (p.f != null ? 1 : 0) - 1.5 * Math.abs(len - T) / T;
      if (!best || s > best.s) best = { p, s };
    }
    const d1 = best ? best.p.t : d0 + T;
    let f1 = best && best.p.f != null ? best.p.f : snapTo(al.b, mapThrough(al.points, d1), Math.max(1.5, T * 0.12));
    if (f1 <= f0 + 0.5) f1 = f0 + (d1 - d0) * al.pace;
    return { d0, f0, d1, f1 };
  }
  function rangeOf(chunk, lang) { return lang === pair.dLang ? [chunk.d0, chunk.d1] : [chunk.f0, chunk.f1]; }

  const els = { en: document.createElement('audio'), es: document.createElement('audio') };
  let P = null; // the player while it's open

  function stopPlayer() {
    if (!P) return;
    P.token++;
    clearTimeout(P.timer);
    els.en.pause();
    els.es.pause();
    P.playing = false;
  }

  // Plays book time [from, to) in one language, crossing into the next file if the book has several.
  function playSegment(lang, from, to, token, done) {
    const el = els[lang], book = pair[lang];
    const { part, local } = locate(book, from);
    const partEnd = part.offset + part.duration;
    const end = Math.min(to, partEnd) - part.offset;
    const url = urlOf(part);
    const rate = rateOf(lang);
    P.now = () => part.offset + el.currentTime; // where this language is right now, in book time
    const watch = () => {
      if (!P || token !== P.token) return;
      const left = (end - el.currentTime) / (el.playbackRate || 1);
      if (left <= 0.03 || el.ended) {
        el.pause();
        if (to > partEnd + 0.05) playSegment(lang, partEnd, to, token, done);
        else done();
        return;
      }
      P.timer = setTimeout(watch, left > 0.6 ? (left - 0.4) * 1000 : 25);
    };
    const start = () => {
      if (!P || token !== P.token) return;
      el.defaultPlaybackRate = rate;
      el.playbackRate = rate;
      el.currentTime = Math.max(0, local);
      el.play().then(watch, () => { if (P && token === P.token) { stopPlayer(); drawNow(); } });
    };
    if (el.src === url && el.readyState >= 1) start();
    else { el.addEventListener('loadedmetadata', start, { once: true }); el.src = url; }
  }

  function needsMatch(i) {
    const st = bookState();
    return i > 0 && st.anchors[i] == null && !st.skipped[i];
  }
  // Saves the spot: the chunk, which language of it, and how far into that language.
  function savePos() {
    if (!P) return;
    const c = P.chunk, s = P.seq[P.step];
    const pos = { i: P.i, d: c.d0, f: c.f0, step: P.step };
    if (P.playing && s && P.now) pos.t = P.now();
    else if (P.resume) Object.assign(pos, { step: P.resume.step, t: P.resume.t });
    updateBook(b => { b.pos = pos; });
  }
  setInterval(() => { if (P && P.playing) savePos(); }, 5000);
  document.addEventListener('visibilitychange', () => { if (document.hidden) savePos(); });

  // Opens the player at section i (at driver time d if given, or a saved spot), first asking
  // for the chapter match if it's missing.
  async function openPlayer(i, d, autoplay, spot) {
    if (i >= pair.sections.length) return showFinished();
    if (needsMatch(i)) return showFinder(i, 0, () => openPlayer(i, null, autoplay));
    const s = pair.sections[i];
    const id = render(`${pair.made ? 'Part' : 'Chapter'} ${i + 1} of ${pair.sections.length}`, `
      <div class="big-emoji">🎧</div><h2 class="center">${esc(s.title)}</h2>
      <p class="center small">Getting the chapter ready… (the first time takes a few seconds)</p>`, '', showBook);
    let al;
    try { al = await alignSection(i); } catch (e) { al = null; }
    if (id !== screenId) return;
    if (!al) {
      render('Books', `<div class="big-emoji">😕</div><h2 class="center">Couldn't read this chapter</h2>
        <p class="center">Something in the audio file didn't decode. Try another chapter.</p>`, '<button class="btn">Back to the book</button>', showBook);
      ctx.app.querySelector('.foot .btn').addEventListener('click', showBook);
      return;
    }
    const startD = d != null && d > al.dS + 0.5 && d < al.dE - 0.5 ? d : al.dS;
    const startF = startD === al.dS ? al.fS : spot && spot.f != null ? spot.f : snapTo(al.b, mapThrough(al.points, startD), 1.5);
    P = { i, al, token: 0, timer: 0, playing: false, step: 0, seq: [], n: 1, history: [], lastBack: 0, extra: -1 };
    P.chunk = nextChunk(al, startD, startF, settings().size);
    // back where he left off: the same chunk, the same language, the same second
    if (spot && spot.step != null) {
      P.seq = seqFor(P.chunk);
      const s = P.seq[spot.step];
      if (s) {
        P.step = spot.step;
        if (spot.t != null && spot.t > s.range[0] + 1 && spot.t < s.range[1] - 1) P.resume = { step: spot.step, t: spot.t };
      }
    }
    drawPlayer();
    if (i + 1 < pair.sections.length && !needsMatch(i + 1)) alignSection(i + 1).catch(() => {}); // get the next one ready
    if (autoplay) runChunk(P.step, true); else savePos();
  }

  function seqFor(chunk) { return settings().order.split('-').map(lang => ({ lang, range: rangeOf(chunk, lang) })); }
  // Plays the current chunk from one of its steps. keepSeq keeps the order already set for this chunk.
  function runChunk(fromStep, keepSeq) {
    stopPlayer();
    const token = P.token;
    if (!keepSeq || !P.seq.length) { P.seq = seqFor(P.chunk); P.extra = -1; P.resume = null; }
    P.step = fromStep || 0;
    P.playing = true;
    savePos();
    playStep(token);
  }
  function playStep(token) {
    if (!P || token !== P.token) return;
    const s = P.seq[P.step];
    if (!s) return advance();
    drawNow();
    const from = P.resume && P.resume.step === P.step ? P.resume.t : s.range[0];
    P.resume = null;
    playSegment(s.lang, from, s.range[1], token, () => {
      P.step++;
      P.timer = setTimeout(() => playStep(token), 450);
    });
  }
  function advance() {
    const c = P.chunk;
    if (c.last) return openPlayer(P.i + 1, null, true);
    P.history.push(c);
    P.n++;
    P.chunk = nextChunk(P.al, c.d1, c.f1, settings().size);
    runChunk(0);
  }

  function drawPlayer() {
    const st = settings();
    const select = (key, list) => `<label>${LABELS[key]}
      <select data-k="${key}">${list.map(([v, label]) => `<option value="${v}"${st[key] === v ? ' selected' : ''}>${label}</option>`).join('')}</select></label>`;
    const stage = ctx.app.querySelector('.stage'), foot = ctx.app.querySelector('.foot');
    stage.innerHTML = `
      <p class="kicker center">${esc(pair.title)}</p>
      <h2 class="center bk-title">${esc(pair.sections[P.i].title)}</h2>
      <div class="bk-seq"></div>
      <p class="center small bk-where"></p>
      <div class="bar bk-bar"><i></i></div>
      <div class="bk-controls">
        <button class="bk-c bk-back" aria-label="Back">⏮</button>
        <button class="bk-c main bk-main" aria-label="Play">▶</button>
        <button class="bk-c bk-next" aria-label="Next">⏭</button>
      </div>
      <button class="btn ghost bk-again">🔁 Spanish again</button>
      <div class="bk-nudge">
        <p class="small center"><b>Spanish out of step?</b> Move it one sentence. It's saved for next time.</p>
        <div class="bk-nudge-row"><button class="bk-earlier">◀ Back a sentence</button><button class="bk-later">Ahead a sentence ▶</button></div>
        <p class="small center bk-nudge-msg"></p>
      </div>
      <div class="bk-settings">${select('size', SIZES)}${select('order', ORDERS)}${select('speedEn', SPEEDS)}${select('speed', SPEEDS)}
        <p class="small center bk-set-msg"></p></div>`;
    foot.innerHTML = '';
    stage.querySelector('.bk-main').addEventListener('click', () => {
      if (P.playing) {
        // pausing remembers the exact second, so play picks up right there
        if (P.now) P.resume = { step: P.step, t: P.now() };
        stopPlayer();
        savePos();
        drawNow();
      } else runChunk(P.step < P.seq.length ? P.step : 0, true);
    });
    stage.querySelector('.bk-next').addEventListener('click', () => { stopPlayer(); advance(); });
    stage.querySelector('.bk-back').addEventListener('click', () => {
      const now = Date.now();
      if (now - P.lastBack < 1500 && P.history.length) { P.chunk = P.history.pop(); P.n--; }
      P.lastBack = now;
      runChunk(0);
    });
    stage.querySelector('.bk-again').addEventListener('click', spanishAgain);
    stage.querySelector('.bk-earlier').addEventListener('click', () => nudge(-1));
    stage.querySelector('.bk-later').addEventListener('click', () => nudge(1));
    stage.querySelectorAll('.bk-settings select').forEach(sel => sel.addEventListener('change', () => {
      const k = sel.dataset.k, msg = stage.querySelector('.bk-set-msg');
      setSetting(k, sel.value);
      msg.textContent = '';
      if (k === 'speed' || k === 'speedEn') {
        const el = els[k === 'speed' ? 'es' : 'en'];
        el.playbackRate = el.defaultPlaybackRate = +sel.value;
      } else if (k === 'order') {
        const fresh = seqFor(P.chunk), cur = P.seq[P.step];
        P.extra = -1;
        if (P.playing && !(cur && fresh[P.step] && fresh[P.step].lang === cur.lang)) { runChunk(0); return; }
        if (!P.playing) P.resume = null;
        P.seq = fresh;
        if (!P.playing) P.step = 0;
      } else if (k === 'size') {
        if (P.playing) msg.textContent = 'The new length starts with the next chunk.';
        else {
          P.chunk = nextChunk(P.al, P.chunk.d0, P.chunk.f0, sel.value);
          P.seq = seqFor(P.chunk);
          P.step = 0;
          P.extra = -1;
          P.resume = null;
          savePos();
        }
      }
      drawNow();
    }));
    drawNow();
  }

  // "Spanish again": adds one more Spanish play of this chunk (now if paused, next if playing).
  // Tapping again takes it back out, or skips it if it's already playing.
  function spanishAgain() {
    if (!P.seq.length) P.seq = seqFor(P.chunk);
    if (P.extra >= 0 && P.step <= P.extra) {
      if (P.step < P.extra) { P.seq.splice(P.extra, 1); P.extra = -1; drawNow(); return; }
      P.seq.splice(P.extra, 1); // playing it right now: skip it
      P.extra = -1;
      if (P.playing) runChunk(P.step, true); else drawNow();
      return;
    }
    const es = { lang: 'es', range: rangeOf(P.chunk, 'es') };
    if (P.playing) {
      // right after the Spanish that's playing, or after this chunk's next Spanish
      let at = P.step;
      if (P.seq[at].lang !== 'es') {
        const j = P.seq.findIndex((s, k) => k > at && s.lang === 'es');
        at = j >= 0 ? j : P.seq.length - 1;
      }
      P.extra = at + 1;
      P.seq.splice(P.extra, 0, es);
      drawNow();
    } else {
      P.extra = P.step;
      P.seq.splice(P.extra, 0, es);
      P.resume = null;
      runChunk(P.step, true);
    }
  }

  function drawNow() {
    if (!P) return;
    const stage = ctx.app.querySelector('.stage');
    if (!stage || !stage.querySelector('.bk-seq')) return;
    const seq = P.seq.length ? P.seq : settings().order.split('-').map(lang => ({ lang }));
    stage.querySelector('.bk-seq').innerHTML = seq.map((s, k) =>
      `<span class="l${P.playing && k === P.step ? ' on' : k < P.step ? ' done' : ''}${k === P.extra ? ' extra' : ''}">${s.lang.toUpperCase()}</span>`).join('<i>→</i>');
    const again = stage.querySelector('.bk-again');
    const queued = P.extra >= 0 && P.step <= P.extra;
    again.textContent = !queued ? '🔁 Spanish again' : P.step === P.extra && P.playing ? '⏭ Skip the extra Spanish' : '✕ No extra Spanish';
    const al = P.al, c = P.chunk;
    stage.querySelector('.bk-where').textContent = `Chunk ${P.n} · ${fmt(c.d0 - al.dS)} of ${fmt(al.dE - al.dS)}`;
    stage.querySelector('.bk-bar i').style.width = `${Math.min(100, 100 * (c.d0 - al.dS) / Math.max(1, al.dE - al.dS))}%`;
    const main = stage.querySelector('.bk-main');
    main.textContent = P.playing ? '⏸' : '▶';
    main.setAttribute('aria-label', P.playing ? 'Pause' : 'Play');
  }

  // Moves where the Spanish starts for this chunk by one sentence, and keeps that as a
  // matching point so the rest of the chapter follows.
  async function nudge(dir) {
    const al = P.al, c = P.chunk, i = P.i;
    const esList = pair.dLang === 'es' ? al.a : al.b;
    const [esStart] = rangeOf(c, 'es');
    const cands = esList.filter(p => p.len >= 0.3 && (dir < 0 ? p.t < esStart - 0.6 : p.t > esStart + 0.6));
    const target = dir < 0 ? cands[cands.length - 1] : cands[0];
    const msg = ctx.app.querySelector('.bk-nudge-msg');
    if (!target) { msg.textContent = 'Can\'t move further in this chapter.'; return; }
    const atStart = c.d0 <= al.dS + 1;
    let d, f;
    if (pair.dLang === 'es') {
      if (atStart) {
        // the chapter start itself: move the English instead, the other way
        const enList = al.b.filter(p => p.len >= 0.3 && (dir < 0 ? p.t > c.f0 + 0.6 : p.t < c.f0 - 0.6));
        const en = dir < 0 ? enList[0] : enList[enList.length - 1];
        if (!en) { msg.textContent = 'Can\'t move further in this chapter.'; return; }
        updateBook(b => { b.anchors[i] = en.t; delete b.skipped[i]; });
        d = al.dS; f = en.t;
      } else {
        d = target.t; f = c.f0;
      }
    } else if (atStart) {
      updateBook(b => { b.anchors[i] = target.t; delete b.skipped[i]; });
      d = al.dS; f = target.t;
    } else {
      d = c.d0; f = target.t;
    }
    if (!atStart) {
      updateBook(b => {
        b.fine = (b.fine || []).filter(p => Math.abs(p.d - d) > 20);
        b.fine.push({ d, f });
      });
    }
    stopPlayer();
    msg.textContent = 'Moved. Listen again…';
    let fresh;
    try { fresh = await alignSection(i); } catch (e) { fresh = null; }
    if (!P || P.i !== i || !fresh) return;
    P.al = fresh;
    P.chunk = nextChunk(fresh, d, f, settings().size);
    runChunk(0);
  }

  function showFinished() {
    updateBook(b => { delete b.pos; });
    render('Books', `<div class="big-emoji">🏁</div><h2 class="center">¡Terminaste el libro!</h2>
      <p class="center">You finished <b>${esc(pair.title)}</b> in two languages. That's a lot of Spanish.</p>`,
      '<button class="btn">Back to the book</button>', showBook);
    ctx.app.querySelector('.foot .btn').addEventListener('click', showBook);
  }

  // ---------- screens ----------
  let ctx = null; // { app, top, openRules, showHome } from app.js
  let picked = { en: null, es: null };
  let screenId = 0;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function fmt(s) {
    s = Math.max(0, Math.round(s));
    const h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, sec = s % 60;
    return (h ? `${h}:${String(m).padStart(2, '0')}` : `${m}`) + `:${String(sec).padStart(2, '0')}`;
  }
  function render(title, body, foot, back) {
    screenId++;
    stop();
    P = null;
    ctx.app.innerHTML = `${ctx.top(title)}<div class="stage">${body}</div><div class="foot">${foot || ''}</div>`;
    ctx.app.querySelector('.quit').addEventListener('click', back || ctx.showHome);
    ctx.app.querySelector('.book').addEventListener('click', ctx.openRules);
    window.scrollTo(0, 0);
    return screenId;
  }

  // ---------- keeping the book on the phone ----------
  // The picked files are copied into the app's own storage, so the book is still there next time
  // without picking the files again. One book at a time: picking new books replaces it.
  let keeping = null; // { done, total } while copying
  const canKeep = () => !!(navigator.storage && navigator.storage.getDirectory && window.FileSystemFileHandle
    && FileSystemFileHandle.prototype.createWritable);
  async function keepFiles(files) {
    if (!canKeep()) return 'unsupported';
    const total = files.en.concat(files.es).reduce((n, f) => n + f.size, 0);
    try {
      const est = await navigator.storage.estimate();
      if (est.quota && est.quota - (est.usage || 0) < total * 1.05) return 'full';
    } catch (e) { /* go ahead and try */ }
    try { await navigator.storage.persist(); } catch (e) { /* the browser decides */ }
    const s = loadState();
    delete s.kept;
    writeState(s);
    keeping = { done: 0, total };
    try {
      const root = await navigator.storage.getDirectory();
      try { await root.removeEntry('books', { recursive: true }); } catch (e) { /* nothing kept yet */ }
      const dir = await root.getDirectoryHandle('books', { create: true });
      for (const lang of ['en', 'es']) {
        const ld = await dir.getDirectoryHandle(lang, { create: true });
        for (const f of files[lang]) {
          const w = await (await ld.getFileHandle(f.name, { create: true })).createWritable();
          const reader = f.stream().getReader();
          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            await w.write(value);
            keeping.done += value.length;
            drawKeep();
          }
          await w.close();
        }
      }
      const s2 = loadState();
      s2.kept = { title: pair ? pair.title : '', files: { en: files.en.map(f => [f.name, f.size]), es: files.es.map(f => [f.name, f.size]) } };
      writeState(s2);
      return 'ok';
    } catch (e) {
      return 'failed';
    } finally {
      keeping = null;
    }
  }
  // The kept files, or null if there's no complete kept book.
  async function keptFiles() {
    const kept = loadState().kept;
    if (!kept || !canKeep()) return null;
    try {
      const dir = await (await navigator.storage.getDirectory()).getDirectoryHandle('books');
      const out = {};
      for (const lang of ['en', 'es']) {
        const ld = await dir.getDirectoryHandle(lang);
        out[lang] = [];
        for (const [name, size] of kept.files[lang]) {
          const f = await (await ld.getFileHandle(name)).getFile();
          if (f.size !== size) return null;
          out[lang].push(f);
        }
      }
      return out;
    } catch (e) { return null; }
  }
  async function forgetKept() {
    const s = loadState();
    delete s.kept;
    writeState(s);
    try { await (await navigator.storage.getDirectory()).removeEntry('books', { recursive: true }); } catch (e) { /* already gone */ }
  }
  // The line on the book screen that says how the saving is going.
  let keepNote = '';
  function drawKeep() {
    const el = ctx && ctx.app.querySelector('.bk-keep');
    if (!el) return;
    if (keeping) el.textContent = `💾 Saving the book on your phone… ${Math.floor(100 * keeping.done / keeping.total)}%`;
    else el.textContent = keepNote;
  }

  async function open(c) {
    ctx = c;
    if (pair) return showBook();
    const kept = loadState().kept;
    if (!kept) return showPick();
    const id = render('Books', `<div class="big-emoji">📖</div><h2 class="center">Opening ${esc(kept.title || 'your book')}…</h2>`, '', ctx.showHome);
    const files = await keptFiles();
    if (id !== screenId) return;
    if (!files) { keepNote = ''; return showPick(); }
    picked = files;
    loadPair(true);
  }

  function showPick() {
    const last = loadState().last;
    const card = (lang, label) => {
      const files = picked[lang];
      const name = !files ? 'Tap to pick the file' : files.length > 1 ? `${files.length} files` : files[0].name;
      return `<label class="bk-pick${files ? ' on' : ''}">
        <input type="file" multiple hidden data-lang="${lang}">
        <span class="bk-lang">${lang.toUpperCase()}</span>
        <span class="row-text"><b>${label}</b><small>${esc(name)}</small></span></label>`;
    };
    render('Books', `
      <div class="big-emoji">📚</div>
      <h2 class="center">Listen in two languages</h2>
      <p class="center">Pick the same audiobook in English and in Spanish. You hear a bit in English, then the same bit in Spanish.</p>
      <div class="bk-picks">${card('en', 'English book')}${card('es', 'Spanish book')}</div>
      ${last ? `<p class="small center">Last time: <b>${esc(last.title)}</b>. Pick the same files to keep your place and chapter matches.</p>` : ''}
      <p class="small center">M4B or MP3 (an MP3 book can be lots of files: pick them all). Audible and Apple Books files are locked and won't open.</p>
      <p class="small center">The app keeps a copy of the book on your phone, so next time it opens right away. Picking new books replaces it.</p>`,
      `<button class="btn bk-open"${picked.en && picked.es ? '' : ' disabled'}>Open the book</button>`);
    ctx.app.querySelectorAll('.bk-pick input').forEach(inp => inp.addEventListener('change', () => {
      if (inp.files.length) picked[inp.dataset.lang] = [...inp.files];
      showPick();
    }));
    ctx.app.querySelector('.bk-open').addEventListener('click', loadPair);
  }

  // fromPhone: the files are the kept copies, so there's nothing to save.
  async function loadPair(fromPhone) {
    const id = render('Books', `<div class="big-emoji">📖</div><h2 class="center">Opening the books…</h2>
      <p class="center small">Reading the chapters. This takes a moment.</p>`, '', showPick);
    try {
      const [en, es] = [await readBook(picked.en), await readBook(picked.es)];
      if (id !== screenId) return;
      if (!en.duration || !es.duration) throw new Error('unplayable');
      pair = makePair(en, es);
      updateBook(() => {});
      if (fromPhone !== true) {
        keepNote = '';
        keepFiles(picked).then(r => {
          keepNote = {
            ok: '✓ Saved on your phone. Next time it opens right here.',
            full: 'Not enough space on the phone to keep this book, so you\'ll need to pick the files again next time.',
            unsupported: 'This browser can\'t keep the book, so you\'ll need to pick the files again next time.',
            failed: 'Couldn\'t save the book on your phone, so you\'ll need to pick the files again next time.',
          }[r];
          drawKeep();
        });
      }
      showBook();
    } catch (e) {
      if (id !== screenId) return;
      if (fromPhone === true) { await forgetKept(); picked = { en: null, es: null }; return showPick(); }
      render('Books', `<div class="big-emoji">😕</div><h2 class="center">That didn't open</h2>
        <p class="center">One of the files couldn't be played. Check that it's an M4B or MP3 audiobook, and not an Audible or Apple Books file.</p>`,
        '<button class="btn">Pick again</button>', showPick);
      ctx.app.querySelector('.foot .btn').addEventListener('click', showPick);
    }
  }

  function chapterStatus(i, st) {
    if (st.anchors[i] != null) return '<span class="bk-ok">✓ Matched</span>';
    if (i === 0) return '<span class="bk-ok">✓ Starts together</span>';
    if (st.skipped[i]) return '<span class="bk-todo">Skipped (best guess)</span>';
    return '<span class="bk-todo">Not matched yet</span>';
  }
  function nextToMatch(after) {
    const st = bookState();
    return pair.sections.findIndex((s, i) => i > after && st.anchors[i] == null && !st.skipped[i]);
  }

  function showBook() {
    const st = bookState();
    const n = pair.sections.length;
    const done = pair.sections.filter((s, i) => i === 0 || st.anchors[i] != null).length;
    const pos = st.pos && st.pos.i < n ? st.pos : null;
    const word = pair.made ? 'Part' : 'Chapter';
    render('Books', `
      <h2 class="center bk-title">${esc(pair.title)}</h2>
      <p class="center small">English ${fmt(pair.en.duration)} · Spanish ${fmt(pair.es.duration)} · ${n} ${pair.made ? 'parts' : 'chapters'}</p>
      <div class="trick">🎯 <b>Chapter matching: ${done} of ${n}</b><br>
        When a new ${word.toLowerCase()} starts, you pick where it starts in ${LANG[pair.fLang]} from a few spots. It keeps the two books in step. Tap 🎯 to fix one.</div>
      <div class="rows">${pair.sections.map((s, i) => `
        <div class="bk-row${pos && pos.i === i ? ' bk-here' : ''}">
          <button class="row bk-ch" data-i="${i}"><span class="bk-num">${pos && pos.i === i ? '🎧' : i + 1}</span>
            <span class="row-text"><b>${esc(s.title)}</b><small>${fmt(s.start)} · ${chapterStatus(i, st)}</small></span></button>
          ${i ? `<button class="bk-rematch" data-i="${i}" aria-label="Match this ${word.toLowerCase()}">🎯</button>` : ''}
        </div>`).join('')}</div>`,
      `<p class="small center bk-keep"></p>
       <button class="btn bk-listen">🎧 ${pos ? `Keep listening · ${word} ${pos.i + 1}` : 'Start listening'}</button>
       <button class="btn ghost bk-other">Pick other books</button>`);
    drawKeep();
    ctx.app.querySelectorAll('.bk-ch').forEach(b => b.addEventListener('click', () => openPlayer(+b.dataset.i, null, true)));
    ctx.app.querySelectorAll('.bk-rematch').forEach(b => b.addEventListener('click', () => showFinder(+b.dataset.i, 0, () => showBook())));
    ctx.app.querySelector('.bk-listen').addEventListener('click', () => openPlayer(pos ? pos.i : 0, pos ? pos.d : null, true, pos));
    ctx.app.querySelector('.bk-other').addEventListener('click', () => { pair = null; picked = { en: null, es: null }; showPick(); });
  }

  async function showFinder(i, wide, onDone) {
    const s = pair.sections[i];
    const dL = LANG[pair.dLang], fL = LANG[pair.fLang];
    const finish = onDone || (() => showBook());
    const listenFor = pair.made ? 'Listen for the same moment.' : `Listen for “${pair.fLang === 'en' ? 'Chapter' : 'Capítulo'}…”.`;
    const id = render(`${pair.made ? 'Part' : 'Chapter'} ${i + 1} of ${pair.sections.length}`, `
      <p class="kicker">Match the ${pair.made ? 'part' : 'chapter'}</p>
      <h2>${esc(s.title)}</h2>
      <p class="bk-step"><b>1.</b> Hear how it starts in ${dL}:</p>
      <div class="row"><button class="spk bk-play" data-side="d" data-t="${s.start}">▶</button>
        <span class="row-text"><b>${esc(s.title)}</b><small>${dL} · ${fmt(s.start)}</small></span></div>
      <p class="bk-step"><b>2.</b> Which ${fL} spot starts the same way? ${listenFor}</p>
      <div class="rows bk-cands"><p class="small center">Finding the likely spots… (the first time takes a few seconds)</p></div>`,
      `<button class="btn ghost bk-wider">${wide ? 'Still not there? Look even wider' : 'None of these? Look wider'}</button>
       <button class="btn ghost bk-skip">Skip for now (use a best guess)</button>`, showBook);
    const wire = root => root.querySelectorAll('.bk-play').forEach(b => b.addEventListener('click', () =>
      playClip(b.dataset.side === 'd' ? pair.d : pair.f, +b.dataset.t, 12, b)));
    wire(ctx.app);
    ctx.app.querySelector('.bk-wider').addEventListener('click', () => showFinder(i, (wide || 0) + 1, onDone));
    ctx.app.querySelector('.bk-skip').addEventListener('click', () => {
      updateBook(b => { delete b.anchors[i]; b.skipped[i] = true; });
      finish();
    });

    let list;
    try { list = await candidates(i, wide); } catch (e) { list = null; }
    if (id !== screenId) return;
    const box = ctx.app.querySelector('.bk-cands');
    if (!list || !list.length) {
      box.innerHTML = `<p class="small center">${list ? 'No clear spots here.' : 'Couldn\'t read this part of the book.'} Try “Look wider”, or skip for now.</p>`;
      return;
    }
    const mine = bookState().anchors[i];
    box.innerHTML = list.map((c, k) => `
      <div class="row${mine != null && Math.abs(mine - c.at) < 1 ? ' bk-current' : ''}">
        <button class="spk bk-play" data-side="f" data-t="${c.at}">▶</button>
        <span class="row-text"><b>Spot ${k + 1}</b><small>${fL} · ${fmt(c.at)}</small></span>
        <button class="bk-choose" data-t="${c.at}">This one</button></div>`).join('');
    wire(box);
    box.querySelectorAll('.bk-choose').forEach(b => b.addEventListener('click', () => {
      updateBook(st => { st.anchors[i] = +b.dataset.t; delete st.skipped[i]; });
      finish();
    }));
  }

  window.BOOKS = { open, stop, readBook, decodeRange, pausesIn, alignRange, alignSection, mapThrough, get pair() { return pair; }, get player() { return P; } };
})();
