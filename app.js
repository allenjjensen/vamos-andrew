// ¡Vamos, Andrew! — the lesson engine.
// Lessons live in lessons/*.js as plain data; this file knows how to show each step type.
(function () {
  'use strict';

  const NAME = 'Andrew';
  const app = document.getElementById('app');
  const LESSONS = window.LESSONS || [];
  // Shown at the end of the lesson list, so it's clear more are being made (not locked).
  const COMING_NEXT = ['Going to & will: talking about tomorrow', 'Describing things: big, old, broken', 'Used to: when I was a kid'];
  const UNIT_ICON = { 'The basics': '🧱', 'Booking jobs': '📞' };
  // Books is still being built: it only shows after opening the app once with ?books (and ?books=off hides it again).
  const BOOKS_ON = (() => {
    try {
      const q = new URLSearchParams(location.search).get('books');
      if (q !== null) localStorage.setItem('vamos-books-on', q === 'off' ? '0' : '1');
      return localStorage.getItem('vamos-books-on') === '1';
    } catch (e) { return false; }
  })();
  const PRAISE = ['¡Correcto!', '¡Muy bien!', '¡Excelente!', '¡Eso es!', '¡Perfecto!'];

  // ---------- saving (per browser; a blocked or private browser just won't remember) ----------
  const SAVE_KEY = 'vamos-progress-v1';
  function loadSave() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || { lessons: {} }; }
    catch (e) { return { lessons: {} }; }
  }
  function writeSave(data) {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch (e) { /* not saved */ }
  }

  // ---------- days (local dates as YYYY-MM-DD; ?day=2026-10-20 pretends it's another day, for testing) ----------
  const FAKE_DAY = new URLSearchParams(location.search).get('day');
  function dayKey(d) {
    if (!d && FAKE_DAY) return FAKE_DAY;
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function addDays(key, n) {
    const [y, m, d] = key.split('-').map(Number);
    return dayKey(new Date(y, m - 1, d + n));
  }
  function daysBetween(a, b) {
    const [y1, m1, d1] = a.split('-').map(Number), [y2, m2, d2] = b.split('-').map(Number);
    return Math.round((new Date(y2, m2 - 1, d2) - new Date(y1, m1 - 1, d1)) / 86400000);
  }

  // ---------- streak: days in a row with a finished lesson or review ----------
  function currentStreak(save) {
    const st = save.streak;
    if (!st) return 0;
    const today = dayKey();
    return st.last === today || st.last === addDays(today, -1) ? st.count : 0;
  }
  function bumpStreak() {
    const save = loadSave();
    const today = dayKey();
    const st = save.streak || { count: 0, last: null, best: 0 };
    if (st.last !== today) {
      st.count = st.last === addDays(today, -1) ? st.count + 1 : 1;
      st.last = today;
      st.best = Math.max(st.best || 0, st.count);
    }
    save.streak = st;
    writeSave(save);
    return st.count;
  }

  // ---------- review deck: missed questions come back later ----------
  // Each missed question sits in a box. Right in review = next box, which waits longer.
  // Right in the last box = learned, it leaves the deck. Wrong = back to box 1.
  const BOX_WAIT = [0, 1, 3, 7, 14]; // days to wait in box 1..4
  const LAST_BOX = BOX_WAIT.length - 1;
  function deckMiss(id) {
    const save = loadSave();
    save.review = save.review || {};
    save.review[id] = { box: 1, due: addDays(dayKey(), BOX_WAIT[1]) };
    writeSave(save);
  }
  function deckHit(id) {
    const save = loadSave();
    const card = save.review && save.review[id];
    if (!card) return;
    if (card.box >= LAST_BOX) delete save.review[id];
    else { card.box++; card.due = addDays(dayKey(), BOX_WAIT[card.box]); }
    writeSave(save);
  }
  function deckStatus(save) {
    const today = dayKey();
    const cards = Object.values(save.review || {});
    const due = cards.filter(c => c.due <= today).length;
    const next = cards.filter(c => c.due > today).map(c => c.due).sort()[0];
    return { total: cards.length, due, next };
  }
  // Question ids use the question text, so editing a lesson doesn't scramble the deck.
  function questionId(lessonId, s) { return `${lessonId}|q|${s.prompt || s.en || s.say}`; }
  function gameCardId(lessonId, c) { return `${lessonId}|g|${c.s}`; }
  function talkLineId(lessonId, line) { return `${lessonId}|t|${line.them}`; }

  // ---------- spoken Spanish ----------
  let voice = null;
  function pickVoice() {
    const all = speechSynthesis.getVoices();
    voice = all.find(v => /^es[-_](MX|US|419)/i.test(v.lang)) || all.find(v => /^es/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function say(text, slow, queue) {
    if (!('speechSynthesis' in window) || !text) return;
    if (!queue) speechSynthesis.cancel();
    const clean = text.replace(/<[^>]+>/g, '').replace(/_+/g, ' ').replace(/\p{Extended_Pictographic}|️/gu, '');
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = voice ? voice.lang : 'es-MX';
    if (voice) u.voice = voice;
    u.rate = slow ? 0.6 : 0.9;
    speechSynthesis.speak(u);
  }
  // Any element with data-say speaks when tapped.
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-say]');
    if (b) say(b.dataset.say, b.dataset.slow === '1');
  });

  // ---------- little sound effects ----------
  let actx = null;
  function tone(freqs, dur) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime;
      freqs.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain();
        const start = t + i * dur;
        o.type = 'sine';
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, start);
        g.gain.exponentialRampToValueAtTime(0.12, start + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
        o.connect(g).connect(actx.destination);
        o.start(start);
        o.stop(start + dur + 0.02);
      });
    } catch (e) { /* no audio */ }
  }
  const sfx = {
    good: () => tone([660, 880], 0.11),
    bad: () => tone([240, 190], 0.15),
    done: () => tone([523, 659, 784, 1047], 0.12),
  };

  // ---------- helpers ----------
  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function attr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }
  function spk(text, slow) {
    return `<button class="spk" data-say="${attr(text)}"${slow ? ' data-slow="1"' : ''} aria-label="Hear it">${slow ? '🐢' : '🔊'}</button>`;
  }
  function blank(text, word) {
    return text.replace('___', word ? `<span class="blank filled">${word}</span>` : '<span class="blank">&nbsp;</span>');
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function hasGame(L) { return L.steps.some(s => s.type === 'game'); }
  function markOpened(id) {
    const save = loadSave();
    save.opened = save.opened || [];
    if (!save.opened.includes(id)) { save.opened.push(id); writeSave(save); }
  }

  // ---------- home ----------
  function showHome() {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    BOOKS.stop();
    const save = loadSave();
    app.innerHTML = `
      <header class="home-head">
        <div class="logo">¡Hola, ${NAME}!</div>
        <p class="tagline">Spanish in 10 minutes a day</p>
      </header>
      ${streakStrip(save)}
      ${reviewCard(save)}
      <div class="tools">
        <button class="tool rules-btn"><span>📖</span><b>Rules</b><small>Look anything up</small></button>
        <button class="tool gym-btn"><span>🏋️</span><b>Practice gym</b><small>Verbs, numbers, time, colors & more</small></button>
        ${BOOKS_ON ? '<button class="tool wide books-btn"><span>📚</span><span class="tool-text"><b>Books</b><small>Hear an audiobook in English, then in Spanish</small></span></button>' : ''}
      </div>
      <section class="lessons"></section>
      <div class="home-links">
        ${isStandalone() ? '' : '<button class="link-btn app-btn">📲 Get the phone app</button>'}
        <button class="link-btn move-btn">💾 Move my progress</button>
      </div>
      <p class="foot-note">Turn your sound on. Tap 🔊 anywhere to hear the Spanish.</p>`;
    const appBtn = app.querySelector('.app-btn');
    if (appBtn) appBtn.addEventListener('click', openGetApp);
    app.querySelector('.move-btn').addEventListener('click', openMoveProgress);
    const reviewBtn = app.querySelector('.review-card:not([disabled])');
    if (reviewBtn) reviewBtn.addEventListener('click', startReview);
    app.querySelector('.rules-btn').addEventListener('click', openRules);
    app.querySelector('.gym-btn').addEventListener('click', showGymSetup);
    if (BOOKS_ON) app.querySelector('.books-btn').addEventListener('click', () => BOOKS.open({ app, top: gymTop, openRules, showHome }));
    const list = app.querySelector('.lessons');
    let unit = null;
    LESSONS.forEach((L, i) => {
      const u = L.unit || 'The basics';
      if (u !== unit) {
        unit = u;
        list.insertAdjacentHTML('beforeend', `<h3 class="unit-head"><span>${UNIT_ICON[u] || '📘'}</span>${u}</h3>`);
      }
      const rec = save.lessons[L.id];
      const isNew = !rec && !(save.opened || []).includes(L.id);
      const label = rec ? versionLabel(L, runsOf(save, L)) : '';
      const card = document.createElement('button');
      card.className = 'lesson' + (rec ? ' done' : '');
      card.innerHTML = `<span class="num">${rec ? '✓' : i + 1}</span>
        <span class="info"><b>${L.title}${isNew ? ' <span class="new-tag">NEW</span>' : ''}</b><small>${L.subtitle} · ${L.minutes} min</small>
        ${rec ? `<small class="best">Best: ${rec.right}/${rec.asked} first try${hasGame(L) ? ` · game ${rec.game} pts` : ''}</small>` : ''}
        ${label ? `<small class="version-tag">Next: ${label}</small>` : ''}</span>`;
      card.addEventListener('click', () => startLesson(L));
      list.appendChild(card);
    });
    list.insertAdjacentHTML('beforeend', `<div class="coming">
      <b>📬 More lessons on the way</b>
      <p>Your brother is building the next ones. New lessons show up right here with a <span class="new-tag">NEW</span> tag.</p>
      <p class="small">Coming next: ${COMING_NEXT.join(' · ')}</p>
      <p class="small">Until then: replay a lesson for a better score, or hit the 🏋️ Practice gym.</p></div>`);
  }

  function streakStrip(save) {
    const n = currentStreak(save);
    const doneToday = save.streak && save.streak.last === dayKey();
    const msg = doneToday ? 'Done for today ✓'
      : n ? 'A lesson, a review or 10 gym reps keeps it going'
      : 'Finish a lesson, a review or 10 gym reps to start one';
    return `<div class="streak-strip${doneToday ? ' lit' : ''}">
      <span class="flame">🔥</span><span><b>${n} day${n === 1 ? '' : 's'}</b><small>${msg}</small></span></div>`;
  }

  function whenText(day) {
    const n = daysBetween(dayKey(), day);
    return n <= 1 ? 'tomorrow' : `in ${n} days`;
  }

  function reviewCard(save) {
    const d = deckStatus(save);
    if (!d.total) return '';
    if (d.due) {
      return `<button class="review-card">
        <span class="num">🔁</span>
        <span class="info"><b>Review</b><small>${d.due} thing${d.due > 1 ? 's' : ''} you missed, ready now</small></span></button>`;
    }
    return `<button class="review-card" disabled>
      <span class="num">🔁</span>
      <span class="info"><b>Review</b><small>${d.total} thing${d.total > 1 ? 's' : ''} coming back ${whenText(d.next)}</small></span></button>`;
  }

  // ---------- running a lesson ----------
  let run = null;

  // ---------- lesson versions ----------
  // A lesson's practice can come in sets (A, B, C). Run 1 uses A, run 2 B, run 3 C,
  // and every run after that mixes all of them, so he has to use the rule, not memory.
  // Replays skip the warm-up and the teaching cards (a refresher card can bring them back).
  function runsOf(save, L) {
    const rec = save.lessons[L.id];
    return rec ? (rec.runs || 1) : 0;
  }
  function setCount(L) {
    const p = L.steps.find(s => s.type === 'practice');
    return p ? p.sets.length : 0;
  }
  function versionLabel(L, runs) {
    const n = setCount(L);
    if (n < 2) return '';
    return runs < n ? `Version ${runs + 1} of ${n}` : '🔀 Mixed every time';
  }
  // Every question a lesson can ask, from all its sets (for the review deck to find them).
  function lessonQuestions(L) {
    return L.steps.flatMap(s => s.type === 'practice' ? [].concat(...s.sets) : [s]);
  }
  // Every conversation a lesson has, from all its versions.
  function talkScenes(L) {
    return L.steps.flatMap(s => s.type === 'talkSet' ? s.scenes : s.type === 'talk' ? [s] : []);
  }
  // A teaching card with this version's example sentences (tags stay the same).
  function withRows(s, version) {
    if (!s.moreRows) return s;
    const v = version < 0 ? Math.floor(Math.random() * (s.moreRows.length + 1)) : version % (s.moreRows.length + 1);
    if (v === 0) return s;
    return Object.assign({}, s, { rows: s.moreRows[v - 1].map((r, i) => Object.assign({ tag: s.rows[i].tag }, r)) });
  }

  function mixedPractice(L, p, save) {
    const all = [].concat(...p.sets);
    const kindOf = q => q.type === 'build' ? 'build' : q.listen ? 'listen' : 'choice';
    // Same size and same mix of question kinds as set A.
    const want = {};
    p.sets[0].forEach(q => { want[kindOf(q)] = (want[kindOf(q)] || 0) + 1; });
    // Up to 3 he got wrong before come first.
    const missed = (save.misses && save.misses[L.id]) || [];
    const chosen = shuffle(all.filter(q => missed.includes(questionId(L.id, q)))).slice(0, 3);
    chosen.forEach(q => { want[kindOf(q)]--; });
    // Then take turns between rules (Origin, Location…) so every part of the lesson shows up.
    Object.keys(want).forEach(kind => {
      const byRule = {};
      shuffle(all.filter(q => kindOf(q) === kind && !chosen.includes(q))).forEach(q => {
        (byRule[q.rule] = byRule[q.rule] || []).push(q);
      });
      const rules = shuffle(Object.keys(byRule));
      while (want[kind] > 0 && rules.some(r => byRule[r].length)) {
        for (const r of rules) {
          if (want[kind] > 0 && byRule[r].length) { chosen.push(byRule[r].pop()); want[kind]--; }
        }
      }
    });
    return shuffle(chosen);
  }

  function startLesson(L) {
    markOpened(L.id);
    const save = loadSave();
    const runs = runsOf(save, L);
    const n = setCount(L);
    const version = n && runs >= n ? -1 : runs; // -1 = mixed
    const steps = [];
    for (const s of L.steps) {
      if (runs && (s.warmup || s.type === 'warmupResult')) continue;
      if (runs && s.type === 'teach') {
        if (!steps.some(x => x.type === 'refresher')) steps.push({ type: 'refresher' });
        continue;
      }
      if (s.type === 'practice') steps.push(...(version < 0 ? mixedPractice(L, s, save) : s.sets[version % s.sets.length]));
      else if (s.type === 'talkSet') steps.push(version < 0 ? pick(s.scenes) : s.scenes[version % s.scenes.length]);
      else steps.push(s);
    }
    // First time through: a reminder of the word types (verb, noun…) the lesson talks about.
    const terms = lessonTerms(L);
    if (!runs && terms.length) steps.splice(steps.findIndex(x => x.type === 'intro') + 1, 0, { type: 'terms', ids: terms });
    run = {
      L, steps, i: 0, retry: [], right: 0, asked: 0, warmRight: 0, warmAsked: 0, game: 0, toReview: new Set(),
      version, label: versionLabel(L, runs),
    };
    showStep();
  }

  // ---------- word types: tap "verb", "noun"… anywhere for a reminder (data in terms.js) ----------
  const TERM_WORDS = {};
  Object.keys(TERMS).forEach(id => TERMS[id].match.forEach(m => { TERM_WORDS[m] = id; }));
  const TERM_RE = new RegExp(`\\b(${Object.keys(TERM_WORDS).sort((a, b) => b.length - a.length).join('|')})\\b`, 'gi');
  const NO_TERMS = 'button, select, input, textarea, h1, h2, summary, .term, .term-block, .pop, .opt, .tile, .g-sentence, .bubble, .prompt, .wt-zone, .wt-pop';

  // The word types a lesson uses: the ones it lists, then any its teaching cards mention.
  function lessonTerms(L) {
    const ids = (L.terms || []).slice();
    const text = L.steps.filter(s => s.type === 'teach').map(s => `${s.kicker || ''} ${s.title} ${s.body || ''} ${s.trick || ''}`).join(' ');
    (text.replace(/<[^>]+>/g, ' ').match(TERM_RE) || []).forEach(w => {
      const id = TERM_WORDS[w.toLowerCase()];
      if (!ids.includes(id)) ids.push(id);
    });
    return ids.slice(0, 4);
  }
  function termHTML(id) {
    const t = TERMS[id];
    return `<p class="kicker">Word type</p><h3 class="term-name">${t.name}</h3><p>${t.what}</p>
      <div class="term-ex">${t.en.map(x => `<p>“${x}”</p>`).join('')}<p class="small">${t.note}</p></div>
      <div class="row"><div class="row-text"><b>${t.es}</b><small>${t.esEn}</small></div>${spk(t.es.replace(/<[^>]+>/g, ''))}</div>
      ${t.test ? `<div class="trick">💡 ${t.test}</div>` : ''}`;
  }
  function termChip(id, label) { return `<span class="term" data-term="${id}" role="button" tabindex="0">${label || TERMS[id].name}</span>`; }
  function closePop() { const p = document.querySelector('.pop'); if (p) p.remove(); }
  function showTermPop(id) {
    if (!TERMS[id]) return;
    closePop();
    const pop = document.createElement('div');
    pop.className = 'pop';
    pop.innerHTML = `<div class="pop-card term-block">${termHTML(id)}<button class="btn pop-ok">Got it</button></div>`;
    pop.addEventListener('click', e => { if (e.target === pop || e.target.closest('.pop-ok')) closePop(); });
    document.body.appendChild(pop);
  }
  // Underlines word-type words in any text that shows up, so they can be tapped.
  function linkTerms(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const hits = [];
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      TERM_RE.lastIndex = 0;
      if (TERM_RE.test(n.nodeValue) && n.parentElement && !n.parentElement.closest(NO_TERMS)) hits.push(n);
    }
    hits.forEach(n => {
      const s = n.nodeValue, frag = document.createDocumentFragment();
      let last = 0;
      s.replace(TERM_RE, (m, w, at) => {
        frag.append(s.slice(last, at));
        const span = document.createElement('span');
        span.className = 'term';
        span.dataset.term = TERM_WORDS[w.toLowerCase()];
        span.setAttribute('role', 'button');
        span.tabIndex = 0;
        span.textContent = m;
        frag.append(span);
        last = at + m.length;
        return m;
      });
      frag.append(s.slice(last));
      n.replaceWith(frag);
    });
  }
  new MutationObserver(list => list.forEach(m => m.addedNodes.forEach(node => {
    if (node.nodeType === 1 && !node.closest(NO_TERMS)) linkTerms(node);
  }))).observe(document.body, { childList: true, subtree: true });
  document.addEventListener('click', e => {
    const t = e.target.closest('.term');
    if (t) { e.preventDefault(); showTermPop(t.dataset.term); }
  });

  // ---------- word taps: tap a word in a question to see it in the other language ----------
  // Looking a word up before answering is a hint, so that question doesn't count as right
  // (it comes back for practice). After answering, looking things up is free.
  let hintWatch = null; // the question on screen: { used, open }
  let DICT = null;
  const PERSON_EN = ['I', 'you', 'he / she / you (polite)', 'we', 'they / you all'];
  const plain = w => w.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ñ/g, 'n');
  function addWord(map, key, val) {
    key = key.toLowerCase().trim();
    if (!key || /\s/.test(key)) return;
    const list = map[key] || (map[key] = []);
    if (!list.some(v => v === val || v.split(/,\s*/).includes(val))) list.push(val);
  }
  // Built the first time it's needed, from dict.js plus the verbs and word lists the drills use.
  function dict() {
    if (DICT) return DICT;
    const es = {}, en = {};
    // DICT_EN entries are written by hand, so they win over meanings worked out from the Spanish side.
    (window.DICT_EN || []).forEach(([e, s]) => addWord(en, e, s));
    const fixed = new Set(Object.keys(en));
    const both = (s, e) => {
      addWord(es, s, e);
      e.replace(/\(.*?\)/g, '').split(/\s*[,/;]\s*/).forEach(x => {
        x = x.trim().replace(/^(to|the|a|an) /, '').toLowerCase();
        if (!fixed.has(x)) addWord(en, x, s);
      });
    };
    Object.entries(window.DICT_WORDS || {}).forEach(([s, e]) => both(s, e));
    const EN_NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
      'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const EN_TENS = { 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' };
    for (let n = 0; n <= 1000; n++) {
      const s = numberEs(n);
      if (/\s/.test(s)) continue;
      addWord(es, s, String(n));
      const e = EN_NUM[n] || EN_TENS[n];
      if (e && !fixed.has(e)) addWord(en, e, s);
    }
    CONJ.tenses.forEach(t => t.groups.forEach(g => g.verbs.forEach(v => {
      both(v[0], v[1]);
      formsOf(g, v).forEach((f, p) => addWord(es, f, `a form of <b>${v[0]}</b> (${v[1].replace(/ \(.*\)/, '')}): ${PERSON_EN[p]}, ${t.title.toLowerCase()}`));
    })));
    WORDS.nouns.forEach(n => { both(n[0], n[3]); both(n[1], n[4]); });
    WORDS.gender.forEach(g => both(g[0], g[2]));
    WORDS.colors.forEach(c => {
      both(c[0], c[1]); both(c[3], c[1]);
      if (c[2]) { both(c[0].replace(/o$/, 'a'), c[1]); both(c[3].replace(/os$/, 'as'), c[1]); }
    });
    WORDS.days.concat(WORDS.months, WORDS.whenWords).forEach(d => both(d[0], d[1]));
    WORDS.demonstratives.forEach(d => d.forms.forEach((f, k) => both(f, d.en[k < 2 ? 0 : 1])));
    WORDS.possessives.forEach(p => { (p.short || []).forEach(f => both(f, p.en)); both(p.long, p.enLong); });
    const esPlain = {};
    Object.keys(es).forEach(k => { const p = plain(k); (esPlain[p] = esPlain[p] || []).push(...es[k]); });
    DICT = { es, en, esPlain };
    return DICT;
  }
  // What a word means, as { hits, lang } where lang is the language the word turned out to be in.
  // Tries the zone's language first, then the other one (English hints can hold a Spanish verb).
  function lookup(word, lang) {
    const w = word.toLowerCase().replace(/’/g, "'");
    if (/^\d+$/.test(w)) return +w < 1000000 ? { hits: [numberEs(+w)], lang: 'en' } : null;
    const d = dict();
    const inEs = () => d.es[w] || d.esPlain[plain(w)];
    const inEn = () => {
      const tries = [w, w.replace(/'s$/, ''), w.replace(/s$/, ''), w.replace(/es$/, ''), w.replace(/ies$/, 'y'),
        w.replace(/ing$/, ''), w.replace(/ing$/, 'e'), w.replace(/ed$/, ''), w.replace(/d$/, ''), w.replace(/ly$/, '')];
      for (const t of tries) if (d.en[t]) return d.en[t];
    };
    const order = lang === 'es' ? [['es', inEs], ['en', inEn]] : [['en', inEn], ['es', inEs]];
    for (const [l, f] of order) { const hits = f(); if (hits) return { hits, lang: l }; }
    return null;
  }
  if (/[?&]test\b/.test(location.search)) window.__vamos = { lookup, drills: () => DRILLS };
  // Splits the words of these elements into tappable spans. lang is the language the text is in.
  function wordTaps(els, lang) {
    els.forEach(el => {
      if (!el) return;
      el.classList.add('wt-zone');
      el.dataset.wt = lang;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const nodes = [];
      for (let n = walker.nextNode(); n; n = walker.nextNode()) if (!n.parentElement.closest('.blank, .spk')) nodes.push(n);
      nodes.forEach(n => {
        const s = n.nodeValue, frag = document.createDocumentFragment();
        let last = 0;
        s.replace(/[A-Za-zÀ-ÿ'’]+|\d+/g, (m, at) => {
          frag.append(s.slice(last, at));
          const span = document.createElement('span');
          span.className = 'wt';
          span.textContent = m;
          frag.append(span);
          last = at + m.length;
          return m;
        });
        frag.append(s.slice(last));
        n.replaceWith(frag);
      });
    });
  }
  // Called when a question appears: makes its words tappable and starts watching for hints.
  function watchHints(stage, zones) {
    closeWordPop();
    hintWatch = { used: false, open: true };
    zones.forEach(([sel, lang]) => wordTaps([...stage.querySelectorAll(sel)], lang));
    const save = loadSave();
    if (!save.seenWordTip) {
      save.seenWordTip = true;
      writeSave(save);
      stage.insertAdjacentHTML('beforeend', '<p class="wt-tip">💡 New: tap any word in the question to see it in the other language. It counts as a hint, so that question comes back for practice.</p>');
    }
    return hintWatch;
  }
  // Ends hint-watching once he answers. Returns a note to show if he used a hint.
  function hintDone(ok) {
    const used = hintWatch && hintWatch.used;
    if (hintWatch) hintWatch.open = false;
    return used && ok ? '<p class="review-note">💡 You used a word hint, so this one comes back for practice.</p>' : '';
  }
  function closeWordPop() {
    document.querySelectorAll('.wt-pop').forEach(p => p.remove());
    document.querySelectorAll('.wt.on').forEach(w => w.classList.remove('on'));
  }
  function showWordPop(span) {
    closeWordPop();
    const word = span.textContent;
    const found = lookup(word, span.closest('[data-wt]').dataset.wt);
    const live = found && hintWatch && hintWatch.open;
    if (live) hintWatch.used = true;
    span.classList.add('on');
    // Read out the Spanish side: the word itself, or the first plain Spanish answer for an English word.
    let sayIt = '';
    if (found) {
      sayIt = found.lang === 'es' ? word : found.hits[0].replace(/<[^>]+>|\(.*?\)/g, '').split(/ [/·] /)[0].trim();
      if (/[:=]/.test(sayIt) || /^\d+$/.test(sayIt)) sayIt = '';
    }
    const pop = document.createElement('div');
    pop.className = 'wt-pop';
    pop.innerHTML = found
      ? `<div class="wt-row"><span><b>${word}</b> = ${found.hits.slice(0, 3).join(' · ')}</span>${sayIt ? spk(sayIt) : ''}</div>
         ${live ? "<small>Hint used: this one won't count as right.</small>" : ''}`
      : `<b>${word}</b><small>No hint for this word.</small>`;
    document.body.appendChild(pop);
    const r = span.getBoundingClientRect();
    const w = pop.offsetWidth;
    pop.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.left + r.width / 2 - w / 2)) + 'px';
    pop.style.top = (r.bottom + window.scrollY + 6) + 'px';
  }
  document.addEventListener('click', e => {
    const w = e.target.closest('.wt');
    if (w) { showWordPop(w); return; }
    if (!e.target.closest('.wt-pop')) closeWordPop();
  });

  // Which questions he got wrong in a lesson, so mixed runs can bring them back.
  function noteMiss(lessonId, id, ok) {
    const save = loadSave();
    save.misses = save.misses || {};
    const list = save.misses[lessonId] || [];
    const at = list.indexOf(id);
    if (ok && at >= 0) list.splice(at, 1);
    if (!ok && at < 0) list.push(id);
    save.misses[lessonId] = list.slice(-30);
    writeSave(save);
  }

  function next() { run.i++; showStep(); }

  function showStep() {
    const s = run.steps[run.i];
    if (s && s.type === 'retry') {
      // Questions missed the first time come back here, once.
      const extra = run.retry.length
        ? [{ type: 'note', emoji: '🔁', title: 'Second chance', body: 'These tripped you up before. Same questions, but now you know the trick.' }]
            .concat(run.retry.map(q => Object.assign({}, q, { isRetry: true })))
        : [];
      run.retry = [];
      run.steps.splice(run.i, 1, ...extra);
      return showStep();
    }
    if (!s) return showDone();

    const pct = Math.round(run.i / run.steps.length * 100);
    app.innerHTML = `
      <div class="top"><button class="quit" aria-label="Leave lesson">✕</button><div class="bar"><i style="width:${pct}%"></i></div>
        <button class="book" aria-label="Rules">📖</button></div>
      <div class="stage"></div>
      <div class="foot"></div>`;
    app.querySelector('.quit').addEventListener('click', () => {
      if (confirm('Leave this lesson? You will start it over next time.')) { stopGame(); showHome(); }
    });
    app.querySelector('.book').addEventListener('click', openRules);
    RENDER[s.type](s, app.querySelector('.stage'), app.querySelector('.foot'));
    window.scrollTo(0, 0);
  }

  function continueButton(foot, label) {
    foot.innerHTML = `<button class="btn">${label || 'Continue'}</button>`;
    foot.querySelector('.btn').addEventListener('click', next);
  }

  function score(s, ok) {
    if (s.warmup) { run.warmAsked++; if (ok) run.warmRight++; return; }
    if (s.isRetry) return;
    run.asked++;
    if (ok) run.right++;
    else run.retry.push(s);
    if (s.reviewId) { ok ? deckHit(s.reviewId) : deckMiss(s.reviewId); return; }
    const id = questionId(run.L.id, s);
    noteMiss(run.L.id, id, ok);
    if (!ok) { deckMiss(id); run.toReview.add(id); }
  }

  // ---------- review session ----------
  const OTHER_FORM = { soy: 'estoy', eres: 'estás', es: 'está', somos: 'estamos', son: 'están' };
  Object.keys(OTHER_FORM).forEach(k => { OTHER_FORM[OTHER_FORM[k]] = k; });

  // Turns a deck id back into a question to ask, or null if the lesson changed and it's gone.
  function reviewStep(id) {
    const [lessonId, kind, ...rest] = id.split('|');
    const key = rest.join('|');
    const L = LESSONS.find(x => x.id === lessonId);
    if (!L) return null;
    if (kind === 'q') {
      const s = lessonQuestions(L).find(x => (x.prompt || x.en || x.say) === key);
      return s ? Object.assign({}, s, { reviewId: id, isReview: true, warmup: false }) : null;
    }
    if (kind === 't') {
      // A conversation reply he got wrong comes back as "what do you say back?"
      for (const talk of talkScenes(L)) {
        const line = talk.lines.find(x => x.them === key);
        if (!line) continue;
        const good = line.choices.find(c => c.good);
        return {
          type: 'choice', reviewId: id, isReview: true,
          prompt: `${talk.who.emoji} “${line.them}”`, en: `${line.en} What do you say back?`,
          sayAfter: good.es,
          options: line.choices.map(c => ({ text: c.es, correct: !!c.good, why: c.why })),
          explain: good.note,
          rule: 'On the job',
        };
      }
      return null;
    }
    const game = L.steps.find(x => x.type === 'game');
    const c = game && game.pool.find(x => x.s === key);
    if (!c) return null;
    // A missed race sentence comes back as a two-button question.
    const lower = c.f.toLowerCase();
    let other = OTHER_FORM[lower] || (game.buttons ? game.buttons.find(b => b[0] !== c.v)[0] : c.v === 'ser' ? 'está' : 'es');
    if (c.f !== lower) other = other[0].toUpperCase() + other.slice(1);
    return {
      type: 'choice', reviewId: id, isReview: true,
      prompt: c.s,
      options: [
        { text: c.f, correct: true },
        { text: other, why: `This one is <b>${c.why}</b>, and ${c.why} goes with <b>${c.v}</b>.` },
      ],
      explain: `${c.why} goes with <b>${c.v}</b>.`,
      rule: `${c.v.toUpperCase()} · ${c.why}`,
    };
  }

  function startReview() {
    const save = loadSave();
    const today = dayKey();
    const ids = Object.keys(save.review || {})
      .filter(id => save.review[id].due <= today)
      .sort((a, b) => save.review[a].box - save.review[b].box);
    const steps = [];
    ids.forEach(id => {
      const s = reviewStep(id);
      if (!s) { delete save.review[id]; return; }
      if (steps.length < 10) steps.push(s);
    });
    writeSave(save);
    if (!steps.length) return showHome();
    run = {
      L: { id: 'review', minutes: 3 }, review: true,
      steps: [{ type: 'note', emoji: '🔁', title: 'Review time', body: `${steps.length} thing${steps.length > 1 ? 's' : ''} you missed before. Get one right and it comes back less often. Keep getting it right and it's learned for good.` }]
        .concat(shuffle(steps), [{ type: 'retry' }]),
      i: 0, retry: [], right: 0, asked: 0, warmRight: 0, warmAsked: 0, game: 0, toReview: new Set(),
    };
    showStep();
  }

  // The green or red box after an answer: what was wrong, why, and the rule it belongs to.
  function feedback(foot, ok, text, answer, rule, sayText) {
    ok ? sfx.good() : sfx.bad();
    foot.innerHTML = `<div class="sheet ${ok ? 'good' : 'bad'}">
      <h3>${ok ? pick(PRAISE) : 'Not quite'}</h3>
      ${!ok && answer ? `<p>Answer: <b>${answer}</b></p>` : ''}
      ${text ? `<p>${text}</p>` : ''}
      ${rule ? `<p class="rule">${rule}</p>` : ''}
      <div class="sheet-row">${sayText ? spk(sayText) : ''}<button class="btn">Continue</button></div>
    </div>`;
    foot.querySelector('.btn').addEventListener('click', next);
    if (sayText) setTimeout(() => say(sayText), ok ? 300 : 500);
  }

  // A teaching card. Used in lessons and again on the Rules page.
  function teachHTML(s) {
    return `
      <p class="kicker">${s.kicker || 'Learn'}</p>
      <h2>${s.title}</h2>
      ${s.body ? `<div class="body">${s.body}</div>` : ''}
      ${s.rows ? `<div class="rows">${s.rows.map(r => `
        <div class="row">
          ${r.tag ? `<span class="tag">${r.tag}</span>` : ''}
          <div class="row-text"><b>${r.es}</b><small>${r.en}</small></div>
          ${spk(r.say || r.es)}
        </div>`).join('')}</div>` : ''}
      ${s.trick ? `<div class="trick">💡 ${s.trick}</div>` : ''}`;
  }

  // ---------- step types ----------
  const RENDER = {
    intro(s, stage, foot) {
      stage.innerHTML = `
        <div class="big-emoji">${s.emoji || '📘'}</div>
        <p class="kicker center">Lesson · about ${run.L.minutes} minutes</p>
        <h2 class="center">${s.title}</h2>
        ${run.label ? `<p class="center version-tag">${run.label}</p>` : ''}
        <p>In this lesson you'll learn:</p>
        <ul class="learn-list">${s.learn.map(x => `<li>${x}</li>`).join('')}</ul>
        ${run.version !== 0 && run.label ? `<p class="small center">${run.version < 0
          ? 'Questions from all versions, mixed up. Use the rule, not your memory!'
          : 'Same rules, all new sentences.'}</p>` : ''}`;
      continueButton(foot, "Let's go");
    },

    // On replays, this stands in for the teaching cards.
    refresher(s, stage, foot) {
      stage.innerHTML = `
        <div class="big-emoji">🧠</div>
        <p class="kicker center">Quick refresher</p>
        <h2 class="center">Remember the rules?</h2>
        <div class="trick">${run.L.recap}</div>
        ${lessonTerms(run.L).length ? `<p class="small center">Word types in this lesson: ${lessonTerms(run.L).map(id => termChip(id)).join(' · ')}</p>` : ''}`;
      foot.innerHTML = '<button class="btn ghost">📖 Show me the lesson again</button><button class="btn">Got it, start</button>';
      foot.querySelector('.ghost').addEventListener('click', () => {
        const cards = run.L.steps.filter(x => x.type === 'teach').map(x => withRows(x, run.version));
        run.steps.splice(run.i + 1, 0, ...cards);
        next();
      });
      foot.querySelector('.btn:not(.ghost)').addEventListener('click', next);
    },

    // Before the first lesson card: what the word types in this lesson mean.
    terms(s, stage, foot) {
      stage.innerHTML = `
        <div class="big-emoji">🧩</div>
        <p class="kicker center">Quick reminder</p>
        <h2 class="center">Words you'll see in this lesson</h2>
        ${s.ids.map(id => `<div class="term-block">${termHTML(id)}</div>`).join('')}
        <p class="small center">Forget one later? Tap any underlined word, like ${termChip(s.ids[0], TERMS[s.ids[0]].name.toLowerCase())}, for a reminder.</p>`;
      continueButton(foot, 'Got it');
    },

    note(s, stage, foot) {
      stage.innerHTML = `${s.emoji ? `<div class="big-emoji">${s.emoji}</div>` : ''}<h2 class="center">${s.title}</h2><p class="center">${s.body}</p>`;
      continueButton(foot);
    },

    warmupResult(s, stage, foot) {
      const r = run.warmRight, n = run.warmAsked;
      const msg = r === n ? s.all : r === 0 ? s.none : s.some;
      stage.innerHTML = `<div class="big-emoji">${r === n ? '🌟' : '👍'}</div>
        <h2 class="center">You got ${r} of ${n}</h2><p class="center">${msg}</p>`;
      continueButton(foot, "Let's learn it");
    },

    teach(s, stage, foot) {
      stage.innerHTML = teachHTML(s);
      continueButton(foot, s.button || 'Got it');
    },

    choice(s, stage, foot) {
      const opts = shuffle(s.options);
      const kicker = s.isRetry ? 'Second chance' : s.isReview ? 'Review' : s.kicker || (s.listen ? 'Listen. What does it mean?' : 'Pick the right word');
      stage.innerHTML = `
        <p class="kicker">${kicker}</p>
        ${s.listen
          ? `<div class="listen"><button class="spk big" data-say="${attr(s.say)}" aria-label="Play">🔊</button>${spk(s.say, true)}</div>`
          : `<h2 class="prompt">${blank(s.prompt)}</h2>${s.en ? `<p class="hint">${s.en}</p>` : ''}`}
        <div class="options">${opts.map((o, k) => `<button class="opt" data-k="${k}">${o.text}</button>`).join('')}</div>`;
      if (s.listen) setTimeout(() => say(s.say), 250);
      const hw = watchHints(stage, [['.prompt', 'es'], ['.hint', 'en']]);

      stage.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
        const chosen = opts[+b.dataset.k];
        const right = opts.find(o => o.correct);
        const note = hintDone(chosen.correct);
        stage.querySelectorAll('.opt').forEach(x => {
          x.disabled = true;
          if (opts[+x.dataset.k].correct) x.classList.add('right');
          else if (x !== b) x.classList.add('dim');
        });
        if (!chosen.correct) b.classList.add('wrong');
        let full = s.say;
        if (!s.listen) {
          stage.querySelector('.prompt').innerHTML = blank(s.prompt, right.text);
          full = s.sayAfter || s.prompt.replace('___', right.text);
        }
        score(s, chosen.correct && !hw.used);
        feedback(foot, chosen.correct, (chosen.correct ? s.explain : chosen.why) + note, chosen.correct ? null : right.text, s.rule, full);
      }));
    },

    build(s, stage, foot) {
      const pool = shuffle(s.answer.concat(s.extra || [])).map((w, k) => ({ w, k, used: false }));
      const picked = [];
      let checked = false;
      stage.innerHTML = `
        <p class="kicker">${s.isRetry ? 'Second chance' : s.isReview ? 'Review' : 'Build it in Spanish'}</p>
        <h2 class="prompt">${s.en}</h2>
        <div class="answer-row"></div>
        <div class="pool"></div>`;
      const row = stage.querySelector('.answer-row'), poolEl = stage.querySelector('.pool');
      const hw = watchHints(stage, [['.prompt', 'en']]);
      foot.innerHTML = '<button class="btn" disabled>Check</button>';
      const check = foot.querySelector('.btn');

      function draw() {
        row.innerHTML = picked.map(t => `<button class="tile" data-k="${t.k}">${t.w}</button>`).join('');
        poolEl.innerHTML = pool.map(t => `<button class="tile${t.used ? ' used' : ''}" data-k="${t.k}"${t.used ? ' disabled' : ''}>${t.w}</button>`).join('');
        check.disabled = !picked.length;
      }
      poolEl.addEventListener('click', e => {
        const b = e.target.closest('.tile');
        if (!b || checked) return;
        const t = pool[+b.dataset.k];
        if (t.used) return;
        t.used = true;
        picked.push(t);
        say(t.w);
        draw();
      });
      row.addEventListener('click', e => {
        const b = e.target.closest('.tile');
        if (!b || checked) return;
        const t = pool[+b.dataset.k];
        t.used = false;
        picked.splice(picked.indexOf(t), 1);
        draw();
      });
      check.addEventListener('click', () => {
        checked = true;
        const got = picked.map(t => t.w);
        const ok = got.join(' ') === s.answer.join(' ');
        const sentence = s.answer.join(' ') + (s.end ?? '.');
        let why = s.explain;
        if (!ok) {
          const trap = got.find(w => s.wrongWhy && s.wrongWhy[w]);
          why = trap ? s.wrongWhy[trap] : 'Close! Check the word order in the answer.';
        }
        row.classList.add(ok ? 'ok' : 'fix');
        why += hintDone(ok);
        score(s, ok && !hw.used);
        feedback(foot, ok, why, ok ? null : sentence, s.rule, sentence);
      });
      draw();
    },

    game(s, stage, foot) {
      stage.innerHTML = `
        <p class="kicker">Mini game</p>
        <div class="big-emoji">⏱️</div>
        <h2 class="center">${s.title}</h2>
        <p class="center">${s.howto}</p>`;
      foot.innerHTML = '<button class="btn">Start!</button>';
      foot.querySelector('.btn').addEventListener('click', () => playSort(s, stage, foot));
    },

    // A conversation: the customer talks, Andrew picks what to say back.
    // A bad pick gets a reaction, costs some of her mood, and he picks again.
    talk(s, stage, foot) {
      const FACES = ['😠', '😕', '🙂', '😀'];
      const MOODS = ['angry', 'annoyed', 'happy', 'very happy'];
      let line = 0, mood = 3, hints = false;
      foot.classList.add('sticky');
      stage.innerHTML = `
        <div class="talk-head"><span class="avatar">${s.who.emoji}</span>
          <span class="who"><b>${s.who.name}</b><small>${s.title}</small></span><span class="mood">${FACES[mood]}</span></div>
        <div class="chat"></div>`;
      const chat = stage.querySelector('.chat'), moodEl = stage.querySelector('.mood');

      function bubble(cls, es, en) {
        const b = document.createElement('div');
        b.className = 'bubble ' + cls;
        b.innerHTML = `<span class="es">${es}</span>${en ? `<span class="en">${en}</span>` : ''}`;
        if (en && cls === 'them') {
          b.insertAdjacentHTML('beforeend', '<span class="tap-hint">tap for English</span>');
          b.addEventListener('click', () => b.classList.toggle('show-en'));
        }
        chat.appendChild(b);
        window.scrollTo(0, document.body.scrollHeight);
      }

      function sheet(ok, text, then) {
        foot.innerHTML = `<div class="sheet ${ok ? 'good' : 'bad'}">
          <h3>${ok ? pick(PRAISE) : 'Oops!'}</h3><p>${text}</p>
          <div class="sheet-row"><button class="btn">${ok ? 'Continue' : 'Try again'}</button></div></div>`;
        foot.querySelector('.btn').addEventListener('click', then);
        window.scrollTo(0, document.body.scrollHeight);
      }

      function showLine() {
        const L = s.lines[line];
        if (!L) return finish();
        if (L.narrate) bubble('narrate', L.narrate);
        bubble('them', L.them, L.en);
        say(L.them);
        choose(L, shuffle(L.choices), new Set(), true);
      }

      function choose(L, order, tried, first) {
        foot.innerHTML = `
          <div class="talk-tools"><span class="kicker">What do you say?</span>
            <button class="hint-toggle">${hints ? 'Hide English' : 'Show English'}</button></div>
          <div class="options">${order.map((c, k) => `<button class="opt" data-k="${k}"${tried.has(c) ? ' disabled' : ''}>
            ${c.es}${hints ? `<small>${c.en}</small>` : ''}</button>`).join('')}</div>`;
        foot.querySelector('.hint-toggle').addEventListener('click', () => { hints = !hints; choose(L, order, tried, first); });
        foot.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
          foot.querySelectorAll('.opt').forEach(x => { x.disabled = true; });
          const c = order[+b.dataset.k];
          bubble(c.good ? 'me' : 'me oops', c.es);
          say(c.es);
          if (first) {
            run.asked++;
            if (c.good) run.right++;
            else { const id = talkLineId(run.L.id, L); deckMiss(id); run.toReview.add(id); }
          }
          if (c.good) {
            sfx.good();
            sheet(true, c.note, () => { line++; showLine(); });
            return;
          }
          sfx.bad();
          tried.add(c);
          mood = Math.max(0, mood - 1);
          setTimeout(() => {
            bubble('them', c.react, c.reactEn);
            say(c.react, false, true);
            moodEl.textContent = FACES[mood];
            moodEl.classList.remove('bump');
            void moodEl.offsetWidth; // restart the shake animation
            moodEl.classList.add('bump');
            sheet(false, c.why, () => choose(L, order, tried, false));
          }, 700);
        }));
      }

      function finish() {
        const tip = s.tips.find(t => t.mood <= mood);
        run.bonus = { value: FACES[mood], label: tip.text };
        sfx.done();
        bubble('narrate', `${s.who.name} is ${MOODS[mood]}. You get: <b>${tip.text}</b>`);
        foot.innerHTML = '<button class="btn">Continue</button>';
        foot.querySelector('.btn').addEventListener('click', next);
        window.scrollTo(0, document.body.scrollHeight);
      }

      bubble('narrate', s.setup);
      setTimeout(showLine, 600);
    },
  };

  // ---------- mini game: a two-button sorting race (SER / ESTAR, EL / LA, …) ----------
  let stopGame = () => {};

  // In a lesson, missed cards go to the review deck and Continue moves on. The gym passes
  // opts.onEnd (points, how many sorted) and opts.onDone instead; cards with a .src lesson
  // still go to the review deck.
  function playSort(s, stage, foot, opts = {}) {
    const [A, B] = s.buttons || [['ser', 'SER'], ['estar', 'ESTAR']];
    const deck = shuffle(s.pool);
    let idx = 0, pts = 0, streak = 0, waiting = false, over = false;
    const missed = [];
    const start = performance.now();
    stage.innerHTML = `
      <div class="game-top"><span class="pts">0</span><span class="streak"></span><div class="timer"><i></i></div></div>
      <div class="g-sentence"></div>
      <div class="g-tag"></div>`;
    foot.innerHTML = `<div class="g-buttons"><button class="g-btn a">${A[1]}</button><button class="g-btn b">${B[1]}</button></div>
      <p class="g-keys">On a keyboard: ← for ${A[1]}, → for ${B[1]}</p>`;
    const sentEl = stage.querySelector('.g-sentence'), tagEl = stage.querySelector('.g-tag');
    const ptsEl = stage.querySelector('.pts'), streakEl = stage.querySelector('.streak');
    const timerEl = stage.querySelector('.timer i');

    function card() { return deck[idx % deck.length]; }
    function show() {
      sentEl.innerHTML = blank(card().s);
      tagEl.textContent = '';
      tagEl.className = 'g-tag';
      waiting = false;
    }
    function answer(verb) {
      if (waiting || over) return;
      waiting = true;
      const c = card();
      const ok = verb === c.v;
      sentEl.innerHTML = blank(c.s, c.f);
      tagEl.textContent = `${c.v.toUpperCase()} · ${c.why}`;
      tagEl.className = 'g-tag ' + (ok ? 'ok' : 'fix');
      if (ok) { streak++; pts += streak >= 3 ? 2 : 1; sfx.good(); }
      else {
        streak = 0;
        sfx.bad();
        if (!missed.includes(c)) {
          missed.push(c);
          const src = c.src || (!opts.onDone && run.L.id);
          if (src) { const id = gameCardId(src, c); deckMiss(id); if (!opts.onDone) run.toReview.add(id); }
        }
      }
      ptsEl.textContent = pts;
      streakEl.textContent = streak >= 3 ? `🔥 x2` : '';
      idx++;
      setTimeout(() => { if (!over) show(); }, ok ? 650 : 1700);
    }
    function onKey(e) {
      if (e.key === 'ArrowLeft') answer(A[0]);
      if (e.key === 'ArrowRight') answer(B[0]);
    }
    // A plain interval, not animation frames: those pause when the app is in the background.
    function tick() {
      if (over) return;
      const left = Math.max(0, 1 - (performance.now() - start) / (s.seconds * 1000));
      timerEl.style.width = (left * 100) + '%';
      if (left <= 0) end();
    }
    const timer = setInterval(tick, 100);
    function end() {
      stopGame();
      if (opts.onEnd) opts.onEnd(pts, idx); else run.game = Math.max(run.game, pts);
      sfx.done();
      stage.innerHTML = `
        <p class="kicker">Time!</p>
        <div class="big-emoji">🏁</div>
        <h2 class="center">${pts} points</h2>
        <p class="center">You sorted ${idx} sentences.</p>
        ${missed.length
          ? `<h3>Fix these</h3><div class="rows">${missed.map(c => {
              const full = c.s.replace('___', c.f);
              return `<div class="row"><div class="row-text"><b>${full}</b><small>${c.v.toUpperCase()} · ${c.why}</small></div>${spk(full)}</div>`;
            }).join('')}</div>`
          : '<p class="center">No mistakes. ¡Increíble!</p>'}`;
      foot.innerHTML = '<button class="btn ghost">Play again</button><button class="btn">Continue</button>';
      foot.querySelector('.ghost').addEventListener('click', () => playSort(s, stage, foot, opts));
      foot.querySelector('.btn:not(.ghost)').addEventListener('click', opts.onDone || next);
    }
    stopGame = () => { over = true; clearInterval(timer); document.removeEventListener('keydown', onKey); };

    foot.querySelector('.g-btn.a').addEventListener('click', () => answer(A[0]));
    foot.querySelector('.g-btn.b').addEventListener('click', () => answer(B[0]));
    document.addEventListener('keydown', onKey);
    show();
  }

  // ---------- verbs and little words (data in conjugation.js and words.js) ----------
  const CONJ = window.CONJ;
  const WORDS = window.WORDS;
  CONJ.tenses.forEach(t => t.groups.forEach(g => { g.tense = t; }));
  const PRESENT = CONJ.tenses[0];
  const IR_FORMS = ['voy', 'vas', 'va', 'vamos', 'van'];

  function cap(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }

  // The five forms of a verb, with the part the rule adds wrapped in <em> so tables can color it.
  function formHTML(g, v) {
    if (v[2]) return v[2].slice();
    if (g.goingTo) return IR_FORMS.map(f => `<em>${f} a</em> ${v[0]}`);
    if (g.addToInfinitive) return g.addToInfinitive.map(e => `${v[0]}<em>${e}</em>`);
    const end = g.endings || g.endingsBy[v[0].slice(-2)];
    return end.map(e => `${v[0].slice(0, -2)}<em>${e}</em>`);
  }
  function formsOf(g, v) { return formHTML(g, v).map(h => h.replace(/<\/?em>/g, '')); }

  // One line on how to build this form: the ending to add, or the irregular verb's tip.
  function howTo(g, v, p, who) {
    if (v[2]) return v[3];
    if (g.goingTo) return `Going to: <b>${IR_FORMS[p]} a</b> + the whole verb.`;
    if (g.addToInfinitive) return `Future: keep the whole verb and add <b>-${g.addToInfinitive[p]}</b>.`;
    const type = v[0].slice(-2), end = (g.endings || g.endingsBy[type])[p];
    return `-${type.toUpperCase()} verb${g.tense === PRESENT ? '' : `, ${g.tense.name}`}: for ${who}, drop -${type} and add <b>-${end}</b>.`;
  }

  // Present form of a verb we list, for the "that's the present tense" wrong answer.
  function presentForm(inf, p) {
    for (const g of PRESENT.groups) {
      const v = g.verbs.find(x => x[0] === inf);
      if (v) return formsOf(g, v)[p];
    }
    return null;
  }

  function conjTable(g, v, highlight) {
    const html = formHTML(g, v), forms = formsOf(g, v);
    return `<div class="conj">${CONJ.persons.map((p, i) => `<div class="conj-row${i === highlight ? ' hl' : ''}">
      <span class="p">${p.key}</span><b>${html[i]}</b>${spk(`${p.show[0]} ${forms[i]}`)}</div>`).join('')}</div>`;
  }

  // ---------- gym questions: each returns prompt, options, and the explanations ----------
  function verbQuestion(g) {
    const v = pick(g.verbs), p = Math.floor(Math.random() * 5);
    const forms = formsOf(g, v), answer = forms[p];
    const who = pick(CONJ.persons[p].show);
    const cue = pick(g.tense.cues);
    const lead = cue ? `${cue} ${who}` : who;
    const trap = g.tense === PRESENT ? null : presentForm(v[0], p);
    const others = shuffle([...new Set(forms)].filter(f => f !== answer));
    const wrong = trap && !forms.includes(trap) ? [trap].concat(others.slice(0, 2)) : others.slice(0, 3);
    const how = howTo(g, v, p, who);
    return {
      kicker: g.tense === PRESENT ? g.title : `${g.tense.title} · ${g.title}`,
      prompt: `${cap(lead)} ___`,
      hint: `<b>${v[0]}</b> · ${v[1]}${g.tense === PRESENT ? '' : ` · <span class="tense-tag">${g.tense.title}</span>`}`,
      answer,
      options: shuffle([answer].concat(wrong)),
      why(chosen) {
        if (chosen === trap && !forms.includes(chosen)) {
          return `<b>${chosen}</b> is the present tense (now). <b>${cue}</b> is your clue: it needs the ${g.tense.name}: <b>${answer}</b>. ${how}`;
        }
        const owner = CONJ.persons[forms.indexOf(chosen)].key;
        return `<b>${chosen}</b> is the <b>${owner}</b> form. For <b>${who}</b> it's <b>${answer}</b>. ${how}`;
      },
      explain: how,
      table: conjTable(g, v, p),
      say: `${lead} ${answer}`,
    };
  }

  const KIND = ['one boy word', 'one girl word', 'more than one boy word', 'more than one girl word'];
  const ARTICLE = ['el', 'la', 'los', 'las'];
  const ENDS = ['o', 'a', 'os', 'as'];
  function nounKind(n, plural) { return (n[2] === 'm' ? 0 : 1) + (plural ? 2 : 0); }
  function agree(base, k) { return base.slice(0, -1) + ENDS[k]; } // mío → mía / míos / mías

  function demoTable(hid, hk) {
    return `<div class="conj">${WORDS.demonstratives.map(d => `<div class="conj-row${d.id === hid ? ' hl' : ''}">
      <span class="p">${d.en[0].replace(' …', '')}</span>
      <b>${d.forms.map((f, i) => d.id === hid && i === hk ? `<em>${f}</em>` : f).join(' · ')}</b>${spk(d.forms.join(', '))}</div>`).join('')}</div>`;
  }

  function demoQuestion() {
    const D = WORDS.demonstratives, d = pick(D);
    if (Math.random() < 0.15) {
      // No noun: esto / eso / aquello.
      const answer = d.neuter;
      const other = pick(D.filter(x => x !== d));
      return {
        kicker: 'This & that', prompt: '¿Qué es ___?', hint: `"What is ${d.neuterEn}?" You don't know what it is yet.`,
        answer, options: shuffle([answer, d.forms[0], d.forms[1], other.neuter]),
        why: chosen => chosen === other.neuter
          ? `<b>${chosen}</b> means "${other.neuterEn}". For "${d.neuterEn}" use <b>${answer}</b>.`
          : WORDS.neuterRule,
        explain: WORDS.neuterRule,
        table: demoTable(d.id, -1),
        say: `¿Qué es ${answer}?`,
      };
    }
    const n = pick(WORDS.nouns), plural = Math.random() < 0.4, k = nounKind(n, plural);
    const noun = plural ? n[1] : n[0], nEn = plural ? n[4] : n[3];
    const label = d.en[plural ? 1 : 0];
    const en = label.includes('…') ? label.replace('…', nEn) : `${label} ${nEn}`;
    const answer = d.forms[k];
    const other = pick(D.filter(x => x !== d));
    const wrong = shuffle(d.forms.filter((f, i) => i !== k)).slice(0, 2).concat(other.forms[k]);
    const note = n[5] ? ` ${n[5]}` : '';
    return {
      kicker: 'This & that', prompt: `___ ${noun}`, hint: `"${en}"`,
      answer, options: shuffle([answer].concat(wrong)),
      why(chosen) {
        const owner = D.find(x => x.forms.includes(chosen)), ci = owner.forms.indexOf(chosen);
        if (owner !== d) {
          return `<b>${chosen}</b> means "${owner.en[ci > 1 ? 1 : 0].replace(' …', '')}". For "${en}" it's <b>${answer} ${noun}</b>. ${WORDS.demoTrick}`;
        }
        return `<b>${chosen}</b> is for ${KIND[ci]}. <b>${noun}</b> is ${KIND[k]} (${ARTICLE[k]} ${noun}), so: <b>${answer} ${noun}</b>.${note}`;
      },
      explain: `${cap(ARTICLE[k])} ${noun} is ${KIND[k]}, so <b>${answer}</b>.${note}`,
      table: demoTable(d.id, k),
      say: `${answer} ${noun}`,
    };
  }

  function shortPoss(o, k) { return o.short ? o.short[k > 1 ? 1 : 0] : agree(o.long, k); }
  function possTable(hl) {
    const rows = [['yo', 'mi', 'mío'], ['tú', 'tu', 'tuyo'], ['él / ella / usted / ellos', 'su', 'suyo'], ['nosotros', null, 'nuestro']];
    return `<div class="conj">${rows.map(([who, s, l]) => `<div class="conj-row${l === hl ? ' hl' : ''}">
      <span class="p">${who}</span>
      <span class="forms"><b>${s ? `${s}, ${s}s` : [0, 1, 2, 3].map(i => agree(l, i)).join(', ')}</b>
      <small>${s ? `long: ${[0, 1, 2, 3].map(i => agree(l, i)).join(', ')}` : 'same before a noun and after es'}</small></span></div>`).join('')}</div>`;
  }

  function possQuestion() {
    const P = WORDS.possessives, o = pick(P), n = pick(WORDS.nouns);
    const plural = Math.random() < 0.4, k = nounKind(n, plural);
    const noun = plural ? n[1] : n[0], nEn = plural ? n[4] : n[3];
    const long = Math.random() < 0.4;
    const isSu = o.long === 'suyo';
    const suNote = isSu ? ' <b>Su</b> can mean his, her, their or your (polite).' : '';
    let answer, prompt, hint, pool, explain;
    if (!long) {
      answer = shortPoss(o, k);
      prompt = `___ ${noun}`;
      hint = `"${o.en} ${nEn}"`;
      // Wrong number (or gender, for nuestro) first, then other owners.
      pool = (o.short ? [shortPoss(o, k ^ 2)] : [agree(o.long, k ^ 1), agree(o.long, k ^ 2)])
        .concat(shuffle(P.filter(x => x.long !== o.long)).map(x => shortPoss(x, k)));
      explain = o.short
        ? `"${o.en}" is <b>${o.short[0]}</b>, or <b>${o.short[1]}</b> for more than one thing. ${noun}: ${plural ? 'more than one' : 'just one'}.${suNote}`
        : `<b>Nuestro</b> matches the thing: ${ARTICLE[k]} ${noun} → <b>${answer} ${noun}</b>.`;
    } else {
      answer = agree(o.long, k);
      prompt = `${cap(ARTICLE[k])} ${noun} ${plural ? 'son' : 'es'} ___.`;
      hint = `"The ${nEn} ${plural ? 'are' : 'is'} ${o.enLong}."`;
      pool = [agree(o.long, k ^ 1), agree(o.long, k ^ 2), shortPoss(o, k)]
        .concat(shuffle(P.filter(x => x.long !== o.long)).map(x => agree(x.long, k)));
      explain = `After <b>es / son</b>, use the long form. It matches the thing: ${ARTICLE[k]} ${noun} → <b>${answer}</b>.${suNote}`;
    }
    const wrong = [...new Set(pool)].filter(f => f !== answer).slice(0, 3);
    const enOf = x => x.long === 'suyo' ? (long ? 'his / hers / theirs / yours' : 'his / her / their / your') : (long ? x.enLong : x.en);
    return {
      kicker: 'My & mine', prompt, hint, answer,
      options: shuffle([answer].concat(wrong)),
      why(chosen) {
        if (long && P.some(x => x.short && x.short.includes(chosen))) {
          return `<b>${chosen}</b> only goes right before a noun, like <b>${chosen} ${noun}</b>. ${WORDS.possLongRule}`;
        }
        const whose = P.find(x => (x.short && x.short.includes(chosen)) || [0, 1, 2, 3].some(i => agree(x.long, i) === chosen));
        if (whose && whose.long !== o.long) {
          return `<b>${chosen}</b> means "${enOf(whose)}". You need "${long ? o.enLong : o.en}": <b>${answer}</b>.`;
        }
        return `<b>${chosen}</b> doesn't match the thing. <b>${noun}</b> is ${KIND[k]} (${ARTICLE[k]} ${noun}), so: <b>${answer}</b>.${n[5] ? ` ${n[5]}` : ''}`;
      },
      explain,
      table: possTable(o.long),
      say: long ? prompt.replace('___', answer) : `${answer} ${noun}`,
    };
  }

  // ---------- topic drills: colors, numbers, time, dates, boy / girl words (lists in topics.js) ----------
  function refRows(rows, hl) {
    return `<div class="conj">${rows.map(([a, b]) => `<div class="conj-row${a === hl ? ' hl' : ''}">
      <span class="p">${b}</span><b>${a === hl ? `<em>${a}</em>` : a}</b>${spk(a)}</div>`).join('')}</div>`;
  }
  // Up to four different options: the answer first, then the wrong ones that aren't repeats.
  function fourOptions(answer, wrong) {
    return shuffle([answer].concat([...new Set(wrong)].filter(w => w && w !== answer).slice(0, 3)));
  }

  const COLOR_KINDS = ['m', 'f', 'mp', 'fp'];
  function colorForm(c, k) { // k: 0 one boy word, 1 one girl word, 2 boy words, 3 girl words
    if (c[2]) return c[0].slice(0, -1) + ENDS[k];
    return k > 1 ? c[3] : c[0];
  }
  function colorQuestion() {
    const C = WORDS.colors, c = pick(C), kind = pick(['say', 'match', 'match', 'read']);
    const table = refRows(C.map(x => [x[0], x[1]]), c[0]);
    if (kind === 'say') {
      return {
        kicker: 'Colors', prompt: 'Es ___.', hint: `"It's ${c[1]}."`, answer: c[0],
        options: fourOptions(c[0], shuffle(C.filter(x => x !== c)).map(x => x[0])),
        why: chosen => `<b>${chosen}</b> is ${C.find(x => x[0] === chosen)[1]}. ${c[1]} is <b>${c[0]}</b>.`,
        explain: `<b>${c[0]}</b> = ${c[1]}.`, table, say: `Es ${c[0]}.`,
      };
    }
    if (kind === 'read') {
      return {
        kicker: 'Colors', prompt: `${c[0]} = ___`, hint: 'What color is it in English?', answer: c[1],
        options: fourOptions(c[1], shuffle(C.filter(x => x !== c)).map(x => x[1])),
        why: chosen => `${chosen} is <b>${C.find(x => x[1] === chosen)[0]}</b>. <b>${c[0]}</b> is ${c[1]}.`,
        explain: `<b>${c[0]}</b> = ${c[1]}.`, table, say: c[0],
      };
    }
    const n = pick(WORDS.nouns.filter(x => !x[5])), plural = Math.random() < 0.45, k = nounKind(n, plural);
    const noun = plural ? n[1] : n[0], nEn = plural ? n[4] : n[3];
    const answer = colorForm(c, k);
    const wrong = c[2] ? [0, 1, 2, 3].filter(i => i !== k).map(i => colorForm(c, i)) : [colorForm(c, k ^ 2)];
    const others = shuffle(C.filter(x => x !== c)).map(x => colorForm(x, k));
    const rule = c[2]
      ? `<b>${noun}</b> is ${KIND[k]} (${ARTICLE[k]} ${noun}), so <b>${c[0]}</b> becomes <b>${answer}</b>.`
      : `<b>${c[0]}</b> doesn't change for boy / girl, only for more than one: <b>${c[3]}</b>. Here it's ${plural ? 'more than one' : 'just one'}: <b>${answer}</b>.`;
    return {
      kicker: 'Colors · make it match', prompt: `${ARTICLE[k]} ${noun} ___`, hint: `"the ${c[1]} ${nEn}"`, answer,
      options: fourOptions(answer, wrong.concat(others)),
      why: chosen => C.some(x => x !== c && [0, 1, 2, 3].some(i => colorForm(x, i) === chosen))
        ? `<b>${chosen}</b> is a different color. ${c[1]} is <b>${c[0]}</b>. ${rule}`
        : rule,
      explain: `${rule} Colors go after the thing.`, table: `<p class="small">${WORDS.colorRule}</p>`, say: `${ARTICLE[k]} ${noun} ${answer}`,
    };
  }

  const UNITS = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce',
    'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro',
    'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
  const TENS = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const HUNDREDS = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  function under100(n) { return n < 30 ? UNITS[n] : TENS[Math.floor(n / 10)] + (n % 10 ? ` y ${UNITS[n % 10]}` : ''); }
  function under1000(n) {
    if (n === 100) return 'cien';
    const h = Math.floor(n / 100), r = n % 100;
    return [h ? HUNDREDS[h] : '', r || !h ? under100(r) : ''].filter(Boolean).join(' ');
  }
  // Spanish words for 0 to 999,999. Before a noun, "uno" becomes "un": veintiún dólares.
  function numberEs(n, beforeNoun) {
    const th = Math.floor(n / 1000), r = n % 1000;
    let s = th ? `${th === 1 ? 'mil' : `${under1000(th)} mil`}${r ? ` ${under1000(r)}` : ''}` : under1000(r);
    s = s.replace(/veintiuno mil/, 'veintiún mil').replace(/\buno mil/, 'un mil');
    if (beforeNoun) s = s.replace(/veintiuno$/, 'veintiún').replace(/\buno$/, 'un');
    return s;
  }
  // Numbers that are easy to mix up with n: swapped digits, 6 ↔ 7, 15 ↔ 50, one ten off.
  function nearNumbers(n) {
    const s = String(n), out = [];
    if (s.length === 2 && s[1] !== '0') out.push(+(s[1] + s[0]));
    if (/[67]/.test(s)) out.push(+s.replace(/[67]/, d => (d === '6' ? '7' : '6')));
    if (n === 15) out.push(50);
    if (n === 50) out.push(15);
    if (n >= 11 && n <= 19) out.push((n - 10) * 10);
    if (n % 100 >= 20 && n % 100 < 70 && n % 10 === 0 && n < 100) out.push(n / 10 + 10);
    if (n >= 100 && n < 1000) out.push(n % 100 ? Math.floor(n / 100) * 100 : n + 50, (Math.floor(n / 100) % 9 + 1) * 100 + n % 100);
    out.push(n + 10, n > 10 ? n - 10 : n + 20, n + 1, n + 100);
    return [...new Set(out)].filter(x => x !== n && x >= 0);
  }
  function numberPick() {
    const r = Math.random();
    return r < 0.25 ? Math.floor(Math.random() * 31) : r < 0.6 ? 31 + Math.floor(Math.random() * 69)
      : r < 0.9 ? 100 + Math.floor(Math.random() * 900) : 1000 + Math.floor(Math.random() * 1500);
  }
  function numberQuestion() {
    const n = numberPick(), kind = pick(['toWords', 'toDigits', 'listen', 'listen', 'price']);
    const near = nearNumbers(n);
    const table = `<p class="small">${WORDS.numberTrick}</p>`;
    if (kind === 'toWords' || kind === 'price') {
      const price = kind === 'price';
      const words = x => numberEs(x, price);
      const answer = words(n);
      const byWord = {};
      near.forEach(x => { byWord[words(x)] = x; });
      return {
        kicker: price ? 'Numbers · prices' : 'Numbers', wide: true,
        prompt: price ? `$${n} = ___ dólares` : `${n} = ___`, hint: price ? 'How do you say the price?' : 'Pick the Spanish.',
        answer, options: fourOptions(answer, near.map(words)),
        why: chosen => `<b>${chosen}</b> is ${byWord[chosen]}. ${n} is <b>${answer}</b>.`,
        explain: `${n} = <b>${answer}</b>.${price && /un$/.test(answer) ? ' <b>Uno</b> becomes <b>un</b> before a noun like dólares.' : ''}`,
        table, say: price ? `${answer} dólares` : answer,
      };
    }
    const answer = String(n);
    const words = numberEs(n);
    return {
      kicker: kind === 'listen' ? 'Numbers · listen' : 'Numbers', listen: kind === 'listen' ? words : null,
      prompt: kind === 'listen' ? '' : `${words} = ___`, hint: kind === 'listen' ? 'What number do you hear?' : 'Pick the number.',
      answer, options: fourOptions(answer, near.map(String)),
      why: chosen => `<b>${chosen}</b> is <b>${numberEs(+chosen)}</b>. You ${kind === 'listen' ? 'heard' : 'have'} <b>${words}</b> = ${n}.`,
      explain: `<b>${words}</b> = ${n}.`, table, say: words,
    };
  }

  const HOURS = ['doce', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'];
  const MINUTES = { 0: '', 5: 'y cinco', 10: 'y diez', 15: 'y cuarto', 20: 'y veinte', 30: 'y media', 40: 'y cuarenta', 45: 'y cuarenta y cinco', 50: 'y cincuenta' };
  function timeEs(h, m, at) {
    const lead = at ? (h === 1 ? 'a la' : 'a las') : (h === 1 ? 'Es la' : 'Son las');
    return `${lead} ${HOURS[h]}${MINUTES[m] ? ` ${MINUTES[m]}` : ''}`;
  }
  function clock(h, m) { return `${h}:${String(m).padStart(2, '0')}`; }
  function timeQuestion() {
    const h = 1 + Math.floor(Math.random() * 12), m = +pick(Object.keys(MINUTES)), kind = pick(['say', 'say', 'read', 'at', 'part']);
    const table = `<p class="small">${WORDS.timeRule}</p><div class="trick">💡 ${WORDS.timeTrick}</div>`;
    const answer = timeEs(h, m);
    if (kind === 'say') {
      const other = h === 1 ? `Son las una${MINUTES[m] ? ` ${MINUTES[m]}` : ''}` : `Es la ${HOURS[h]}${MINUTES[m] ? ` ${MINUTES[m]}` : ''}`;
      const swapMin = { 15: 45, 45: 15, 30: 15, 0: 30, 5: 50, 50: 5, 10: 20, 20: 10, 40: 30 }[m];
      const wrongs = [other, timeEs(h, swapMin), timeEs(h % 12 + 1, m)];
      return {
        kicker: 'Time', wide: true, prompt: '¿Qué hora es? ___.', hint: `🕒 It's ${clock(h, m)}.`, answer,
        options: fourOptions(answer, wrongs),
        why: chosen => chosen === other
          ? (h === 1 ? 'One o\'clock is just one hour, so it\'s <b>Es la una</b>.' : `<b>Es la</b> is only for one o'clock (la una). For every other hour, say <b>Son las</b>: <b>${answer}</b>.`)
          : `<b>${chosen}</b> is a different time. ${clock(h, m)} is <b>${answer}</b>.`,
        explain: `${clock(h, m)} → <b>${answer}</b>.`, table, say: answer,
      };
    }
    if (kind === 'read') {
      const wrongs = [clock(h, { 15: 45, 45: 15, 30: 15, 0: 30, 5: 50, 50: 5, 10: 20, 20: 10, 40: 30 }[m]), clock(h % 12 + 1, m), clock(h === 1 ? 12 : h - 1, m)];
      const opts = fourOptions(clock(h, m), wrongs);
      return {
        kicker: 'Time', prompt: `${answer}. → ___`, hint: 'What time is it?', answer: clock(h, m), options: opts,
        why: chosen => `<b>${chosen}</b> would be "${timeEs(+chosen.split(':')[0], +chosen.split(':')[1]).toLowerCase()}". <b>${answer}</b> is ${clock(h, m)}.`,
        explain: `<b>${answer}</b> = ${clock(h, m)}.`, table, say: answer,
      };
    }
    if (kind === 'at') {
      const right = h === 1 ? 'a la' : 'a las';
      return {
        kicker: 'Time · at what time?', prompt: `La cita es ___ ${HOURS[h]}${MINUTES[m] ? ` ${MINUTES[m]}` : ''}.`,
        hint: `"The appointment is at ${clock(h, m)}."`, answer: right,
        options: fourOptions(right, h === 1 ? ['a las', 'en la', 'la'] : ['a la', 'en las', 'las']),
        why: chosen => `"At" a time is <b>a la</b> (one o'clock) or <b>a las</b> (every other hour). Not <b>en</b>.`,
        explain: `At ${clock(h, m)} → <b>${timeEs(h, m, true)}</b>.`, table, say: `La cita es ${timeEs(h, m, true)}.`,
      };
    }
    const part = pick(WORDS.timeParts), ph = pick(part[2]);
    const ampm = part[0] === 'de la mañana' ? 'AM' : 'PM';
    return {
      kicker: 'Time · morning or night?', wide: true, prompt: `${timeEs(ph, 0)} ___.`, hint: `🕒 ${ph}:00 ${ampm}`,
      answer: part[0], options: fourOptions(part[0], WORDS.timeParts.map(p => p[0])),
      why: () => `${ph}:00 ${ampm} is ${part[1]}: <b>${part[0]}</b>.`,
      explain: `${ph}:00 ${ampm} → <b>${part[0]}</b> (${part[1]}).`, table, say: `${timeEs(ph, 0)} ${part[0]}.`,
    };
  }

  function dateEs(d, month) { return `el ${d === 1 ? 'primero' : numberEs(d)} de ${month[0]}`; }
  function dateQuestion() {
    const D = WORDS.days, M = WORDS.months, kind = pick(['day', 'month', 'date', 'date', 'on', 'when']);
    const table = `<p class="small">${WORDS.dateRule}</p><div class="trick">💡 ${WORDS.dateTrick}</div>`;
    if (kind === 'day') {
      const d = pick(D);
      return {
        kicker: 'Dates · days', prompt: 'Hoy es ___.', hint: `"Today is ${d[1]}."`, answer: d[0],
        options: fourOptions(d[0], shuffle(D.filter(x => x !== d)).map(x => x[0])),
        why: chosen => `<b>${chosen}</b> is ${D.find(x => x[0] === chosen)[1]}. ${d[1]} is <b>${d[0]}</b>.`,
        explain: `<b>${d[0]}</b> = ${d[1]}. No capital letter in Spanish.`, table: refRows(D, d[0]), say: `Hoy es ${d[0]}.`,
      };
    }
    if (kind === 'month') {
      const mo = pick(M);
      return {
        kicker: 'Dates · months', prompt: 'Mi cumpleaños es en ___.', hint: `"My birthday is in ${mo[1]}."`, answer: mo[0],
        options: fourOptions(mo[0], shuffle(M.filter(x => x !== mo)).map(x => x[0])),
        why: chosen => `<b>${chosen}</b> is ${M.find(x => x[0] === chosen)[1]}. ${mo[1]} is <b>${mo[0]}</b>.`,
        explain: `<b>${mo[0]}</b> = ${mo[1]}.`, table: refRows(M, mo[0]), say: `Mi cumpleaños es en ${mo[0]}.`,
      };
    }
    if (kind === 'date') {
      const mo = pick(M), d = Math.random() < 0.2 ? 1 : 2 + Math.floor(Math.random() * 27);
      const answer = dateEs(d, mo);
      const other = pick(M.filter(x => x !== mo));
      const wrongs = [`el ${mo[0]} ${numberEs(d)}`, `en ${answer}`, dateEs(d, other), d === 1 ? `el uno ${mo[0]}` : dateEs(nearNumbers(d).find(x => x > 1 && x < 29) || d + 1, mo)];
      return {
        kicker: 'Dates', wide: true, prompt: 'La cita es ___.', hint: `"The appointment is on ${mo[1]} ${d}."`, answer,
        options: fourOptions(answer, wrongs),
        why: chosen => chosen.startsWith(`el ${mo[0]}`)
          ? `Spanish says the day first: <b>el + number + de + month</b>: <b>${answer}</b>.`
          : chosen.startsWith('en ')
            ? `No <b>en</b> before a date. "On ${mo[1]} ${d}" is just <b>${answer}</b>.`
            : `That's a different date. ${mo[1]} ${d} is <b>${answer}</b>.`,
        explain: `${mo[1]} ${d} → <b>${answer}</b>.${d === 1 ? ' The first of the month is <b>el primero</b>.' : ''}`, table, say: `La cita es ${answer}.`,
      };
    }
    if (kind === 'on') {
      const d = pick(D), every = Math.random() < 0.35;
      const answer = every ? 'los' : 'el';
      const day = every && !/s$/.test(d[0]) ? `${d[0]}s` : d[0];
      return {
        kicker: 'Dates · on Monday', prompt: `Trabajo ___ ${day}.`, hint: every ? `"I work on ${d[1]}s (every week)."` : `"I work on ${d[1]} (this week)."`,
        answer, options: fourOptions(answer, ['el', 'los', 'en', 'en el']),
        why: chosen => chosen.startsWith('en')
          ? `"On" a day is not <b>en</b>. It's just <b>el ${d[0]}</b> (this one) or <b>los ${day}</b> (every week).`
          : every ? `Every week = <b>los ${day}</b>.` : `One day this week = <b>el ${d[0]}</b>. <b>Los</b> would mean every ${d[1]}.`,
        explain: every ? `Every ${d[1]} → <b>los ${day}</b>.` : `On ${d[1]} → <b>el ${d[0]}</b>. No "en".`, table, say: `Trabajo ${answer} ${day}.`,
      };
    }
    const W = WORDS.whenWords, w = pick(W);
    return {
      kicker: 'Dates · when?', wide: true, prompt: 'Vamos ___.', hint: `"We're going ${w[1]}."`, answer: w[0],
      options: fourOptions(w[0], shuffle(W.filter(x => x !== w)).map(x => x[0])),
      why: chosen => `<b>${chosen}</b> means ${W.find(x => x[0] === chosen)[1]}. ${cap(w[1])} is <b>${w[0]}</b>.`,
      explain: `<b>${w[0]}</b> = ${w[1]}.`, table: refRows(W, w[0]), say: `Vamos ${w[0]}.`,
    };
  }

  function genderQuestion() {
    const G = WORDS.gender;
    const tricky = G.filter(g => g[3] !== '-a ending' && g[3] !== '-o ending');
    const g = Math.random() < 0.6 ? pick(tricky) : pick(G);
    const answer = g[1] === 'm' ? 'el' : 'la';
    const why = g[4] || (g[1] === 'm' ? '-o ending: a boy word.' : '-a ending: a girl word.');
    return {
      kicker: 'Boy or girl word?', prompt: `___ ${g[0]}`, hint: `"the ${g[2]}"`, answer, options: ['el', 'la'],
      why: () => `<b>${g[0]}</b> is a ${g[1] === 'm' ? 'boy' : 'girl'} word: <b>${answer} ${g[0]}</b>. ${why}`,
      explain: `<b>${answer} ${g[0]}</b>. ${why}`, table: `<p class="small">${WORDS.genderRule}</p>`, say: `${answer} ${g[0]}`,
    };
  }

  // Every drill the gym can run. Past and future tenses mix their regular and irregular groups.
  const DRILLS = [];
  PRESENT.groups.forEach(g => DRILLS.push({ id: g.id, section: 'Verbs: present', title: g.title, make: () => verbQuestion(g) }));
  CONJ.tenses.slice(1).forEach(t => DRILLS.push({ id: t.id, section: 'Verbs: past & future', title: t.title, make: () => verbQuestion(pick(t.groups)) }));
  DRILLS.push({ id: 'demo', section: 'Little words', title: 'This & that', make: demoQuestion });
  DRILLS.push({ id: 'poss', section: 'Little words', title: 'My & mine', make: possQuestion });
  DRILLS.push({ id: 'gender', section: 'Little words', title: 'Boy or girl word?', make: genderQuestion });
  DRILLS.push({ id: 'colors', section: 'Everyday words', title: 'Colors', make: colorQuestion });
  DRILLS.push({ id: 'numbers', section: 'Everyday words', title: 'Numbers & prices', make: numberQuestion });
  DRILLS.push({ id: 'time', section: 'Everyday words', title: 'Time', make: timeQuestion });
  DRILLS.push({ id: 'dates', section: 'Everyday words', title: 'Days & dates', make: dateQuestion });

  // ---------- Rules: every rule and memory trick, open from anywhere ----------
  function groupRules(g, withHead) {
    const irregular = !!g.verbs[0][2];
    let body;
    if (irregular) {
      body = g.verbs.map(v => `<p class="verb-head"><b>${v[0]}</b> · ${v[1]}</p>${conjTable(g, v)}<p class="small">${v[3]}</p>`).join('');
    } else {
      const examples = g.endingsBy ? ['ar', 'er'].map(t => g.verbs.find(v => v[0].endsWith(t))) : [g.verbs[0]];
      body = examples.map(v => `<p class="verb-head">Example: <b>${v[0]}</b> · ${v[1]}</p>${conjTable(g, v)}`).join('') +
        `<p class="small">Works the same for: ${g.verbs.filter(v => !examples.includes(v)).map(v => `<b>${v[0]}</b> (${v[1]})`).join(', ')}</p>`;
    }
    return `${withHead ? `<h3 class="group-head">${g.title}</h3>` : ''}<p>${g.rule}</p>
      ${g.trick ? `<div class="trick">💡 ${g.trick}</div>` : ''}${body}`;
  }

  function openRules() {
    closeRules();
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<div class="overlay-in">
      <div class="ov-top"><h2>📖 Rules</h2><button class="quit" aria-label="Close">✕</button></div>
      <p class="kicker">Word types</p>
      ${Object.keys(TERMS).map(id => `<details><summary>${TERMS[id].name}</summary><div class="details-in term-block">${termHTML(id)}</div></details>`).join('')}
      <p class="kicker">Verbs: present</p>
      ${PRESENT.groups.map(g => `<details><summary>${g.title}</summary><div class="details-in">${groupRules(g, false)}</div></details>`).join('')}
      <p class="kicker">Verbs: past & future</p>
      ${CONJ.tenses.slice(1).map(t => `<details><summary>${t.title}</summary><div class="details-in">
        <p>${t.about}</p>${t.trick ? `<div class="trick">💡 ${t.trick}</div>` : ''}
        ${t.groups.map(g => groupRules(g, t.groups.length > 1)).join('')}</div></details>`).join('')}
      <p class="kicker">Little words</p>
      <details><summary>This & that</summary><div class="details-in">
        <p>${WORDS.demoRule}</p><div class="trick">💡 ${WORDS.demoTrick}</div>
        <p class="small">Order: one boy word · one girl word · boy words · girl words</p>
        ${demoTable(null, -1)}<p>${WORDS.neuterRule}</p></div></details>
      <details><summary>My & mine</summary><div class="details-in">
        <p>${WORDS.possRule}</p><p>${WORDS.possLongRule}</p>${possTable(null)}
        <div class="trick">💡 ${WORDS.possTrick}</div></div></details>
      <details><summary>Boy or girl word?</summary><div class="details-in">
        <p>${WORDS.genderRule}</p>
        <p class="small">The tricky ones:</p>
        ${refRows(WORDS.gender.filter(g => g[3] === 'tricky').map(g => [`${g[1] === 'm' ? 'el' : 'la'} ${g[0]}`, g[2]]))}</div></details>
      <p class="kicker">Everyday words</p>
      <details><summary>Colors</summary><div class="details-in">
        <p>${WORDS.colorRule}</p><div class="trick">💡 ${WORDS.colorTrick}</div>
        ${refRows(WORDS.colors.map(c => [c[2] ? `${c[0]} / ${c[0].slice(0, -1)}a` : c[0], c[1]]))}</div></details>
      <details><summary>Numbers</summary><div class="details-in">
        <p>${WORDS.numberRule}</p><div class="trick">💡 ${WORDS.numberTrick}</div>
        ${refRows([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 30, 31, 40, 50, 60, 70, 80, 90, 100, 101, 150, 200, 500, 700, 900, 1000, 2000]
          .map(n => [numberEs(n), String(n)]))}</div></details>
      <details><summary>Time</summary><div class="details-in">
        <p>${WORDS.timeRule}</p><div class="trick">💡 ${WORDS.timeTrick}</div>
        ${refRows([[1, 0], [2, 0], [3, 15], [4, 30], [7, 20], [10, 45]].map(([h, m]) => [timeEs(h, m), clock(h, m)]))}</div></details>
      <details><summary>Days & dates</summary><div class="details-in">
        <p>${WORDS.dateRule}</p><div class="trick">💡 ${WORDS.dateTrick}</div>
        ${refRows(WORDS.days)}${refRows(WORDS.months)}${refRows(WORDS.whenWords)}</div></details>
      <p class="kicker">From your lessons</p>
      ${LESSONS.map(L => {
        const cards = L.steps.filter(s => s.type === 'teach');
        return cards.length ? `<details><summary>${L.title}</summary><div class="details-in">
          ${cards.map(teachHTML).join('<hr>')}
          <p class="kicker">Memory tricks</p><div class="trick">${L.recap}</div></div></details>` : '';
      }).join('')}
    </div>`;
    ov.querySelector('.quit').addEventListener('click', closeRules);
    document.body.appendChild(ov);
    document.body.classList.add('locked');
  }
  function closeRules() {
    const ov = document.querySelector('.overlay');
    if (ov) ov.remove();
    document.body.classList.remove('locked');
  }

  // ---------- Practice gym: endless drills, open any time ----------
  let gym = null;

  function gymTop(title) {
    return `<div class="top"><button class="quit" aria-label="Back">✕</button><span class="top-title">${title}</span>
      <button class="book" aria-label="Rules">📖</button></div>`;
  }
  function wireTop() {
    app.querySelector('.quit').addEventListener('click', showHome);
    app.querySelector('.book').addEventListener('click', openRules);
  }

  function showGymSetup() {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    const on = loadSave().gym || ['ar', 'er', 'ir', 'irr'];
    const sections = [...new Set(DRILLS.map(d => d.section))];
    app.innerHTML = `${gymTop('Practice gym')}
      <div class="stage">
        <div class="big-emoji">🏋️</div>
        <h2 class="center">Practice gym</h2>
        <p class="center">Practice as long as you want. Pick what to train.</p>
        ${sections.map(sec => `<p class="kicker center chip-head">${sec}</p>
          <div class="chips">${DRILLS.filter(d => d.section === sec).map(d =>
            `<button class="chip${on.includes(d.id) ? ' on' : ''}" data-d="${d.id}">${d.title}</button>`).join('')}</div>`).join('')}
        <p class="center small">Stuck? Tap 📖 at the top for the rules.</p>
        <p class="kicker center chip-head">Races</p>
        <div class="race-row">${RACES.map(r => {
          const best = (loadSave().races || {})[r.id];
          return `<button class="tool race-btn" data-r="${r.id}"><span>⏱️</span><b>${r.title}</b><small>${best ? `Your best: ${best}` : r.sub}</small></button>`;
        }).join('')}</div>
      </div>
      <div class="foot"><button class="btn">Start</button></div>`;
    wireTop();
    app.querySelectorAll('.race-btn').forEach(b => b.addEventListener('click', () => startRace(RACES.find(r => r.id === b.dataset.r))));
    const chips = [...app.querySelectorAll('.chip')];
    const start = app.querySelector('.foot .btn');
    const picked = () => chips.filter(c => c.classList.contains('on')).map(c => c.dataset.d);
    start.disabled = !picked().length;
    chips.forEach(c => c.addEventListener('click', () => {
      c.classList.toggle('on');
      start.disabled = !picked().length;
    }));
    start.addEventListener('click', () => {
      const ids = picked();
      const save = loadSave();
      save.gym = ids;
      writeSave(save);
      gym = { drills: DRILLS.filter(d => ids.includes(d.id)), right: 0, asked: 0, streak: 0, counted: false };
      gymQuestion();
    });
  }

  // The lesson races, open any time in the gym, with extra words mixed in.
  const RACES = [
    {
      id: 'el-la', title: 'EL or LA', lesson: 'el-la', sub: '60 seconds, tricky words mixed in',
      extra: () => WORDS.gender.map(g => ({ s: `___ ${g[0]}`, v: g[1] === 'm' ? 'el' : 'la', f: g[1] === 'm' ? 'el' : 'la', why: g[3] === 'tricky' ? 'rebel' : g[3] })),
    },
    { id: 'ser-estar', title: 'SER or ESTAR', lesson: 'ser-estar', sub: '60 seconds, sentences from lesson 1' },
  ];
  function startRace(r) {
    const L = LESSONS.find(x => x.id === r.lesson);
    const game = L.steps.find(s => s.type === 'game');
    const seen = new Set(game.pool.map(c => c.s));
    const pool = game.pool.map(c => Object.assign({ src: L.id }, c)).concat((r.extra ? r.extra() : []).filter(c => !seen.has(c.s)));
    const g = Object.assign({}, game, { pool });
    app.innerHTML = `${gymTop(`${r.title} race`)}<div class="stage">
        <p class="kicker">Race</p><div class="big-emoji">⏱️</div><h2 class="center">${g.title}</h2><p class="center">${g.howto}</p>
      </div><div class="foot"><button class="btn">Start!</button></div>`;
    app.querySelector('.quit').addEventListener('click', () => { stopGame(); showGymSetup(); });
    app.querySelector('.book').addEventListener('click', openRules);
    const stage = app.querySelector('.stage'), foot = app.querySelector('.foot');
    foot.querySelector('.btn').addEventListener('click', () => playSort(g, stage, foot, {
      onEnd(pts, sorted) {
        const save = loadSave();
        save.races = save.races || {};
        save.races[r.id] = Math.max(save.races[r.id] || 0, pts);
        writeSave(save);
        if (sorted >= 10) bumpStreak(); // a race counts like 10 gym reps
      },
      onDone: showGymSetup,
    }));
  }

  function gymQuestion() {
    const q = pick(gym.drills).make();
    app.innerHTML = `${gymTop(`✓ ${gym.right}${gym.streak >= 3 ? ` · 🔥 ${gym.streak}` : ''}`)}
      <div class="stage">
        <p class="kicker">${q.kicker}</p>
        ${q.listen
          ? `<div class="listen"><button class="spk big" data-say="${attr(q.listen)}" aria-label="Play">🔊</button>${spk(q.listen, true)}</div>`
          : `<h2 class="prompt">${blank(q.prompt)}</h2>`}
        <p class="hint">${q.hint}</p>
        <div class="options${q.wide ? '' : ' grid2'}">${q.options.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join('')}</div>
      </div>
      <div class="foot"></div>`;
    wireTop();
    if (q.listen) setTimeout(() => say(q.listen), 250);
    const stage = app.querySelector('.stage'), foot = app.querySelector('.foot');
    const hw = watchHints(stage, [['.prompt', 'es'], ['.hint', 'en']]);
    stage.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
      const chosen = q.options[+b.dataset.k];
      const ok = chosen === q.answer;
      const note = hintDone(ok);
      stage.querySelectorAll('.opt').forEach(x => {
        x.disabled = true;
        if (q.options[+x.dataset.k] === q.answer) x.classList.add('right');
        else if (x !== b) x.classList.add('dim');
      });
      if (!ok) b.classList.add('wrong');
      if (!q.listen) stage.querySelector('.prompt').innerHTML = blank(q.prompt, q.answer);
      gym.asked++;
      if (ok && !hw.used) { gym.right++; gym.streak++; } else gym.streak = 0;
      let bonus = '';
      if (gym.asked >= 10 && !gym.counted) {
        gym.counted = true;
        bumpStreak();
        bonus = '<p class="review-note">🔥 10 reps! Today counts for your streak.</p>';
      }
      ok ? sfx.good() : sfx.bad();
      foot.innerHTML = `<div class="sheet ${ok ? 'good' : 'bad'}">
        <h3>${ok ? pick(PRAISE) : 'Not quite'}</h3><p>${ok ? q.explain : q.why(chosen)}</p>
        ${q.table}${note.replace('comes back for practice', "doesn't count toward your score")}${bonus}
        <div class="sheet-row"><button class="btn">Next</button></div></div>`;
      foot.querySelector('.btn').addEventListener('click', gymQuestion);
      setTimeout(() => say(q.say), ok ? 300 : 500);
    }));
  }

  // ---------- lesson complete ----------
  function streakLine(n) {
    return `<div class="streak-strip lit"><span class="flame">🔥</span><span><b>${n} day streak!</b>
      <small>${n === 1 ? 'Come back tomorrow to make it 2.' : `Come back tomorrow to make it ${n + 1}.`}</small></span></div>`;
  }

  function reviewLine() {
    const n = run.toReview.size;
    return n ? `<p class="center review-note">🔁 ${n} thing${n > 1 ? 's' : ''} you missed will come back for review tomorrow.</p>` : '';
  }

  function showReviewDone() {
    sfx.done();
    const streak = bumpStreak();
    const d = deckStatus(loadSave());
    app.innerHTML = `
      <div class="big-emoji">🧠</div>
      <h2 class="center">Review done!</h2>
      <div class="stats">
        <div class="stat"><b>${run.right}/${run.asked}</b><small>remembered</small></div>
        <div class="stat"><b>${d.total}</b><small>left in your deck</small></div>
      </div>
      ${streakLine(streak)}
      <p class="center">The ones you got right will come back less often. The ones you missed come back tomorrow.</p>
      <button class="btn">Back to lessons</button>`;
    app.querySelector('.btn').addEventListener('click', showHome);
    window.scrollTo(0, 0);
  }

  function showDone() {
    if (run.review) return showReviewDone();
    const L = run.L;
    sfx.done();
    const streak = bumpStreak();
    const save = loadSave();
    const prev = save.lessons[L.id];
    const rec = { right: run.right, asked: run.asked, game: run.game, when: Date.now(), runs: runsOf(save, L) + 1 };
    if (prev) {
      rec.game = Math.max(rec.game, prev.game);
      if (prev.right / prev.asked > rec.right / rec.asked) { rec.right = prev.right; rec.asked = prev.asked; }
    }
    save.lessons[L.id] = rec;
    writeSave(save);

    app.innerHTML = `
      <div class="big-emoji">🎉</div>
      <h2 class="center">¡Bien hecho, ${NAME}!</h2>
      <p class="center">Lesson complete.</p>
      ${versionLabel(L, rec.runs) ? `<p class="center version-tag">Next time: ${versionLabel(L, rec.runs)}</p>` : ''}
      <div class="stats">
        <div class="stat"><b>${run.right}/${run.asked}</b><small>right first try</small></div>
        ${run.bonus ? `<div class="stat"><b>${run.bonus.value}</b><small>${run.bonus.label}</small></div>`
          : hasGame(L) ? `<div class="stat"><b>${run.game}</b><small>game points</small></div>` : ''}
      </div>
      ${streakLine(streak)}
      ${reviewLine()}
      <p class="kicker">Your memory tricks</p>
      <div class="trick">${L.recap}</div>
      <p class="kicker" style="margin-top:20px">Phrases you learned</p>
      <div class="rows">${L.phrases.map(p => `<div class="row"><div class="row-text"><b>${p.es}</b><small>${p.en}</small></div>${spk(p.es)}</div>`).join('')}</div>
      <button class="btn">Back to lessons</button>`;
    app.querySelector('.btn').addEventListener('click', showHome);
    window.scrollTo(0, 0);
  }

  // ---------- phone app: install, and moving progress between copies ----------
  // Where the installable copy lives. Set once it's hosted; the itch copy links to it.
  const APP_URL = 'https://allenjjensen.github.io/vamos-andrew/';
  const inFrame = window.top !== window;
  let installPrompt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; });

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  }

  function openPage(title, html) {
    closeRules();
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<div class="overlay-in"><div class="ov-top"><h2>${title}</h2><button class="quit" aria-label="Close">✕</button></div>${html}</div>`;
    ov.querySelector('.quit').addEventListener('click', closeRules);
    document.body.appendChild(ov);
    document.body.classList.add('locked');
    return ov;
  }

  // Progress as a code: the save, as URL-safe base64 text.
  function progressCode() {
    const json = JSON.stringify(loadSave());
    return btoa(unescape(encodeURIComponent(json))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function readCode(code) {
    try {
      const b64 = code.trim().replace(/-/g, '+').replace(/_/g, '/');
      const data = JSON.parse(decodeURIComponent(escape(atob(b64))));
      return data && typeof data.lessons === 'object' ? data : null;
    } catch (e) { return null; }
  }

  function openGetApp() {
    const iPhone = /iPhone|iPad|iPod/.test(navigator.userAgent);
    let html;
    if (inFrame) {
      html = APP_URL
        ? `<p>The app has its own link. Open it, then add it to your home screen.</p>
           <a class="btn link-as-btn" href="${APP_URL}#progress=${progressCode()}" target="_blank" rel="noopener">Open the app (brings your progress)</a>`
        : '<p>The phone app is almost ready. Your brother will send you the link.</p>';
    } else {
      html = `<p>Put ¡Vamos! on your home screen. It opens full screen like any app, and works without internet.</p>
        ${installPrompt ? '<button class="btn install-now">📲 Install ¡Vamos!</button>' : ''}
        <div class="trick">${iPhone
          ? '<b>iPhone:</b> open this page in <b>Safari</b>, tap the <b>Share</b> button (the square with the arrow ⬆️), then <b>Add to Home Screen</b>.'
          : '<b>Android:</b> in Chrome, tap the <b>⋮</b> menu (top right), then <b>Install app</b> or <b>Add to Home screen</b>.'}</div>
        <p class="small">${iPhone ? 'On Android: Chrome ⋮ menu → Install app.' : 'On iPhone: Safari → Share ⬆️ → Add to Home Screen.'}</p>`;
    }
    const ov = openPage('📲 Get the app', html);
    const btn = ov.querySelector('.install-now');
    if (btn) btn.addEventListener('click', async () => {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      closeRules();
    });
  }

  function openMoveProgress() {
    const code = progressCode();
    const ov = openPage('💾 Move my progress', `
      <p>Moving to a new phone, or from the itch page to the app? Copy your progress code here, then paste it there.</p>
      <button class="btn copy-code">Copy my progress code</button>
      <p class="small copied" hidden>Copied! Now open the other copy and paste it below.</p>
      <p class="kicker" style="margin-top:22px">Paste a code</p>
      <textarea class="code-box" rows="4" placeholder="Paste your progress code here"></textarea>
      <button class="btn load-code">Load this progress</button>
      <p class="small load-msg"></p>`);
    ov.querySelector('.copy-code').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(code); }
      catch (e) {
        const box = ov.querySelector('.code-box');
        box.value = code;
        box.select();
        document.execCommand('copy');
      }
      ov.querySelector('.copied').hidden = false;
    });
    ov.querySelector('.load-code').addEventListener('click', () => {
      const data = readCode(ov.querySelector('.code-box').value);
      if (!data) { ov.querySelector('.load-msg').textContent = "That code didn't work. Copy the whole thing and try again."; return; }
      if (!confirm('Load this progress? It replaces the progress on this phone.')) return;
      writeSave(data);
      closeRules();
      showHome();
    });
  }

  // A link like ...#progress=CODE brings progress along (from the itch page's "Open the app").
  function importFromLink() {
    const m = location.hash.match(/^#progress=(.+)$/);
    if (!m) return;
    history.replaceState(null, '', location.pathname + location.search);
    const data = readCode(m[1]);
    if (!data) return;
    const here = loadSave();
    const hasProgress = Object.keys(here.lessons || {}).length > 0;
    if (!hasProgress || confirm('Bring over your progress from the other copy? It replaces the progress here.')) writeSave(data);
  }

  if ('serviceWorker' in navigator && location.protocol === 'https:' && !inFrame) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* still works online */ });
  }

  importFromLink();
  showHome();
})();
