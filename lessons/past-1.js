// Lesson: What did you do? The finished past (preterite).
// Ends with a Monday-morning talk with the boss about Saturday's job.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'past-1',
  title: 'What did you do?',
  subtitle: 'Talk about yesterday: the past tense',
  minutes: 10,

  recap: `<p>Clue words: <b>ayer, anoche, el sábado</b> → finished past.</p>
    <p>-AR: <b>-é, -aste, -ó, -amos, -aron</b>. -ER / -IR: <b>-í, -iste, -ió, -imos, -ieron</b>.</p>
    <p>The accent matters: <b>trabajo</b> = I work, <b>trabajó</b> = he worked.</p>
    <p><b>Fui</b> = I went AND I was. <b>Hice</b> = I did. <b>Tuve</b> = I had.</p>`,

  phrases: [
    { es: '¿Qué hiciste ayer?', en: 'What did you do yesterday?' },
    { es: 'Trabajé todo el día.', en: 'I worked all day.' },
    { es: 'Anoche comí pizza.', en: 'Last night I ate pizza.' },
    { es: 'Fui a casa.', en: 'I went home.' },
    { es: 'Tuve un problema con el camión.', en: 'I had a problem with the truck.' },
    { es: 'El cliente nos pagó.', en: 'The customer paid us.' },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '⏪',
      title: 'What did you do?',
      learn: [
        'How to say what you did yesterday',
        'The past endings, and the accent that changes everything',
        'The four irregular verbs you\'ll use most',
      ],
    },

    // ---------- teaching ----------
    {
      type: 'teach',
      title: 'The finished past',
      body: `<p>When something happened and it's <b>done</b>, use this past tense.</p>
        <p>Watch for clue words: <b>ayer</b> (yesterday), <b>anoche</b> (last night), <b>el sábado</b> (on Saturday), <b>la semana pasada</b> (last week).</p>`,
      rows: [
        { es: 'Ayer trabajé.', en: 'Yesterday I worked.' },
        { es: 'Anoche comí pizza.', en: 'Last night I ate pizza.' },
        { es: 'El sábado limpiamos el garaje.', en: 'On Saturday we cleaned the garage.' },
      ],
      trick: '<b>Snapshot test:</b> if you could take one photo of it happening and then it was over, use this past.',
    },
    {
      type: 'teach', kicker: '-AR verbs',
      title: 'trabajar → trabajé',
      rows: [
        { tag: 'yo', es: 'trabajé', en: 'I worked' },
        { tag: 'tú', es: 'trabajaste', en: 'you worked' },
        { tag: 'él / ella / usted', es: 'trabajó', en: 'he / she worked' },
        { tag: 'nosotros', es: 'trabajamos', en: 'we worked' },
        { tag: 'ellos / ustedes', es: 'trabajaron', en: 'they worked' },
      ],
      trick: 'The accent changes everything. <b>Trabajo</b> = I work (now). <b>Trabajó</b> = he worked. Put the punch at the end: traba-<b>JÓ</b>.',
    },
    {
      type: 'teach', kicker: '-ER and -IR verbs',
      title: 'comer → comí',
      body: '<p>-ER and -IR verbs share the same past endings.</p>',
      rows: [
        { tag: 'yo', es: 'comí', en: 'I ate' },
        { tag: 'tú', es: 'comiste', en: 'you ate' },
        { tag: 'él / ella / usted', es: 'comió', en: 'he / she ate' },
        { tag: 'nosotros', es: 'comimos', en: 'we ate' },
        { tag: 'ellos / ustedes', es: 'comieron', en: 'they ate' },
      ],
      trick: '<b>Nosotros</b> looks the same as the present for -ar and -ir verbs (trabajamos, vivimos). The clue word tells you: <b>ayer trabajamos</b>.',
    },
    {
      type: 'teach', kicker: 'The big four',
      title: 'Irregulars you\'ll use every day',
      rows: [
        { tag: 'ir / ser', es: 'fui', en: 'I went / I was' },
        { tag: 'hacer', es: 'hice', en: 'I did, I made' },
        { tag: 'tener', es: 'tuve', en: 'I had' },
        { tag: 'estar', es: 'estuve', en: 'I was (somewhere)' },
      ],
      trick: '<b>Fui</b> is both ir and ser! <b>Fui al trabajo</b> = I went to work. <b>Fui el primero</b> = I was first. These have no accents. The Rules page (📖) has all their forms.',
    },

    // ---------- practice: three versions of the same rules ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice',
            prompt: 'Ayer yo ___ diez horas.', en: 'Yesterday I worked ten hours.',
            options: [
              { text: 'trabajé', correct: true },
              { text: 'trabajo', why: '<b>Trabajo</b> is the present (I work). <b>Ayer</b> is your clue: it\'s the past, <b>trabajé</b>.' },
              { text: 'trabajó', why: '<b>Trabajó</b> is he / she worked. For yo: <b>trabajé</b>.' },
            ],
            explain: '-AR verb, yo, past: <b>-é</b>.',
            rule: 'Past · -AR · yo',
          },
          {
            type: 'choice',
            prompt: 'Anoche nosotros ___ tacos.', en: 'Last night we ate tacos.',
            options: [
              { text: 'comimos', correct: true },
              { text: 'comemos', why: '<b>Comemos</b> is the present (we eat). For last night: <b>comimos</b>.' },
              { text: 'comieron', why: '<b>Comieron</b> is they ate. For nosotros: <b>comimos</b>.' },
            ],
            explain: '-ER verb, nosotros, past: <b>-imos</b>.',
            rule: 'Past · -ER · nosotros',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'El sábado Andrew ___ el camión.', en: 'On Saturday Andrew cleaned the truck.',
            options: [
              { text: 'limpió', correct: true },
              { text: 'limpio', why: 'No accent: <b>limpio</b> = I clean. With the accent, <b>limpió</b> = he cleaned.' },
              { text: 'limpié', why: '<b>Limpié</b> = I cleaned. Andrew is él here: <b>limpió</b>.' },
            ],
            explain: '-AR verb, él, past: <b>-ó</b> with an accent.',
            rule: 'Past · -AR · él',
          },
          {
            type: 'choice', listen: true,
            say: 'Ayer fui al trabajo.',
            options: [
              { text: 'Yesterday I went to work.', correct: true },
              { text: 'Yesterday I was at work.', why: 'Close! "I was at work" is <b>estuve en el trabajo</b>. <b>Fui al</b> (to the) means you went there.' },
              { text: 'Tomorrow I go to work.', why: '<b>Ayer</b> means yesterday. Tomorrow would be <b>mañana</b>.' },
            ],
            explain: '<b>Fui a…</b> = I went to… (ir).',
            rule: 'Irregular · fui',
          },
          {
            type: 'build',
            en: 'I worked yesterday.',
            answer: ['Trabajé', 'ayer'],
            extra: ['Trabajo'],
            wrongWhy: { Trabajo: '<b>Trabajo</b> is now. Yesterday is past: <b>trabajé</b>.' },
            explain: 'The clue word can go at the start or the end: <b>Ayer trabajé</b> or <b>Trabajé ayer</b>.',
            rule: 'Past · -AR · yo',
          },
          {
            type: 'choice',
            prompt: '¿Qué ___ tú anoche?', en: 'What did you do last night?',
            options: [
              { text: 'hiciste', correct: true },
              { text: 'hice', why: '<b>Hice</b> = I did. For tú: <b>hiciste</b>.' },
              { text: 'haces', why: '<b>Haces</b> is the present (you do). For last night: <b>hiciste</b>.' },
            ],
            explain: '<b>¿Qué hiciste?</b> = What did you do? You\'ll hear it every Monday.',
            rule: 'Irregular · hacer',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Ayer ellos ___ al basurero.', en: 'Yesterday they went to the dump.',
            options: [
              { text: 'fueron', correct: true },
              { text: 'van', why: '<b>Van</b> is the present (they go). For yesterday: <b>fueron</b>.' },
              { text: 'fue', why: '<b>Fue</b> is he / she went. For ellos: <b>fueron</b>.' },
            ],
            explain: 'Ir in the past for ellos: <b>fueron</b>.',
            rule: 'Irregular · ir',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Ayer yo ___ un problema con el camión.', en: 'Yesterday I had a problem with the truck.',
            options: [
              { text: 'tuve', correct: true },
              { text: 'tengo', why: '<b>Tengo</b> = I have (now). Yesterday: <b>tuve</b>.' },
              { text: 'tuvo', why: '<b>Tuvo</b> = he had. For yo: <b>tuve</b>.' },
            ],
            explain: 'Tener in the past: <b>tuve</b>.',
            rule: 'Irregular · tener',
          },
          {
            type: 'build',
            en: 'She called the customer.',
            answer: ['Ella', 'llamó', 'al', 'cliente'],
            extra: ['llamo'],
            wrongWhy: { llamo: 'No accent: <b>llamo</b> = I call. <b>Llamó</b> = she called.' },
            explain: '<b>Al</b> = a + el. You call <i>to</i> someone in Spanish: llamar <b>a</b> alguien.',
            rule: 'Past · -AR · ella',
          },
          {
            type: 'choice',
            prompt: 'El cliente nos ___ cien dólares.', en: 'The customer paid us one hundred dollars.',
            options: [
              { text: 'pagó', correct: true },
              { text: 'pago', why: 'No accent: <b>pago</b> = I pay. <b>Pagó</b> = he paid.' },
              { text: 'pagaron', why: '<b>Pagaron</b> = they paid. One customer: <b>pagó</b>.' },
            ],
            explain: '-AR verb, él, past: <b>-ó</b>.',
            rule: 'Past · -AR · él',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice',
            prompt: 'Ayer yo ___ el garaje.', en: 'Yesterday I cleaned the garage.',
            options: [
              { text: 'limpié', correct: true },
              { text: 'limpio', why: '<b>Limpio</b> = I clean (now). <b>Ayer</b> is your clue: past, <b>limpié</b>.' },
              { text: 'limpió', why: '<b>Limpió</b> = he cleaned. For yo: <b>limpié</b>.' },
            ],
            explain: '-AR verb, yo, past: <b>-é</b>.',
            rule: 'Past · -AR · yo',
          },
          {
            type: 'choice',
            prompt: 'Anoche ellos ___ pizza.', en: 'Last night they ate pizza.',
            options: [
              { text: 'comieron', correct: true },
              { text: 'comen', why: '<b>Comen</b> is the present (they eat). <b>Anoche</b> → past: <b>comieron</b>.' },
              { text: 'comimos', why: '<b>Comimos</b> = we ate. For ellos: <b>comieron</b>.' },
            ],
            explain: '-ER verb, ellos, past: <b>-ieron</b>.',
            rule: 'Past · -ER · ellos',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'El sábado tú ___ el camión.', en: 'On Saturday you drove the truck.',
            options: [
              { text: 'manejaste', correct: true },
              { text: 'manejas', why: '<b>Manejas</b> is the present. <b>El sábado</b> → past: <b>manejaste</b>.' },
              { text: 'manejé', why: '<b>Manejé</b> = I drove. For tú: <b>manejaste</b>.' },
            ],
            explain: '-AR verb, tú, past: <b>-aste</b>.',
            rule: 'Past · -AR · tú',
          },
          {
            type: 'choice', listen: true,
            say: 'Anoche tuve un problema.',
            options: [
              { text: 'Last night I had a problem.', correct: true },
              { text: 'Tonight I have a problem.', why: '<b>Anoche</b> = last night, and <b>tuve</b> is the past of tengo.' },
              { text: 'Last night he had a problem.', why: 'He had would be <b>tuvo</b>. <b>Tuve</b> = I had.' },
            ],
            explain: '<b>Tuve</b> = I had (tener, past).',
            rule: 'Irregular · tener',
          },
          {
            type: 'build',
            en: 'We ate at home.',
            answer: ['Comimos', 'en', 'casa'],
            extra: ['Comemos'],
            wrongWhy: { Comemos: '<b>Comemos</b> = we eat (now). For the past: <b>comimos</b>.' },
            explain: '-ER verb, nosotros, past: <b>-imos</b>.',
            rule: 'Past · -ER · nosotros',
          },
          {
            type: 'choice',
            prompt: '¿Qué ___ ustedes el domingo?', en: 'What did you all do on Sunday?',
            options: [
              { text: 'hicieron', correct: true },
              { text: 'hacen', why: '<b>Hacen</b> is the present. Sunday is over: <b>hicieron</b>.' },
              { text: 'hizo', why: '<b>Hizo</b> is for one person. Ustedes: <b>hicieron</b>.' },
            ],
            explain: 'Hacer in the past for ustedes: <b>hicieron</b>.',
            rule: 'Irregular · hacer',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Ayer yo ___ al basurero dos veces.', en: 'Yesterday I went to the dump twice.',
            options: [
              { text: 'fui', correct: true },
              { text: 'voy', why: '<b>Voy</b> = I go (now). <b>Ayer</b>: <b>fui</b>.' },
              { text: 'fue', why: '<b>Fue</b> = he went. For yo: <b>fui</b>.' },
            ],
            explain: 'Ir in the past for yo: <b>fui</b>.',
            rule: 'Irregular · ir',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Ayer el cliente ___ en casa todo el día.', en: 'Yesterday the customer was home all day.',
            options: [
              { text: 'estuvo', correct: true },
              { text: 'estuve', why: '<b>Estuve</b> = I was. For el cliente (él): <b>estuvo</b>.' },
              { text: 'está', why: '<b>Está</b> is the present. Yesterday: <b>estuvo</b>.' },
            ],
            explain: 'Estar in the past for él: <b>estuvo</b>.',
            rule: 'Irregular · estar',
          },
          {
            type: 'build',
            en: 'He sold the truck.',
            answer: ['Él', 'vendió', 'el', 'camión'],
            extra: ['vendo'],
            wrongWhy: { vendo: '<b>Vendo</b> = I sell. <b>Él vendió</b> = he sold.' },
            explain: '-ER verb, él, past: <b>-ió</b>.',
            rule: 'Past · -ER · él',
          },
          {
            type: 'choice',
            prompt: 'Ayer nosotros ___ a la señora López.', en: 'Yesterday we helped Mrs. López.',
            options: [
              { text: 'ayudamos', correct: true },
              { text: 'ayudaron', why: '<b>Ayudaron</b> = they helped. Nosotros: <b>ayudamos</b>.' },
              { text: 'ayudé', why: '<b>Ayudé</b> = I helped. Nosotros: <b>ayudamos</b>.' },
            ],
            explain: 'Nosotros past looks just like the present (ayudamos). <b>Ayer</b> tells you it\'s past.',
            rule: 'Past · -AR · nosotros',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice',
            prompt: 'Anoche yo ___ tacos.', en: 'Last night I ate tacos.',
            options: [
              { text: 'comí', correct: true },
              { text: 'como', why: '<b>Como</b> = I eat (now). <b>Anoche</b> → past: <b>comí</b>.' },
              { text: 'comió', why: '<b>Comió</b> = he ate. For yo: <b>comí</b>.' },
            ],
            explain: '-ER verb, yo, past: <b>-í</b>.',
            rule: 'Past · -ER · yo',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'El sábado ellos ___ diez horas.', en: 'On Saturday they worked ten hours.',
            options: [
              { text: 'trabajaron', correct: true },
              { text: 'trabajan', why: '<b>Trabajan</b> is the present. <b>El sábado</b> → past: <b>trabajaron</b>.' },
              { text: 'trabajamos', why: '<b>Trabajamos</b> = we worked. For ellos: <b>trabajaron</b>.' },
            ],
            explain: '-AR verb, ellos, past: <b>-aron</b>.',
            rule: 'Past · -AR · ellos',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Tú ___ al cliente ayer?', en: 'Did you call the customer yesterday?',
            options: [
              { text: 'llamaste', correct: true },
              { text: 'llamas', why: '<b>Llamas</b> is the present. <b>Ayer</b> → <b>llamaste</b>.' },
              { text: 'llamó', why: '<b>Llamó</b> = he called. For tú: <b>llamaste</b>.' },
            ],
            explain: '-AR verb, tú, past: <b>-aste</b>.',
            rule: 'Past · -AR · tú',
          },
          {
            type: 'choice', listen: true,
            say: 'Ayer hice mi tarea.',
            options: [
              { text: 'Yesterday I did my homework.', correct: true },
              { text: 'Yesterday he did his homework.', why: 'He did would be <b>hizo</b>. <b>Hice</b> = I did.' },
              { text: 'Today I do my homework.', why: '<b>Ayer</b> = yesterday, and <b>hice</b> is the past of hago.' },
            ],
            explain: '<b>Hice</b> = I did (hacer, past).',
            rule: 'Irregular · hacer',
          },
          {
            type: 'build',
            en: 'I opened the door.',
            answer: ['Abrí', 'la', 'puerta'],
            extra: ['Abro'],
            wrongWhy: { Abro: '<b>Abro</b> = I open (now). For the past: <b>abrí</b>.' },
            explain: '-IR verb, yo, past: <b>-í</b>.',
            rule: 'Past · -IR · yo',
          },
          {
            type: 'choice',
            prompt: 'Anoche nosotros ___ al cine.', en: 'Last night we went to the movies.',
            options: [
              { text: 'fuimos', correct: true },
              { text: 'vamos', why: '<b>Vamos</b> = we go (now). <b>Anoche</b>: <b>fuimos</b>.' },
              { text: 'fueron', why: '<b>Fueron</b> = they went. For nosotros: <b>fuimos</b>.' },
            ],
            explain: 'Ir in the past for nosotros: <b>fuimos</b>.',
            rule: 'Irregular · ir',
          },
          {
            type: 'choice',
            prompt: 'Ayer la señora López ___ muy amable.', en: 'Yesterday Mrs. López was very kind.',
            options: [
              { text: 'fue', correct: true },
              { text: 'fui', why: '<b>Fui</b> = I was. For ella: <b>fue</b>.' },
              { text: 'es', why: '<b>Es</b> is the present. <b>Ayer</b> → <b>fue</b>.' },
            ],
            explain: 'Ser in the past for ella: <b>fue</b> (same as "she went"!).',
            rule: 'Irregular · ser',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'La semana pasada yo ___ dos trabajos grandes.', en: 'Last week I had two big jobs.',
            options: [
              { text: 'tuve', correct: true },
              { text: 'tengo', why: '<b>Tengo</b> = I have (now). Last week: <b>tuve</b>.' },
              { text: 'tuvieron', why: '<b>Tuvieron</b> = they had. For yo: <b>tuve</b>.' },
            ],
            explain: 'Tener in the past for yo: <b>tuve</b>.',
            rule: 'Irregular · tener',
          },
          {
            type: 'build',
            en: 'She wrote a note.',
            answer: ['Ella', 'escribió', 'una', 'nota'],
            extra: ['escribe'],
            wrongWhy: { escribe: '<b>Escribe</b> = she writes (now). For the past: <b>escribió</b>.' },
            explain: '-IR verb, ella, past: <b>-ió</b>.',
            rule: 'Past · -IR · ella',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Ayer tú ___ con el jefe.', en: 'Yesterday you talked with the boss.',
            options: [
              { text: 'hablaste', correct: true },
              { text: 'hablas', why: '<b>Hablas</b> is the present. <b>Ayer</b> → <b>hablaste</b>.' },
              { text: 'habló', why: '<b>Habló</b> = he talked. For tú: <b>hablaste</b>.' },
            ],
            explain: '-AR verb, tú, past: <b>-aste</b>.',
            rule: 'Past · -AR · tú',
          },
        ],
      ],
    },

    { type: 'retry' },

    // ---------- the conversation: a different chat each version ----------
    {
      type: 'talkSet',
      scenes: [
        // ---------- Boss chat A ----------
        {
          type: 'talk',
          title: 'Monday morning',
          who: { name: 'Don Ramón (the boss)', emoji: '👨‍🔧' },
          setup: 'Monday morning at the shop. Your boss wants to hear about Saturday\'s big job.',
          tips: [
            { mood: 3, text: 'He buys you lunch 🌮' },
            { mood: 2, text: 'A high five ✋' },
            { mood: 1, text: 'A long, confused look' },
            { mood: 0, text: 'You clean the truck alone today 😬' },
          ],
          lines: [
            {
              them: '¡Hola, Andrew! ¿Qué hiciste el sábado?',
              en: 'Hi, Andrew! What did you do on Saturday?',
              choices: [
                { es: 'Trabajé en un garaje muy grande.', en: 'I worked in a really big garage.', good: true,
                  note: '<b>Trabajé</b> = I worked. Finished, so past.' },
                { es: 'Trabajo en un garaje muy grande.', en: 'I work in a really big garage.',
                  react: '¿Ahora? ¡Pero estás aquí! 🤔', reactEn: 'Right now? But you\'re here!',
                  why: '<b>Trabajo</b> is present (I work). Saturday is over: <b>trabajé</b>.' },
                { es: 'Trabajó en un garaje muy grande.', en: 'He worked in a really big garage.',
                  react: '¿Quién? ¿Tu hermano? 🤨', reactEn: 'Who? Your brother?',
                  why: '<b>Trabajó</b> (with the accent) = he worked. For I: <b>trabajé</b>.' },
              ],
            },
            {
              them: '¿Y qué encontraste?',
              en: 'And what did you find?',
              choices: [
                { es: 'Encontré un sofá, tres colchones y un piano.', en: 'I found a couch, three mattresses and a piano.', good: true,
                  note: '<b>Encontré</b> = I found. -AR verb, yo, past: <b>-é</b>.' },
                { es: 'Encuentro un piano.', en: 'I find a piano.',
                  react: '¿Ahora mismo? ¿Aquí? 😂', reactEn: 'Right now? Here?',
                  why: '<b>Encuentro</b> is present. For Saturday: <b>encontré</b>.' },
                { es: 'Encontramos una piano.', en: 'We found a (girl-word) piano.',
                  react: '¿UNA piano? 🎹', reactEn: 'A (girl word) piano?',
                  why: '<b>Encontramos</b> is fine (we found), but <b>piano</b> is a boy word: <b>un piano</b>.' },
              ],
            },
            {
              them: '¡Un piano! ¿Fue difícil?',
              en: 'A piano! Was it hard?',
              choices: [
                { es: 'Sí, fue muy difícil. El piano es muy pesado.', en: 'Yes, it was really hard. The piano is really heavy.', good: true,
                  note: '<b>Fue</b> = it was (ser, past). And <b>es pesado</b>: it\'s still heavy today!' },
                { es: 'Sí, fui muy difícil.', en: 'Yes, I was really difficult.',
                  react: '¿Tú fuiste difícil? Ja, eso no es nuevo. 😏', reactEn: 'YOU were difficult? Ha, that\'s not new.',
                  why: '<b>Fui</b> = I was. The job was hard: <b>fue difícil</b>.' },
                { es: 'No, mañana.', en: 'No, tomorrow.',
                  react: '¿Mañana? Te pregunté por el sábado. 🙃', reactEn: 'Tomorrow? I asked about Saturday.',
                  why: 'He asked about the past. Answer in the past: <b>fue muy difícil</b>.' },
              ],
            },
            {
              them: '¿Y el cliente les pagó bien?',
              en: 'And did the customer pay you guys well?',
              choices: [
                { es: 'Sí, nos pagó y nos dio una propina.', en: 'Yes, he paid us and gave us a tip.', good: true,
                  note: '<b>Pagó</b> = he paid. <b>Dio</b> = he gave (dar is irregular: di, diste, dio…).' },
                { es: 'Sí, me pago.', en: 'Yes, I pay myself.',
                  react: '¿Te pagas a ti mismo? 😅', reactEn: 'You pay yourself?',
                  why: 'No accent: <b>pago</b> = I pay. The customer paid: <b>pagó</b>.' },
                { es: 'Sí, pagaré.', en: 'Yes, I will pay.',
                  react: '¿Tú? ¿Le vas a pagar al cliente? 😂', reactEn: 'You? You\'re going to pay the customer?',
                  why: '<b>Pagaré</b> = I will pay (future). The customer already paid: <b>pagó</b>.' },
              ],
            },
            {
              them: '¡Qué bien! ¿Y qué hiciste después?',
              en: 'Nice! And what did you do afterwards?',
              choices: [
                { es: 'Fui a casa y comí pizza.', en: 'I went home and ate pizza.', good: true,
                  note: '<b>Fui</b> = I went. <b>Comí</b> = I ate (-er verb, yo: <b>-í</b>).' },
                { es: 'Voy a casa y como pizza.', en: 'I go home and eat pizza.',
                  react: '¿Ahora? ¡Es lunes por la mañana! 🍕', reactEn: 'Now? It\'s Monday morning!',
                  why: '<b>Voy</b> and <b>como</b> are present. Afterwards (on Saturday): <b>fui</b>, <b>comí</b>.' },
                { es: 'Fue a casa y comió pizza.', en: 'He went home and ate pizza.',
                  react: '¿Quién? ¿El piano? 😂', reactEn: 'Who? The piano?',
                  why: '<b>Fue</b> and <b>comió</b> are the he / she forms. For I: <b>fui</b>, <b>comí</b>.' },
              ],
            },
            {
              them: 'Bueno, hoy tenemos otro trabajo. ¡Vamos!',
              en: 'OK, today we have another job. Let\'s go!',
              choices: [
                { es: '¡Vamos! Yo manejo el camión.', en: 'Let\'s go! I\'ll drive the truck.', good: true,
                  note: 'Back to the present for right now: <b>manejo</b>. Spanish often uses the present for "I\'ll…" right now.' },
                { es: '¡Vamos! Yo manejé el camión.', en: 'Let\'s go! I drove the truck.',
                  react: 'Sí, el sábado. Pero hoy, ¿quién maneja? 🤨', reactEn: 'Yes, on Saturday. But today, who\'s driving?',
                  why: '<b>Manejé</b> = I drove (past). For right now: <b>manejo</b>.' },
                { es: 'No, gracias. Ayer comí mucho.', en: 'No thanks. Yesterday I ate a lot.',
                  react: '¡Ay, Andrew! Vamos, vamos. 🙄', reactEn: 'Oh, Andrew! Come on, come on.',
                  why: 'Great past tense (<b>comí</b>)! But your boss wants you working. Say <b>¡Vamos!</b>' },
              ],
            },
          ],
        },

        // ---------- Boss chat B ----------
        {
          type: 'talk',
          title: 'How was your weekend?',
          who: { name: 'Don Ramón (the boss)', emoji: '👨‍🔧' },
          setup: 'Monday morning. Before the first job, Don Ramón wants to hear about your weekend.',
          tips: [
            { mood: 3, text: 'He gives you Friday off 🎉' },
            { mood: 2, text: 'A pat on the back' },
            { mood: 1, text: 'A long sigh' },
            { mood: 0, text: 'You wash all the trucks 😬' },
          ],
          lines: [
            {
              them: '¡Hola, Andrew! ¿Qué tal tu fin de semana?',
              en: 'Hi, Andrew! How was your weekend?',
              choices: [
                { es: '¡Muy bien! El domingo jugué fútbol.', en: 'Really good! On Sunday I played soccer.', good: true,
                  note: '<b>Jugué</b> = I played. Jugar gets a <b>u</b> in yo (jug<b>u</b>é) so the g stays hard.' },
                { es: '¡Muy bien! El domingo juego fútbol.', en: 'Really good! On Sunday I play soccer.',
                  react: '¿Juegas los domingos? ¿Y este domingo? 🤔', reactEn: 'You play on Sundays? And this Sunday?',
                  why: '<b>Juego</b> is the present (I play). Last Sunday: <b>jugué</b>.' },
                { es: '¡Muy bien! El domingo jugó fútbol.', en: 'Really good! On Sunday he played soccer.',
                  react: '¿Quién jugó? 🤨', reactEn: 'Who played?',
                  why: '<b>Jugó</b> = he played. For I: <b>jugué</b>.' },
              ],
            },
            {
              them: '¡Qué divertido! ¿Ganaron?',
              en: 'How fun! Did you guys win?',
              choices: [
                { es: 'Sí, ganamos tres a uno.', en: 'Yes, we won three to one.', good: true,
                  note: '<b>Ganamos</b> = we won (nosotros, past). Tres a uno = 3 to 1.' },
                { es: 'Sí, ganaron tres a uno.', en: 'Yes, they won three to one.',
                  react: '¿Ellos ganaron? ¿Y tu equipo? 😅', reactEn: 'THEY won? And your team?',
                  why: '<b>Ganaron</b> = they won. Your team (we): <b>ganamos</b>.' },
                { es: 'Sí, siempre gano.', en: 'Yes, I always win.',
                  react: '¿Siempre? ¡Qué modesto! 😂', reactEn: 'Always? So modest!',
                  why: '<b>Gano</b> = I win (always). He asked about Sunday: <b>ganamos</b>.' },
              ],
            },
            {
              them: '¡Bravo! ¿Y después qué hiciste?',
              en: 'Bravo! And what did you do after?',
              choices: [
                { es: 'Comí con mi familia y vi una película.', en: 'I ate with my family and watched a movie.', good: true,
                  note: '<b>Comí</b> = I ate. <b>Vi</b> = I saw / watched (ver is short in the past: vi, viste, vio).' },
                { es: 'Como con mi familia.', en: 'I eat with my family.',
                  react: '¿Ahora? ¡Son las ocho de la mañana! 😂', reactEn: "Now? It's eight in the morning!",
                  why: '<b>Como</b> is the present. After the game: <b>comí</b>.' },
                { es: 'Comieron con mi familia.', en: 'They ate with my family.',
                  react: '¿Quiénes? 🤔', reactEn: 'Who did?',
                  why: '<b>Comieron</b> = they ate. For I: <b>comí</b>.' },
              ],
            },
            {
              them: '¿Qué película viste?',
              en: 'What movie did you see?',
              choices: [
                { es: 'Una película de terror. ¡Fue muy buena!', en: 'A horror movie. It was really good!', good: true,
                  note: '<b>Fue</b> = it was (ser, past). <b>Película</b> is a girl word, so: <b>buena</b>.' },
                { es: 'Una película de terror. ¡Fue muy bueno!', en: 'A horror movie. It was really good! (boy form)',
                  react: '¿"Bueno"? ¿La película? 🤔', reactEn: '"Bueno"? The movie?',
                  why: '<b>Película</b> is a girl word, so it\'s <b>muy buena</b>.' },
                { es: 'Veo una película de terror.', en: "I'm watching a horror movie.",
                  react: '¿Ahora? ¿En el trabajo? 😳', reactEn: 'Now? At work?',
                  why: '<b>Veo</b> = I watch (now). For the weekend: <b>vi</b>.' },
              ],
            },
            {
              them: 'Oye, ¿llamaste a la señora López?',
              en: 'Hey, did you call Mrs. López?',
              choices: [
                { es: 'Sí, la llamé ayer. Todo está bien.', en: 'Yes, I called her yesterday. Everything is fine.', good: true,
                  note: '<b>Llamé</b> = I called. <b>La</b> = her.' },
                { es: 'Sí, la llamo ayer.', en: 'Yes, I call her yesterday.',
                  react: '¿La llamas ayer? ¿Cómo? 😅', reactEn: 'You call her yesterday? How?',
                  why: '<b>Llamo</b> is the present. <b>Ayer</b> → <b>llamé</b>.' },
                { es: 'Sí, me llamó ayer.', en: 'Yes, she called me yesterday.',
                  react: 'Ella te llamó… pero, ¿tú la llamaste? 🤔', reactEn: 'She called you… but did YOU call her?',
                  why: '<b>Me llamó</b> = she called me. He asked if <i>you</i> called her: <b>la llamé</b>.' },
              ],
            },
            {
              them: '¡Perfecto! Bueno, a trabajar.',
              en: "Perfect! OK, let's get to work.",
              choices: [
                { es: '¡Vamos! Hoy va a ser un buen día.', en: "Let's go! Today is going to be a good day.", good: true,
                  note: '<b>Va a ser</b> = is going to be. Back to the future!' },
                { es: 'No, ayer trabajé mucho.', en: 'No, yesterday I worked a lot.',
                  react: '¡Ja! Hoy también, amigo. 😏', reactEn: 'Ha! Today too, buddy.',
                  why: 'Good past tense (<b>trabajé</b>)! But it\'s time to work: <b>¡Vamos!</b>' },
                { es: '¡Vamos! Hoy fue un buen día.', en: "Let's go! Today was a good day.",
                  react: '¿Fue? ¡Pero apenas empieza! 🤨', reactEn: '"Was"? It\'s just starting!',
                  why: '<b>Fue</b> = it was (past). The day is just starting: <b>va a ser un buen día</b>.' },
              ],
            },
          ],
        },

        // ---------- Boss chat C ----------
        {
          type: 'talk',
          title: 'What happened to the truck?',
          who: { name: 'Don Ramón (the boss)', emoji: '👨‍🔧' },
          setup: 'Yesterday the truck broke down in the middle of a job. Don Ramón wants the whole story.',
          tips: [
            { mood: 3, text: 'He gives you Friday off 🎉' },
            { mood: 2, text: 'A pat on the back' },
            { mood: 1, text: 'A long sigh' },
            { mood: 0, text: 'You wash all the trucks 😬' },
          ],
          lines: [
            {
              them: 'Andrew, ¿qué pasó ayer con el camión?',
              en: 'Andrew, what happened with the truck yesterday?',
              choices: [
                { es: 'Tuvimos un problema con el motor.', en: 'We had a problem with the engine.', good: true,
                  note: '<b>Tuvimos</b> = we had (tener, past). <b>Un problema</b>: a rebel boy word.' },
                { es: 'Tenemos un problema con el motor.', en: 'We have a problem with the engine.',
                  react: '¿Todavía? ¡Ay, no! 😱', reactEn: 'Still?! Oh no!',
                  why: '<b>Tenemos</b> is the present (we have). Yesterday: <b>tuvimos</b>.' },
                { es: 'Tuvimos una problema con el motor.', en: 'We had a (girl-word) problem with the engine.',
                  react: '¿"Una" problema? 🙃', reactEn: '"Una" problema?',
                  why: '<b>Problema</b> is a rebel boy word: <b>un problema</b>.' },
              ],
            },
            {
              them: '¿Y qué hicieron?',
              en: 'And what did you guys do?',
              choices: [
                { es: 'Llamé a un mecánico.', en: 'I called a mechanic.', good: true,
                  note: '<b>Llamé</b> = I called. You call <i>to</i> someone: llamar <b>a</b>.' },
                { es: 'Llamo a un mecánico.', en: 'I call a mechanic.',
                  react: '¿Ahora? Ya está arreglado. 😅', reactEn: "Now? It's already fixed.",
                  why: '<b>Llamo</b> is the present. Yesterday: <b>llamé</b>.' },
                { es: 'Llamaste a un mecánico.', en: 'You called a mechanic.',
                  react: '¿Yo? No, yo no llamé a nadie. 🤨', reactEn: "Me? No, I didn't call anyone.",
                  why: '<b>Llamaste</b> = you called. For I: <b>llamé</b>.' },
              ],
            },
            {
              them: '¿Y el mecánico vino rápido?',
              en: 'And did the mechanic come quickly?',
              choices: [
                { es: 'Sí, llegó en veinte minutos.', en: 'Yes, he got there in twenty minutes.', good: true,
                  note: '<b>Llegó</b> = he arrived. (<b>Vino</b> = he came: venir is irregular.)' },
                { es: 'Sí, llego en veinte minutos.', en: 'Yes, I arrive in twenty minutes.',
                  react: '¿Tú llegas? ¿O él? 🤔', reactEn: 'YOU arrive? Or him?',
                  why: '<b>Llego</b> (no accent) = I arrive. He arrived: <b>llegó</b>.' },
                { es: 'No, mañana.', en: 'No, tomorrow.',
                  react: '¿Mañana? Te pregunto por ayer. 🙃', reactEn: "Tomorrow? I'm asking about yesterday.",
                  why: 'He asked about yesterday. Answer in the past: <b>llegó en veinte minutos</b>.' },
              ],
            },
            {
              them: '¿Y terminaron el trabajo?',
              en: 'And did you guys finish the job?',
              choices: [
                { es: 'Sí, terminamos a las cinco.', en: 'Yes, we finished at five.', good: true,
                  note: '<b>Terminamos</b> = we finished. <b>A las cinco</b> = at five o\'clock.' },
                { es: 'Sí, terminaron a las cinco.', en: 'Yes, they finished at five.',
                  react: '¿Ellos? ¿Y tú dónde estabas? 🤨', reactEn: 'They did? And where were you?',
                  why: '<b>Terminaron</b> = they finished. You and your team: <b>terminamos</b>.' },
                { es: 'Sí, terminamos a la cinco.', en: 'Yes, we finished at the (one) five.',
                  react: '¿"La" cinco? 🤔', reactEn: '"La" five?',
                  why: 'Times after one o\'clock are plural: <b>a las cinco</b>.' },
              ],
            },
            {
              them: '¿Y la clienta? ¿Se enojó?',
              en: 'And the customer? Did she get angry?',
              choices: [
                { es: 'No, fue muy paciente. Nos dio café.', en: 'No, she was very patient. She gave us coffee.', good: true,
                  note: '<b>Fue</b> = she was (ser, past). <b>Nos dio</b> = she gave us.' },
                { es: 'No, fui muy paciente.', en: 'No, I was very patient.',
                  react: 'Tú fuiste paciente… ¿y ella? 😄', reactEn: 'YOU were patient… and her?',
                  why: '<b>Fui</b> = I was. She was: <b>fue</b>.' },
                { es: 'No, es muy paciente y nos da café.', en: "No, she's very patient and gives us coffee.",
                  react: '¿Cada día? 🤔', reactEn: 'Every day?',
                  why: '<b>Es</b> and <b>da</b> are present. Yesterday: <b>fue</b>, <b>dio</b>.' },
              ],
            },
            {
              them: 'Bien hecho, Andrew. Lo hiciste muy bien.',
              en: 'Well done, Andrew. You handled it really well.',
              choices: [
                { es: 'Gracias, jefe. Aprendí mucho.', en: 'Thanks, boss. I learned a lot.', good: true,
                  note: '<b>Aprendí</b> = I learned. -ER past, yo: <b>-í</b>.' },
                { es: 'Gracias, jefe. Aprendió mucho.', en: 'Thanks, boss. He learned a lot.',
                  react: '¿Quién? ¿El mecánico? 😂', reactEn: 'Who? The mechanic?',
                  why: '<b>Aprendió</b> = he learned. For I: <b>aprendí</b>.' },
                { es: 'De nada, jefe.', en: "You're welcome, boss.",
                  react: '¿De nada? 🤨 Yo no te di nada.', reactEn: "\"You're welcome\"? I didn't give you anything.",
                  why: '<b>De nada</b> answers a thank-you. To a compliment, say <b>gracias</b>.' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
