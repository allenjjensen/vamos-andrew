// Lesson: How long will it take? Going to + verb (ir a + infinitive), and how long a job takes.
// Unit 3 (Sizing up the job). Ends with telling customers how long the job will take.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'goingto-1',
  unit: 'Sizing up the job',
  title: 'How long will it take?',
  subtitle: 'Going to: voy a, vamos a',
  minutes: 10,
  terms: ['verb', 'infinitive', 'conjugate'],

  recap: `<p>Going to = <b>ir</b> + <b>a</b> + whole verb: <b>Vamos a cargar.</b> We're going to load.</p>
    <p>Only <b>ir</b> changes: <b>voy, vas, va, vamos, van</b>. The second verb stays whole: <b>cargar, tomar, necesitar</b>.</p>
    <p>Don't forget the little <b>a</b>! Not going to: put <b>no</b> first: <b>No vamos a poder.</b></p>
    <p>How long: <b>¿Cuánto tiempo va a tomar?</b> → <b>Va a tomar unas dos horas.</b> (<b>unas</b> = about)</p>`,

  phrases: [
    { es: '¿Cuánto tiempo va a tomar?', en: 'How long is it going to take?' },
    { es: 'Va a tomar unas dos horas.', en: "It's going to take about two hours." },
    { es: 'Vamos a necesitar el camión grande.', en: "We're going to need the big truck." },
    { es: 'Vamos a llegar a las tres.', en: "We're going to arrive at three." },
    { es: 'Voy a cargar el sofá.', en: "I'm going to load the couch." },
    { es: 'No vamos a terminar hoy.', en: "We're not going to finish today." },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '⏱️',
      title: 'How long will it take?',
      learn: [
        'Going to: voy a, vamos a + a verb',
        'How long: va a tomar unas dos horas',
        'Telling a customer the plan',
      ],
    },

    // ---------- warm-up ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'Vamos ___ cargar el sofá.', en: "We're going to load the couch.",
      options: [
        { text: 'a', correct: true },
        { text: 'de', why: 'Going to is always <b>ir a</b>: <b>vamos a cargar</b>.' },
      ],
      explain: 'Going to = <b>vamos a</b> + verb.',
      rule: 'Going to · ir a',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'Va a ___ dos horas.', en: "It's going to take two hours.",
      options: [
        { text: 'tomar', correct: true },
        { text: 'toma', why: 'After <b>va a</b>, the verb stays whole: <b>tomar</b>.' },
      ],
      explain: 'After <b>va a</b>, use the whole verb: <b>tomar</b>.',
      rule: 'Going to · whole verb',
    },
    {
      type: 'warmupResult',
      all: '¡Perfecto! You\'re going to like this one (te va a gustar).',
      some: 'Good start. This is one of the easiest tricks in Spanish.',
      none: 'No worries. This is one of the easiest tricks in Spanish.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: 'The verb ir (to go)',
      title: 'voy, vas, va, vamos, van',
      rows: [
        { es: 'yo voy', en: 'I go' },
        { es: 'tú vas', en: 'you go' },
        { es: 'él / ella / usted va', en: 'he / she / you (formal) go' },
        { es: 'nosotros vamos', en: 'we go' },
        { es: 'ellos / ustedes van', en: 'they / you all go' },
      ],
      trick: 'Every form starts with <b>v</b>. You already know <b>¡Vamos!</b> = let\'s go!',
    },
    {
      type: 'teach', kicker: 'Going to',
      title: 'ir + a + whole verb',
      rows: [
        { es: 'Voy a cargar.', en: "I'm going to load." },
        { es: 'Vamos a necesitar dos personas.', en: "We're going to need two people." },
        { es: 'Va a llover.', en: "It's going to rain." },
        { es: 'Van a llegar a las tres.', en: "They're going to arrive at three." },
      ],
      trick: 'Just like English: "I\'m going <b>to</b> load" = <b>Voy a cargar</b>. Only <b>ir</b> changes. The second verb never does, it stays whole (ends in -ar, -er, -ir).',
    },
    {
      type: 'teach', kicker: 'How long',
      title: '¿Cuánto tiempo?',
      rows: [
        { es: '¿Cuánto tiempo va a tomar?', en: 'How long is it going to take?' },
        { es: 'Va a tomar unas dos horas.', en: "It's going to take about two hours." },
        { es: 'una hora y media', en: 'an hour and a half' },
        { es: 'media hora', en: 'half an hour' },
        { es: 'todo el día', en: 'all day' },
      ],
      trick: '<b>Unas</b> in front of a number = "about": <b>unas tres horas</b>. Great for guesses! (<b>Más o menos</b> works too.)',
    },
    {
      type: 'teach', kicker: 'Not going to',
      title: 'no + vamos a',
      rows: [
        { es: 'No vamos a terminar hoy.', en: "We're not going to finish today." },
        { es: 'No va a caber.', en: "It's not going to fit." },
        { es: 'No va a ser problema.', en: "It's not going to be a problem." },
      ],
      trick: '<b>No</b> goes first, before <b>voy / va / vamos</b>. <b>No va a ser problema</b> is a great thing to tell a worried customer.',
    },
    {
      type: 'teach', kicker: 'On the job',
      title: 'Telling the plan',
      rows: [
        { es: 'Primero vamos a sacar los muebles.', en: "First we're going to take out the furniture." },
        { es: 'Después vamos a barrer.', en: "Then we're going to sweep." },
        { es: 'Vamos a necesitar el camión grande.', en: "We're going to need the big truck." },
        { es: '¿Qué va a hacer con esto?', en: 'What are you going to do with this?' },
      ],
      trick: '<b>Primero … después …</b> = first … then … Customers love hearing the plan.',
    },

    // ---------- practice ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice',
            prompt: 'Yo ___ a cargar el sofá.', en: "I'm going to load the couch.",
            options: [
              { text: 'voy', correct: true },
              { text: 'va', why: '<b>Va</b> is for he / she / you (formal). For yo: <b>voy</b>.' },
              { text: 'vamos', why: '<b>Vamos</b> is we. For yo: <b>voy</b>.' },
            ],
            explain: 'yo → <b>voy</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice',
            prompt: 'Vamos a ___ el camión grande.', en: "We're going to need the big truck.",
            options: [
              { text: 'necesitar', correct: true },
              { text: 'necesitamos', why: 'Only <b>ir</b> changes. The second verb stays whole: <b>necesitar</b>.' },
              { text: 'necesita', why: 'After <b>vamos a</b>, the verb stays whole: <b>necesitar</b>.' },
            ],
            explain: 'After <b>vamos a</b> → whole verb.',
            rule: 'Going to · whole verb',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Cuánto ___ va a tomar?', en: 'How long is it going to take?',
            options: [
              { text: 'tiempo', correct: true },
              { text: 'cuesta', why: '<b>¿Cuánto cuesta?</b> asks the price. How long: <b>¿Cuánto tiempo?</b>' },
              { text: 'hora', why: 'How long = <b>¿Cuánto tiempo?</b>' },
            ],
            explain: 'How long = <b>¿Cuánto tiempo?</b>',
            rule: 'How long',
          },
          {
            type: 'choice',
            prompt: 'Va a tomar ___ dos horas.', en: "It's going to take about two hours.",
            options: [
              { text: 'unas', correct: true },
              { text: 'unos', why: '<b>Horas</b> is a girl word: <b>unas</b>.' },
              { text: 'muy', why: 'About = <b>unas</b> in front of the number.' },
            ],
            explain: '<b>Unas</b> + number = about.',
            rule: 'How long',
          },
          {
            type: 'build',
            en: "We're going to arrive at three.",
            answer: ['Vamos', 'a', 'llegar', 'a', 'las', 'tres'],
            extra: ['llegamos'],
            wrongWhy: { llegamos: 'After <b>vamos a</b>, the verb stays whole: <b>llegar</b>.' },
            explain: '<b>Vamos a llegar</b> = we\'re going to arrive.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice',
            prompt: 'Ellos ___ a llegar tarde.', en: "They're going to arrive late.",
            options: [
              { text: 'van', correct: true },
              { text: 'vamos', why: '<b>Vamos</b> is we. They: <b>van</b>.' },
              { text: 'va', why: '<b>Va</b> is one person. They: <b>van</b>.' },
            ],
            explain: 'ellos → <b>van</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice', listen: true,
            say: 'va a tomar una hora',
            options: [
              { text: "it's going to take an hour", correct: true },
              { text: 'it takes an hour', why: 'You heard <b>va a</b>: going to.' },
              { text: "it's going to take half an hour", why: 'Half an hour is <b>media hora</b>. You heard <b>una hora</b>.' },
            ],
            explain: '<b>Va a tomar una hora</b> = it\'s going to take an hour.',
            rule: 'How long',
          },
          {
            type: 'choice',
            prompt: 'No ___ a terminar hoy.', en: "We're not going to finish today.",
            options: [
              { text: 'vamos', correct: true },
              { text: 'voy', why: '<b>Voy</b> is I. We: <b>vamos</b>.' },
              { text: 'van', why: '<b>Van</b> is they. We: <b>vamos</b>.' },
            ],
            explain: '<b>No</b> + <b>vamos a</b> = we\'re not going to.',
            rule: 'Not going to',
          },
          {
            type: 'build',
            en: 'How long is it going to take?',
            answer: ['¿Cuánto', 'tiempo', 'va', 'a', 'tomar?'],
            extra: ['toma'],
            wrongWhy: { toma: 'After <b>va a</b>, the verb stays whole: <b>tomar</b>.' },
            explain: 'The question every customer asks.',
            end: '',
            rule: 'How long',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '___ vamos a sacar los muebles.', en: "First we're going to take out the furniture.",
            options: [
              { text: 'Primero', correct: true },
              { text: 'Después', why: '<b>Después</b> = then / after. First is <b>primero</b>.' },
              { text: 'Mañana', why: '<b>Mañana</b> = tomorrow. First is <b>primero</b>.' },
            ],
            explain: 'First = <b>primero</b>.',
            rule: 'On the job',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice',
            prompt: 'Nosotros ___ a barrer.', en: "We're going to sweep.",
            options: [
              { text: 'vamos', correct: true },
              { text: 'van', why: '<b>Van</b> is they. We: <b>vamos</b>.' },
              { text: 'voy', why: '<b>Voy</b> is I. We: <b>vamos</b>.' },
            ],
            explain: 'nosotros → <b>vamos</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice',
            prompt: 'Va ___ llover.', en: "It's going to rain.",
            options: [
              { text: 'a', correct: true },
              { text: 'de', why: 'Going to = <b>ir a</b>.' },
              { text: 'que', why: 'Going to = <b>ir a</b>.' },
            ],
            explain: 'Don\'t forget the little <b>a</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'El sofá no va a ___ por la puerta.', en: "The couch isn't going to fit through the door.",
            options: [
              { text: 'caber', correct: true },
              { text: 'cabe', why: 'After <b>va a</b>, the verb stays whole: <b>caber</b>.' },
              { text: 'cargar', why: '<b>Cargar</b> = to load. Fit is <b>caber</b>.' },
            ],
            explain: '<b>No va a caber</b> = it\'s not going to fit.',
            rule: 'Not going to',
          },
          {
            type: 'choice',
            prompt: '¿Usted ___ a estar en casa?', en: 'Are you going to be home?',
            options: [
              { text: 'va', correct: true },
              { text: 'vas', why: '<b>Vas</b> is for tú. For usted: <b>va</b>.' },
              { text: 'voy', why: '<b>Voy</b> is I. For usted: <b>va</b>.' },
            ],
            explain: 'usted → <b>va</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'build',
            en: "It's going to take about two hours.",
            answer: ['Va', 'a', 'tomar', 'unas', 'dos', 'horas'],
            extra: ['unos'],
            wrongWhy: { unos: '<b>Horas</b> is a girl word: <b>unas</b>.' },
            explain: '<b>Unas dos horas</b> = about two hours.',
            rule: 'How long',
          },
          {
            type: 'choice',
            prompt: 'Va a tomar una hora y ___.', en: "It's going to take an hour and a half.",
            options: [
              { text: 'media', correct: true },
              { text: 'medio', why: 'It goes with <b>hora</b>, a girl word: <b>media</b>.' },
              { text: 'mitad', why: '<b>Mitad</b> = half of something. For time: <b>y media</b>.' },
            ],
            explain: 'An hour and a half = <b>una hora y media</b>.',
            rule: 'How long',
          },
          {
            type: 'choice', listen: true,
            say: 'vamos a necesitar el camión grande',
            options: [
              { text: "we're going to need the big truck", correct: true },
              { text: 'we need the big truck', why: 'You heard <b>vamos a</b>: we\'re going to.' },
              { text: "we're going to need the small truck", why: 'Small is <b>pequeño</b>. You heard <b>grande</b>: big.' },
            ],
            explain: '<b>Vamos a necesitar</b> = we\'re going to need.',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'Tú ___ a manejar.', en: "You're going to drive.",
            options: [
              { text: 'vas', correct: true },
              { text: 'va', why: '<b>Va</b> is for él / ella / usted. For tú: <b>vas</b>.' },
              { text: 'vamos', why: '<b>Vamos</b> is we. For tú: <b>vas</b>.' },
            ],
            explain: 'tú → <b>vas</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'build',
            en: "It's not going to be a problem.",
            answer: ['No', 'va', 'a', 'ser', 'problema'],
            extra: ['es'],
            wrongWhy: { es: 'After <b>va a</b>, the verb stays whole: <b>ser</b>.' },
            explain: '<b>No va a ser problema</b>: perfect for a worried customer.',
            rule: 'Not going to',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Primero sacamos todo. ___ barremos.', en: 'First we take everything out. Then we sweep.',
            options: [
              { text: 'Después', correct: true },
              { text: 'Primero', why: 'You already said <b>primero</b>. Then = <b>después</b>.' },
              { text: 'Ayer', why: '<b>Ayer</b> = yesterday. Then = <b>después</b>.' },
            ],
            explain: 'First … then = <b>primero … después</b>.',
            rule: 'On the job',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice',
            prompt: 'Mañana ___ a trabajar todo el día.', en: "Tomorrow I'm going to work all day.",
            options: [
              { text: 'voy', correct: true },
              { text: 'vas', why: '<b>Vas</b> is you (tú). I: <b>voy</b>.' },
              { text: 'van', why: '<b>Van</b> is they. I: <b>voy</b>.' },
            ],
            explain: 'yo → <b>voy</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice',
            prompt: 'Vamos a ___ el refrigerador.', en: "We're going to take out the fridge.",
            options: [
              { text: 'sacar', correct: true },
              { text: 'sacamos', why: 'Only <b>ir</b> changes. The second verb stays whole: <b>sacar</b>.' },
              { text: 'saca', why: 'After <b>vamos a</b> → whole verb: <b>sacar</b>.' },
            ],
            explain: 'After <b>vamos a</b> → whole verb.',
            rule: 'Going to · whole verb',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Qué va a ___ con esta mesa?', en: 'What are you going to do with this table?',
            options: [
              { text: 'hacer', correct: true },
              { text: 'hace', why: 'After <b>va a</b>, the verb stays whole: <b>hacer</b>.' },
              { text: 'tomar', why: '<b>Tomar</b> = to take. Do is <b>hacer</b>.' },
            ],
            explain: '<b>¿Qué va a hacer con…?</b> = what are you going to do with…?',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'No va a tomar mucho. Solo ___ hora.', en: "It won't take long. Only half an hour.",
            options: [
              { text: 'media', correct: true },
              { text: 'una media', why: 'Half an hour is just <b>media hora</b>, no <b>una</b>.' },
              { text: 'medio', why: '<b>Hora</b> is a girl word: <b>media</b>.' },
            ],
            explain: 'Half an hour = <b>media hora</b>.',
            rule: 'How long',
          },
          {
            type: 'build',
            en: "I'm going to load the couch.",
            answer: ['Voy', 'a', 'cargar', 'el', 'sofá'],
            extra: ['cargo'],
            wrongWhy: { cargo: 'After <b>voy a</b>, the verb stays whole: <b>cargar</b>.' },
            explain: '<b>Voy a cargar</b> = I\'m going to load.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice', listen: true,
            say: 'no vamos a terminar hoy',
            options: [
              { text: "we're not going to finish today", correct: true },
              { text: "we're going to finish today", why: 'You heard <b>no</b> at the start: not going to.' },
              { text: "we're not going to finish tomorrow", why: 'Tomorrow is <b>mañana</b>. You heard <b>hoy</b>: today.' },
            ],
            explain: '<b>No vamos a terminar hoy</b> = we\'re not going to finish today.',
            rule: 'Not going to',
          },
          {
            type: 'choice',
            prompt: 'Mis compañeros ___ a llegar en diez minutos.', en: 'My coworkers are going to arrive in ten minutes.',
            options: [
              { text: 'van', correct: true },
              { text: 'va', why: 'More than one person: <b>van</b>.' },
              { text: 'vamos', why: '<b>Vamos</b> is we. They: <b>van</b>.' },
            ],
            explain: 'They (more than one) → <b>van</b>.',
            rule: 'Going to · ir a',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Va a tomar ___ el día.', en: "It's going to take all day.",
            options: [
              { text: 'todo', correct: true },
              { text: 'toda', why: '<b>Día</b> is a boy word (even with the -a!): <b>todo el día</b>.' },
              { text: 'unas', why: 'All day = <b>todo el día</b>.' },
            ],
            explain: 'All day = <b>todo el día</b>.',
            rule: 'How long',
          },
          {
            type: 'build',
            en: "We're going to need two people.",
            answer: ['Vamos', 'a', 'necesitar', 'dos', 'personas'],
            extra: ['necesitamos'],
            wrongWhy: { necesitamos: 'After <b>vamos a</b>, the verb stays whole: <b>necesitar</b>.' },
            explain: '<b>Vamos a necesitar</b> = we\'re going to need.',
            rule: 'Going to · whole verb',
          },
          {
            type: 'choice',
            prompt: 'No ___ a caber en el camión.', en: "It's not going to fit in the truck.",
            options: [
              { text: 'va', correct: true },
              { text: 'voy', why: '<b>Voy</b> is I. It: <b>va</b>.' },
              { text: 'vas', why: '<b>Vas</b> is you (tú). It: <b>va</b>.' },
            ],
            explain: 'It → <b>va</b>.',
            rule: 'Not going to',
          },
        ],
      ],
    },

    { type: 'retry' },

    // ---------- the conversation ----------
    {
      type: 'talkSet',
      scenes: [
        // ---------- Scene A: the moving truck ----------
        {
          type: 'talk',
          title: 'The moving truck',
          who: { name: 'Señora Ríos', emoji: '👩‍🦱' },
          setup: 'Señora Ríos is moving out today. Her moving truck comes at four, and the junk has to be gone first.',
          tips: [
            { mood: 3, text: 'She relaxes and offers you cold water 💧' },
            { mood: 2, text: 'She thanks you' },
            { mood: 1, text: 'She keeps checking her watch' },
            { mood: 0, text: 'She panics and calls your boss 😬' },
          ],
          lines: [
            {
              them: 'El camión de mudanza llega a las cuatro. ¿Cuánto tiempo va a tomar?',
              en: 'The moving truck arrives at four. How long is it going to take?',
              choices: [
                { es: 'Va a tomar unas dos horas.', en: "It's going to take about two hours.", good: true,
                  note: '<b>Unas dos horas</b>: about two hours. Plenty of time.' },
                { es: 'Va a toma unas dos horas.', en: "It's going to takes about two hours.",
                  react: '¿Va a toma…? Ah, tomar. 🙂', reactEn: '"Going to takes"? Oh, take.',
                  why: 'After <b>va a</b>, the verb stays whole: <b>tomar</b>.' },
                { es: 'Va tomar unas dos horas.', en: "It's going take about two hours.",
                  react: '¿Va… tomar? 🤔', reactEn: '"Going take"?',
                  why: 'Don\'t forget the little <b>a</b>: <b>va a tomar</b>.' },
              ],
            },
            {
              them: '¿Y van a terminar antes de las cuatro?',
              en: 'And are you going to finish before four?',
              choices: [
                { es: 'Sí, vamos a terminar a la una.', en: "Yes, we're going to finish at one.", good: true,
                  note: '<b>Vamos a terminar</b> = we\'re going to finish.' },
                { es: 'Sí, van a terminar a la una.', en: "Yes, they're going to finish at one.",
                  react: '¿Ellos? ¿Y ustedes? 🤔', reactEn: 'They? And you guys?',
                  why: 'You\'re talking about your team: <b>vamos</b> (we).' },
                { es: 'No vamos a terminar.', en: "We're not going to finish.",
                  react: '¡¿Qué?! 😱', reactEn: 'What?!',
                  why: 'Two hours is plenty! Say <b>Sí, vamos a terminar…</b>' },
              ],
            },
            {
              them: 'Bien. ¿Qué van a hacer primero?',
              en: 'Good. What are you going to do first?',
              choices: [
                { es: 'Primero vamos a sacar los muebles del garaje.', en: "First we're going to take the furniture out of the garage.", good: true,
                  note: '<b>Primero vamos a…</b>: tell her the plan.' },
                { es: 'Primero vamos a sacamos los muebles.', en: "First we're going to we-take the furniture.",
                  react: '¿Vamos a sacamos? 🙂 Sacar.', reactEn: '"Going to we-take"? Take.',
                  why: 'Only <b>ir</b> changes: <b>vamos a sacar</b>.' },
                { es: 'Después vamos a sacar los muebles.', en: "Then we're going to take out the furniture.",
                  react: '¿Después de qué? 🤔', reactEn: 'After what?',
                  why: 'She asked what\'s <b>first</b>: <b>Primero vamos a…</b>' },
              ],
            },
            {
              them: '¿Y el piano? Es muy pesado.',
              en: "And the piano? It's very heavy.",
              choices: [
                { es: 'No va a ser problema. Vamos a necesitar cuatro personas.', en: "It's not going to be a problem. We're going to need four people.", good: true,
                  note: '<b>No va a ser problema</b>: the best words for a worried customer.' },
                { es: 'No va a ser problema. Voy a cargarlo solo.', en: "It's not going to be a problem. I'm going to load it alone.",
                  react: '¿Solo? ¿Un piano? 😟', reactEn: 'Alone? A piano?',
                  why: 'A piano needs a team! <b>Vamos a necesitar cuatro personas.</b>' },
                { es: 'No es a ser problema.', en: "It's not to be a problem.",
                  react: '¿No es a…? 🤔', reactEn: '"It\'s not to"?',
                  why: 'Going to uses <b>ir</b>: <b>No va a ser problema.</b>' },
              ],
            },
            {
              them: 'Ay, gracias. Voy a estar en la cocina.',
              en: "Oh, thanks. I'm going to be in the kitchen.",
              choices: [
                { es: 'Perfecto. Le vamos a avisar cuando terminemos.', en: "Perfect. We're going to let you know when we finish.", good: true,
                  note: '<b>Le vamos a avisar</b> = we\'ll let you know.' },
                { es: 'Perfecto. Vamos a estar en la cocina también.', en: "Perfect. We're going to be in the kitchen too.",
                  react: '¿En la cocina? ¿Y el garaje? 😄', reactEn: 'In the kitchen? And the garage?',
                  why: 'You\'re working in the garage! Try <b>Le vamos a avisar.</b>' },
                { es: 'Perfecto. Usted vas a estar en la cocina.', en: 'Perfect. You (mixed) are going to be in the kitchen.',
                  react: '¿Vas? 🙂', reactEn: '"Vas"?',
                  why: 'For usted: <b>va</b>, not vas.' },
              ],
            },
          ],
        },

        // ---------- Scene B: the boss on the phone ----------
        {
          type: 'talk',
          title: 'The boss calls',
          who: { name: 'Rubén (your boss)', emoji: '👷' },
          setup: 'You\'re at a big cleanout. Rubén calls to plan the rest of the day.',
          tips: [
            { mood: 3, text: 'He says you can lead the next job 🌟' },
            { mood: 2, text: '"Good, keep going."' },
            { mood: 1, text: 'He calls back twice to check' },
            { mood: 0, text: 'He drives over to see for himself 😬' },
          ],
          lines: [
            {
              them: '¿Cómo va todo? ¿Van a terminar pronto?',
              en: 'How\'s it going? Are you going to finish soon?',
              choices: [
                { es: 'No, va a tomar todo el día. Hay muchas cosas.', en: "No, it's going to take all day. There's a lot of stuff.", good: true,
                  note: 'Honest and clear: <b>todo el día</b>.' },
                { es: 'No, va a tomar toda el día.', en: "No, it's going to take all (girl) the day.",
                  react: 'Todo el día. 🙂', reactEn: '"Todo el día".',
                  why: '<b>Día</b> is a boy word: <b>todo el día</b>.' },
                { es: 'No, va a tomar unas día.', en: 'No, it\'s going to take about day.',
                  react: '¿Unas día? 🤔', reactEn: '"About day"?',
                  why: 'All day = <b>todo el día</b>.' },
              ],
            },
            {
              them: '¿Van a necesitar otro camión?',
              en: 'Are you going to need another truck?',
              choices: [
                { es: 'Sí, vamos a necesitar el camión grande.', en: "Yes, we're going to need the big truck.", good: true,
                  note: '<b>Vamos a necesitar</b> = we\'re going to need.' },
                { es: 'Sí, vamos a necesitamos el camión grande.', en: "Yes, we're going to we-need the big truck.",
                  react: '¿Necesitamos? 🙂 Necesitar.', reactEn: '"We-need"? Need.',
                  why: 'Only <b>ir</b> changes: <b>vamos a necesitar</b>.' },
                { es: 'Sí, voy a necesitar el camión pequeño.', en: "Yes, I'm going to need the small truck.",
                  react: '¿El pequeño? ¿Con tantas cosas? 🤨', reactEn: 'The small one? With so much stuff?',
                  why: 'Lots of stuff → <b>el camión grande</b>.' },
              ],
            },
            {
              them: 'Ok. Mario va a llegar en una hora con el camión.',
              en: 'OK. Mario is going to arrive in an hour with the truck.',
              choices: [
                { es: 'Perfecto. Mientras tanto, vamos a sacar todo al garaje.', en: "Perfect. Meanwhile, we're going to take everything to the garage.", good: true,
                  note: '<b>Mientras tanto</b> = meanwhile. Using the time well!' },
                { es: 'Perfecto. Vamos a esperar una hora.', en: "Perfect. We're going to wait an hour.",
                  react: '¿Esperar? ¡No! Trabajen. 😠', reactEn: 'Wait? No! Work.',
                  why: 'Don\'t just wait! <b>Vamos a sacar todo al garaje.</b>' },
                { es: '¿En una hora y medio?', en: 'In an hour and a half (boy ending)?',
                  react: 'No, en una hora. 🙂', reactEn: 'No, in one hour.',
                  why: 'He said <b>una hora</b>. (And it\'s <b>y media</b>.)' },
              ],
            },
            {
              them: '¿Y el cliente va a pagar hoy?',
              en: 'And is the customer going to pay today?',
              choices: [
                { es: 'Sí, va a pagar cuando terminemos.', en: "Yes, he's going to pay when we finish.", good: true,
                  note: '<b>Va a pagar</b> = he\'s going to pay.' },
                { es: 'Sí, vas a pagar cuando terminemos.', en: "Yes, you're (tú) going to pay when we finish.",
                  react: '¿Yo? 😂', reactEn: 'Me?',
                  why: 'The customer = he: <b>va</b>.' },
                { es: 'Sí, va pagar cuando terminemos.', en: "Yes, he's going pay when we finish.",
                  react: '¿Va pagar? 🤔', reactEn: '"Going pay"?',
                  why: 'Don\'t forget the <b>a</b>: <b>va a pagar</b>.' },
              ],
            },
            {
              them: 'Muy bien. Mañana vas a trabajar conmigo.',
              en: "Very good. Tomorrow you're going to work with me.",
              choices: [
                { es: '¡Perfecto! ¿A qué hora vamos a empezar?', en: 'Perfect! What time are we going to start?', good: true,
                  note: 'Great follow-up: <b>¿A qué hora vamos a empezar?</b>' },
                { es: '¡Perfecto! ¿A qué hora vamos a empezamos?', en: 'Perfect! What time are we going to we-start?',
                  react: '¿Empezamos? 🙂 Empezar.', reactEn: '"We-start"? Start.',
                  why: 'Only <b>ir</b> changes: <b>vamos a empezar</b>.' },
                { es: 'No voy a ir.', en: "I'm not going to go.",
                  react: '¿Cómo que no? 😠', reactEn: 'What do you mean, no?',
                  why: 'That\'s your boss! Try <b>¡Perfecto! ¿A qué hora vamos a empezar?</b>' },
              ],
            },
          ],
        },

        // ---------- Scene C: will it fit ----------
        {
          type: 'talk',
          title: 'Will it fit?',
          who: { name: 'Abuelo Chuy', emoji: '👴' },
          setup: 'Abuelo Chuy wants his huge old wardrobe gone. It\'s on the second floor, and the stairs are narrow.',
          tips: [
            { mood: 3, text: 'He tells you stories and gives you a tip 💵' },
            { mood: 2, text: 'He shakes your hand' },
            { mood: 1, text: 'He watches you, worried' },
            { mood: 0, text: 'He decides to keep the wardrobe 😬' },
          ],
          lines: [
            {
              them: 'Ese ropero es enorme. No va a caber por la escalera.',
              en: "That wardrobe is huge. It's not going to fit down the stairs.",
              choices: [
                { es: 'No se preocupe. Lo vamos a desarmar.', en: "Don't worry. We're going to take it apart.", good: true,
                  note: '<b>Desarmar</b> = take apart. <b>Lo vamos a desarmar</b> = we\'re going to take it apart.' },
                { es: 'Tiene razón. No va a caber. Adiós.', en: "You're right. It won't fit. Bye.",
                  react: '¿Y mi ropero? 😟', reactEn: 'And my wardrobe?',
                  why: 'Find a way! <b>Lo vamos a desarmar.</b>' },
                { es: 'No se preocupe. Lo vamos desarmar.', en: "Don't worry. We're going take it apart.",
                  react: '¿Vamos desarmar? 🤔', reactEn: '"Going take apart"?',
                  why: 'Don\'t forget the <b>a</b>: <b>vamos a desarmar</b>.' },
              ],
            },
            {
              them: '¿Y cuánto tiempo va a tomar?',
              en: 'And how long is it going to take?',
              choices: [
                { es: 'Más o menos una hora.', en: 'About an hour.', good: true,
                  note: '<b>Más o menos</b> = more or less, about.' },
                { es: 'Unos una hora.', en: 'About (boy) one hour.',
                  react: '¿Unos una? 🤔', reactEn: '"About one"?',
                  why: 'With one hour, say <b>más o menos una hora</b>. (Unas is for more than one: <b>unas dos horas</b>.)' },
                { es: 'Va a tomar.', en: "It's going to take.",
                  react: '¿Va a tomar… cuánto? 😄', reactEn: 'Going to take… how long?',
                  why: 'Say how long: <b>Más o menos una hora.</b>' },
              ],
            },
            {
              them: 'Era de mi esposa. ¿Lo van a tirar?',
              en: 'It was my wife\'s. Are you going to throw it away?',
              choices: [
                { es: 'No, lo vamos a donar. Alguien lo va a usar.', en: "No, we're going to donate it. Someone is going to use it.", good: true,
                  note: 'Kind words: <b>Alguien lo va a usar.</b> He smiles.' },
                { es: 'Sí, lo vamos a tirar a la basura.', en: "Yes, we're going to throw it in the trash.",
                  react: 'Ay… 😢', reactEn: 'Oh…',
                  why: 'It\'s in good condition and it means a lot to him: <b>lo vamos a donar</b>.' },
                { es: 'No, lo vamos a donamos.', en: "No, we're going to we-donate it.",
                  react: '¿Donamos? 🙂 Donar.', reactEn: '"We-donate"? Donate.',
                  why: 'Only <b>ir</b> changes: <b>vamos a donar</b>.' },
              ],
            },
            {
              them: 'Qué bueno. ¿Van a rayar las paredes?',
              en: 'Good. Are you going to scratch the walls?',
              choices: [
                { es: 'No, vamos a usar mantas. No va a pasar nada.', en: "No, we're going to use blankets. Nothing's going to happen.", good: true,
                  note: '<b>No va a pasar nada</b> = nothing\'s going to happen. Very calming.' },
                { es: 'Sí, un poco.', en: 'Yes, a little.',
                  react: '¡¿Un poco?! 😱', reactEn: 'A little?!',
                  why: 'Reassure him: <b>Vamos a usar mantas. No va a pasar nada.</b>' },
                { es: 'No, vamos a usamos mantas.', en: "No, we're going to we-use blankets.",
                  react: '¿Usamos? 🙂 Usar.', reactEn: '"We-use"? Use.',
                  why: 'Only <b>ir</b> changes: <b>vamos a usar</b>.' },
              ],
            },
            {
              them: 'Muy bien, muchachos. Yo voy a preparar café.',
              en: "Very good, guys. I'm going to make coffee.",
              choices: [
                { es: '¡Gracias! Lo vamos a necesitar.', en: "Thanks! We're going to need it.", good: true,
                  note: '😄 <b>Lo vamos a necesitar</b>: we\'re going to need it.' },
                { es: '¡Gracias! Usted voy a preparar café.', en: "Thanks! You I'm-going to make coffee.",
                  react: '¿Voy? 🙂', reactEn: '"I\'m going"?',
                  why: 'Just say thanks: <b>¡Gracias! Lo vamos a necesitar.</b>' },
                { es: 'No, gracias. No vamos a tomar café.', en: "No thanks. We're not going to drink coffee.",
                  react: 'Ah… ok. 😕', reactEn: 'Oh… OK.',
                  why: 'He\'s being kind! Accept: <b>¡Gracias! Lo vamos a necesitar.</b>' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
