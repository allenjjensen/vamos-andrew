// ¡Vamos, Andrew! — the lesson engine.
// Lessons live in lessons/*.js as plain data; this file knows how to show each step type.
(function () {
  'use strict';

  const NAME = 'Andrew';
  const app = document.getElementById('app');
  const LESSONS = window.LESSONS || [];
  const COMING_SOON = [
    { title: 'El or La?', subtitle: 'Boy words and girl words' },
    { title: '-AR verbs', subtitle: 'trabajar, cargar, necesitar' },
    { title: 'On the job: the phone call', subtitle: 'Book a pickup over the phone' },
  ];
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

  // ---------- home ----------
  function showHome() {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
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
        <button class="tool gym-btn"><span>🏋️</span><b>Verb gym</b><small>Practice conjugating</small></button>
      </div>
      <section class="lessons"></section>
      <p class="foot-note">Turn your sound on. Tap 🔊 anywhere to hear the Spanish.</p>`;
    const reviewBtn = app.querySelector('.review-card:not([disabled])');
    if (reviewBtn) reviewBtn.addEventListener('click', startReview);
    app.querySelector('.rules-btn').addEventListener('click', openRules);
    app.querySelector('.gym-btn').addEventListener('click', showGymSetup);
    const list = app.querySelector('.lessons');
    LESSONS.forEach((L, i) => {
      const rec = save.lessons[L.id];
      const card = document.createElement('button');
      card.className = 'lesson' + (rec ? ' done' : '');
      card.innerHTML = `<span class="num">${rec ? '✓' : i + 1}</span>
        <span class="info"><b>${L.title}</b><small>${L.subtitle} · ${L.minutes} min</small>
        ${rec ? `<small class="best">Best: ${rec.right}/${rec.asked} first try${hasGame(L) ? ` · game ${rec.game} pts` : ''}</small>` : ''}</span>`;
      card.addEventListener('click', () => startLesson(L));
      list.appendChild(card);
    });
    COMING_SOON.forEach((L, i) => {
      list.insertAdjacentHTML('beforeend', `<button class="lesson locked" disabled>
        <span class="num">${LESSONS.length + i + 1}</span>
        <span class="info"><b>${L.title}</b><small>${L.subtitle} · coming soon</small></span></button>`);
    });
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

  function startLesson(L) {
    run = { L, steps: L.steps.slice(), i: 0, retry: [], right: 0, asked: 0, warmRight: 0, warmAsked: 0, game: 0, toReview: new Set() };
    showStep();
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
    if (s.reviewId) ok ? deckHit(s.reviewId) : deckMiss(s.reviewId);
    else if (!ok) { const id = questionId(run.L.id, s); deckMiss(id); run.toReview.add(id); }
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
      const s = L.steps.find(x => (x.prompt || x.en || x.say) === key);
      return s ? Object.assign({}, s, { reviewId: id, isReview: true, warmup: false }) : null;
    }
    if (kind === 't') {
      // A conversation reply he got wrong comes back as "what do you say back?"
      for (const talk of L.steps.filter(x => x.type === 'talk')) {
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
    let other = OTHER_FORM[lower] || (c.v === 'ser' ? 'está' : 'es');
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
        <p>In this lesson you'll learn:</p>
        <ul class="learn-list">${s.learn.map(x => `<li>${x}</li>`).join('')}</ul>`;
      continueButton(foot, "Let's go");
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

      stage.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
        const chosen = opts[+b.dataset.k];
        const right = opts.find(o => o.correct);
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
        score(s, chosen.correct);
        feedback(foot, chosen.correct, chosen.correct ? s.explain : chosen.why, chosen.correct ? null : right.text, s.rule, full);
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
        const sentence = s.answer.join(' ') + (s.end || '.');
        let why = s.explain;
        if (!ok) {
          const trap = got.find(w => s.wrongWhy && s.wrongWhy[w]);
          why = trap ? s.wrongWhy[trap] : 'Close! Check the word order in the answer.';
        }
        row.classList.add(ok ? 'ok' : 'fix');
        score(s, ok);
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

  // ---------- mini game: Ser or Estar? race ----------
  let stopGame = () => {};

  function playSort(s, stage, foot) {
    const deck = shuffle(s.pool);
    let idx = 0, pts = 0, streak = 0, waiting = false, over = false;
    const missed = [];
    const start = performance.now();
    stage.innerHTML = `
      <div class="game-top"><span class="pts">0</span><span class="streak"></span><div class="timer"><i></i></div></div>
      <div class="g-sentence"></div>
      <div class="g-tag"></div>`;
    foot.innerHTML = `<div class="g-buttons"><button class="g-btn ser">SER</button><button class="g-btn estar">ESTAR</button></div>
      <p class="g-keys">On a keyboard: ← for ser, → for estar</p>`;
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
        if (!missed.includes(c)) { missed.push(c); const id = gameCardId(run.L.id, c); deckMiss(id); run.toReview.add(id); }
      }
      ptsEl.textContent = pts;
      streakEl.textContent = streak >= 3 ? `🔥 x2` : '';
      idx++;
      setTimeout(() => { if (!over) show(); }, ok ? 650 : 1700);
    }
    function onKey(e) {
      if (e.key === 'ArrowLeft' || e.key === 's') answer('ser');
      if (e.key === 'ArrowRight' || e.key === 'e') answer('estar');
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
      run.game = Math.max(run.game, pts);
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
      foot.querySelector('.ghost').addEventListener('click', () => playSort(s, stage, foot));
      foot.querySelector('.btn:not(.ghost)').addEventListener('click', next);
    }
    stopGame = () => { over = true; clearInterval(timer); document.removeEventListener('keydown', onKey); };

    foot.querySelector('.ser').addEventListener('click', () => answer('ser'));
    foot.querySelector('.estar').addEventListener('click', () => answer('estar'));
    document.addEventListener('keydown', onKey);
    show();
  }

  // ---------- verbs (data in conjugation.js) ----------
  const CONJ = window.CONJ;
  function formsOf(g, v) { return v[2] || g.endings.map(e => v[0].slice(0, -2) + e); }

  // The five forms of a verb. Regular endings are colored; one row can be highlighted.
  function conjTable(g, v, highlight) {
    const forms = formsOf(g, v);
    return `<div class="conj">${CONJ.persons.map((p, i) => {
      const html = g.endings ? `${v[0].slice(0, -2)}<em>${g.endings[i]}</em>` : forms[i];
      return `<div class="conj-row${i === highlight ? ' hl' : ''}"><span class="p">${p.key}</span><b>${html}</b>${spk(`${p.show[0]} ${forms[i]}`)}</div>`;
    }).join('')}</div>`;
  }

  // ---------- Rules: every rule and memory trick, open from anywhere ----------
  function openRules() {
    closeRules();
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<div class="overlay-in">
      <div class="ov-top"><h2>📖 Rules</h2><button class="quit" aria-label="Close">✕</button></div>
      <p class="kicker">Verbs: present tense</p>
      ${CONJ.groups.map(g => `<details><summary>${g.title}</summary><div class="details-in">
        <p>${g.rule}</p>
        ${g.trick ? `<div class="trick">💡 ${g.trick}</div>` : ''}
        ${g.endings
          ? `<p class="verb-head">Example: <b>${g.verbs[0][0]}</b> · ${g.verbs[0][1]}</p>${conjTable(g, g.verbs[0])}
             <p class="small">Works the same for: ${g.verbs.slice(1).map(v => `<b>${v[0]}</b> (${v[1]})`).join(', ')}</p>`
          : g.verbs.map(v => `<p class="verb-head"><b>${v[0]}</b> · ${v[1]}</p>${conjTable(g, v)}<p class="small">${v[3]}</p>`).join('')}
      </div></details>`).join('')}
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

  // ---------- Verb gym: endless conjugation practice ----------
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
    app.innerHTML = `${gymTop('Verb gym')}
      <div class="stage">
        <div class="big-emoji">🏋️</div>
        <h2 class="center">Verb gym</h2>
        <p class="center">Practice as long as you want. Pick which verbs to train.</p>
        <div class="chips">${CONJ.groups.map(g => `<button class="chip on" data-g="${g.id}">${g.title}</button>`).join('')}</div>
        <p class="center small">Stuck? Tap 📖 at the top for the rules.</p>
      </div>
      <div class="foot"><button class="btn">Start</button></div>`;
    wireTop();
    const chips = [...app.querySelectorAll('.chip')];
    const start = app.querySelector('.foot .btn');
    chips.forEach(c => c.addEventListener('click', () => {
      c.classList.toggle('on');
      start.disabled = !chips.some(x => x.classList.contains('on'));
    }));
    start.addEventListener('click', () => {
      const on = chips.filter(c => c.classList.contains('on')).map(c => c.dataset.g);
      gym = { groups: CONJ.groups.filter(g => on.includes(g.id)), right: 0, asked: 0, streak: 0, counted: false };
      gymQuestion();
    });
  }

  function gymQuestion() {
    const g = pick(gym.groups), v = pick(g.verbs), p = Math.floor(Math.random() * 5);
    const forms = formsOf(g, v), answer = forms[p];
    const who = pick(CONJ.persons[p].show);
    const opts = shuffle([answer].concat(shuffle([...new Set(forms)].filter(f => f !== answer)).slice(0, 3)));
    app.innerHTML = `${gymTop(`✓ ${gym.right}${gym.streak >= 3 ? ` · 🔥 ${gym.streak}` : ''}`)}
      <div class="stage">
        <p class="kicker">${g.title}</p>
        <h2 class="prompt">${who[0].toUpperCase() + who.slice(1)} ${blank('___')}</h2>
        <p class="hint"><b>${v[0]}</b> · ${v[1]}</p>
        <div class="options grid2">${opts.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join('')}</div>
      </div>
      <div class="foot"></div>`;
    wireTop();
    const stage = app.querySelector('.stage'), foot = app.querySelector('.foot');
    stage.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
      const chosen = opts[+b.dataset.k];
      const ok = chosen === answer;
      stage.querySelectorAll('.opt').forEach(x => {
        x.disabled = true;
        if (opts[+x.dataset.k] === answer) x.classList.add('right');
        else if (x !== b) x.classList.add('dim');
      });
      if (!ok) b.classList.add('wrong');
      stage.querySelector('.prompt').innerHTML = `${who[0].toUpperCase() + who.slice(1)} ${blank('___', answer)}`;
      gym.asked++;
      if (ok) { gym.right++; gym.streak++; } else gym.streak = 0;

      // Why: name whose form he picked, then the ending or tip that gives the right one.
      const how = g.endings ? `${g.title}: for ${who}, drop -${g.ending} and add <b>-${g.endings[p]}</b>.` : v[3];
      let why = how;
      if (!ok) {
        const owner = CONJ.persons[forms.indexOf(chosen)].key;
        why = `<b>${chosen}</b> is the <b>${owner}</b> form. For <b>${who}</b> it's <b>${answer}</b>. ${how}`;
      }
      let bonus = '';
      if (gym.asked >= 10 && !gym.counted) {
        gym.counted = true;
        bumpStreak();
        bonus = '<p class="review-note">🔥 10 reps! Today counts for your streak.</p>';
      }
      ok ? sfx.good() : sfx.bad();
      foot.innerHTML = `<div class="sheet ${ok ? 'good' : 'bad'}">
        <h3>${ok ? pick(PRAISE) : 'Not quite'}</h3><p>${why}</p>
        ${conjTable(g, v, p)}${bonus}
        <div class="sheet-row"><button class="btn">Next</button></div></div>`;
      foot.querySelector('.btn').addEventListener('click', gymQuestion);
      setTimeout(() => say(`${who} ${answer}`), ok ? 300 : 500);
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
    const rec = { right: run.right, asked: run.asked, game: run.game, when: Date.now() };
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

  showHome();
})();
