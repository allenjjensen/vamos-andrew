// Lesson: El or La? Boy words and girl words.
// Sets up gender and agreement, which this/that and my/mine in the gym build on.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'el-la',
  title: 'El or La?',
  subtitle: 'Boy words, girl words, and making them match',
  minutes: 10,

  recap: `<p><b>-o</b> → usually a boy word (el). <b>-a</b> → usually a girl word (la).</p>
    <p>Always girl: <b>-ción, -sión, -dad</b>. Always boy: <b>-aje, -or</b>, and most <b>-ma</b>.</p>
    <p>The rebels: <b>"El día del problema, el mapa en la mano."</b></p>
    <p>Describing words copy the ending: <b>la caja roja, los camiones rojos</b>.</p>`,

  phrases: [
    { es: 'el camión rojo', en: 'the red truck' },
    { es: 'las cajas pesadas', en: 'the heavy boxes' },
    { es: 'Necesito una llave.', en: 'I need a key.' },
    { es: 'No hay problema.', en: 'No problem.' },
    { es: 'Los clientes están contentos.', en: 'The customers are happy.' },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '👦👧',
      title: 'El or La?',
      learn: [
        'Why every Spanish noun is a "boy word" or a "girl word"',
        'Endings that tell you which one it is',
        'How describing words match (la caja roja)',
      ],
    },

    // ---------- teaching ----------
    {
      type: 'teach',
      title: 'Every noun is a boy or a girl',
      body: `<p>In Spanish, every noun is <b>masculine</b> (a boy word) or <b>feminine</b> (a girl word).</p>
        <p>It's just grammar, not meaning. A dress can be a boy word (<b>el vestido</b>).</p>`,
      rows: [
        { es: 'el camión', en: 'the truck (boy word)' },
        { es: 'la caja', en: 'the box (girl word)' },
        { es: 'el libro', en: 'the book (boy word)' },
        { es: 'la casa', en: 'the house (girl word)' },
      ],
      trick: 'Learn every new word <b>with its el or la</b>. Not "camión", but "<b>el</b> camión". Then you never have to guess.',
    },
    {
      type: 'teach', kicker: 'The little words',
      title: 'The, a, some',
      rows: [
        { tag: 'the', es: 'el · la', en: 'one boy word · one girl word' },
        { tag: 'the', es: 'los · las', en: 'more than one' },
        { tag: 'a / an', es: 'un · una', en: 'un camión · una caja' },
        { tag: 'some', es: 'unos · unas', en: 'unos libros · unas cajas' },
      ],
      trick: 'A mixed group (boys and girls) uses the boy form: <b>los clientes</b>, even if most of them are women.',
    },
    {
      type: 'teach', kicker: 'Memory trick',
      title: 'Endings that tell you',
      rows: [
        { tag: '-o', es: 'el carro', en: 'usually a boy word' },
        { tag: '-a', es: 'la puerta', en: 'usually a girl word' },
        { tag: '-ción / -sión', es: 'la canción, la televisión', en: 'always girl words' },
        { tag: '-dad', es: 'la ciudad', en: 'always girl words' },
        { tag: '-aje', es: 'el garaje, el viaje', en: 'always boy words' },
        { tag: '-or', es: 'el refrigerador', en: 'almost always boy words' },
        { tag: '-ma', es: 'el problema, el sistema', en: 'usually boy words (sneaky!)' },
      ],
      trick: 'The rebels, in one sentence: <b>"El día del problema, el mapa en la mano."</b> (The day of the problem, the map in hand.) Día, problema and mapa are boy words. Mano is a girl word.',
    },
    {
      type: 'teach', kicker: 'Making them match',
      title: 'Describing words copy the noun',
      body: '<p>Describing words go <b>after</b> the noun and copy its ending: boy or girl, one or more.</p>',
      rows: [
        { es: 'el camión rojo', en: 'the red truck' },
        { es: 'la caja roja', en: 'the red box' },
        { es: 'los camiones rojos', en: 'the red trucks' },
        { es: 'las cajas rojas', en: 'the red boxes' },
        { es: 'el sofá grande · la casa grande', en: 'words ending in -e stay the same' },
      ],
      trick: 'It works with ser and estar too: <b>La caja es pesada. Los clientes están contentos.</b>',
    },

    // ---------- practice ----------
    {
      type: 'choice',
      prompt: '___ caja', en: 'the box',
      options: [
        { text: 'la', correct: true },
        { text: 'el', why: '<b>Caja</b> ends in -a, so it\'s a girl word: <b>la caja</b>.' },
        { text: 'las', why: '<b>Las</b> is for more than one. One box: <b>la caja</b>.' },
      ],
      explain: '-a ending → girl word → <b>la</b>.',
      rule: '-a = girl word',
    },
    {
      type: 'choice',
      prompt: '___ problema', en: 'the problem',
      options: [
        { text: 'el', correct: true },
        { text: 'la', why: 'Sneaky! <b>Problema</b> ends in -a but it\'s a boy word: <b>el problema</b>. Remember: "El día del problema…"' },
      ],
      explain: 'A rebel: <b>el problema</b>. Most -ma words are boy words.',
      rule: 'Rebel: -ma',
    },
    {
      type: 'choice',
      prompt: 'Necesito ___ llave.', en: 'I need a key.',
      options: [
        { text: 'una', correct: true },
        { text: 'un', why: '<b>Llave</b> is a girl word (la llave), so "a key" is <b>una llave</b>.' },
        { text: 'la', why: '<b>La llave</b> means "the key." For "a key," use <b>una</b>.' },
      ],
      explain: 'A / an for a girl word: <b>una</b>.',
      rule: 'un · una',
    },
    {
      type: 'choice',
      prompt: '___ canción', en: 'the song',
      options: [
        { text: 'la', correct: true },
        { text: 'el', why: 'Words ending in <b>-ción</b> are always girl words: <b>la canción</b>.' },
      ],
      explain: '<b>-ción</b> is always a girl word.',
      rule: '-ción = girl word',
    },
    {
      type: 'choice', kicker: 'Make it match',
      prompt: 'La casa es ___.', en: 'The house is white.',
      options: [
        { text: 'blanca', correct: true },
        { text: 'blanco', why: '<b>Casa</b> is a girl word, so the describing word ends in -a too: <b>blanca</b>.' },
        { text: 'blancas', why: '<b>Blancas</b> is for more than one. One house: <b>blanca</b>.' },
      ],
      explain: 'Girl word + one thing → <b>-a</b>: la casa blanca.',
      rule: 'Agreement',
    },
    {
      type: 'build',
      en: 'the red boxes',
      answer: ['las', 'cajas', 'rojas'],
      extra: ['los', 'rojos'],
      wrongWhy: {
        los: '<b>Cajas</b> are girl words, so "the" is <b>las</b>.',
        rojos: '<b>Rojos</b> is the boy form. Boxes are girl words: <b>rojas</b>.',
      },
      explain: 'Everything matches: <b>las</b> cajas roj<b>as</b>.',
      rule: 'Agreement',
    },
    {
      type: 'choice', kicker: 'On the job',
      prompt: 'Los clientes están ___.', en: 'The customers are happy.',
      options: [
        { text: 'contentos', correct: true },
        { text: 'contentas', why: 'Only if every customer is a woman. A mixed group uses the boy form: <b>contentos</b>.' },
        { text: 'contento', why: '<b>Contento</b> is for one person. Customers is more than one: <b>contentos</b>.' },
      ],
      explain: 'Mixed or unknown group → boy form, plural: <b>contentos</b>.',
      rule: 'Mixed group = boy form',
    },
    {
      type: 'choice', listen: true,
      say: 'Las cajas son muy pesadas.',
      options: [
        { text: 'The boxes are very heavy.', correct: true },
        { text: 'The box is very heavy.', why: 'Listen for the <b>s</b>: <b>las cajas son</b> is more than one box.' },
        { text: 'The houses are very heavy.', why: 'Houses would be <b>casas</b>. Listen again: <b>cajas</b>, boxes.' },
      ],
      explain: '<b>Las cajas pesadas</b>: every word ends in -as because boxes are girl words and more than one.',
      rule: 'Agreement',
    },
    {
      type: 'choice',
      prompt: '___ día', en: 'the day',
      options: [
        { text: 'el', correct: true },
        { text: 'la', why: 'A rebel! <b>Día</b> ends in -a but it\'s a boy word. That\'s why it\'s <b>buenos días</b>, not buenas días.' },
      ],
      explain: '<b>El día</b>. That\'s why we say <b>buenos días</b>.',
      rule: 'Rebel',
    },
    {
      type: 'choice',
      prompt: '___ mano', en: 'the hand',
      options: [
        { text: 'la', correct: true },
        { text: 'el', why: 'A rebel! <b>Mano</b> ends in -o but it\'s a girl word: <b>la mano</b>.' },
      ],
      explain: '<b>La mano</b>: "…el mapa en la mano."',
      rule: 'Rebel',
    },
    {
      type: 'build',
      en: 'a big truck',
      answer: ['un', 'camión', 'grande'],
      extra: ['una'],
      wrongWhy: { una: '<b>Camión</b> is a boy word (el camión), so "a" is <b>un</b>.' },
      explain: '<b>Grande</b> ends in -e, so it stays the same for boy and girl words.',
      rule: 'un · una',
    },
    {
      type: 'choice', kicker: 'On the job',
      prompt: 'El garaje está muy ___.', en: 'The garage is very dirty.',
      options: [
        { text: 'sucio', correct: true },
        { text: 'sucia', why: '<b>Garaje</b> is a boy word (all -aje words are), so: <b>sucio</b>.' },
      ],
      explain: '-aje words are boy words: el garaje sucio.',
      rule: '-aje = boy word',
    },

    { type: 'retry' },

    // ---------- mini game ----------
    {
      type: 'game',
      title: 'El or La? Race',
      howto: 'Tap <b>EL</b> or <b>LA</b> for each word. 60 seconds. Get 3 in a row for double points!',
      seconds: 60,
      buttons: [['el', 'EL'], ['la', 'LA']],
      pool: [
        { s: '___ casa', v: 'la', f: 'la', why: '-a ending' },
        { s: '___ libro', v: 'el', f: 'el', why: '-o ending' },
        { s: '___ problema', v: 'el', f: 'el', why: 'rebel: -ma' },
        { s: '___ mano', v: 'la', f: 'la', why: 'rebel' },
        { s: '___ canción', v: 'la', f: 'la', why: '-ción' },
        { s: '___ ciudad', v: 'la', f: 'la', why: '-dad' },
        { s: '___ camión', v: 'el', f: 'el', why: '-ón (not -ción)' },
        { s: '___ día', v: 'el', f: 'el', why: 'rebel' },
        { s: '___ mapa', v: 'el', f: 'el', why: 'rebel' },
        { s: '___ televisión', v: 'la', f: 'la', why: '-sión' },
        { s: '___ refrigerador', v: 'el', f: 'el', why: '-or' },
        { s: '___ puerta', v: 'la', f: 'la', why: '-a ending' },
        { s: '___ carro', v: 'el', f: 'el', why: '-o ending' },
        { s: '___ silla', v: 'la', f: 'la', why: '-a ending' },
        { s: '___ sofá', v: 'el', f: 'el', why: 'learn it: el sofá' },
        { s: '___ trabajo', v: 'el', f: 'el', why: '-o ending' },
        { s: '___ basura', v: 'la', f: 'la', why: '-a ending' },
        { s: '___ garaje', v: 'el', f: 'el', why: '-aje' },
        { s: '___ viaje', v: 'el', f: 'el', why: '-aje' },
        { s: '___ sistema', v: 'el', f: 'el', why: 'rebel: -ma' },
        { s: '___ universidad', v: 'la', f: 'la', why: '-dad' },
        { s: '___ información', v: 'la', f: 'la', why: '-ción' },
        { s: '___ color', v: 'el', f: 'el', why: '-or' },
        { s: '___ colchón', v: 'el', f: 'el', why: '-ón (not -ción)' },
        { s: '___ caja', v: 'la', f: 'la', why: '-a ending' },
        { s: '___ cocina', v: 'la', f: 'la', why: '-a ending' },
        { s: '___ teléfono', v: 'el', f: 'el', why: '-o ending' },
        { s: '___ semana', v: 'la', f: 'la', why: '-a ending' },
        { s: '___ idioma', v: 'el', f: 'el', why: 'rebel: -ma' },
        { s: '___ foto', v: 'la', f: 'la', why: 'rebel: short for la fotografía' },
      ],
    },
  ],
});
