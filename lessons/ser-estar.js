// Lesson 1: Ser vs. Estar.
// Every wrong option carries its own "why", so the feedback answers the exact mistake.
// "rule" names the memory-trick letter the sentence belongs to (DOCTOR for ser, PLACE for estar).
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'ser-estar',
  title: 'Ser vs. Estar',
  subtitle: 'Two ways to say "to be"',
  minutes: 10,

  recap: `<p><b>SER = DOCTOR</b><br>Description, Occupation, Characteristic, Time, Origin, Relationship</p>
    <p><b>ESTAR = PLACE</b><br>Position, Location, Action, Condition, Emotion</p>
    <p>"How you feel and where you are, that's when you use <b>estar</b>."</p>`,

  phrases: [
    { es: '¿Cómo está usted?', en: 'How are you? (polite, for customers)' },
    { es: 'Estoy muy cansado.', en: "I'm very tired." },
    { es: 'Soy estudiante.', en: 'I am a student.' },
    { es: 'El sofá está en el garaje.', en: 'The couch is in the garage.' },
    { es: 'El camión está lleno.', en: 'The truck is full.' },
    { es: 'La cita es a las dos.', en: 'The appointment is at two.' },
    { es: 'Los clientes están esperando.', en: 'The customers are waiting.' },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '🤔',
      title: 'Ser vs. Estar',
      learn: [
        'Why Spanish has two verbs for "to be"',
        'Two memory tricks so you never mix them up',
        'Phrases for class and for the job',
      ],
    },

    // ---------- warm-up: what does he already know? ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'Yo ___ de Texas.', en: 'I am from Texas.',
      options: [
        { text: 'soy', correct: true },
        { text: 'estoy', why: "Estoy is for where you are right now. Where you're <i>from</i> never changes, so use <b>soy</b>." },
      ],
      explain: "Where you're from uses <b>ser</b>.",
      rule: 'SER · Origin',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'Hoy ___ muy cansado.', en: "Today I'm very tired.",
      options: [
        { text: 'estoy', correct: true },
        { text: 'soy', why: '<b>Soy cansado</b> sounds like "I\'m a tired kind of person," like it\'s your personality. Tired today is a condition, so use <b>estoy</b>.' },
      ],
      explain: 'How you feel today uses <b>estar</b>.',
      rule: 'ESTAR · Condition',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: '¿Dónde ___ la biblioteca?', en: 'Where is the library?',
      options: [
        { text: 'está', correct: true },
        { text: 'es', why: 'Asking <i>where</i> something is means location, and location uses <b>estar</b>.' },
      ],
      explain: '"Where is…?" is always <b>¿Dónde está…?</b>',
      rule: 'ESTAR · Location',
    },
    {
      type: 'warmupResult',
      all: 'Nice, you already have a feel for it. The next cards turn that feeling into rules, so you get it right every time.',
      some: 'Good start. The next cards give you two tricks that make this easy.',
      none: 'No worries, this trips up almost everyone. Two short tricks are coming up.',
    },

    // ---------- teaching ----------
    {
      type: 'teach',
      title: 'Two verbs, one meaning',
      body: `<p>English has one "to be." Spanish has two:</p>
        <p><b>SER</b> is what something <b>is</b>: who it is, what it's like, where it's from.</p>
        <p><b>ESTAR</b> is how or where something is <b>right now</b>.</p>`,
      rows: [
        { es: 'Soy alto.', en: 'I am tall. (always)' },
        { es: 'Estoy cansado.', en: 'I am tired. (right now)' },
        { es: 'Él es aburrido.', en: 'He is boring. (his personality)' },
        { es: 'Él está aburrido.', en: 'He is bored. (right now)' },
      ],
      trick: 'Same word, different verb, different meaning. That last pair is a classic test question.',
    },
    {
      type: 'teach', kicker: 'Memory trick #1',
      title: 'SER = DOCTOR',
      body: '<p>Being a doctor is who you <i>are</i>. Use <b>ser</b> for:</p>',
      rows: [
        { tag: '<u>D</u>escription', es: 'Ella es alta.', en: 'She is tall.' },
        { tag: '<u>O</u>ccupation', es: 'Soy estudiante.', en: 'I am a student.' },
        { tag: '<u>C</u>haracteristic', es: 'Mi jefe es simpático.', en: 'My boss is nice.' },
        { tag: '<u>T</u>ime', es: 'Son las tres.', en: "It's three o'clock." },
        { tag: '<u>O</u>rigin', es: 'Somos de México.', en: 'We are from Mexico.' },
        { tag: '<u>R</u>elationship', es: 'Él es mi hermano.', en: 'He is my brother.' },
      ],
    },
    {
      type: 'teach', kicker: 'Memory trick #2',
      title: 'ESTAR = PLACE',
      body: '<p>Use <b>estar</b> for:</p>',
      rows: [
        { tag: '<u>P</u>osition', es: 'Estoy sentado.', en: 'I am sitting down.' },
        { tag: '<u>L</u>ocation', es: 'El sofá está en el garaje.', en: 'The couch is in the garage.' },
        { tag: '<u>A</u>ction', es: 'Estoy trabajando.', en: 'I am working. (-ando / -iendo words)' },
        { tag: '<u>C</u>ondition', es: 'El camión está lleno.', en: 'The truck is full.' },
        { tag: '<u>E</u>motion', es: 'Estamos contentos.', en: 'We are happy.' },
      ],
      trick: 'A rhyme to remember: <b>"How you feel and where you are, that\'s when you use estar."</b>',
    },
    {
      type: 'teach', kicker: 'The forms',
      title: 'Ser and estar, side by side',
      body: '<p>Left is <b>ser</b>, right is <b>estar</b>.</p>',
      rows: [
        { tag: 'yo', es: 'soy · estoy', say: 'yo soy. yo estoy.', en: 'I am' },
        { tag: 'tú', es: 'eres · estás', say: 'tú eres. tú estás.', en: 'you are (friend)' },
        { tag: 'él / ella / usted', es: 'es · está', say: 'él es. él está.', en: 'he / she is, you are (polite)' },
        { tag: 'nosotros', es: 'somos · estamos', say: 'nosotros somos. nosotros estamos.', en: 'we are' },
        { tag: 'ellos / ustedes', es: 'son · están', say: 'ellos son. ellos están.', en: 'they are, you all are' },
      ],
      trick: 'Estás, está and están all have an accent. Put the punch at the end: es-<b>TÁ</b>.',
    },

    // ---------- practice ----------
    {
      type: 'choice',
      prompt: 'Yo ___ estudiante.', en: 'I am a student.',
      options: [
        { text: 'soy', correct: true },
        { text: 'estoy', why: 'Estoy is for how or where you are. Being a student is your role, which is <b>Occupation</b> in DOCTOR, so use <b>soy</b>.' },
        { text: 'es', why: 'Right verb, wrong person. <b>Es</b> is for he, she or usted. With <b>yo</b> it\'s <b>soy</b>.' },
      ],
      explain: "Jobs and roles use <b>ser</b>, even if they're not forever.",
      rule: 'SER · Occupation',
    },
    {
      type: 'choice', kicker: 'On the job: greeting a customer',
      prompt: '¿Cómo ___ usted?', en: 'How are you? (polite)',
      options: [
        { text: 'está', correct: true },
        { text: 'es', why: '<b>¿Cómo es usted?</b> means "What are you like?", like asking them to describe their personality. To ask how they\'re doing, use <b>está</b>.' },
        { text: 'estás', why: 'Close! <b>Estás</b> is for <b>tú</b> (friends). With a customer, be polite and use <b>usted</b>, so it\'s <b>está</b>.' },
      ],
      explain: 'How someone is doing today is a condition. With customers, use the polite <b>usted</b> form.',
      rule: 'ESTAR · Condition',
    },
    {
      type: 'build',
      en: "I'm very tired.",
      answer: ['Estoy', 'muy', 'cansado'],
      extra: ['Soy'],
      wrongWhy: { Soy: '<b>Soy cansado</b> means "I\'m a tired kind of person." Feeling tired today is a condition, so use <b>estoy</b>.' },
      explain: 'How you feel right now uses <b>estar</b>.',
      rule: 'ESTAR · Condition',
    },
    {
      type: 'choice', kicker: 'On the job',
      prompt: 'La cita ___ a las dos.', en: 'The appointment is at two.',
      options: [
        { text: 'es', correct: true },
        { text: 'está', why: 'Times use <b>ser</b>, even for appointments and events. It\'s the T in DOCTOR.' },
        { text: 'son', why: 'Right verb, but <b>son</b> is for more than one thing. One appointment, so it\'s <b>es</b>.' },
      ],
      explain: 'When something happens is <b>Time</b>, so use <b>ser</b>.',
      rule: 'SER · Time',
    },
    {
      type: 'choice', listen: true,
      say: 'Estoy en el camión.',
      options: [
        { text: "I'm in the truck.", correct: true },
        { text: "I'm a truck driver.", why: 'A truck driver would be <b>Soy camionero</b>. <b>Estoy en…</b> tells you where someone is.' },
        { text: "I'm loading the truck.", why: 'Loading would be <b>Estoy cargando el camión</b>. Listen for <b>en</b>, which means "in."' },
      ],
      explain: '<b>Estoy en…</b> means "I\'m in / at…". That\'s location.',
      rule: 'ESTAR · Location',
    },
    {
      type: 'choice', kicker: 'On the job',
      prompt: 'El sofá ___ en el garaje.', en: 'The couch is in the garage.',
      options: [
        { text: 'está', correct: true },
        { text: 'es', why: '<b>Es</b> would describe what the couch is like. <i>Where</i> it is is a <b>Location</b>, so use <b>está</b>.' },
        { text: 'estoy', why: '<b>Estoy</b> means "I am." For the couch (it) use <b>está</b>.' },
      ],
      explain: 'Where something is uses <b>estar</b>.',
      rule: 'ESTAR · Location',
    },
    {
      type: 'choice',
      prompt: 'Nosotros ___ de Guatemala.', en: 'We are from Guatemala.',
      options: [
        { text: 'somos', correct: true },
        { text: 'estamos', why: '<b>Estamos en Guatemala</b> means we\'re in Guatemala right now. Where you\'re <i>from</i> is <b>Origin</b>, so use <b>somos</b>.' },
      ],
      explain: 'Origin uses <b>ser</b>. "From" is <b>de</b>.',
      rule: 'SER · Origin',
    },
    {
      type: 'build',
      en: 'The truck is full.',
      answer: ['El', 'camión', 'está', 'lleno'],
      extra: ['es'],
      wrongWhy: { es: 'Full is how the truck is right now. After the dump it\'ll be empty again! That\'s a <b>Condition</b>, so use <b>está</b>.' },
      explain: "Full or empty is a condition that changes, so use <b>estar</b>.",
      rule: 'ESTAR · Condition',
    },
    {
      type: 'choice', kicker: 'On the job',
      prompt: 'Los clientes ___ esperando.', en: 'The customers are waiting.',
      options: [
        { text: 'están', correct: true },
        { text: 'son', why: 'If you see an <b>-ando</b> or <b>-iendo</b> word (esperando = waiting), always use <b>estar</b>. It\'s the A for <b>Action</b> in PLACE.' },
        { text: 'está', why: 'Right verb, but customers is more than one person (ellos), so it\'s <b>están</b>.' },
      ],
      explain: '-ando / -iendo words always go with <b>estar</b>.',
      rule: 'ESTAR · Action',
    },
    {
      type: 'choice', listen: true,
      say: 'Mi hermano es muy aburrido.',
      options: [
        { text: 'My brother is very boring.', correct: true },
        { text: 'My brother is very bored.', why: 'Sneaky one! Bored would be <b>está aburrido</b>. With <b>es</b>, it describes what he\'s like: boring.' },
        { text: 'My brother is very tall.', why: 'Tall would be <b>alto</b>. Play it again and listen for <b>aburrido</b>.' },
      ],
      explain: '<b>Es aburrido</b> = boring (who he is). <b>Está aburrido</b> = bored (right now).',
      rule: 'SER · Characteristic',
    },
    {
      type: 'choice',
      prompt: 'Él ___ mi compañero de trabajo.', en: 'He is my coworker.',
      options: [
        { text: 'es', correct: true },
        { text: 'está', why: 'How someone is connected to you (brother, friend, coworker) is <b>Relationship</b> in DOCTOR, so use <b>es</b>.' },
      ],
      explain: 'Relationships use <b>ser</b>.',
      rule: 'SER · Relationship',
    },
    {
      type: 'choice', kicker: 'On the job',
      prompt: 'El refrigerador ___ muy pesado.', en: 'The fridge is very heavy.',
      options: [
        { text: 'es', correct: true },
        { text: 'está', why: 'Heavy is what the fridge is like. It will be heavy tomorrow too! That\'s a <b>Characteristic</b>, so use <b>es</b>.' },
      ],
      explain: 'What something is like, all the time, uses <b>ser</b>.',
      rule: 'SER · Characteristic',
    },
    {
      type: 'build',
      en: 'We are from Mexico.',
      answer: ['Somos', 'de', 'México'],
      extra: ['Estamos', 'en'],
      wrongWhy: {
        Estamos: '<b>Estamos</b> is for where you are now. Where you\'re from is <b>Origin</b>, so use <b>somos</b>.',
        en: '"From" is <b>de</b>. <b>En</b> means "in" or "at."',
      },
      explain: 'Origin uses <b>ser</b> + <b>de</b>.',
      rule: 'SER · Origin',
    },
    {
      type: 'choice',
      prompt: 'Ellos ___ muy simpáticos.', en: 'They are very nice.',
      options: [
        { text: 'son', correct: true },
        { text: 'están', why: '<b>Están simpáticos</b> sounds like they\'re only being nice right now. For what someone is like, use <b>son</b>.' },
      ],
      explain: 'Personality is a <b>Characteristic</b>, so use <b>ser</b>.',
      rule: 'SER · Characteristic',
    },

    { type: 'retry' },

    // ---------- mini game ----------
    {
      type: 'game',
      title: 'Ser or Estar? Race',
      howto: 'Tap <b>SER</b> or <b>ESTAR</b> for each sentence. You have 60 seconds. Get 3 in a row for double points!',
      seconds: 60,
      pool: [
        { s: 'Mi hermano ___ alto.', v: 'ser', f: 'es', why: 'Description' },
        { s: 'Yo ___ en casa.', v: 'estar', f: 'estoy', why: 'Location' },
        { s: 'Hoy ___ lunes.', v: 'ser', f: 'es', why: 'Time' },
        { s: 'Ella ___ doctora.', v: 'ser', f: 'es', why: 'Occupation' },
        { s: 'Nosotros ___ cansados.', v: 'estar', f: 'estamos', why: 'Condition' },
        { s: 'Tú ___ muy inteligente.', v: 'ser', f: 'eres', why: 'Characteristic' },
        { s: 'El café ___ frío.', v: 'estar', f: 'está', why: 'Condition' },
        { s: '¿Dónde ___ el baño?', v: 'estar', f: 'está', why: 'Location' },
        { s: 'Ellos ___ de Colombia.', v: 'ser', f: 'son', why: 'Origin' },
        { s: 'Yo ___ trabajando.', v: 'estar', f: 'estoy', why: 'Action' },
        { s: '___ las cinco.', v: 'ser', f: 'Son', why: 'Time' },
        { s: 'La tienda ___ cerrada.', v: 'estar', f: 'está', why: 'Condition' },
        { s: 'Él ___ mi primo.', v: 'ser', f: 'es', why: 'Relationship' },
        { s: 'Ustedes ___ estudiantes.', v: 'ser', f: 'son', why: 'Occupation' },
        { s: 'Yo ___ nervioso por el examen.', v: 'estar', f: 'estoy', why: 'Emotion' },
        { s: 'La clase ___ a las nueve.', v: 'ser', f: 'es', why: 'Time' },
        { s: 'El jefe ___ en una reunión.', v: 'estar', f: 'está', why: 'Location' },
        { s: 'Mis amigos ___ muy simpáticos.', v: 'ser', f: 'son', why: 'Characteristic' },
        { s: '¿Por qué ___ enojado?', v: 'estar', f: 'estás', why: 'Emotion' },
        { s: 'Mi escuela ___ grande.', v: 'ser', f: 'es', why: 'Description' },
        { s: 'Nosotros ___ comiendo.', v: 'estar', f: 'estamos', why: 'Action' },
        { s: 'El examen ___ difícil.', v: 'ser', f: 'es', why: 'Characteristic' },
        { s: '¿Cómo ___ tú?', v: 'estar', f: 'estás', why: 'Condition' },
        { s: 'Ella ___ sentada.', v: 'estar', f: 'está', why: 'Position' },
        { s: 'Mi perro ___ pequeño.', v: 'ser', f: 'es', why: 'Description' },
        { s: 'Mañana ___ sábado.', v: 'ser', f: 'es', why: 'Time' },
        { s: 'Mi hermana ___ triste hoy.', v: 'estar', f: 'está', why: 'Emotion' },
        { s: 'El camión ___ lleno.', v: 'estar', f: 'está', why: 'Condition' },
        { s: 'Yo ___ cargando el sofá.', v: 'estar', f: 'estoy', why: 'Action' },
        { s: 'La basura ___ en el garaje.', v: 'estar', f: 'está', why: 'Location' },
        { s: 'El cliente ___ muy amable.', v: 'ser', f: 'es', why: 'Characteristic' },
        { s: 'La oficina ___ en el centro.', v: 'estar', f: 'está', why: 'Location' },
        { s: 'Yo ___ de Texas.', v: 'ser', f: 'soy', why: 'Origin' },
        { s: 'Ella ___ mi jefa.', v: 'ser', f: 'es', why: 'Relationship' },
      ],
    },
  ],
});
