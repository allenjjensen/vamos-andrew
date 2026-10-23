// Lesson: What's it like? Describing the things on the job.
// Unit 3 (Sizing up the job). Ends with customers describing what they need hauled.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'describe-1',
  unit: 'Sizing up the job',
  title: "What's it like?",
  subtitle: 'Big, heavy, old, broken',
  minutes: 10,
  terms: ['adjective', 'noun', 'plural'],

  recap: `<p>Describing words go <b>after</b> the noun and copy it: <b>el sofá viejo, la mesa vieja, los sofás viejos, las mesas viejas</b>.</p>
    <p>Words ending in <b>-e</b> or a consonant only add -s: <b>grande → grandes</b>, <b>difícil → difíciles</b>.</p>
    <p>What it <b>is</b> (it's always like that): <b>es</b> grande, <b>es</b> viejo. How it <b>is right now</b>: <b>está</b> roto, <b>está</b> sucio, <b>está</b> mojado.</p>
    <p>Asking: <b>¿Cómo es?</b> (What's it like?) · <b>¿Está en buenas condiciones?</b> (Is it in good shape?)</p>`,

  phrases: [
    { es: '¿Cómo es el sofá?', en: "What's the couch like?" },
    { es: 'Es muy grande y pesado.', en: "It's very big and heavy." },
    { es: 'La lavadora está rota.', en: 'The washer is broken.' },
    { es: 'Las cajas están mojadas.', en: 'The boxes are wet.' },
    { es: '¿Está en buenas condiciones?', en: 'Is it in good shape?' },
    { es: 'Tengo una cama vieja y dos sillas rotas.', en: 'I have an old bed and two broken chairs.' },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '🛋️',
      title: "What's it like?",
      learn: [
        'Words for sizing up a job: big, heavy, old, broken, dirty, wet',
        'Making them match the thing: el sofá viejo, la mesa vieja',
        'When to say es and when to say está',
      ],
    },

    // ---------- warm-up ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'La mesa es ___.', en: 'The table is old.',
      options: [
        { text: 'vieja', correct: true },
        { text: 'viejo', why: '<b>Mesa</b> is a girl word, so the describing word ends in <b>-a</b>: <b>vieja</b>.' },
      ],
      explain: 'Girl word → <b>vieja</b>.',
      rule: 'Describing words · boy or girl',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'El refrigerador ___ roto.', en: 'The fridge is broken.',
      options: [
        { text: 'está', correct: true },
        { text: 'es', why: 'Broken is how it is <b>right now</b> (a condition), so <b>está</b>. PLACE: P for Position and Condition.' },
      ],
      explain: 'A condition → <b>está roto</b>.',
      rule: 'Es or está',
    },
    {
      type: 'warmupResult',
      all: '¡Perfecto! Now let\'s get the words you need to size up any job.',
      some: 'Good start. A few patterns make describing easy.',
      none: 'No worries. Two simple rules, coming up.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: 'Size and weight',
      title: 'Big, small, heavy, light',
      rows: [
        { es: 'grande · pequeño', en: 'big · small' },
        { es: 'pesado · ligero', en: 'heavy · light' },
        { es: 'largo · corto', en: 'long · short' },
        { es: 'ancho · estrecho', en: 'wide · narrow' },
        { es: 'viejo · nuevo', en: 'old · new' },
      ],
      trick: 'Most describing words end in <b>-o</b> and switch to <b>-a</b> for girl words: <b>pesado → pesada</b>. Words ending in <b>-e</b> (<b>grande</b>) stay the same for both.',
    },
    {
      type: 'teach', kicker: 'Condition',
      title: 'Broken, dirty, wet',
      rows: [
        { es: 'roto · rota', en: 'broken' },
        { es: 'sucio · limpio', en: 'dirty · clean' },
        { es: 'mojado · seco', en: 'wet · dry' },
        { es: 'lleno · vacío', en: 'full · empty' },
        { es: 'en buenas condiciones', en: 'in good shape' },
      ],
      trick: 'These say how something <b>is right now</b>, so they go with <b>está</b>: <b>El sofá está mojado.</b> Remember PLACE from lesson 1: <b>C</b> is for <b>Condition</b>.',
    },
    {
      type: 'teach', kicker: 'Putting it together',
      title: 'After the noun, matching it',
      rows: [
        { es: 'un sofá viejo', en: 'an old couch' },
        { es: 'una mesa vieja', en: 'an old table' },
        { es: 'dos colchones viejos', en: 'two old mattresses' },
        { es: 'tres sillas rotas', en: 'three broken chairs' },
        { es: 'un televisor muy pesado', en: 'a very heavy TV' },
      ],
      trick: 'The describing word comes <b>after</b> the thing and copies it: boy or girl, one or more. <b>Muy</b> (very) goes in front and never changes.',
    },
    {
      type: 'teach', kicker: 'Es or está',
      title: 'What it is, how it is now',
      rows: [
        { es: 'El sofá es grande.', en: 'The couch is big. (always)' },
        { es: 'El sofá está sucio.', en: 'The couch is dirty. (right now)' },
        { es: 'La cama es vieja.', en: 'The bed is old. (what it is)' },
        { es: 'La cama está rota.', en: 'The bed is broken. (its condition)' },
      ],
      trick: 'Size, age, color and what it\'s made of: <b>es</b>. Broken, dirty, wet, full, empty: <b>está</b>. Ask yourself: <b>could it change by tomorrow?</b> Then it\'s <b>está</b>.',
    },
    {
      type: 'teach', kicker: 'On the job',
      title: 'Asking about the stuff',
      rows: [
        { es: '¿Cómo es?', en: "What's it like?" },
        { es: '¿Es muy pesado?', en: 'Is it very heavy?' },
        { es: '¿Está en buenas condiciones?', en: 'Is it in good shape?' },
        { es: '¿De qué tamaño es?', en: 'What size is it?' },
      ],
      trick: '<b>¿Cómo es?</b> asks what something is like. <b>¿Cómo está?</b> asks how it\'s doing (for people) or what shape it\'s in.',
    },

    // ---------- practice ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice',
            prompt: 'El sofá es muy ___.', en: 'The couch is very heavy.',
            options: [
              { text: 'pesado', correct: true },
              { text: 'pesada', why: '<b>Sofá</b> is a boy word (<b>el</b> sofá), even though it ends in -a. So <b>pesado</b>.' },
              { text: 'ligero', why: '<b>Ligero</b> means light. Heavy is <b>pesado</b>.' },
            ],
            explain: '<b>El sofá</b> is a boy word → <b>pesado</b>.',
            rule: 'Describing words · boy or girl',
          },
          {
            type: 'choice',
            prompt: 'Las sillas están ___.', en: 'The chairs are broken.',
            options: [
              { text: 'rotas', correct: true },
              { text: 'rota', why: 'More than one chair, so add -s: <b>rotas</b>.' },
              { text: 'rotos', why: '<b>Sillas</b> are girl words: <b>rotas</b>, with -a.' },
            ],
            explain: 'Girl, more than one → <b>rotas</b>.',
            rule: 'Describing words · one or more',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'La alfombra ___ mojada.', en: 'The rug is wet.',
            options: [
              { text: 'está', correct: true },
              { text: 'es', why: 'Wet is a condition (it could be dry tomorrow): <b>está mojada</b>.' },
              { text: 'están', why: 'One rug: <b>está</b>. <b>Están</b> is for more than one.' },
            ],
            explain: 'A condition → <b>está</b>.',
            rule: 'Es or está',
          },
          {
            type: 'choice', listen: true,
            say: 'un colchón viejo',
            options: [
              { text: 'an old mattress', correct: true },
              { text: 'a new mattress', why: 'New is <b>nuevo</b>. You heard <b>viejo</b>: old.' },
              { text: 'an old couch', why: 'Couch is <b>sofá</b>. You heard <b>colchón</b>: mattress.' },
            ],
            explain: '<b>Un colchón viejo</b> = an old mattress.',
            rule: 'Describing words',
          },
          {
            type: 'build',
            en: 'The washer is broken.',
            answer: ['La', 'lavadora', 'está', 'rota'],
            extra: ['es'],
            wrongWhy: { es: 'Broken is a condition: <b>está</b>.' },
            explain: '<b>Lavadora</b> is a girl word → <b>rota</b>. Condition → <b>está</b>.',
            rule: 'Es or está',
          },
          {
            type: 'choice',
            prompt: 'Tengo dos camas ___.', en: 'I have two big beds.',
            options: [
              { text: 'grandes', correct: true },
              { text: 'grandas', why: '<b>Grande</b> ends in -e, so it never changes to -a. Just add -s: <b>grandes</b>.' },
              { text: 'grande', why: 'Two beds, so add -s: <b>grandes</b>.' },
            ],
            explain: '-e words just add -s: <b>grandes</b>.',
            rule: 'Describing words · one or more',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Cómo ___ el refrigerador?', en: "What's the fridge like?",
            options: [
              { text: 'es', correct: true },
              { text: 'está', why: '<b>¿Cómo está?</b> asks what shape it\'s in. "What is it like" is <b>¿Cómo es?</b>' },
              { text: 'son', why: 'One fridge: <b>es</b>.' },
            ],
            explain: 'What it\'s like → <b>¿Cómo es?</b>',
            rule: 'On the job · asking',
          },
          {
            type: 'choice',
            prompt: 'Las cajas están ___.', en: 'The boxes are full.',
            options: [
              { text: 'llenas', correct: true },
              { text: 'vacías', why: '<b>Vacías</b> means empty. Full is <b>llenas</b>.' },
              { text: 'llenos', why: '<b>Cajas</b> are girl words: <b>llenas</b>.' },
            ],
            explain: 'Full = <b>llenas</b> (girl, more than one).',
            rule: 'Condition words',
          },
          {
            type: 'build',
            en: 'an old table',
            answer: ['una', 'mesa', 'vieja'],
            extra: ['viejo'],
            wrongWhy: { viejo: '<b>Mesa</b> is a girl word: <b>vieja</b>.' },
            explain: 'The describing word goes after the noun: <b>una mesa vieja</b>.',
            end: '',
            rule: 'Describing words · after the noun',
          },
          {
            type: 'choice',
            prompt: 'El televisor es ___.', en: 'The TV is new.',
            options: [
              { text: 'nuevo', correct: true },
              { text: 'viejo', why: '<b>Viejo</b> is old. New is <b>nuevo</b>.' },
              { text: 'nueva', why: '<b>Televisor</b> is a boy word: <b>nuevo</b>.' },
            ],
            explain: 'New = <b>nuevo</b>.',
            rule: 'Size and age',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice',
            prompt: 'La cama es muy ___.', en: 'The bed is very big.',
            options: [
              { text: 'grande', correct: true },
              { text: 'granda', why: '<b>Grande</b> ends in -e and stays the same for girl words: <b>la cama grande</b>.' },
              { text: 'pequeña', why: '<b>Pequeña</b> is small. Big is <b>grande</b>.' },
            ],
            explain: '<b>Grande</b> is the same for boy and girl words.',
            rule: 'Describing words · boy or girl',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Los colchones están ___.', en: 'The mattresses are dirty.',
            options: [
              { text: 'sucios', correct: true },
              { text: 'sucias', why: '<b>Colchones</b> are boy words: <b>sucios</b>.' },
              { text: 'limpios', why: '<b>Limpios</b> means clean. Dirty is <b>sucios</b>.' },
            ],
            explain: 'Boy, more than one → <b>sucios</b>.',
            rule: 'Condition words',
          },
          {
            type: 'choice',
            prompt: 'El sótano ___ grande.', en: 'The basement is big.',
            options: [
              { text: 'es', correct: true },
              { text: 'está', why: 'Size doesn\'t change by tomorrow: <b>es grande</b>.' },
              { text: 'son', why: 'One basement: <b>es</b>.' },
            ],
            explain: 'Size → <b>es</b>.',
            rule: 'Es or está',
          },
          {
            type: 'choice', listen: true,
            say: 'la puerta es muy estrecha',
            options: [
              { text: 'the door is very narrow', correct: true },
              { text: 'the door is very wide', why: 'Wide is <b>ancha</b>. You heard <b>estrecha</b>: narrow.' },
              { text: 'the box is very narrow', why: 'Box is <b>caja</b>. You heard <b>puerta</b>: door.' },
            ],
            explain: '<b>Estrecha</b> = narrow. Good to know before you carry a couch through it!',
            rule: 'Size and age',
          },
          {
            type: 'build',
            en: 'The couch is very heavy.',
            answer: ['El', 'sofá', 'es', 'muy', 'pesado'],
            extra: ['pesada'],
            wrongWhy: { pesada: '<b>Sofá</b> is a boy word: <b>pesado</b>.' },
            explain: '<b>Muy</b> goes before the describing word and never changes.',
            rule: 'Describing words',
          },
          {
            type: 'choice',
            prompt: 'Tengo tres sillas ___.', en: 'I have three old chairs.',
            options: [
              { text: 'viejas', correct: true },
              { text: 'viejos', why: '<b>Sillas</b> are girl words: <b>viejas</b>.' },
              { text: 'vieja', why: 'Three chairs, so add -s: <b>viejas</b>.' },
            ],
            explain: 'Girl, more than one → <b>viejas</b>.',
            rule: 'Describing words · one or more',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Está en buenas ___?', en: 'Is it in good shape?',
            options: [
              { text: 'condiciones', correct: true },
              { text: 'cosas', why: '<b>Cosas</b> are things. "In good shape" is <b>en buenas condiciones</b>.' },
              { text: 'casas', why: '<b>Casas</b> are houses. "In good shape" is <b>en buenas condiciones</b>.' },
            ],
            explain: '<b>En buenas condiciones</b> = in good shape.',
            rule: 'On the job · asking',
          },
          {
            type: 'choice',
            prompt: 'El garaje está ___.', en: 'The garage is empty.',
            options: [
              { text: 'vacío', correct: true },
              { text: 'lleno', why: '<b>Lleno</b> is full. Empty is <b>vacío</b>.' },
              { text: 'vacía', why: '<b>Garaje</b> is a boy word: <b>vacío</b>.' },
            ],
            explain: 'Empty = <b>vacío</b>.',
            rule: 'Condition words',
          },
          {
            type: 'build',
            en: 'two broken chairs',
            answer: ['dos', 'sillas', 'rotas'],
            extra: ['rotos'],
            wrongWhy: { rotos: '<b>Sillas</b> are girl words: <b>rotas</b>.' },
            explain: 'After the noun, matching it: <b>dos sillas rotas</b>.',
            end: '',
            rule: 'Describing words · after the noun',
          },
          {
            type: 'choice',
            prompt: 'El tapete es ___.', en: 'The rug is long.',
            options: [
              { text: 'largo', correct: true },
              { text: 'corto', why: '<b>Corto</b> is short. Long is <b>largo</b>.' },
              { text: 'grande', why: '<b>Grande</b> is big. Long is <b>largo</b>. (Careful: it\'s not "large"!)' },
            ],
            explain: '<b>Largo</b> = long, not large!',
            rule: 'Size and age',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice',
            prompt: 'La caja es muy ___.', en: 'The box is very light.',
            options: [
              { text: 'ligera', correct: true },
              { text: 'ligero', why: '<b>Caja</b> is a girl word: <b>ligera</b>.' },
              { text: 'pesada', why: '<b>Pesada</b> is heavy. Light is <b>ligera</b>.' },
            ],
            explain: 'Light = <b>ligera</b> (girl word).',
            rule: 'Describing words · boy or girl',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Las alfombras están ___.', en: 'The rugs are wet.',
            options: [
              { text: 'mojadas', correct: true },
              { text: 'mojados', why: '<b>Alfombras</b> are girl words: <b>mojadas</b>.' },
              { text: 'secas', why: '<b>Secas</b> means dry. Wet is <b>mojadas</b>.' },
            ],
            explain: 'Girl, more than one → <b>mojadas</b>.',
            rule: 'Condition words',
          },
          {
            type: 'choice',
            prompt: 'La secadora ___ vieja.', en: 'The dryer is old.',
            options: [
              { text: 'es', correct: true },
              { text: 'está', why: 'Old is what it is, not a condition that changes: <b>es vieja</b>.' },
              { text: 'son', why: 'One dryer: <b>es</b>.' },
            ],
            explain: 'Age → <b>es</b>.',
            rule: 'Es or está',
          },
          {
            type: 'choice', listen: true,
            say: 'las cajas están vacías',
            options: [
              { text: 'the boxes are empty', correct: true },
              { text: 'the boxes are full', why: 'Full is <b>llenas</b>. You heard <b>vacías</b>: empty.' },
              { text: 'the box is empty', why: 'You heard <b>las cajas están</b>: more than one box.' },
            ],
            explain: '<b>Vacías</b> = empty.',
            rule: 'Condition words',
          },
          {
            type: 'build',
            en: 'The boxes are wet.',
            answer: ['Las', 'cajas', 'están', 'mojadas'],
            extra: ['son'],
            wrongWhy: { son: 'Wet is a condition: <b>están</b>.' },
            explain: 'Condition, more than one → <b>están mojadas</b>.',
            rule: 'Es or está',
          },
          {
            type: 'choice',
            prompt: 'Tengo dos refrigeradores ___.', en: 'I have two old fridges.',
            options: [
              { text: 'viejos', correct: true },
              { text: 'viejas', why: '<b>Refrigeradores</b> are boy words: <b>viejos</b>.' },
              { text: 'viejo', why: 'Two fridges, so add -s: <b>viejos</b>.' },
            ],
            explain: 'Boy, more than one → <b>viejos</b>.',
            rule: 'Describing words · one or more',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿De qué ___ es?', en: 'What size is it?',
            options: [
              { text: 'tamaño', correct: true },
              { text: 'color', why: '<b>¿De qué color es?</b> = What color is it? Size is <b>tamaño</b>.' },
              { text: 'grande', why: 'The question uses the noun: <b>¿De qué tamaño es?</b>' },
            ],
            explain: '<b>Tamaño</b> = size.',
            rule: 'On the job · asking',
          },
          {
            type: 'choice',
            prompt: 'El escritorio está muy ___.', en: 'The desk is very dirty.',
            options: [
              { text: 'sucio', correct: true },
              { text: 'limpio', why: '<b>Limpio</b> is clean. Dirty is <b>sucio</b>.' },
              { text: 'sucia', why: '<b>Escritorio</b> is a boy word: <b>sucio</b>.' },
            ],
            explain: 'Dirty = <b>sucio</b>.',
            rule: 'Condition words',
          },
          {
            type: 'build',
            en: 'a very big couch',
            answer: ['un', 'sofá', 'muy', 'grande'],
            extra: ['granda'],
            wrongWhy: { granda: '<b>Grande</b> never changes to -a.' },
            explain: 'Thing first, then <b>muy</b> + describing word.',
            end: '',
            rule: 'Describing words · after the noun',
          },
          {
            type: 'choice',
            prompt: 'La puerta es muy ___.', en: 'The door is very wide.',
            options: [
              { text: 'ancha', correct: true },
              { text: 'estrecha', why: '<b>Estrecha</b> is narrow. Wide is <b>ancha</b>.' },
              { text: 'ancho', why: '<b>Puerta</b> is a girl word: <b>ancha</b>.' },
            ],
            explain: 'Wide = <b>ancha</b>.',
            rule: 'Size and age',
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
          title: 'The basement',
          who: { name: 'Señora Díaz', emoji: '👩‍🦳' },
          setup: 'Señora Díaz calls about her basement. Find out what\'s down there before you send the truck.',
          tips: [
            { mood: 3, text: 'She books, and offers you lemonade on the job 🍋' },
            { mood: 2, text: 'She books the job' },
            { mood: 1, text: '"Let me think about it…"' },
            { mood: 0, text: 'She calls another company 😬' },
          ],
          lines: [
            {
              them: 'Tengo muchas cosas en el sótano.',
              en: 'I have a lot of things in the basement.',
              choices: [
                { es: '¿Qué cosas tiene? ¿Cómo son?', en: 'What things do you have? What are they like?', good: true,
                  note: '<b>¿Cómo son?</b> = What are they like? (more than one thing)' },
                { es: '¿Cómo están las cosas?', en: 'How are the things doing?',
                  react: '¿Cómo están? Pues… tranquilas. 😅', reactEn: 'How are they doing? Well… calm.',
                  why: 'To ask what things are like: <b>¿Cómo son?</b>' },
                { es: '¿Cómo es las cosas?', en: 'What is the things like?',
                  react: '¿Las cosas? Son muchas. 🙂', reactEn: 'The things? There are a lot.',
                  why: 'More than one thing: <b>¿Cómo son?</b>' },
              ],
            },
            {
              them: 'Hay un sofá muy grande y una mesa vieja.',
              en: "There's a very big couch and an old table.",
              choices: [
                { es: '¿El sofá es muy pesado?', en: 'Is the couch very heavy?', good: true,
                  note: 'Smart: heavy means more people on the crew.' },
                { es: '¿El sofá es muy pesada?', en: 'Is the couch (girl) very heavy?',
                  react: 'Sí, el sofá es pesado. 🙂', reactEn: 'Yes, the couch is heavy.',
                  why: '<b>El sofá</b> is a boy word: <b>pesado</b>.' },
                { es: '¿La mesa está grande?', en: 'Is the table big right now?',
                  react: '¿Ahora? Es grande siempre. 🤔', reactEn: 'Right now? It\'s always big.',
                  why: 'Size doesn\'t change: <b>¿La mesa es grande?</b>' },
              ],
            },
            {
              them: 'Sí, pesa mucho. Y el sótano está mojado.',
              en: "Yes, it weighs a lot. And the basement is wet.",
              choices: [
                { es: '¿Las cajas también están mojadas?', en: 'Are the boxes wet too?', good: true,
                  note: 'Wet boxes tear. Good to know before you lift them!' },
                { es: '¿Las cajas también son mojadas?', en: 'Are the boxes wet (always)?',
                  react: '¿Siempre? No, es por la lluvia. 🙂', reactEn: 'Always? No, it\'s from the rain.',
                  why: 'Wet is a condition: <b>están mojadas</b>.' },
                { es: '¿Las cajas también están mojados?', en: 'Are the boxes wet (boy ending)?',
                  react: 'Sí, mojadas. 🙂', reactEn: 'Yes, wet.',
                  why: '<b>Cajas</b> are girl words: <b>mojadas</b>.' },
              ],
            },
            {
              them: 'Sí, algunas. ¿Es un problema?',
              en: 'Yes, some. Is that a problem?',
              choices: [
                { es: 'No hay problema. Traemos bolsas grandes.', en: 'No problem. We bring big bags.', good: true,
                  note: '<b>Bolsas grandes</b>: grande just adds -s for more than one.' },
                { es: 'No hay problema. Traemos bolsas grandas.', en: 'No problem. We bring big (wrong ending) bags.',
                  react: '¿Grandas? Ah, grandes. 🙂', reactEn: '"Grandas"? Oh, big.',
                  why: '<b>Grande</b> never changes to -a: <b>bolsas grandes</b>.' },
                { es: 'Sí, es un problema grande.', en: "Yes, it's a big problem.",
                  react: '¡Ay, no! 😟', reactEn: 'Oh no!',
                  why: 'Wet boxes are normal on this job. Calm her down: <b>No hay problema</b>.' },
              ],
            },
            {
              them: 'Qué bueno. ¿Cuándo pueden venir?',
              en: 'Great. When can you come?',
              choices: [
                { es: 'El jueves a las diez. ¿Le queda bien?', en: 'Thursday at ten. Does that work for you?', good: true,
                  note: 'From the last unit: day, time, and a polite check.' },
                { es: 'En jueves en las diez.', en: 'In Thursday in the ten.',
                  react: '¿El jueves a las diez? 🙂', reactEn: 'Thursday at ten?',
                  why: 'No "en" with days, and "at" a time is <b>a</b>: <b>el jueves a las diez</b>.' },
                { es: 'El jueves. Está bien grande.', en: "Thursday. It's really big.",
                  react: '¿Qué está grande? 🤔', reactEn: "What's big?",
                  why: 'Just set the time: <b>El jueves a las diez. ¿Le queda bien?</b>' },
              ],
            },
          ],
        },

        // ---------- Customer B ----------
        {
          type: 'talk',
          title: 'Moving out',
          who: { name: 'Tomás', emoji: '🧑' },
          setup: 'Tomás is a college student moving out of his apartment. He wants the old stuff gone, but some of it might be worth keeping.',
          tips: [
            { mood: 3, text: 'He books and gives you a five-star review ⭐' },
            { mood: 2, text: 'He books the job' },
            { mood: 1, text: 'He books, but he\'s confused' },
            { mood: 0, text: 'He just leaves it all on the curb 😬' },
          ],
          lines: [
            {
              them: 'Me mudo y tengo una cama, dos sillas y un escritorio.',
              en: "I'm moving and I have a bed, two chairs and a desk.",
              choices: [
                { es: '¿Están en buenas condiciones?', en: 'Are they in good shape?', good: true,
                  note: 'Good things can be donated, which some customers love.' },
                { es: '¿Son en buenas condiciones?', en: 'Are they (always) in good shape?',
                  react: '¿Son? Ah, ¿están bien? 🙂', reactEn: '"Son"? Oh, are they OK?',
                  why: 'Shape is a condition: <b>¿Están en buenas condiciones?</b>' },
                { es: '¿Cómo están ustedes?', en: 'How are you all?',
                  react: '¿Nosotros? Bien… 😅', reactEn: 'Us? Fine…',
                  why: 'Ask about the things: <b>¿Están en buenas condiciones?</b>' },
              ],
            },
            {
              them: 'La cama sí. Pero las sillas están rotas.',
              en: 'The bed is. But the chairs are broken.',
              choices: [
                { es: 'Entiendo. Las sillas rotas van a la basura.', en: 'Got it. The broken chairs go in the trash.', good: true,
                  note: '<b>Las sillas rotas</b>: girl words, more than one.' },
                { es: 'Entiendo. Las sillas rotos van a la basura.', en: 'Got it. The broken (boy ending) chairs…',
                  react: 'Sí, las sillas rotas. 🙂', reactEn: 'Yes, the broken chairs.',
                  why: '<b>Sillas</b> are girl words: <b>rotas</b>.' },
                { es: 'Entiendo. Las sillas son rotas.', en: 'Got it. The chairs are (always) broken.',
                  react: '¿Siempre? Bueno, ahora sí. 🤔', reactEn: 'Always? Well, they are now.',
                  why: 'Broken is a condition: <b>están rotas</b>.' },
              ],
            },
            {
              them: '¿Y la cama? Es nueva.',
              en: 'And the bed? It\'s new.',
              choices: [
                { es: 'Una cama nueva se puede donar.', en: 'A new bed can be donated.', good: true,
                  note: '<b>Una cama nueva</b>: the describing word copies <b>cama</b>.' },
                { es: 'Una cama nuevo se puede donar.', en: 'A new (boy ending) bed can be donated.',
                  react: 'Nueva, sí. 🙂', reactEn: 'New, yes.',
                  why: '<b>Cama</b> is a girl word: <b>nueva</b>.' },
                { es: 'Una nueva cama vieja.', en: 'A new old bed.',
                  react: '¿Nueva o vieja? 😂', reactEn: 'New or old?',
                  why: 'He said it\'s <b>nueva</b>. It can be donated: <b>se puede donar</b>.' },
              ],
            },
            {
              them: '¡Genial! El escritorio es muy pesado, ¿eh?',
              en: 'Great! The desk is very heavy, OK?',
              choices: [
                { es: 'No hay problema. Somos dos.', en: 'No problem. There are two of us.', good: true,
                  note: '<b>Somos dos</b> = there are two of us.' },
                { es: 'No hay problema. Está pesada.', en: 'No problem. It\'s heavy (girl, right now).',
                  react: '¿Pesada? 🤔', reactEn: '"Pesada"?',
                  why: '<b>Escritorio</b> is a boy word, and weight doesn\'t change: <b>es pesado</b>.' },
                { es: '¿Pesado? Entonces no.', en: 'Heavy? Then no.',
                  react: '¡¿No?! 😟', reactEn: 'No?!',
                  why: 'Heavy is your job! Say <b>No hay problema</b>.' },
              ],
            },
            {
              them: 'Perfecto. Mi apartamento está en el tercer piso.',
              en: 'Perfect. My apartment is on the third floor.',
              choices: [
                { es: '¿Hay elevador?', en: 'Is there an elevator?', good: true,
                  note: 'Always ask before you carry a heavy desk up three floors!' },
                { es: '¿Es el tercer piso grande?', en: 'Is the third floor big?',
                  react: '¿El piso? Es normal. 🤔', reactEn: 'The floor? It\'s normal.',
                  why: 'The useful question: <b>¿Hay elevador?</b> (Is there an elevator?)' },
                { es: '¿Está mojado el piso?', en: 'Is the floor wet?',
                  react: '¿Mojado? No… 🤔', reactEn: 'Wet? No…',
                  why: 'Ask what matters for carrying: <b>¿Hay elevador?</b>' },
              ],
            },
          ],
        },

        // ---------- Customer C ----------
        {
          type: 'talk',
          title: 'The garage',
          who: { name: 'Don Arturo', emoji: '👴' },
          setup: 'Don Arturo has kept everything for forty years. His daughter says the garage has to be empty by Saturday. He\'s not happy about it.',
          tips: [
            { mood: 3, text: 'He laughs and gives you his old toolbox 🧰' },
            { mood: 2, text: 'He lets you take it all' },
            { mood: 1, text: 'He argues over every box' },
            { mood: 0, text: 'He sends you away 😬' },
          ],
          lines: [
            {
              them: 'Mi hija dice que todo esto es basura.',
              en: 'My daughter says all this is junk.',
              choices: [
                { es: 'Hay cosas muy bonitas aquí.', en: 'There are very nice things here.', good: true,
                  note: '<b>Cosas muy bonitas</b>: a kind word goes a long way with a customer like this.' },
                { es: 'Sí, todo es basura.', en: 'Yes, it\'s all junk.',
                  react: '¡Hmph! 😠', reactEn: 'Hmph!',
                  why: 'Be kind: <b>Hay cosas muy bonitas aquí.</b>' },
                { es: 'Hay cosas muy bonitos aquí.', en: 'There are very nice (boy ending) things here.',
                  react: 'Bonitas, sí. 🙂', reactEn: 'Nice, yes.',
                  why: '<b>Cosas</b> are girl words: <b>bonitas</b>.' },
              ],
            },
            {
              them: 'Esa bicicleta es vieja, pero está en buenas condiciones.',
              en: 'That bicycle is old, but it\'s in good shape.',
              choices: [
                { es: '¿Quiere guardarla o donarla?', en: 'Do you want to keep it or donate it?', good: true,
                  note: 'Giving him the choice keeps him happy.' },
                { es: 'Está vieja, va a la basura.', en: "It's old, it goes in the trash.",
                  react: '¡¿Basura?! 😠', reactEn: 'Trash?!',
                  why: 'He just said it\'s in good shape! Ask: <b>¿Quiere guardarla o donarla?</b>' },
                { es: 'La bicicleta es buenas condiciones.', en: 'The bicycle is good shape.',
                  react: '¿Eh? 🤔', reactEn: 'Huh?',
                  why: 'It\'s <b>está en buenas condiciones</b>, and he already said that. Ask what he wants to do with it.' },
              ],
            },
            {
              them: 'Donarla. Pero esas cajas están llenas de papeles viejos.',
              en: 'Donate it. But those boxes are full of old papers.',
              choices: [
                { es: '¿Los papeles son importantes?', en: 'Are the papers important?', good: true,
                  note: 'Always check before you throw out papers!' },
                { es: '¿Los papeles son importantas?', en: 'Are the papers important (wrong ending)?',
                  react: '¿Importantas? 🤔', reactEn: '"Importantas"?',
                  why: '<b>Importante</b> ends in -e: just add -s, <b>importantes</b>.' },
                { es: 'Las cajas están vacías.', en: 'The boxes are empty.',
                  react: '¡No! Están llenas. 😠', reactEn: 'No! They\'re full.',
                  why: 'He said <b>llenas</b> (full). Ask if the papers matter: <b>¿Los papeles son importantes?</b>' },
              ],
            },
            {
              them: 'No. Son recibos de hace treinta años. 😄',
              en: 'No. They\'re receipts from thirty years ago.',
              choices: [
                { es: 'Entonces, ¡a la basura!', en: 'Then, to the trash!', good: true,
                  note: 'He\'s laughing now. Match his mood!' },
                { es: 'Entonces, ¡a la basuro!', en: 'Then, to the trash (wrong ending)!',
                  react: '¿Basuro? 😄', reactEn: '"Basuro"?',
                  why: '<b>Basura</b> is a girl word and doesn\'t change.' },
                { es: '¿Treinta años? Está muy viejos.', en: 'Thirty years? It is very old (mixed up).',
                  react: '¿Quién está viejo, yo? 😤', reactEn: 'Who\'s old, me?',
                  why: 'For the papers: <b>Son muy viejos</b>. Careful, he might think you mean him!' },
              ],
            },
            {
              them: 'Bueno, muchacho. El garaje es todo suyo.',
              en: 'OK, young man. The garage is all yours.',
              choices: [
                { es: 'Gracias. El sábado va a estar vacío.', en: 'Thanks. On Saturday it\'s going to be empty.', good: true,
                  note: '<b>Va a estar vacío</b> = it\'s going to be empty. You\'ll learn "going to" in lesson 11!' },
                { es: 'Gracias. El sábado va a ser vacío.', en: "Thanks. On Saturday it's going to be (always) empty.",
                  react: 'Bueno… 🙂', reactEn: 'OK…',
                  why: 'Empty is a condition: <b>va a estar vacío</b>.' },
                { es: 'Gracias. El sábado va a estar vacía.', en: 'Thanks. On Saturday it (girl) will be empty.',
                  react: '¿Vacía? El garaje. 🙂', reactEn: '"Vacía"? The garage.',
                  why: '<b>Garaje</b> is a boy word: <b>vacío</b>.' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
