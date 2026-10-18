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

    // ---------- practice ----------
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

    { type: 'retry' },

    // ---------- the conversation ----------
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
  ],
});
