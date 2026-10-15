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
    { title: 'On the job', subtitle: 'Talk to customers about their junk' },
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
  function say(text, slow) {
    if (!('speechSynthesis' in window) || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, '').replace(/_+/g, ' '));
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

  // ---------- home ----------
  function showHome() {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    const save = loadSave();
    app.innerHTML = `
      <header class="home-head">
        <div class="logo">¡Hola, ${NAME}!</div>
        <p class="tagline">Spanish in 10 minutes a day</p>
      </header>
      <section class="lessons"></section>
      <p class="foot-note">Turn your sound on. Tap 🔊 anywhere to hear the Spanish.</p>`;
    const list = app.querySelector('.lessons');
    LESSONS.forEach((L, i) => {
      const rec = save.lessons[L.id];
      const card = document.createElement('button');
      card.className = 'lesson' + (rec ? ' done' : '');
      card.innerHTML = `<span class="num">${rec ? '✓' : i + 1}</span>
        <span class="info"><b>${L.title}</b><small>${L.subtitle} · ${L.minutes} min</small>
        ${rec ? `<small class="best">Best: ${rec.right}/${rec.asked} first try · game ${rec.game} pts</small>` : ''}</span>`;
      card.addEventListener('click', () => startLesson(L));
      list.appendChild(card);
    });
    COMING_SOON.forEach((L, i) => {
      list.insertAdjacentHTML('beforeend', `<button class="lesson locked" disabled>
        <span class="num">${LESSONS.length + i + 1}</span>
        <span class="info"><b>${L.title}</b><small>${L.subtitle} · coming soon</small></span></button>`);
    });
  }

  // ---------- running a lesson ----------
  let run = null;

  function startLesson(L) {
    run = { L, steps: L.steps.slice(), i: 0, retry: [], right: 0, asked: 0, warmRight: 0, warmAsked: 0, game: 0 };
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
      <div class="top"><button class="quit" aria-label="Leave lesson">✕</button><div class="bar"><i style="width:${pct}%"></i></div></div>
      <div class="stage"></div>
      <div class="foot"></div>`;
    app.querySelector('.quit').addEventListener('click', () => {
      if (confirm('Leave this lesson? You will start it over next time.')) { stopGame(); showHome(); }
    });
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
      stage.innerHTML = `
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
      continueButton(foot, s.button || 'Got it');
    },

    choice(s, stage, foot) {
      const opts = shuffle(s.options);
      const kicker = s.isRetry ? 'Second chance' : s.kicker || (s.listen ? 'Listen. What does it mean?' : 'Pick the right word');
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
          full = s.prompt.replace('___', right.text);
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
        <p class="kicker">${s.isRetry ? 'Second chance' : 'Build it in Spanish'}</p>
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
      else { streak = 0; sfx.bad(); if (!missed.includes(c)) missed.push(c); }
      ptsEl.textContent = pts;
      streakEl.textContent = streak >= 3 ? `🔥 x2` : '';
      idx++;
      setTimeout(() => { if (!over) show(); }, ok ? 650 : 1700);
    }
    function onKey(e) {
      if (e.key === 'ArrowLeft' || e.key === 's') answer('ser');
      if (e.key === 'ArrowRight' || e.key === 'e') answer('estar');
    }
    function tick(now) {
      if (over) return;
      const left = Math.max(0, 1 - (now - start) / (s.seconds * 1000));
      timerEl.style.width = (left * 100) + '%';
      if (left <= 0) return end();
      requestAnimationFrame(tick);
    }
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
    stopGame = () => { over = true; document.removeEventListener('keydown', onKey); };

    foot.querySelector('.ser').addEventListener('click', () => answer('ser'));
    foot.querySelector('.estar').addEventListener('click', () => answer('estar'));
    document.addEventListener('keydown', onKey);
    show();
    requestAnimationFrame(tick);
  }

  // ---------- lesson complete ----------
  function showDone() {
    const L = run.L;
    sfx.done();
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
        <div class="stat"><b>${run.game}</b><small>game points</small></div>
      </div>
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
