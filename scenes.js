// Job talk: short spoken scenes with customers. Runs on the phone alone, no server:
// the phone says the customer's line out loud (speechSynthesis), Andrew answers out loud
// (SpeechRecognition, or typing), and the app checks for the key words of a good answer.
window.SCENES = (() => {
  const SAVE_KEY = 'vamos-scenes-v1', PREFS_KEY = 'vamos-scenes-prefs';

  // Each scene: the customer's lines (them + en) and Andrew's turns (say = what to say in English,
  // es = a good answer, keys = word groups he needs, any one word of each group, accents don't matter).
  const LIST = [
    {
      id: 'call', emoji: '📞', title: 'The phone call', sub: 'Book a pickup',
      lines: [
        { them: '¡Hola! ¿Ustedes recogen muebles viejos?', en: 'Hi! Do you pick up old furniture?' },
        { say: 'Yes. What do you want to throw out?', es: 'Sí. ¿Qué quiere tirar?', keys: [['qué'], ['tirar']], tip: 'With customers use <b>quiere</b> (polite), not quieres.' },
        { them: 'Un sofá y un colchón.', en: 'A couch and a mattress.' },
        { say: 'No problem. Where do you live?', es: 'No hay problema. ¿Dónde vive?', keys: [['problema'], ['dónde'], ['vive']] },
        { them: 'En la calle Pine, número doce.', en: 'On Pine Street, number twelve.' },
        { say: 'We can go tomorrow at nine.', es: 'Podemos ir mañana a las nueve.', keys: [['podemos'], ['mañana'], ['nueve', '9']] },
        { them: 'Perfecto. ¡Muchas gracias!', en: 'Perfect. Thanks a lot!' },
        { say: 'Have a good day!', es: '¡Que tenga un buen día!', keys: [['buen día']] },
      ],
    },
    {
      id: 'door', emoji: '🚪', title: 'At the door', sub: 'Meet the customer, see the stuff',
      lines: [
        { them: 'Buenos días. ¿Son de la compañía?', en: 'Good morning. Are you from the company?' },
        { say: 'Yes. Nice to meet you.', es: 'Sí. Mucho gusto.', keys: [['mucho gusto']] },
        { them: 'Igualmente. Las cosas están en el garaje.', en: 'Likewise. The stuff is in the garage.' },
        { say: 'Can we see the garage?', es: '¿Podemos ver el garaje?', keys: [['podemos'], ['ver'], ['garaje']] },
        { them: 'Claro. Son estas cajas y la mesa grande.', en: "Of course. It's these boxes and the big table." },
        { say: 'Is the table heavy?', es: '¿La mesa es pesada?', keys: [['mesa'], ['pesada']], tip: '<b>La mesa</b> is a girl word, so it\'s <b>pesada</b>, with an -a.' },
        { them: 'Sí, es muy pesada.', en: "Yes, it's very heavy." },
        { say: 'No problem. There are two of us.', es: 'No hay problema. Somos dos.', keys: [['problema'], ['somos'], ['dos', '2']] },
      ],
    },
    {
      id: 'price', emoji: '💵', title: 'Price and payment', sub: 'Give a price, take the money',
      lines: [
        { them: '¿Cuánto cuesta llevar todo esto?', en: 'How much does it cost to take all this?' },
        { say: "It's two hundred dollars.", es: 'Son doscientos dólares.', keys: [['doscientos', '200']], tip: 'Prices use <b>son</b>: Son … dólares.' },
        { them: 'Uy, es mucho. ¿Hay descuento?', en: "Ooh, that's a lot. Is there a discount?" },
        { say: 'For you, one hundred eighty.', es: 'Para usted, ciento ochenta.', keys: [['usted'], ['ciento ochenta', '180']] },
        { them: 'Bueno, está bien. ¿Puedo pagar con tarjeta?', en: 'Okay, fine. Can I pay with a card?' },
        { say: 'Yes, with card or cash.', es: 'Sí, con tarjeta o en efectivo.', keys: [['tarjeta'], ['efectivo']] },
        { them: 'Con tarjeta, por favor.', en: 'With a card, please.' },
        { say: 'Perfect. Thank you!', es: 'Perfecto. ¡Gracias!', keys: [['gracias']] },
      ],
    },
    {
      id: 'cant', emoji: '🚫', title: "Things we can't take", sub: 'Say no politely',
      lines: [
        { them: 'También tengo unas latas de pintura.', en: 'I also have some cans of paint.' },
        { say: "Sorry, we can't take paint.", es: 'Lo siento, no podemos llevar pintura.', keys: [['siento', 'perdón', 'disculpe'], ['no podemos'], ['pintura']] },
        { them: '¿Y las llantas viejas?', en: 'And the old tires?' },
        { say: "The tires, yes. It's ten dollars more.", es: 'Las llantas, sí. Son diez dólares más.', keys: [['llantas'], ['diez', '10'], ['más']] },
        { them: 'Está bien. ¿Y qué hago con la pintura?', en: 'Okay. And what do I do with the paint?' },
        { say: 'You can take it to the recycling center.', es: 'Puede llevarla al centro de reciclaje.', keys: [['puede'], ['reciclaje']] },
        { them: 'Ah, buena idea. Gracias.', en: 'Oh, good idea. Thanks.' },
      ],
    },
    {
      id: 'late', emoji: '🚦', title: 'Running late', sub: 'Times and traffic on the phone',
      lines: [
        { them: 'Hola, ¿a qué hora llegan?', en: 'Hi, what time are you getting here?' },
        { say: "We're getting there at two thirty.", es: 'Llegamos a las dos y media.', keys: [['llegamos'], ['dos', '2'], ['media', '30']] },
        { them: 'Ya son las dos y cuarenta. ¿Dónde están?', en: "It's already two forty. Where are you?" },
        { say: "Sorry, there's a lot of traffic.", es: 'Lo siento, hay mucho tráfico.', keys: [['siento', 'perdón', 'disculpe'], ['tráfico']] },
        { them: '¿Cuándo llegan?', en: 'When will you get here?' },
        { say: 'In fifteen minutes.', es: 'En quince minutos.', keys: [['quince', '15'], ['minutos']] },
        { them: 'Bueno. Gracias por avisar.', en: 'Okay. Thanks for letting me know.' },
      ],
    },
    {
      id: 'done', emoji: '✅', title: 'All done', sub: 'Finish the job',
      lines: [
        { them: '¿Ya terminaron?', en: 'Are you done already?' },
        { say: 'Yes, everything is in the truck.', es: 'Sí, todo está en el camión.', keys: [['todo'], ['camión']] },
        { them: '¡Qué rápido! Muchas gracias.', en: 'That was fast! Thanks a lot.' },
        { say: "You're welcome. Do you need anything else?", es: 'De nada. ¿Necesita algo más?', keys: [['de nada'], ['necesita'], ['algo']] },
        { them: 'No, eso es todo.', en: "No, that's all." },
        { say: 'Have a good day!', es: '¡Que tenga un buen día!', keys: [['buen día']] },
      ],
    },
  ];
  const PRAISE = ['¡Muy bien!', '¡Perfecto!', '¡Excelente!', '¡Eso es!', '¡Bien dicho!', '¡Qué bien!'];

  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* not saved */ } },
  };
  const prefs = Object.assign({ handsFree: true, slow: false, hideEn: false }, store.get(PREFS_KEY, {}));
  const savePrefs = () => store.set(PREFS_KEY, prefs);
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  // ---------- speaking ----------
  let esVoice = null;
  function pickVoice() {
    const all = speechSynthesis.getVoices();
    esVoice = all.find(v => /^es[-_](MX|US|419)/i.test(v.lang)) || all.find(v => /^es/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.addEventListener('voiceschanged', pickVoice); }
  function stopTalking() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
  function speak(text, done, slow) {
    stopTalking();
    if (!('speechSynthesis' in window)) { if (done) done(); return; }
    let finished = false;
    const finish = () => { if (!finished) { finished = true; clearTimeout(guard); if (done) done(); } };
    const guard = setTimeout(finish, 2500 + text.length * 130); // some phones never say they're done
    const u = new SpeechSynthesisUtterance(text);
    u.lang = esVoice ? esVoice.lang : 'es-MX';
    if (esVoice) u.voice = esVoice;
    u.rate = slow || prefs.slow ? 0.65 : 0.9;
    u.onend = finish; u.onerror = finish;
    speechSynthesis.speak(u);
  }

  // ---------- checking an answer ----------
  // lower case, no accents, no punctuation: "¡Sí, el camión!" → "si el camion"
  function norm(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }
  function missing(line, text) {
    const h = ` ${norm(text)} `;
    return line.keys.filter(g => !g.some(w => h.includes(` ${norm(w)} `)));
  }

  // ---------- screens ----------
  let ctx = null, scene = null, idx = 0, tries = 0, hinted = false, run = null, rec = null, token = 0;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $ = sel => ctx.app.querySelector(sel);

  function screen(title, body, foot, onQuit) {
    ctx.app.innerHTML = `${ctx.top(title)}<div class="stage tt-stage">${body}</div><div class="foot tt-foot">${foot || ''}</div>`;
    $('.quit').addEventListener('click', () => { stopAll(); onQuit(); });
    $('.book').addEventListener('click', () => { stopAll(); ctx.openRules(); });
  }
  function stopAll() {
    token++;
    stopTalking();
    if (rec) { try { rec.abort(); } catch (e) { /* ignore */ } rec = null; }
  }

  function open(c) { ctx = c; showList(); }

  function showList() {
    stopAll();
    const saved = store.get(SAVE_KEY, {});
    screen('🎭 Job talk', `
      <div class="big-emoji">🎭</div>
      <h2 class="center">Job talk</h2>
      <p class="center">A customer talks to you in Spanish. You answer out loud. Say the main words and you're good: it doesn't have to be perfect.</p>
      ${SR ? '' : '<p class="center small">🎤 This browser can\'t listen, so type your answers. In Chrome on Android you can talk.</p>'}
      <div class="tools sc-list">${LIST.map(s => {
        const r = saved[s.id];
        const done = r ? `<span class="sc-done">✓ Best: ${r.best} of ${r.of} on the first try</span>` : '';
        return `<button class="tool wide sc-pick" data-id="${s.id}"><span>${s.emoji}</span><span class="tool-text"><b>${s.title}</b><small>${s.sub}</small>${done}</span></button>`;
      }).join('')}</div>`, '', ctx.showHome);
    ctx.app.querySelectorAll('.sc-pick').forEach(b => b.addEventListener('click', () => startScene(LIST.find(s => s.id === b.dataset.id))));
  }

  function startScene(s) {
    stopAll();
    scene = s; idx = 0;
    run = { said: 0, first: 0, turns: s.lines.filter(l => l.say).length };
    screen(`${s.emoji} ${s.title}`, '<div class="tt-log sc-log"></div>', `
      <div class="tt-bar">
        <div class="sc-say" hidden>
          <small>Your turn. Say:</small>
          <b class="sc-en-say"></b>
          <p class="sc-tip small" hidden></p>
          <div class="sc-answer" hidden><b class="tt-es"></b><button class="tt-again" aria-label="Hear it">🔊</button></div>
        </div>
        <p class="sc-wait small">🔊 Listen…</p>
        <div class="sc-btns">
          <button class="sc-show">💡 Show me</button>
          ${SR ? '<button class="tt-mic" aria-label="Talk">🎤</button>' : ''}
          <button class="sc-skip">Skip ➜</button>
        </div>
        <p class="tt-status"></p>
        <div class="tt-type"><input type="text" placeholder="${SR ? 'Or type it here' : 'Type it in Spanish'}" enterkeyhint="send" autocomplete="off"><button class="tt-send" aria-label="Send">➤</button></div>
        <div class="tt-opts">
          ${SR ? `<label><input type="checkbox" class="sc-hands"${prefs.handsFree ? ' checked' : ''}> Hands-free</label>` : ''}
          <label><input type="checkbox" class="sc-slow"${prefs.slow ? ' checked' : ''}> 🐢 Slow Spanish</label>
          <label><input type="checkbox" class="sc-hide"${prefs.hideEn ? ' checked' : ''}> Hide English</label>
        </div>
      </div>`, showList);
    const mic = $('.tt-mic');
    if (mic) mic.addEventListener('click', () => (rec ? stopListening() : listen()));
    const input = $('.tt-type input');
    const typed = () => { const v = input.value.trim(); if (v && myTurn()) { input.value = ''; answer(v); } };
    $('.tt-send').addEventListener('click', typed);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') typed(); });
    $('.sc-show').addEventListener('click', showMe);
    $('.sc-skip').addEventListener('click', skip);
    $('.sc-answer .tt-again').addEventListener('click', () => speak(scene.lines[idx].es));
    const hands = $('.sc-hands');
    if (hands) hands.addEventListener('change', () => { prefs.handsFree = hands.checked; savePrefs(); });
    $('.sc-slow').addEventListener('change', e => { prefs.slow = e.target.checked; savePrefs(); });
    $('.sc-hide').addEventListener('change', e => {
      prefs.hideEn = e.target.checked; savePrefs();
      ctx.app.querySelectorAll('.sc-them-en').forEach(x => x.classList.toggle('blur', prefs.hideEn));
    });
    next();
  }
  const myTurn = () => scene && idx < scene.lines.length && !!scene.lines[idx].say;

  // His turn shows what to say and the buttons; the customer's turn shows "Listen…".
  function setBar(line) {
    const turn = !!line;
    $('.sc-say').hidden = !turn;
    $('.sc-wait').hidden = turn;
    $('.sc-btns').classList.toggle('off', !turn);
    ctx.app.querySelectorAll('.sc-btns button, .tt-type input, .tt-send').forEach(b => { b.disabled = !turn; });
    if (!turn) return;
    $('.sc-en-say').textContent = `“${line.say}”`;
    $('.sc-tip').hidden = !line.tip;
    $('.sc-tip').innerHTML = line.tip ? `💡 ${line.tip}` : '';
    $('.sc-answer').hidden = true;
    $('.sc-answer .tt-es').textContent = line.es;
  }

  function next() {
    const my = token;
    if (idx >= scene.lines.length) return finish();
    const line = scene.lines[idx];
    if (line.them) {
      setBar(null);
      status('');
      addThem(line);
      speak(line.them, () => setTimeout(() => { if (my === token) { idx++; next(); } }, 400));
      return;
    }
    tries = 0; hinted = false;
    setBar(line);
    status(SR ? 'Tap 🎤 and say it in Spanish.' : 'Type it in Spanish.');
    if (prefs.handsFree && SR) listen();
  }

  function addThem(line) {
    const div = document.createElement('div');
    div.className = 'tt-msg profe';
    div.innerHTML = `<p><b class="tt-es">${esc(line.them)}</b><small class="sc-them-en${prefs.hideEn ? ' blur' : ''}">${esc(line.en)}</small></p>
      <button class="tt-again" aria-label="Hear it again">🔊</button>`;
    div.querySelector('.tt-again').addEventListener('click', () => speak(line.them, null, true));
    div.querySelector('.sc-them-en').addEventListener('click', e => e.target.classList.remove('blur'));
    $('.sc-log').appendChild(div);
    scrollDown();
  }
  function addMe(text, cls, extra) {
    const div = document.createElement('div');
    div.className = `tt-msg me ${cls || ''}`;
    div.innerHTML = `<p>${esc(text)}${extra ? `<small>${extra}</small>` : ''}</p>`;
    $('.sc-log').appendChild(div);
    scrollDown();
    return div;
  }
  function scrollDown() { const s = $('.tt-stage'); if (s) s.scrollTop = s.scrollHeight; window.scrollTo(0, document.body.scrollHeight); }
  function status(t) { const s = $('.tt-status'); if (s) s.innerHTML = t; }

  function answer(text) {
    const line = scene.lines[idx], miss = missing(line, text);
    if (!miss.length) {
      run.said++;
      if (!tries && !hinted) run.first++;
      const same = norm(text) === norm(line.es);
      addMe(text, 'sc-good', same ? '' : `✓ Also good: ${esc(line.es)}`);
      status(`✅ ${PRAISE[Math.floor(Math.random() * PRAISE.length)]}`);
      setBar(null);
      $('.sc-wait').hidden = true;
      const my = token;
      setTimeout(() => { if (my === token) { idx++; next(); } }, 1300);
      return;
    }
    tries++;
    addMe(text, 'sc-miss');
    status(`Almost! Still need: <b>${miss.map(g => esc(g[0])).join(', ')}</b>.${SR ? ' Tap 🎤 and try again.' : ''}`);
    if (tries >= 2 && !hinted) showMe();
    else if (prefs.handsFree && SR && tries < 3) { const my = token; setTimeout(() => { if (my === token && myTurn()) listen(); }, 900); }
  }

  // Shows and says a good answer, then he says it himself.
  function showMe() {
    if (!myTurn()) return;
    stopListening(true);
    hinted = true;
    const line = scene.lines[idx], my = token;
    $('.sc-answer').hidden = false;
    status('Say it like this:');
    speak(line.es, () => { if (my === token && myTurn() && prefs.handsFree && SR) listen(); }, true);
  }
  function skip() {
    if (!myTurn()) return;
    stopListening(true);
    stopTalking();
    addMe(scene.lines[idx].es, 'sc-skipped', 'Skipped: this is one way to say it.');
    idx++;
    next();
  }

  // ---------- listening ----------
  function listen() {
    if (!SR || rec || !myTurn()) return;
    stopTalking();
    const r = new SR(), my = token;
    rec = r;
    r.lang = 'es-MX';
    r.interimResults = true;
    r.maxAlternatives = 1;
    let heard = '', draft = null, failed = false;
    r.onresult = e => {
      if (my !== token) return;
      heard = [...e.results].map(x => x[0].transcript).join('');
      if (!draft) draft = addMe('', 'sc-draft');
      draft.querySelector('p').textContent = heard;
      scrollDown();
    };
    r.onerror = e => {
      failed = true;
      if (my !== token) return;
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') status('🎤 The microphone is blocked. Allow it for this app in your phone settings, or type below.');
      else if (e.error === 'no-speech') status("I didn't hear anything. Tap 🎤 and try again.");
      else if (e.error !== 'aborted') status('🎤 Listening stopped. Tap 🎤 to try again, or type below.');
    };
    r.onend = () => {
      if (rec === r) rec = null;
      setMic(false);
      if (draft) draft.remove();
      if (my !== token || r.dropped) return;
      if (heard.trim() && myTurn()) answer(heard.trim());
      else if (!failed) status('Tap 🎤 and say it in Spanish.');
    };
    try { r.start(); } catch (e) { rec = null; return; }
    setMic(true);
    status('Listening… say it in Spanish. Tap 🎤 when you\'re done.');
  }
  // drop = throw away what it heard (he tapped Show me or Skip)
  function stopListening(drop) {
    if (!rec) return;
    const r = rec;
    if (drop) { r.dropped = true; rec = null; try { r.abort(); } catch (e) { /* ignore */ } setMic(false); } else { try { r.stop(); } catch (e) { /* ignore */ } }
  }
  function setMic(on) { const m = $('.tt-mic'); if (m) m.classList.toggle('on', on); }

  function finish() {
    stopAll();
    const saved = store.get(SAVE_KEY, {}), old = saved[scene.id];
    if (!old || run.first > old.best) saved[scene.id] = { best: run.first, of: run.turns };
    store.set(SAVE_KEY, saved);
    const k = LIST.indexOf(scene), nxt = LIST[k + 1];
    const all = run.first === run.turns;
    screen(`${scene.emoji} ${scene.title}`, `
      <div class="big-emoji">${all ? '🏆' : '🎉'}</div>
      <h2 class="center">${all ? '¡Perfecto!' : '¡Terminaste!'}</h2>
      <p class="center">You said <b>${run.said} of ${run.turns}</b> lines in Spanish${run.first ? `, <b>${run.first}</b> on the first try with no help` : ''}.</p>
      <p class="center small">${all ? 'Every line on the first try. You\'re ready for this one on the job.' : 'Do it again and see if you can get every line on the first try.'}</p>`,
      `${nxt ? `<button class="btn sc-next">Next: ${nxt.emoji} ${nxt.title}</button>` : ''}
       <button class="btn${nxt ? ' ghost' : ''} sc-again">Do it again</button>
       <button class="btn ghost sc-all">All scenes</button>`, showList);
    if (nxt) $('.sc-next').addEventListener('click', () => startScene(nxt));
    $('.sc-again').addEventListener('click', () => startScene(scene));
    $('.sc-all').addEventListener('click', showList);
  }

  return { open, stop: stopAll, list: LIST, norm, missing };
})();
