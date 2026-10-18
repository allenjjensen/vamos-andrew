// Lesson: What time? Telling time and setting a time for a job.
// Unit 2 (Booking jobs). Ends with a customer setting up a pickup time.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'time-1',
  unit: 'Booking jobs',
  title: 'What time?',
  subtitle: 'Telling time and setting a time',
  minutes: 10,
  terms: ['preposition', 'plural'],

  recap: `<p><b>Es la una</b> (just one hour). <b>Son las dos, son las tres…</b> (every other hour).</p>
    <p>Minutes: <b>y cinco, y diez, y cuarto</b> (:15), <b>y media</b> (:30), <b>y cuarenta</b>… <b>En punto</b> = sharp.</p>
    <p>"At" a time: <b>a la una, a las tres</b>. "Around": <b>a eso de las tres</b>. Ask: <b>¿A qué hora…?</b></p>
    <p><b>de la mañana</b> (AM), <b>de la tarde</b> (afternoon), <b>de la noche</b> (night). <b>Mediodía</b> = noon.</p>`,

  phrases: [
    { es: '¿Qué hora es?', en: 'What time is it?' },
    { es: 'Son las tres y media.', en: "It's three thirty." },
    { es: '¿A qué hora llegan?', en: 'What time are you (all) arriving?' },
    { es: 'Llegamos a las nueve en punto.', en: "We'll be there at nine sharp." },
    { es: 'Llegamos a eso de las dos.', en: "We'll get there around two." },
    { es: 'Vamos a llegar un poco tarde.', en: "We're going to be a little late." },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '🕒',
      title: 'What time?',
      learn: [
        'How to say what time it is',
        'How to say "at three", "around two", "nine sharp"',
        'Morning, afternoon and night',
      ],
    },

    // ---------- warm-up ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: '___ las tres.', en: "It's three o'clock.",
      options: [
        { text: 'Son', correct: true },
        { text: 'Es', why: 'Three o\'clock is more than one hour, so it\'s <b>Son las tres</b>. Only one o\'clock uses <b>Es la una</b>.' },
      ],
      explain: 'Every hour except one: <b>Son las…</b>',
      rule: 'Time · es la / son las',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'La cita es ___ las diez.', en: 'The appointment is at ten.',
      options: [
        { text: 'a', correct: true },
        { text: 'en', why: '"At" a time is <b>a</b> in Spanish: <b>a las diez</b>.' },
      ],
      explain: 'At ten = <b>a las diez</b>.',
      rule: 'Time · at',
    },
    {
      type: 'warmupResult',
      all: 'You\'ve got a feel for it! Next, the little details that make you sound natural.',
      some: 'Good start. Two short rules and you\'ll have it.',
      none: 'No problem. Telling time is a pattern, and it\'s coming up next.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: '¿Qué hora es?',
      title: 'Es la una, son las dos',
      body: '<p>One o\'clock is just <b>one</b> hour, so it gets <b>es la</b>. Every other hour is more than one, so it gets <b>son las</b>.</p>',
      rows: [
        { tag: '1:00', es: 'Es la una.', en: "It's one o'clock." },
        { tag: '2:00', es: 'Son las dos.', en: "It's two o'clock." },
        { tag: '5:00', es: 'Son las cinco.', en: "It's five o'clock." },
        { tag: '12:00', es: 'Son las doce. · Es mediodía.', en: "It's twelve. · It's noon." },
      ],
      trick: '<b>Una</b> is one, so it\'s singular: <b>es la</b>. Two or more is plural: <b>son las</b>. The <b>las</b> stands for <b>las horas</b> (the hours).',
    },
    {
      type: 'teach', kicker: 'Minutes',
      title: 'Adding minutes with "y"',
      rows: [
        { tag: '3:05', es: 'Son las tres y cinco.', en: 'three oh five' },
        { tag: '3:15', es: 'Son las tres y cuarto.', en: 'quarter past three' },
        { tag: '3:30', es: 'Son las tres y media.', en: 'three thirty (half past)' },
        { tag: '3:40', es: 'Son las tres y cuarenta.', en: 'three forty' },
        { tag: '9:00', es: 'Son las nueve en punto.', en: "nine o'clock sharp" },
      ],
      trick: '<b>Cuarto</b> = a quarter, <b>media</b> = a half. You\'ll also hear <b>menos</b> (minus): <b>las cuatro menos cuarto</b> = quarter to four (3:45).',
    },
    {
      type: 'teach', kicker: 'On the job',
      title: 'At what time?',
      rows: [
        { es: '¿A qué hora llegan?', en: 'What time do you (all) get here?' },
        { es: 'Llegamos a las nueve.', en: "We'll be there at nine." },
        { es: 'A la una y media.', en: 'At one thirty.' },
        { es: 'A eso de las dos.', en: 'Around two.' },
        { es: 'Vamos a llegar un poco tarde.', en: "We're going to be a little late." },
      ],
      trick: '"At" a time is <b>a</b>, never <b>en</b>: <b>a las tres</b>. And <b>a eso de</b> (around) is great for junk removal, because traffic happens!',
    },
    {
      type: 'teach', kicker: 'AM and PM',
      title: 'Morning, afternoon, night',
      rows: [
        { tag: '9 AM', es: 'las nueve de la mañana', en: 'nine in the morning' },
        { tag: '12 PM', es: 'el mediodía', en: 'noon' },
        { tag: '3 PM', es: 'las tres de la tarde', en: 'three in the afternoon' },
        { tag: '9 PM', es: 'las nueve de la noche', en: 'nine at night' },
        { tag: '', es: 'temprano · tarde', en: 'early · late' },
      ],
      trick: '<b>Tarde</b> means both "afternoon" and "late". <b>Mañana</b> means both "morning" and "tomorrow". Context tells you which.',
    },

    // ---------- practice ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice',
            prompt: '___ la una.', en: "It's one o'clock.",
            options: [
              { text: 'Es', correct: true },
              { text: 'Son', why: 'One o\'clock is just one hour: <b>Es la una</b>.' },
            ],
            explain: 'Only one o\'clock uses <b>Es la</b>.',
            rule: 'Time · es la / son las',
          },
          {
            type: 'choice',
            prompt: 'Son las cuatro ___.', en: "It's four thirty.",
            options: [
              { text: 'y media', correct: true },
              { text: 'y cuarto', why: '<b>Y cuarto</b> is :15. Half past is <b>y media</b>.' },
              { text: 'y medio', why: 'It\'s <b>media</b> (half an hour, <i>la hora</i> is a girl word).' },
            ],
            explain: ':30 = <b>y media</b> (a half).',
            rule: 'Time · minutes',
          },
          {
            type: 'choice', listen: true,
            say: 'Son las ocho y cuarto.',
            options: [
              { text: '8:15', correct: true },
              { text: '8:45', why: '<b>Y cuarto</b> is a quarter <i>past</i>: 8:15.' },
              { text: '4:08', why: 'The hour comes first: <b>las ocho</b> = 8. <b>Y cuarto</b> = :15.' },
            ],
            explain: '<b>Las ocho y cuarto</b> = 8:15.',
            rule: 'Time · minutes',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Llegamos ___ las nueve.', en: "We'll be there at nine.",
            options: [
              { text: 'a', correct: true },
              { text: 'en', why: '"At" a time is <b>a</b>: <b>a las nueve</b>.' },
              { text: 'son', why: '<b>Son las nueve</b> is "it\'s nine". "At nine" is <b>a las nueve</b>.' },
            ],
            explain: 'At + time = <b>a las…</b>',
            rule: 'Time · at',
          },
          {
            type: 'build',
            en: 'What time is it?',
            answer: ['¿Qué', 'hora', 'es?'],
            extra: ['son'],
            wrongWhy: { son: 'The question is always singular: <b>¿Qué hora es?</b>' },
            explain: '<b>¿Qué hora es?</b> = What time is it?',
            end: '',
            rule: 'Time · asking',
          },
          {
            type: 'choice',
            prompt: 'Son las tres de la ___.', en: "It's three in the afternoon.",
            options: [
              { text: 'tarde', correct: true },
              { text: 'mañana', why: '<b>De la mañana</b> is the morning. 3 PM is <b>de la tarde</b>.' },
              { text: 'noche', why: '<b>De la noche</b> is at night. 3 PM is <b>de la tarde</b>.' },
            ],
            explain: 'Afternoon = <b>de la tarde</b>.',
            rule: 'Time · AM and PM',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿A qué ___ llegan?', en: 'What time are you arriving?',
            options: [
              { text: 'hora', correct: true },
              { text: 'tiempo', why: '<b>Tiempo</b> is time as in "I don\'t have time". Clock time is <b>hora</b>.' },
              { text: 'horas', why: 'One time: <b>¿A qué hora?</b>' },
            ],
            explain: 'Clock time = <b>la hora</b>.',
            rule: 'Time · asking',
          },
          {
            type: 'choice', listen: true,
            say: 'A eso de las dos.',
            options: [
              { text: 'Around two.', correct: true },
              { text: 'At exactly two.', why: 'Exactly would be <b>en punto</b>. <b>A eso de</b> = around.' },
              { text: 'Before two.', why: '<b>A eso de</b> = around, about.' },
            ],
            explain: '<b>A eso de las dos</b> = around two.',
            rule: 'Time · around',
          },
          {
            type: 'build',
            en: "It's two o'clock sharp.",
            answer: ['Son', 'las', 'dos', 'en', 'punto'],
            extra: ['Es'],
            wrongWhy: { Es: 'Two is more than one hour: <b>Son las dos</b>.' },
            explain: '<b>En punto</b> = sharp, exactly.',
            rule: 'Time · es la / son las',
          },
          {
            type: 'choice',
            prompt: 'Son las cinco y ___.', en: "It's five forty.",
            options: [
              { text: 'cuarenta', correct: true },
              { text: 'catorce', why: '<b>Catorce</b> is 14. Forty is <b>cuarenta</b>.' },
              { text: 'cuarto', why: '<b>Cuarto</b> is a quarter (:15). Forty is <b>cuarenta</b>.' },
            ],
            explain: '5:40 = <b>las cinco y cuarenta</b>.',
            rule: 'Time · minutes',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice',
            prompt: '___ las once.', en: "It's eleven o'clock.",
            options: [
              { text: 'Son', correct: true },
              { text: 'Es', why: '<b>Es la</b> is only for one o\'clock. Eleven: <b>Son las once</b>.' },
            ],
            explain: 'Every hour except one: <b>Son las…</b>',
            rule: 'Time · es la / son las',
          },
          {
            type: 'choice',
            prompt: 'Son las siete y ___.', en: "It's quarter past seven.",
            options: [
              { text: 'cuarto', correct: true },
              { text: 'media', why: '<b>Media</b> is :30. A quarter past is <b>y cuarto</b>.' },
              { text: 'cuatro', why: '<b>Cuatro</b> is 4 (7:04). A quarter is <b>cuarto</b>.' },
            ],
            explain: ':15 = <b>y cuarto</b> (a quarter).',
            rule: 'Time · minutes',
          },
          {
            type: 'choice', listen: true,
            say: 'Es la una y media.',
            options: [
              { text: '1:30', correct: true },
              { text: '1:15', why: '<b>Y media</b> is a half: :30. Quarter would be <b>y cuarto</b>.' },
              { text: '12:30', why: '<b>La una</b> is one o\'clock: 1:30.' },
            ],
            explain: '<b>La una y media</b> = 1:30.',
            rule: 'Time · minutes',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'La cita es ___ la una.', en: 'The appointment is at one.',
            options: [
              { text: 'a', correct: true },
              { text: 'en', why: '"At" a time is <b>a</b>: <b>a la una</b>.' },
              { text: 'es', why: 'You already have <b>es</b> (is). "At one" is <b>a la una</b>.' },
            ],
            explain: 'At one = <b>a la una</b> (singular, like es la una).',
            rule: 'Time · at',
          },
          {
            type: 'build',
            en: "We'll be there at ten.",
            answer: ['Llegamos', 'a', 'las', 'diez'],
            extra: ['en'],
            wrongWhy: { en: '"At" a time is <b>a</b>, not en: <b>a las diez</b>.' },
            explain: '<b>Llegamos a las diez.</b> Spanish often uses the present for plans.',
            rule: 'Time · at',
          },
          {
            type: 'choice',
            prompt: 'Son las diez de la ___.', en: "It's ten at night.",
            options: [
              { text: 'noche', correct: true },
              { text: 'tarde', why: '<b>De la tarde</b> is the afternoon. 10 PM is <b>de la noche</b>.' },
              { text: 'mañana', why: '<b>De la mañana</b> is 10 AM. At night: <b>de la noche</b>.' },
            ],
            explain: 'At night = <b>de la noche</b>.',
            rule: 'Time · AM and PM',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Vamos a llegar un poco ___.', en: "We're going to be a little late.",
            options: [
              { text: 'tarde', correct: true },
              { text: 'temprano', why: '<b>Temprano</b> is early. Late is <b>tarde</b>.' },
              { text: 'noche', why: '<b>Noche</b> is night. Late is <b>tarde</b>.' },
            ],
            explain: '<b>Tarde</b> = late (and also afternoon).',
            rule: 'Time · early and late',
          },
          {
            type: 'choice', listen: true,
            say: 'Llegamos a las nueve en punto.',
            options: [
              { text: "We'll be there at nine sharp.", correct: true },
              { text: "We'll be there around nine.", why: 'Around would be <b>a eso de</b>. <b>En punto</b> = sharp.' },
              { text: "We'll be there at nine thirty.", why: 'Nine thirty would be <b>y media</b>. <b>En punto</b> = exactly on the hour.' },
            ],
            explain: '<b>En punto</b> = sharp, exactly.',
            rule: 'Time · sharp',
          },
          {
            type: 'build',
            en: "It's one fifteen.",
            answer: ['Es', 'la', 'una', 'y', 'cuarto'],
            extra: ['Son'],
            wrongWhy: { Son: 'One o\'clock is singular: <b>Es la una</b>.' },
            explain: '<b>Es la una y cuarto.</b>',
            rule: 'Time · es la / son las',
          },
          {
            type: 'choice',
            prompt: 'Son las seis y ___.', en: "It's six twenty.",
            options: [
              { text: 'veinte', correct: true },
              { text: 'doce', why: '<b>Doce</b> is 12. Twenty is <b>veinte</b>.' },
              { text: 'media', why: '<b>Media</b> is :30. Twenty is <b>veinte</b>.' },
            ],
            explain: '6:20 = <b>las seis y veinte</b>.',
            rule: 'Time · minutes',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice',
            prompt: '¿Qué hora es? ___ las doce.', en: "What time is it? It's twelve.",
            options: [
              { text: 'Son', correct: true },
              { text: 'Es', why: 'Twelve is more than one hour: <b>Son las doce</b>. (Or <b>es mediodía</b>, it\'s noon.)' },
            ],
            explain: '<b>Son las doce.</b> Noon is <b>el mediodía</b>.',
            rule: 'Time · es la / son las',
          },
          {
            type: 'choice',
            prompt: 'Son las nueve ___.', en: "It's nine o'clock sharp.",
            options: [
              { text: 'en punto', correct: true },
              { text: 'y media', why: '<b>Y media</b> is 9:30. Sharp is <b>en punto</b>.' },
              { text: 'a punto', why: 'Close! Sharp is <b>en punto</b>.' },
            ],
            explain: 'Sharp = <b>en punto</b>.',
            rule: 'Time · sharp',
          },
          {
            type: 'choice', listen: true,
            say: 'Son las once y diez.',
            options: [
              { text: '11:10', correct: true },
              { text: '10:11', why: 'The hour comes first: <b>las once</b> = 11, <b>y diez</b> = :10.' },
              { text: '11:02', why: '<b>Diez</b> is 10: 11:10.' },
            ],
            explain: '<b>Las once y diez</b> = 11:10.',
            rule: 'Time · minutes',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Llegamos ___ las tres.', en: "We'll be there around three.",
            options: [
              { text: 'a eso de', correct: true },
              { text: 'en punto', why: '<b>En punto</b> means sharp, and goes after the time. Around = <b>a eso de</b>.' },
              { text: 'en', why: '"Around" is <b>a eso de</b>: <b>a eso de las tres</b>.' },
            ],
            explain: 'Around three = <b>a eso de las tres</b>.',
            rule: 'Time · around',
          },
          {
            type: 'build',
            en: 'What time are you arriving?',
            answer: ['¿A', 'qué', 'hora', 'llegan?'],
            extra: ['En'],
            wrongWhy: { En: '"At what time" uses <b>a</b>: <b>¿A qué hora…?</b>' },
            explain: '<b>¿A qué hora…?</b> = At what time…?',
            end: '',
            rule: 'Time · asking',
          },
          {
            type: 'choice',
            prompt: 'Son las siete de la ___.', en: "It's seven in the morning.",
            options: [
              { text: 'mañana', correct: true },
              { text: 'tarde', why: '<b>De la tarde</b> is afternoon. 7 AM is <b>de la mañana</b>.' },
              { text: 'noche', why: '<b>De la noche</b> is at night. 7 AM is <b>de la mañana</b>.' },
            ],
            explain: 'Morning = <b>de la mañana</b>.',
            rule: 'Time · AM and PM',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Pueden venir más ___?', en: 'Can you come earlier?',
            options: [
              { text: 'temprano', correct: true },
              { text: 'tarde', why: '<b>Más tarde</b> is later. Earlier is <b>más temprano</b>.' },
              { text: 'mañana', why: '<b>Mañana</b> is tomorrow or morning. Earlier is <b>más temprano</b>.' },
            ],
            explain: 'Earlier = <b>más temprano</b>. Later = <b>más tarde</b>.',
            rule: 'Time · early and late',
          },
          {
            type: 'choice', listen: true,
            say: 'Son las cuatro menos cuarto.',
            options: [
              { text: '3:45', correct: true },
              { text: '4:15', why: '<b>Menos</b> = minus. Four minus a quarter = 3:45. (4:15 is <b>y cuarto</b>.)' },
              { text: '4:45', why: '<b>Menos cuarto</b> takes a quarter away from four: 3:45.' },
            ],
            explain: '<b>Las cuatro menos cuarto</b> = a quarter to four: 3:45.',
            rule: 'Time · menos',
          },
          {
            type: 'build',
            en: "It's eight thirty at night.",
            answer: ['Son', 'las', 'ocho', 'y', 'media', 'de', 'la', 'noche'],
            extra: ['tarde'],
            wrongWhy: { tarde: 'Night is <b>noche</b>. <b>Tarde</b> is afternoon.' },
            explain: '<b>Son las ocho y media de la noche.</b>',
            rule: 'Time · AM and PM',
          },
          {
            type: 'choice',
            prompt: 'Es la una y ___.', en: "It's one fifty.",
            options: [
              { text: 'cincuenta', correct: true },
              { text: 'quince', why: '<b>Quince</b> is 15 (1:15). Fifty is <b>cincuenta</b>.' },
              { text: 'cinco', why: '<b>Cinco</b> is 5 (1:05). Fifty is <b>cincuenta</b>.' },
            ],
            explain: '1:50 = <b>la una y cincuenta</b>.',
            rule: 'Time · minutes',
          },
        ],
      ],
    },

    { type: 'retry' },

    // ---------- the conversation ----------
    {
      type: 'talkSet',
      scenes: [
        // ---------- Customer A ----------
        {
          type: 'talk',
          title: 'Setting the time',
          who: { name: 'Señora Ruiz', emoji: '👩' },
          setup: 'Señora Ruiz booked a pickup for tomorrow. She calls to set the time. She works, so the time matters.',
          tips: [
            { mood: 3, text: 'She tells all her neighbors about you 🏘️' },
            { mood: 2, text: 'A thank-you and a $10 tip' },
            { mood: 1, text: 'She sighs: "OK, I guess…"' },
            { mood: 0, text: 'She cancels the job 😬' },
          ],
          lines: [
            {
              them: 'Hola, Andrew. ¿A qué hora llegan mañana?',
              en: 'Hi, Andrew. What time are you arriving tomorrow?',
              choices: [
                { es: 'Llegamos a las nueve de la mañana.', en: "We'll be there at nine in the morning.", good: true,
                  note: '<b>A las nueve</b> = at nine. <b>De la mañana</b> = AM.' },
                { es: 'Llegamos en las nueve de la mañana.', en: "We'll be there in nine in the morning.",
                  react: '¿"En las nueve"? Ah, ¿a las nueve? 🙂', reactEn: '"In nine"? Oh, at nine?',
                  why: '"At" a time is <b>a</b>, not en: <b>a las nueve</b>.' },
                { es: 'Son las nueve de la mañana.', en: "It's nine in the morning.",
                  react: '¿Ahora? No, son las cinco de la tarde. 🤔', reactEn: 'Now? No, it\'s five in the afternoon.',
                  why: '<b>Son las nueve</b> = it\'s nine (now). To say when you arrive: <b>Llegamos a las nueve</b>.' },
              ],
            },
            {
              them: 'Uy, a las nueve trabajo. ¿Pueden venir más tarde?',
              en: 'Oh, at nine I\'m working. Can you come later?',
              choices: [
                { es: 'Sí, claro. ¿A la una de la tarde?', en: 'Yes, of course. At one in the afternoon?', good: true,
                  note: '<b>A la una</b>: one is singular, so <b>la</b>, not las.' },
                { es: 'Sí, claro. ¿A las una de la tarde?', en: 'Yes, of course. At (the) one (plural)?',
                  react: '¿"A las una"? 🙃', reactEn: '"A las una"?',
                  why: 'One is singular: <b>a la una</b>.' },
                { es: 'Sí, claro. ¿Más temprano?', en: 'Yes, of course. Earlier?',
                  react: 'No, más TARDE. 😅', reactEn: 'No, LATER.',
                  why: 'She asked for <b>más tarde</b> (later). <b>Temprano</b> is early.' },
              ],
            },
            {
              them: 'Mmm, a la una no puedo. ¿A eso de las cinco?',
              en: 'Hmm, at one I can\'t. Around five?',
              choices: [
                { es: 'Perfecto. Llegamos a eso de las cinco.', en: "Perfect. We'll get there around five.", good: true,
                  note: '<b>A eso de las cinco</b> = around five. Good when traffic is unpredictable!' },
                { es: 'Perfecto. Llegamos a eso de las quince.', en: "Perfect. We'll get there around fifteen.",
                  react: '¿Las quince? ¿Hora militar? 😂', reactEn: 'Fifteen? Military time?',
                  why: '<b>Quince</b> is 15. Five is <b>cinco</b>.' },
                { es: 'Perfecto. Es la cinco.', en: 'Perfect. It\'s five (singular).',
                  react: '¿Es la cinco? 🤔', reactEn: 'It is the five?',
                  why: 'To say when you arrive: <b>Llegamos a eso de las cinco</b>. (And it\'s <b>son las cinco</b>, plural.)' },
              ],
            },
            {
              them: '¿Cuánto tiempo necesitan?',
              en: 'How much time do you need?',
              choices: [
                { es: 'Más o menos una hora.', en: 'About an hour.', good: true,
                  note: '<b>Más o menos</b> = more or less, about. <b>Una hora</b> = one hour.' },
                { es: 'Más o menos la una.', en: 'About one o\'clock.',
                  react: '¿La una? Pero vienen a las cinco… 🤔', reactEn: 'One o\'clock? But you\'re coming at five…',
                  why: '<b>La una</b> is one o\'clock. A length of time is <b>una hora</b> (an hour).' },
                { es: 'Más o menos las cinco y media.', en: 'About five thirty.',
                  react: '¿Cuánto TIEMPO, no a qué hora. 🙂', reactEn: 'How much TIME, not what time.',
                  why: 'She asked how long. Answer with a length: <b>una hora</b>.' },
              ],
            },
            {
              them: 'Muy bien. Entonces, mañana a las cinco. ¡Gracias!',
              en: 'Very good. So, tomorrow at five. Thanks!',
              choices: [
                { es: 'A usted. ¡Hasta mañana!', en: 'Thank you. See you tomorrow!', good: true,
                  note: '<b>A usted</b> = thank YOU (polite). <b>Hasta mañana</b> = see you tomorrow.' },
                { es: '¡Hasta la mañana!', en: 'Until the morning!',
                  react: 'No, a las cinco de la tarde. 😅', reactEn: 'No, at five in the afternoon.',
                  why: '<b>La mañana</b> = the morning. "See you tomorrow" is <b>hasta mañana</b>.' },
                { es: 'De nada. ¡Buenas noches!', en: 'You\'re welcome. Good night!',
                  react: '¿Buenas noches? Son las cinco de la tarde… 🙂', reactEn: 'Good night? It\'s five in the afternoon…',
                  why: 'It\'s the afternoon. <b>¡Hasta mañana!</b> fits better.' },
              ],
            },
          ],
        },

        // ---------- Customer B ----------
        {
          type: 'talk',
          title: 'Running late',
          who: { name: 'Don Felipe', emoji: '👴' },
          setup: 'Traffic! You\'re supposed to be at Don Felipe\'s at ten, but it\'s 9:50 and you\'re far away. Call him.',
          tips: [
            { mood: 3, text: 'He has coffee waiting for you ☕' },
            { mood: 2, text: '"No problem, see you soon"' },
            { mood: 1, text: 'He\'s annoyed, but waits' },
            { mood: 0, text: 'He complains to your boss 😬' },
          ],
          lines: [
            {
              them: '¿Bueno? ¿Ya vienen? Son casi las diez.',
              en: 'Hello? Are you on your way? It\'s almost ten.',
              choices: [
                { es: 'Buenos días, Don Felipe. Vamos a llegar un poco tarde.', en: 'Good morning, Don Felipe. We\'re going to be a little late.', good: true,
                  note: '<b>Vamos a llegar tarde</b> = we\'re going to be late. Always warn the customer!' },
                { es: 'Buenos días, Don Felipe. Vamos a llegar un poco temprano.', en: 'Good morning. We\'re going to be a little early.',
                  react: '¿Temprano? ¡Pero ya son las diez! 🤨', reactEn: 'Early? But it\'s already ten!',
                  why: '<b>Temprano</b> = early. Late is <b>tarde</b>.' },
                { es: 'Buenas noches, Don Felipe.', en: 'Good night, Don Felipe.',
                  react: '¿Buenas noches? ¡Son las diez de la mañana! 😂', reactEn: 'Good night? It\'s ten in the morning!',
                  why: 'It\'s the morning: <b>Buenos días</b>.' },
              ],
            },
            {
              them: '¿A qué hora llegan, entonces?',
              en: 'What time will you get here, then?',
              choices: [
                { es: 'A eso de las diez y media.', en: 'Around ten thirty.', good: true,
                  note: '<b>A eso de</b> = around. Safe when you\'re stuck in traffic.' },
                { es: 'A eso de las diez y medio.', en: 'Around ten thirty (wrong ending).',
                  react: '¿Diez y "medio"? 🙂', reactEn: 'Ten and "medio"?',
                  why: 'It\'s <b>media</b>: half an hour (<i>la hora</i> is a girl word).' },
                { es: 'A eso de las doce y media.', en: 'Around twelve thirty.',
                  react: '¡¿Las doce y media?! ¡Eso no es "un poco tarde"! 😠', reactEn: 'Twelve thirty?! That\'s not "a little late"!',
                  why: '<b>Doce</b> is 12. Ten is <b>diez</b>: <b>a eso de las diez y media</b>.' },
              ],
            },
            {
              them: 'Bueno. Pero a la una me voy al doctor.',
              en: 'OK. But at one I\'m leaving for the doctor.',
              choices: [
                { es: 'No hay problema. Terminamos antes de la una.', en: 'No problem. We\'ll finish before one.', good: true,
                  note: '<b>Antes de la una</b> = before one. <b>Después de</b> = after.' },
                { es: 'No hay problema. Terminamos después de la una.', en: 'No problem. We\'ll finish after one.',
                  react: '¿Después? ¡Pero yo me voy a la una! 😟', reactEn: 'After? But I\'m leaving at one!',
                  why: '<b>Después de</b> = after. He needs you done <b>antes de la una</b> (before one).' },
                { es: 'No hay problema. Terminamos antes de las una.', en: 'No problem. Before (the plural) one.',
                  react: '¿"Las una"? 🤔', reactEn: '"Las una"?',
                  why: 'One is singular: <b>la una</b>.' },
              ],
            },
            {
              them: 'Está bien. Perdón, ¿qué hora es ahora?',
              en: 'All right. Sorry, what time is it now?',
              choices: [
                { es: 'Son las diez menos diez.', en: 'It\'s ten to ten.', good: true,
                  note: '<b>Las diez menos diez</b> = ten minus ten minutes = 9:50. You can also say <b>las nueve y cincuenta</b>.' },
                { es: 'Es las nueve y cincuenta.', en: 'It is (singular) nine fifty.',
                  react: '"Es las nueve"… 🤔', reactEn: '"Es las nueve"…',
                  why: 'Nine is plural: <b>Son las nueve y cincuenta</b>.' },
                { es: 'Son las diez y diez.', en: 'It\'s ten ten.',
                  react: '¿Diez y diez? ¡Entonces ya llegan más tarde! 😩', reactEn: 'Ten ten? Then you\'re even later!',
                  why: 'It\'s 9:50, not 10:10. <b>Las diez menos diez</b> or <b>las nueve y cincuenta</b>.' },
              ],
            },
            {
              them: 'Bueno, los espero. Manejen con cuidado.',
              en: 'OK, I\'ll wait for you. Drive carefully.',
              choices: [
                { es: 'Gracias, Don Felipe. Nos vemos pronto.', en: 'Thanks, Don Felipe. See you soon.', good: true,
                  note: '<b>Nos vemos pronto</b> = see you soon.' },
                { es: 'Gracias. Nos vemos mañana.', en: 'Thanks. See you tomorrow.',
                  react: '¿Mañana? ¡No, hoy! 😱', reactEn: 'Tomorrow? No, today!',
                  why: 'You\'re coming today in a few minutes: <b>Nos vemos pronto</b>.' },
                { es: 'Gracias. Nos vemos tarde.', en: 'Thanks. See you late.',
                  react: 'Eh… ¿pronto, no? 🙂', reactEn: 'Uh… soon, right?',
                  why: '"See you soon" is <b>nos vemos pronto</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer C ----------
        {
          type: 'talk',
          title: 'The early bird',
          who: { name: 'Lucía', emoji: '👩‍🍳' },
          setup: 'Lucía owns a bakery. She needs old ovens gone before she opens. Bakers start VERY early.',
          tips: [
            { mood: 3, text: 'Free pan dulce for the whole crew 🥐' },
            { mood: 2, text: 'A box of cookies' },
            { mood: 1, text: 'A tired "gracias"' },
            { mood: 0, text: 'She finds another company 😬' },
          ],
          lines: [
            {
              them: 'Hola. Abro la panadería a las siete. ¿Pueden venir antes?',
              en: 'Hi. I open the bakery at seven. Can you come before?',
              choices: [
                { es: 'Sí. ¿A las cinco y media de la mañana?', en: 'Yes. At five thirty in the morning?', good: true,
                  note: '<b>A las cinco y media de la mañana</b> = at 5:30 AM. Early!' },
                { es: 'Sí. ¿A las cinco y media de la tarde?', en: 'Yes. At five thirty in the afternoon?',
                  react: '¿De la tarde? ¡Abro a las siete de la MAÑANA! 😅', reactEn: 'In the afternoon? I open at seven in the MORNING!',
                  why: 'Before 7 AM is <b>de la mañana</b>.' },
                { es: 'Sí. ¿A las nueve?', en: 'Yes. At nine?',
                  react: '¿Nueve? Eso es después de las siete. 🤔', reactEn: 'Nine? That\'s after seven.',
                  why: 'She needs you <b>before</b> seven. Try <b>a las cinco y media de la mañana</b>.' },
              ],
            },
            {
              them: '¡Perfecto! ¿Es muy temprano para ustedes?',
              en: 'Perfect! Is that too early for you?',
              choices: [
                { es: 'No, no es problema. Llegamos a las cinco y media en punto.', en: 'No, no problem. We\'ll be there at 5:30 sharp.', good: true,
                  note: '<b>En punto</b> = sharp, exactly. Bakers like on time!' },
                { es: 'Sí, es muy tarde.', en: 'Yes, it\'s very late.',
                  react: '¿Tarde? Es muy TEMPRANO. 🙂', reactEn: 'Late? It\'s very EARLY.',
                  why: '<b>Tarde</b> = late. 5:30 AM is <b>temprano</b> (early). And say yes to the job!' },
                { es: 'No, no es problema. Llegamos a las cinco y media a punto.', en: 'No problem. At 5:30 "a punto".',
                  react: '¿"A punto"? Ah, ¿en punto? 🙂', reactEn: '"A punto"? Oh, en punto?',
                  why: 'Sharp is <b>en punto</b>.' },
              ],
            },
            {
              them: 'Son tres hornos. ¿Cuánto tiempo necesitan?',
              en: 'It\'s three ovens. How much time do you need?',
              choices: [
                { es: 'Más o menos una hora y media.', en: 'About an hour and a half.', good: true,
                  note: '<b>Una hora y media</b> = an hour and a half.' },
                { es: 'Más o menos la una y media.', en: 'About one thirty.',
                  react: '¿A la una y media? ¡No, cuánto TIEMPO! 😅', reactEn: 'At one thirty? No, how much TIME!',
                  why: '<b>La una y media</b> is a clock time. A length of time: <b>una hora y media</b>.' },
                { es: 'Más o menos tres horas y cuarto de la mañana.', en: 'About three and a quarter hours in the morning.',
                  react: 'Eh… ¿qué? 😵', reactEn: 'Uh… what?',
                  why: 'Keep it simple: <b>más o menos una hora y media</b>.' },
              ],
            },
            {
              them: 'Entonces terminan a eso de las siete, ¿no?',
              en: 'So you finish around seven, right?',
              choices: [
                { es: 'Sí, terminamos antes de las siete.', en: 'Yes, we finish before seven.', good: true,
                  note: '5:30 + 1½ hours = 7:00. <b>Antes de las siete</b> = before seven.' },
                { es: 'Sí, terminamos antes de la siete.', en: 'Yes, before (singular) seven.',
                  react: '"La siete"… 🙂', reactEn: '"La siete"…',
                  why: 'Only one o\'clock is singular. Seven: <b>las siete</b>.' },
                { es: 'Sí, terminamos a las once de la noche.', en: 'Yes, we finish at eleven at night.',
                  react: '¡¿A las once de la noche?! 😱', reactEn: 'At eleven at NIGHT?!',
                  why: 'That\'s way too late! <b>Antes de las siete</b> (before seven).' },
              ],
            },
            {
              them: '¡Gracias! Les guardo pan dulce para el desayuno.',
              en: 'Thanks! I\'ll save you some pan dulce for breakfast.',
              choices: [
                { es: '¡Qué amable! Muchas gracias, Lucía.', en: 'How kind! Thank you so much, Lucía.', good: true,
                  note: '<b>¡Qué amable!</b> = How kind!' },
                { es: '¡Qué tarde! Gracias.', en: 'How late! Thanks.',
                  react: '¿Tarde? 🤔', reactEn: 'Late?',
                  why: '"How kind!" is <b>¡Qué amable!</b>' },
                { es: 'No, gracias. Desayuno a las diez.', en: 'No thanks. I eat breakfast at ten.',
                  react: 'Ah… bueno. 😕', reactEn: 'Oh… OK.',
                  why: 'Never say no to free pan dulce! <b>¡Qué amable! Muchas gracias.</b>' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
