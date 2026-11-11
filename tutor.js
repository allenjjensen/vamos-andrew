// Talk with Profe: Andrew talks out loud, an AI tutor answers out loud.
// The phone does the listening (SpeechRecognition) and the talking (speechSynthesis).
// The conversation goes to the tutor server in tutor-worker/worker.js, which holds the API key.
window.TUTOR = (() => {
  const SERVER = ''; // the Cloudflare Worker's address, once it's set up (or open the app once with ?tutor=<address>)
  const URL_KEY = 'vamos-tutor-url', CODE_KEY = 'vamos-tutor-code', PREFS_KEY = 'vamos-tutor-prefs';
  const LONG_TALK = 60; // messages; past this a new talk keeps replies quick and cheap

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { /* not saved */ } },
  };
  (() => { // ?tutor=<address> saves the server address on this device; ?tutor=off forgets it
    try {
      const q = new URLSearchParams(location.search).get('tutor');
      if (q === 'off') store.set(URL_KEY, null);
      else if (q && /^https:\/\/|^http:\/\/localhost/.test(q)) store.set(URL_KEY, q.replace(/\/+$/, ''));
    } catch (e) { /* ignore */ }
  })();
  function server() { return store.get(URL_KEY) || SERVER; }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const prefs = Object.assign({ lang: 'es', handsFree: true, slow: false }, (() => {
    try { return JSON.parse(store.get(PREFS_KEY)) || {}; } catch (e) { return {}; }
  })());
  function savePrefs() { store.set(PREFS_KEY, JSON.stringify(prefs)); }

  let ctx = null;
  let talk = null; // { messages, topics, kickoff } lives until the app is closed
  let rec = null, busy = false, stopped = false;

  // ---------- speaking: Spanish parts in a Spanish voice, English in an English one ----------
  let esVoice = null, enVoice = null;
  function pickVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = speechSynthesis.getVoices();
    esVoice = all.find(v => /^es[-_](MX|US|419)/i.test(v.lang)) || all.find(v => /^es/i.test(v.lang)) || null;
    enVoice = all.find(v => /^en[-_]US/i.test(v.lang)) || all.find(v => /^en/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { pickVoices(); speechSynthesis.addEventListener('voiceschanged', pickVoices); }

  // "Nice! Say <es>hola</es>." -> [{ es: false, text: 'Nice! Say' }, { es: true, text: 'hola' }, ...]
  function parts(text) {
    const out = [];
    String(text).split(/(<es>[\s\S]*?<\/es>)/).forEach(p => {
      const es = /^<es>/.test(p);
      const t = p.replace(/<\/?es>/g, '').replace(/<[^>]+>/g, '').trim();
      if (t) out.push({ es, text: t });
    });
    return out;
  }
  function stopTalking() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
  function speak(text, done) {
    stopTalking();
    const list = parts(text).map(p => Object.assign(p, { text: p.text.replace(/\p{Extended_Pictographic}|️/gu, '') })).filter(p => p.text.trim());
    if (!('speechSynthesis' in window) || !list.length) { if (done) done(); return; }
    let finished = false;
    const finish = () => { if (!finished) { finished = true; clearTimeout(guard); if (done) done(); } };
    // some phones never fire onend: give up waiting after about as long as the words take
    const guard = setTimeout(finish, 2500 + list.reduce((n, p) => n + p.text.length, 0) * 110);
    list.forEach((p, i) => {
      const u = new SpeechSynthesisUtterance(p.text);
      const v = p.es ? esVoice : enVoice;
      u.lang = v ? v.lang : (p.es ? 'es-MX' : 'en-US');
      if (v) u.voice = v;
      u.rate = p.es ? (prefs.slow ? 0.65 : 0.9) : 1;
      if (i === list.length - 1) { u.onend = finish; u.onerror = finish; }
      speechSynthesis.speak(u);
    });
  }

  // ---------- screens ----------
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function profeHTML(text) {
    return parts(text).map(p => p.es ? `<b class="tt-es">${esc(p.text)}</b>` : esc(p.text)).join(' ');
  }
  function screen(body, foot) {
    ctx.app.innerHTML = `${ctx.top('🗣️ Talk with Profe')}<div class="stage tt-stage">${body}</div><div class="foot tt-foot">${foot || ''}</div>`;
    ctx.app.querySelector('.quit').addEventListener('click', leave);
    ctx.app.querySelector('.book').addEventListener('click', ctx.openRules);
  }
  function leave() { stopAll(); ctx.showHome(); }
  function stopAll() { stopped = true; stopTalking(); if (rec) { try { rec.abort(); } catch (e) { /* ignore */ } rec = null; } }

  function open(c) {
    ctx = c;
    stopped = false;
    if (!store.get(CODE_KEY)) return showCode();
    if (talk) return showTalk();
    showStart();
  }

  function showCode(wrong) {
    screen(`<div class="big-emoji">🔑</div>
      <h2 class="center">Your Profe code</h2>
      <p class="center">${wrong ? "That code didn't work. Check it with your brother and try again." : 'Type the code your brother gave you. You only do this once on this phone.'}</p>
      <input class="tt-code" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Code">`,
      '<button class="btn">Save</button>');
    const input = ctx.app.querySelector('.tt-code'), btn = ctx.app.querySelector('.foot .btn');
    const go = () => {
      const v = input.value.trim();
      if (!v) return;
      store.set(CODE_KEY, v);
      if (!talk) return showStart();
      showTalk();
      if (!talk.messages.length) send(talk.kickText, true); // the first try failed on the code
    };
    btn.addEventListener('click', go);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  }

  function showStart() {
    const topics = ctx.topics();
    screen(`<div class="big-emoji">🧑‍🏫</div>
      <h2 class="center">Talk with Profe</h2>
      <p class="center">Talk out loud in Spanish. Profe talks back, fixes your mistakes and goes over what you've learned.</p>
      <p class="kicker center chip-head">What do you want to do?</p>
      <div class="chips tt-modes">
        <button class="chip on" data-m="topic">📚 Practice a topic</button>
        <button class="chip" data-m="chat">💬 Just talk</button>
        <button class="chip" data-m="customer">🚚 Customer role-play</button>
      </div>
      <div class="tt-topics"><p class="kicker center chip-head">Pick a topic</p>
        <div class="chips">${topics.map((t, i) => `<button class="chip${i ? '' : ' on'}" data-t="${esc(t)}">${esc(t)}</button>`).join('')}</div></div>
      ${SR ? '' : '<p class="center small">🎤 This browser can\'t listen, so type your answers. In Chrome on Android you can talk.</p>'}
      <p class="center small">Profe is an AI. It's usually right, but if something sounds off, check the 📖 rules.</p>`,
      '<button class="btn">Start talking</button>');
    let mode = 'topic', topic = topics[0];
    ctx.app.querySelectorAll('.tt-modes .chip').forEach(b => b.addEventListener('click', () => {
      ctx.app.querySelectorAll('.tt-modes .chip').forEach(x => x.classList.toggle('on', x === b));
      mode = b.dataset.m;
      ctx.app.querySelector('.tt-topics').hidden = mode !== 'topic';
    }));
    ctx.app.querySelectorAll('.tt-topics .chip').forEach(b => b.addEventListener('click', () => {
      ctx.app.querySelectorAll('.tt-topics .chip').forEach(x => x.classList.toggle('on', x === b));
      topic = b.dataset.t;
    }));
    ctx.app.querySelector('.foot .btn').addEventListener('click', () => {
      const kick = {
        topic: [`Hi Profe! Let's practice ${topic}. Start easy.`, `📚 Practice: ${topic}`],
        chat: ["Hi Profe! Let's just talk in simple Spanish.", '💬 Just talk'],
        customer: ["Hi Profe! Let's do a customer role-play. You're a customer on a junk removal job.", '🚚 Customer role-play'],
      }[mode];
      talk = { messages: [], topics, kickoff: kick[1], kickText: kick[0] };
      showTalk();
      send(kick[0], true);
    });
  }

  function showTalk() {
    screen(`<div class="tt-log"></div>`,
      `<div class="tt-bar">
        <div class="tt-langs" role="group" aria-label="I'm speaking">
          <button class="tt-lang${prefs.lang === 'es' ? ' on' : ''}" data-l="es">🇲🇽 Español</button>
          <button class="tt-lang${prefs.lang === 'en' ? ' on' : ''}" data-l="en">🇺🇸 English</button>
        </div>
        ${SR ? '<button class="tt-mic" aria-label="Talk">🎤</button>' : ''}
        <p class="tt-status"></p>
        <div class="tt-type"><input type="text" placeholder="Or type here" enterkeyhint="send"><button class="tt-send" aria-label="Send">➤</button></div>
        <div class="tt-opts">
          ${SR ? `<label><input type="checkbox" class="tt-hands"${prefs.handsFree ? ' checked' : ''}> Hands-free</label>` : ''}
          <label><input type="checkbox" class="tt-slow"${prefs.slow ? ' checked' : ''}> 🐢 Slow Spanish</label>
          <button class="tt-new">New talk</button>
        </div></div>`);
    const log = ctx.app.querySelector('.tt-log');
    log.insertAdjacentHTML('beforeend', `<p class="tt-kick">${esc(talk.kickoff)}</p>`);
    talk.messages.forEach((m, i) => {
      if (i === 0) return; // the kickoff
      if (m.role === 'user') addBubble('me', m.content);
      else addBubble('profe', m.text);
    });
    ctx.app.querySelectorAll('.tt-lang').forEach(b => b.addEventListener('click', () => {
      prefs.lang = b.dataset.l; savePrefs();
      ctx.app.querySelectorAll('.tt-lang').forEach(x => x.classList.toggle('on', x === b));
    }));
    const mic = ctx.app.querySelector('.tt-mic');
    if (mic) mic.addEventListener('click', () => (rec ? stopListening() : listen()));
    const input = ctx.app.querySelector('.tt-type input');
    const typed = () => { const v = input.value.trim(); if (v && !busy) { input.value = ''; send(v); } };
    ctx.app.querySelector('.tt-send').addEventListener('click', typed);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') typed(); });
    const hands = ctx.app.querySelector('.tt-hands');
    if (hands) hands.addEventListener('change', () => { prefs.handsFree = hands.checked; savePrefs(); });
    const slow = ctx.app.querySelector('.tt-slow');
    slow.addEventListener('change', () => { prefs.slow = slow.checked; savePrefs(); });
    ctx.app.querySelector('.tt-new').addEventListener('click', () => { stopAll(); stopped = false; talk = null; showStart(); });
    status(SR ? 'Tap 🎤 and talk.' : 'Type your answer.');
    scrollDown();
  }

  function addBubble(who, text) {
    const log = ctx.app.querySelector('.tt-log');
    if (!log) return null;
    const div = document.createElement('div');
    div.className = `tt-msg ${who}`;
    if (who === 'profe') {
      div.innerHTML = `<p>${profeHTML(text)}</p><button class="tt-again" aria-label="Hear it again">🔊</button>`;
      div.querySelector('.tt-again').addEventListener('click', () => speak(text));
    } else div.innerHTML = `<p>${esc(text)}</p>`;
    log.appendChild(div);
    scrollDown();
    return div;
  }
  function scrollDown() { const s = ctx.app.querySelector('.tt-stage'); if (s) s.scrollTop = s.scrollHeight; window.scrollTo(0, document.body.scrollHeight); }
  function status(t) { const s = ctx.app.querySelector('.tt-status'); if (s) s.innerHTML = t; }
  function setMic(on) { const m = ctx.app.querySelector('.tt-mic'); if (m) m.classList.toggle('on', on); }

  // ---------- listening ----------
  function listen() {
    if (!SR || busy || stopped || rec) return;
    stopTalking();
    const r = new SR();
    rec = r;
    r.lang = prefs.lang === 'es' ? 'es-MX' : 'en-US';
    r.interimResults = true;
    r.maxAlternatives = 1;
    let heard = '', draft = null, failed = false;
    r.onresult = e => {
      heard = [...e.results].map(x => x[0].transcript).join('');
      if (!draft) draft = addBubble('me', '');
      if (draft) draft.querySelector('p').textContent = heard;
      scrollDown();
    };
    r.onerror = e => {
      failed = true;
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') status('🎤 The microphone is blocked. Allow it for this app in your phone settings, or type below.');
      else if (e.error === 'no-speech') status("I didn't hear anything. Tap 🎤 and try again.");
      else if (e.error !== 'aborted') status('🎤 Listening stopped. Tap 🎤 to try again, or type below.');
    };
    r.onend = () => {
      rec = null;
      setMic(false);
      if (draft) draft.remove();
      if (heard.trim() && !stopped) send(heard.trim());
      else if (!failed && !stopped) status('Tap 🎤 and talk.');
    };
    try { r.start(); } catch (e) { rec = null; status('Tap 🎤 and talk.'); return; }
    setMic(true);
    status(`Listening… (${prefs.lang === 'es' ? 'Español' : 'English'}) Tap 🎤 when you're done.`);
  }
  function stopListening() { if (rec) { try { rec.stop(); } catch (e) { /* ignore */ } } }

  // ---------- asking Profe ----------
  async function send(text, isKick) {
    if (busy || !talk) return;
    if (talk.messages.length >= LONG_TALK) {
      status('This talk is getting long. Tap <b>New talk</b> to start fresh.');
      return;
    }
    busy = true;
    talk.messages.push({ role: 'user', content: text.slice(0, 800) });
    if (!isKick) addBubble('me', text);
    const wait = addBubble('wait', '');
    if (wait) wait.innerHTML = '<p class="tt-dots"><span>●</span><span>●</span><span>●</span></p>';
    status('Profe is thinking…');
    let out = null, err = null;
    try {
      const res = await fetch(server(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: store.get(CODE_KEY), topics: talk.topics, messages: wire() }),
      });
      out = await res.json().catch(() => null);
      if (!res.ok || !out || out.error) err = (out && out.error) || 'api_error';
    } catch (e) { err = 'offline'; }
    if (wait) wait.remove();
    busy = false;
    if (stopped) return;
    if (err) {
      talk.messages.pop(); // keep the talk exactly as it was, so the retry fits
      const me = ctx.app.querySelectorAll('.tt-msg.me');
      if (!isKick && me.length) me[me.length - 1].remove();
      if (err === 'bad_code') { store.set(CODE_KEY, null); return showCode(true); }
      status(`${err === 'offline' ? "Can't reach Profe. Check your internet." : err === 'busy' ? 'Profe is busy for a second.' : 'Something went wrong.'} <button class="tt-retry">Try again</button>`);
      const again = ctx.app.querySelector('.tt-retry');
      if (again) again.addEventListener('click', () => send(text, isKick));
      return;
    }
    const reply = out.text || '…';
    // Claude's turn goes back exactly as it came (thinking blocks included), and only at the end.
    talk.messages.push({ role: 'assistant', content: out.content || [{ type: 'text', text: reply }], text: reply });
    addBubble('profe', reply);
    status(SR ? 'Tap 🎤 and talk.' : 'Type your answer.');
    speak(reply, () => { if (!stopped && prefs.handsFree && SR && ctx.app.querySelector('.tt-log')) listen(); });
  }
  // What goes to the server: user turns as text, Profe's turns as the exact content blocks.
  function wire() { return talk.messages.map(m => ({ role: m.role, content: m.content })); }

  return { open, available: () => !!server() };
})();
