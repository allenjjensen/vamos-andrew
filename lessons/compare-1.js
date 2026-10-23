// Lesson: Bigger than. Comparing things (more than, as … as, the most, better/worse).
// Unit 3 (Sizing up the job). Ends with loading the truck and a customer comparing prices.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'compare-1',
  unit: 'Sizing up the job',
  title: 'Bigger than',
  subtitle: 'More, less, the most, better',
  minutes: 10,
  terms: ['adjective', 'article'],

  recap: `<p><b>más … que</b> = more … than: <b>El sofá es más pesado que la mesa.</b> <b>menos … que</b> = less … than.</p>
    <p><b>tan … como</b> = as … as: <b>La cama es tan grande como el sofá.</b></p>
    <p>The most: <b>el / la / los / las + más</b>: <b>el más pesado</b>, <b>la más grande</b>. "Of all" is <b>de</b>: <b>el más pesado de todos</b>.</p>
    <p>Four that break the rule: <b>mejor</b> (better), <b>peor</b> (worse), <b>mayor</b> (older), <b>menor</b> (younger). Never "más bueno".</p>`,

  phrases: [
    { es: 'El refrigerador es más pesado que la lavadora.', en: 'The fridge is heavier than the washer.' },
    { es: '¿Cuál es el más pesado?', en: 'Which one is the heaviest?' },
    { es: 'Primero cargamos lo más pesado.', en: 'First we load the heaviest stuff.' },
    { es: 'Esta caja es tan pesada como esa.', en: 'This box is as heavy as that one.' },
    { es: 'Nuestro precio es mejor.', en: 'Our price is better.' },
    { es: 'Es más barato que comprar un remolque.', en: "It's cheaper than buying a trailer." },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '⚖️',
      title: 'Bigger than',
      learn: [
        'Comparing: heavier than, as big as',
        'The most: the heaviest, the biggest',
        'Better, worse, older, younger',
      ],
    },

    // ---------- warm-up ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'El sofá es ___ pesado que la silla.', en: 'The couch is heavier than the chair.',
      options: [
        { text: 'más', correct: true },
        { text: 'muy', why: '<b>Muy</b> = very. "Heavier than" is <b>más pesado que</b>.' },
      ],
      explain: '<b>más … que</b> = more … than.',
      rule: 'Comparing · más … que',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'Nuestro precio es ___.', en: 'Our price is better.',
      options: [
        { text: 'mejor', correct: true },
        { text: 'más bueno', why: '"Better" has its own word: <b>mejor</b>. Nobody says "más bueno" for better.' },
      ],
      explain: 'Better = <b>mejor</b>.',
      rule: 'Comparing · mejor, peor',
    },
    {
      type: 'warmupResult',
      all: '¡Excelente! Let\'s make it even better (mejor).',
      some: 'Good start. Comparing is mostly one little word: más.',
      none: 'No worries. Comparing is mostly one little word: más.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: 'More and less',
      title: 'más … que, menos … que',
      rows: [
        { es: 'más pesado que', en: 'heavier than' },
        { es: 'más grande que', en: 'bigger than' },
        { es: 'menos pesado que', en: 'less heavy than (lighter than)' },
        { es: 'El sofá es más pesado que la mesa.', en: 'The couch is heavier than the table.' },
      ],
      trick: 'English adds -er (heavier, bigger). Spanish just puts <b>más</b> in front and <b>que</b> after. The describing word still copies the first thing: <b>La caja es más pesada que el sofá.</b>',
    },
    {
      type: 'teach', kicker: 'The same',
      title: 'tan … como',
      rows: [
        { es: 'tan grande como', en: 'as big as' },
        { es: 'tan pesado como', en: 'as heavy as' },
        { es: 'La cama es tan grande como el sofá.', en: 'The bed is as big as the couch.' },
        { es: 'No es tan pesado como parece.', en: "It's not as heavy as it looks." },
      ],
      trick: 'Same-same: <b>tan … como</b>. Think "<b>tan</b> = so, <b>como</b> = like": so big like the couch.',
    },
    {
      type: 'teach', kicker: 'The most',
      title: 'el más, la más',
      rows: [
        { es: 'el más pesado', en: 'the heaviest (boy word)' },
        { es: 'la más grande', en: 'the biggest (girl word)' },
        { es: 'los más viejos', en: 'the oldest (more than one)' },
        { es: 'el más pesado de todos', en: 'the heaviest of all' },
        { es: 'lo más pesado', en: 'the heaviest stuff' },
      ],
      trick: '<b>el / la / los / las + más</b> = the most. "Of all" uses <b>de</b>, not "en": <b>el más pesado de todos</b>. <b>Lo más pesado</b> means "the heavy stuff" in general.',
    },
    {
      type: 'teach', kicker: 'The rule breakers',
      title: 'Better, worse, older, younger',
      rows: [
        { es: 'bueno → mejor', en: 'good → better' },
        { es: 'malo → peor', en: 'bad → worse' },
        { es: 'mayor', en: 'older (people)' },
        { es: 'menor', en: 'younger (people)' },
        { es: 'el mejor · el peor', en: 'the best · the worst' },
      ],
      trick: 'Just like English (good → better, not "gooder"): <b>mejor</b>, never "más bueno". <b>Mayor / menor</b> are for people\'s ages: <b>mi hermano mayor</b> = my older brother.',
    },
    {
      type: 'teach', kicker: 'On the job',
      title: 'Loading the truck',
      rows: [
        { es: '¿Cuál es más pesado?', en: 'Which one is heavier?' },
        { es: 'Primero lo más pesado.', en: 'The heavy stuff first.' },
        { es: 'Es más barato que…', en: "It's cheaper than…" },
        { es: 'Es más caro que…', en: "It's more expensive than…" },
      ],
      trick: '<b>¿Cuál?</b> = which one? Use it when there are choices: <b>¿Cuál es el más pesado?</b> Which one is the heaviest?',
    },

    // ---------- practice ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice',
            prompt: 'El refrigerador es más pesado ___ la lavadora.', en: 'The fridge is heavier than the washer.',
            options: [
              { text: 'que', correct: true },
              { text: 'como', why: '<b>Como</b> goes with <b>tan</b> (as … as). With <b>más</b>, it\'s <b>que</b>.' },
              { text: 'de', why: 'Comparing two things: <b>más … que</b>.' },
            ],
            explain: '<b>más … que</b> = more … than.',
            rule: 'Comparing · más … que',
          },
          {
            type: 'choice',
            prompt: 'La caja es más ___ que el sofá.', en: 'The box is heavier than the couch.',
            options: [
              { text: 'pesada', correct: true },
              { text: 'pesado', why: 'The describing word copies the first thing, <b>la caja</b>: <b>pesada</b>.' },
              { text: 'grande', why: '<b>Grande</b> is big. Heavy is <b>pesada</b>.' },
            ],
            explain: 'It copies <b>la caja</b> → <b>pesada</b>.',
            rule: 'Comparing · más … que',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿___ es el más pesado?', en: 'Which one is the heaviest?',
            options: [
              { text: 'Cuál', correct: true },
              { text: 'Qué', why: 'Choosing from several things: <b>¿Cuál?</b> (which one).' },
              { text: 'Quién', why: '<b>Quién</b> is who, for people. Which one: <b>¿Cuál?</b>' },
            ],
            explain: 'Which one = <b>¿Cuál?</b>',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'Nuestro servicio es ___ que el otro.', en: 'Our service is better than the other one.',
            options: [
              { text: 'mejor', correct: true },
              { text: 'más bueno', why: 'Better has its own word: <b>mejor</b>.' },
              { text: 'peor', why: '<b>Peor</b> is worse! Better is <b>mejor</b>.' },
            ],
            explain: 'Better = <b>mejor</b>.',
            rule: 'Comparing · mejor, peor',
          },
          {
            type: 'build',
            en: 'The bed is as big as the couch.',
            answer: ['La', 'cama', 'es', 'tan', 'grande', 'como', 'el', 'sofá'],
            extra: ['que'],
            wrongWhy: { que: 'Same-same is <b>tan … como</b>, not que.' },
            explain: 'As … as = <b>tan … como</b>.',
            rule: 'Comparing · tan … como',
          },
          {
            type: 'choice',
            prompt: 'Esta silla es ___ más vieja.', en: 'This chair is the oldest.',
            options: [
              { text: 'la', correct: true },
              { text: 'el', why: '<b>Silla</b> is a girl word: <b>la más vieja</b>.' },
              { text: 'muy', why: '<b>Muy vieja</b> = very old. The oldest is <b>la más vieja</b>.' },
            ],
            explain: 'The most → <b>la más</b> (girl word).',
            rule: 'The most · el más, la más',
          },
          {
            type: 'choice', listen: true,
            say: 'es más barato',
            options: [
              { text: "it's cheaper", correct: true },
              { text: "it's more expensive", why: 'More expensive is <b>más caro</b>. You heard <b>barato</b>: cheap.' },
              { text: "it's very cheap", why: 'Very is <b>muy</b>. You heard <b>más</b>: more.' },
            ],
            explain: '<b>Más barato</b> = cheaper.',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'El sofá es el más pesado ___ todos.', en: 'The couch is the heaviest of all.',
            options: [
              { text: 'de', correct: true },
              { text: 'en', why: '"Of all" uses <b>de</b>: <b>de todos</b>.' },
              { text: 'que', why: '<b>Que</b> compares two things. "Of all" is <b>de todos</b>.' },
            ],
            explain: 'The most … of all → <b>de todos</b>.',
            rule: 'The most · el más, la más',
          },
          {
            type: 'build',
            en: 'The heavy stuff first.',
            answer: ['Primero', 'lo', 'más', 'pesado'],
            extra: ['muy'],
            wrongWhy: { muy: '<b>Lo más pesado</b> = the heaviest stuff. <b>Muy</b> is "very".' },
            explain: '<b>Lo más pesado</b> = the heavy stuff (in general).',
            rule: 'The most · lo más',
          },
          {
            type: 'choice',
            prompt: 'Mi hermano ___ trabaja conmigo.', en: 'My older brother works with me.',
            options: [
              { text: 'mayor', correct: true },
              { text: 'más viejo', why: 'For people\'s ages, Spanish uses <b>mayor</b> (older). <b>Más viejo</b> sounds rude!' },
              { text: 'menor', why: '<b>Menor</b> is younger. Older is <b>mayor</b>.' },
            ],
            explain: 'Older (people) = <b>mayor</b>.',
            rule: 'Comparing · mayor, menor',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice',
            prompt: 'La mesa es ___ grande que la silla.', en: 'The table is bigger than the chair.',
            options: [
              { text: 'más', correct: true },
              { text: 'tan', why: '<b>Tan</b> means "as" (the same). Bigger is <b>más grande</b>.' },
              { text: 'muy', why: '<b>Muy</b> = very. Bigger than: <b>más grande que</b>.' },
            ],
            explain: 'Bigger than = <b>más grande que</b>.',
            rule: 'Comparing · más … que',
          },
          {
            type: 'choice',
            prompt: 'Esta caja es tan pesada ___ esa.', en: 'This box is as heavy as that one.',
            options: [
              { text: 'como', correct: true },
              { text: 'que', why: 'With <b>tan</b>, use <b>como</b>: <b>tan pesada como</b>.' },
              { text: 'de', why: 'As … as = <b>tan … como</b>.' },
            ],
            explain: 'As … as = <b>tan … como</b>.',
            rule: 'Comparing · tan … como',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Es más ___ que comprar un remolque.', en: "It's cheaper than buying a trailer.",
            options: [
              { text: 'barato', correct: true },
              { text: 'caro', why: '<b>Caro</b> is expensive. Cheap is <b>barato</b>.' },
              { text: 'bueno', why: 'Cheaper is <b>más barato</b>.' },
            ],
            explain: 'Cheaper = <b>más barato</b>.',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'Este colchón es ___ que el otro.', en: 'This mattress is worse than the other one.',
            options: [
              { text: 'peor', correct: true },
              { text: 'más malo', why: 'Worse has its own word: <b>peor</b>.' },
              { text: 'mejor', why: '<b>Mejor</b> is better. Worse is <b>peor</b>.' },
            ],
            explain: 'Worse = <b>peor</b>.',
            rule: 'Comparing · mejor, peor',
          },
          {
            type: 'build',
            en: 'The fridge is heavier than the washer.',
            answer: ['El', 'refrigerador', 'es', 'más', 'pesado', 'que', 'la', 'lavadora'],
            extra: ['como'],
            wrongWhy: { como: 'With <b>más</b>, use <b>que</b>.' },
            explain: '<b>más pesado que</b> = heavier than.',
            rule: 'Comparing · más … que',
          },
          {
            type: 'choice',
            prompt: 'Los sofás son ___ más pesados.', en: 'The couches are the heaviest.',
            options: [
              { text: 'los', correct: true },
              { text: 'el', why: 'More than one couch: <b>los más pesados</b>.' },
              { text: 'las', why: '<b>Sofás</b> are boy words: <b>los</b>.' },
            ],
            explain: 'Boy, more than one → <b>los más</b>.',
            rule: 'The most · el más, la más',
          },
          {
            type: 'choice', listen: true,
            say: 'el más pesado de todos',
            options: [
              { text: 'the heaviest of all', correct: true },
              { text: 'heavier than all', why: 'You heard <b>el más … de todos</b>: the most … of all.' },
              { text: 'the biggest of all', why: 'Biggest is <b>el más grande</b>. You heard <b>pesado</b>: heavy.' },
            ],
            explain: '<b>El más pesado de todos</b> = the heaviest of all.',
            rule: 'The most · el más, la más',
          },
          {
            type: 'choice',
            prompt: 'No es tan pesado ___ parece.', en: "It's not as heavy as it looks.",
            options: [
              { text: 'como', correct: true },
              { text: 'que', why: '<b>Tan</b> goes with <b>como</b>.' },
              { text: 'más', why: 'As … as = <b>tan … como</b>.' },
            ],
            explain: '<b>No es tan … como parece</b> = it\'s not as … as it looks.',
            rule: 'Comparing · tan … como',
          },
          {
            type: 'build',
            en: 'Which one is the heaviest?',
            answer: ['¿Cuál', 'es', 'el', 'más', 'pesado?'],
            extra: ['muy'],
            wrongWhy: { muy: 'The heaviest = <b>el más pesado</b>.' },
            explain: '<b>¿Cuál?</b> = which one. <b>El más pesado</b> = the heaviest.',
            end: '',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'Mi hermana ___ tiene diez años.', en: 'My younger sister is ten.',
            options: [
              { text: 'menor', correct: true },
              { text: 'mayor', why: '<b>Mayor</b> is older. Younger is <b>menor</b>.' },
              { text: 'más joven', why: 'People say that too, but <b>menor</b> is the usual word for a younger sister.' },
            ],
            explain: 'Younger (siblings) = <b>menor</b>.',
            rule: 'Comparing · mayor, menor',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice',
            prompt: 'La secadora es ___ pesada que la lavadora.', en: 'The dryer is lighter (less heavy) than the washer.',
            options: [
              { text: 'menos', correct: true },
              { text: 'más', why: '<b>Más pesada</b> = heavier. Less heavy is <b>menos pesada</b>.' },
              { text: 'tan', why: '<b>Tan pesada como</b> = as heavy as. Less heavy: <b>menos</b>.' },
            ],
            explain: 'Less … than = <b>menos … que</b>.',
            rule: 'Comparing · menos … que',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Este trabajo es ___ difícil que el de ayer.', en: "This job is harder than yesterday's.",
            options: [
              { text: 'más', correct: true },
              { text: 'muy', why: '<b>Muy difícil</b> = very hard. Harder than: <b>más difícil que</b>.' },
              { text: 'mejor', why: '<b>Mejor</b> is better. Harder is <b>más difícil</b>.' },
            ],
            explain: 'Harder than = <b>más difícil que</b>.',
            rule: 'Comparing · más … que',
          },
          {
            type: 'choice',
            prompt: 'Es la ___ grande de todas.', en: "It's the biggest of all.",
            options: [
              { text: 'más', correct: true },
              { text: 'muy', why: 'The biggest = <b>la más grande</b>.' },
              { text: 'tan', why: 'The biggest = <b>la más grande</b>.' },
            ],
            explain: 'The most = <b>la más</b> …',
            rule: 'The most · el más, la más',
          },
          {
            type: 'choice',
            prompt: 'Hoy el tráfico está ___ que ayer.', en: 'Today the traffic is worse than yesterday.',
            options: [
              { text: 'peor', correct: true },
              { text: 'más malo', why: 'Worse has its own word: <b>peor</b>.' },
              { text: 'mejor', why: '<b>Mejor</b> is better. Worse is <b>peor</b>.' },
            ],
            explain: 'Worse = <b>peor</b>.',
            rule: 'Comparing · mejor, peor',
          },
          {
            type: 'build',
            en: "It's cheaper than buying a trailer.",
            answer: ['Es', 'más', 'barato', 'que', 'comprar', 'un', 'remolque'],
            extra: ['caro'],
            wrongWhy: { caro: '<b>Caro</b> is expensive. Cheaper is <b>más barato</b>.' },
            explain: '<b>más barato que</b> = cheaper than.',
            rule: 'On the job',
          },
          {
            type: 'choice', listen: true,
            say: 'tan grande como el sofá',
            options: [
              { text: 'as big as the couch', correct: true },
              { text: 'bigger than the couch', why: 'Bigger than is <b>más grande que</b>. You heard <b>tan … como</b>: as … as.' },
              { text: 'as heavy as the couch', why: 'Heavy is <b>pesado</b>. You heard <b>grande</b>: big.' },
            ],
            explain: '<b>tan grande como</b> = as big as.',
            rule: 'Comparing · tan … como',
          },
          {
            type: 'choice',
            prompt: 'Las cajas de arriba son ___ más ligeras.', en: 'The boxes upstairs are the lightest.',
            options: [
              { text: 'las', correct: true },
              { text: 'los', why: '<b>Cajas</b> are girl words: <b>las más ligeras</b>.' },
              { text: 'la', why: 'More than one box: <b>las</b>.' },
            ],
            explain: 'Girl, more than one → <b>las más</b>.',
            rule: 'The most · el más, la más',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Nuestro precio es el ___ de la ciudad.', en: 'Our price is the best in the city.',
            options: [
              { text: 'mejor', correct: true },
              { text: 'más bueno', why: 'The best = <b>el mejor</b>.' },
              { text: 'peor', why: 'The worst? Not a great thing to tell a customer! The best is <b>el mejor</b>.' },
            ],
            explain: 'The best = <b>el mejor</b>.',
            rule: 'Comparing · mejor, peor',
          },
          {
            type: 'build',
            en: 'This box is as heavy as that one.',
            answer: ['Esta', 'caja', 'es', 'tan', 'pesada', 'como', 'esa'],
            extra: ['que'],
            wrongWhy: { que: 'With <b>tan</b>, use <b>como</b>.' },
            explain: '<b>tan pesada como</b> = as heavy as.',
            rule: 'Comparing · tan … como',
          },
          {
            type: 'choice',
            prompt: 'Mi jefe es ___ que yo.', en: 'My boss is older than me.',
            options: [
              { text: 'mayor', correct: true },
              { text: 'menor', why: '<b>Menor</b> is younger. Older is <b>mayor</b>.' },
              { text: 'más mayor', why: '<b>Mayor</b> already means "older". No <b>más</b>.' },
            ],
            explain: 'Older (people) = <b>mayor</b>.',
            rule: 'Comparing · mayor, menor',
          },
        ],
      ],
    },

    { type: 'retry' },

    // ---------- the conversation ----------
    {
      type: 'talkSet',
      scenes: [
        // ---------- Scene A: the boss ----------
        {
          type: 'talk',
          title: 'Loading the truck',
          who: { name: 'Rubén (your boss)', emoji: '👷' },
          setup: 'You and Rubén are at a house full of furniture. He wants to see if you can plan how to load the truck.',
          tips: [
            { mood: 3, text: 'He lets you plan the next load yourself 💪' },
            { mood: 2, text: '"Good job."' },
            { mood: 1, text: 'He re-packs half the truck' },
            { mood: 0, text: 'He sighs and does it himself 😬' },
          ],
          lines: [
            {
              them: 'Bueno, ¿qué cargamos primero?',
              en: 'OK, what do we load first?',
              choices: [
                { es: 'Primero lo más pesado.', en: 'The heavy stuff first.', good: true,
                  note: 'Heavy things go in first, low and at the front. Rubén nods.' },
                { es: 'Primero lo muy pesado.', en: 'The "very heavy" stuff first.',
                  react: '¿Lo muy pesado? Ah, lo más pesado. 🙂', reactEn: '"The very heavy"? Oh, the heaviest.',
                  why: 'The heaviest stuff: <b>lo más pesado</b>.' },
                { es: 'Primero las cajas más ligeras.', en: 'The lightest boxes first.',
                  react: '¿Las ligeras primero? Se van a aplastar. 🤨', reactEn: 'Light ones first? They\'ll get crushed.',
                  why: 'Heavy goes first, so the light boxes don\'t get crushed: <b>Primero lo más pesado.</b>' },
              ],
            },
            {
              them: '¿Cuál es más pesado: el refrigerador o la lavadora?',
              en: 'Which is heavier: the fridge or the washer?',
              choices: [
                { es: 'El refrigerador es más pesado que la lavadora.', en: 'The fridge is heavier than the washer.', good: true,
                  note: '<b>más pesado que</b>: heavier than.' },
                { es: 'El refrigerador es más pesado como la lavadora.', en: 'The fridge is heavier like the washer.',
                  react: '¿Como? ¿Que? 🤔', reactEn: '"Like"? "Than"?',
                  why: 'With <b>más</b>, use <b>que</b>: <b>más pesado que</b>.' },
                { es: 'El refrigerador es muy pesado que la lavadora.', en: 'The fridge is very heavy than the washer.',
                  react: '¿Muy? 🤔', reactEn: '"Very"?',
                  why: 'Heavier than = <b>más pesado que</b>.' },
              ],
            },
            {
              them: 'Bien. ¿Y el sofá?',
              en: 'Good. And the couch?',
              choices: [
                { es: 'El sofá es tan pesado como la lavadora.', en: 'The couch is as heavy as the washer.', good: true,
                  note: '<b>tan … como</b>: as … as.' },
                { es: 'El sofá es tan pesado que la lavadora.', en: 'The couch is so heavy that the washer…',
                  react: '¿Que la lavadora qué? 😄', reactEn: 'That the washer what?',
                  why: 'As … as is <b>tan … como</b>.' },
                { es: 'El sofá es tan pesada como la lavadora.', en: 'The couch (girl ending) is as heavy as the washer.',
                  react: 'Pesado. 🙂', reactEn: '"Pesado".',
                  why: 'It copies <b>el sofá</b>: <b>pesado</b>.' },
              ],
            },
            {
              them: '¿Y dónde ponemos las cajas de libros?',
              en: 'And where do we put the boxes of books?',
              choices: [
                { es: 'Abajo. Son las más pesadas.', en: "On the bottom. They're the heaviest.", good: true,
                  note: 'Book boxes are always the heaviest boxes. Rubén smiles.' },
                { es: 'Arriba. Son las más pesadas.', en: "On top. They're the heaviest.",
                  react: '¿Arriba? ¡Van a aplastar todo! 😟', reactEn: 'On top? They\'ll crush everything!',
                  why: 'The heaviest go on the bottom: <b>abajo</b>.' },
                { es: 'Abajo. Son los más pesados.', en: "On the bottom. They're (boy ending) the heaviest.",
                  react: 'Las cajas, las más pesadas. 🙂', reactEn: 'The boxes, the heaviest.',
                  why: '<b>Cajas</b> are girl words: <b>las más pesadas</b>.' },
              ],
            },
            {
              them: 'Muy bien. Eres mejor que el último ayudante.',
              en: 'Very good. You\'re better than the last helper.',
              choices: [
                { es: '¡Gracias, jefe! Usted es el mejor.', en: "Thanks, boss! You're the best.", good: true,
                  note: '<b>El mejor</b> = the best. A little flattery never hurts.' },
                { es: '¡Gracias, jefe! Usted es el más bueno.', en: "Thanks, boss! You're the most good.",
                  react: '¿El más bueno? 😄 El mejor.', reactEn: '"The most good"? The best.',
                  why: 'The best = <b>el mejor</b>.' },
                { es: 'Sí, soy el peor.', en: "Yes, I'm the worst.",
                  react: '¿El peor? ¡Dije mejor! 😂', reactEn: 'The worst? I said better!',
                  why: '<b>Peor</b> = worse. Just say thanks: <b>¡Gracias, jefe!</b>' },
              ],
            },
          ],
        },

        // ---------- Scene B: a customer comparing prices ----------
        {
          type: 'talk',
          title: 'The other company',
          who: { name: 'Señor Paredes', emoji: '🧔' },
          setup: 'Señor Paredes got a quote from another company. He wants to know why he should pick yours.',
          tips: [
            { mood: 3, text: 'He books and tells his brother-in-law about you 🤝' },
            { mood: 2, text: 'He books with you' },
            { mood: 1, text: '"I\'ll think about it."' },
            { mood: 0, text: 'He goes with the other company 😬' },
          ],
          lines: [
            {
              them: 'La otra compañía es más barata.',
              en: 'The other company is cheaper.',
              choices: [
                { es: '¿Cuánto más barata?', en: 'How much cheaper?', good: true,
                  note: 'Find out the real difference before you answer.' },
                { es: '¿Cuánto más barato?', en: 'How much cheaper (boy ending)?',
                  react: 'La compañía… barata. 🙂', reactEn: 'The company… cheap.',
                  why: '<b>Compañía</b> is a girl word: <b>barata</b>.' },
                { es: 'Entonces, adiós.', en: 'Then, goodbye.',
                  react: 'Eh… ok. 😕', reactEn: 'Uh… OK.',
                  why: 'Don\'t give up! Ask: <b>¿Cuánto más barata?</b>' },
              ],
            },
            {
              them: 'Veinte dólares menos.',
              en: 'Twenty dollars less.',
              choices: [
                { es: 'Pero nuestro servicio es mejor. Barremos todo.', en: 'But our service is better. We sweep everything.', good: true,
                  note: '<b>Mejor</b> = better. Give a reason!' },
                { es: 'Pero nuestro servicio es más bueno.', en: 'But our service is more good.',
                  react: '¿Más bueno? 🤔', reactEn: '"More good"?',
                  why: 'Better = <b>mejor</b>.' },
                { es: 'Pero nuestro servicio es peor.', en: 'But our service is worse.',
                  react: '¿Peor? ¿Y por qué lo voy a escoger? 😂', reactEn: 'Worse? Then why would I pick it?',
                  why: '<b>Peor</b> = worse! You mean <b>mejor</b>.' },
              ],
            },
            {
              them: '¿Y son más rápidos?',
              en: 'And are you faster?',
              choices: [
                { es: 'Sí, somos más rápidos. Terminamos en dos horas.', en: "Yes, we're faster. We finish in two hours.", good: true,
                  note: '<b>Más rápidos</b>: copies <b>nosotros</b> (more than one).' },
                { es: 'Sí, somos más rápido.', en: "Yes, we're faster (one-person ending).",
                  react: 'Rápidos. 🙂', reactEn: '"Rápidos".',
                  why: '<b>Somos</b> is more than one: <b>más rápidos</b>.' },
                { es: 'Sí, somos tan rápidos.', en: "Yes, we're so fast.",
                  react: '¿Tan rápidos como quién? 🤔', reactEn: 'As fast as who?',
                  why: 'Faster = <b>más rápidos</b>.' },
              ],
            },
            {
              them: 'Mmm. ¿Y si se rompe algo?',
              en: 'Hmm. And if something breaks?',
              choices: [
                { es: 'Tenemos seguro. Es la mejor garantía.', en: 'We have insurance. It\'s the best guarantee.', good: true,
                  note: '<b>La mejor garantía</b> = the best guarantee. (Seguro = insurance.)' },
                { es: 'Tenemos seguro. Es la más buena garantía.', en: "We have insurance. It's the most good guarantee.",
                  react: '¿La más buena? 🙂', reactEn: '"The most good"?',
                  why: 'The best = <b>la mejor</b>.' },
                { es: 'No se rompe nada. Somos los peores.', en: "Nothing breaks. We're the worst.",
                  react: '¿Los peores? 😂', reactEn: 'The worst?',
                  why: '<b>Peores</b> = worst! You mean <b>los mejores</b>.' },
              ],
            },
            {
              them: 'Está bien. Prefiero pagar un poco más.',
              en: 'OK. I prefer to pay a little more.',
              choices: [
                { es: '¡Gracias! No se va a arrepentir.', en: "Thanks! You won't regret it.", good: true,
                  note: '<b>No se va a arrepentir</b> = you won\'t regret it.' },
                { es: '¡Gracias! Es más caro, pero mejor.', en: "Thanks! It's more expensive, but better.",
                  react: 'Sí, ya sé. 🙂', reactEn: 'Yes, I know.',
                  why: 'True, but he already said yes. Just thank him: <b>No se va a arrepentir.</b>' },
                { es: '¡Gracias! Es más barato.', en: "Thanks! It's cheaper.",
                  react: '¿Más barato? ¡Es más caro! 🤨', reactEn: 'Cheaper? It\'s more expensive!',
                  why: 'Yours costs more: <b>más caro</b>. Just thank him.' },
              ],
            },
          ],
        },

        // ---------- Scene C: keep or toss ----------
        {
          type: 'talk',
          title: 'Keep or toss?',
          who: { name: 'Mónica', emoji: '👩' },
          setup: 'Mónica is clearing out her late grandmother\'s house with her younger brother. They can\'t decide what to keep.',
          tips: [
            { mood: 3, text: 'She hugs you and gives you a plate of tamales 🫔' },
            { mood: 2, text: 'She thanks you' },
            { mood: 1, text: 'She\'s still unsure' },
            { mood: 0, text: 'She asks you to come back another day 😬' },
          ],
          lines: [
            {
              them: 'Tenemos dos sillones. No sé cuál guardar.',
              en: "We have two armchairs. I don't know which one to keep.",
              choices: [
                { es: '¿Cuál es más cómodo?', en: 'Which one is more comfortable?', good: true,
                  note: '<b>¿Cuál?</b> = which one. <b>Más cómodo</b> = more comfortable.' },
                { es: '¿Qué es más cómodo?', en: 'What is more comfortable?',
                  react: '¿Qué…? Ah, ¿cuál? 🙂', reactEn: '"What"? Oh, which one?',
                  why: 'Choosing between two: <b>¿Cuál?</b>' },
                { es: '¿Cuál es muy cómodo?', en: 'Which one is very comfortable?',
                  react: 'Los dos son cómodos… 🤔', reactEn: 'Both are comfortable…',
                  why: 'Compare: <b>¿Cuál es más cómodo?</b>' },
              ],
            },
            {
              them: 'El azul es más cómodo, pero el verde es más bonito.',
              en: 'The blue one is more comfortable, but the green one is prettier.',
              choices: [
                { es: '¿Cuál es más viejo?', en: 'Which one is older?', good: true,
                  note: 'For things, <b>más viejo</b> is fine. (For people, use <b>mayor</b>.)' },
                { es: '¿Cuál es mayor?', en: 'Which one is older (for people)?',
                  react: '¿Mayor? Son sillones. 😄', reactEn: '"Mayor"? They\'re armchairs.',
                  why: '<b>Mayor</b> is for people. Things: <b>más viejo</b>.' },
                { es: '¿Cuál es más bonita?', en: 'Which one is prettier (girl ending)?',
                  react: '¿Bonita? El sillón… 🙂', reactEn: '"Bonita"? The armchair…',
                  why: '<b>Sillón</b> is a boy word: <b>bonito</b>.' },
              ],
            },
            {
              them: 'El verde. Era de mi abuela.',
              en: 'The green one. It was my grandmother\'s.',
              choices: [
                { es: 'Entonces es el más especial. Guárdelo.', en: "Then it's the most special. Keep it.", good: true,
                  note: '<b>El más especial</b> = the most special. Kind and helpful.' },
                { es: 'Entonces es el más viejo. A la basura.', en: "Then it's the oldest. To the trash.",
                  react: '¡¿A la basura?! 😢', reactEn: 'To the trash?!',
                  why: 'It was her grandmother\'s! <b>Es el más especial. Guárdelo.</b>' },
                { es: 'Entonces es la más especial.', en: "Then it's (girl) the most special.",
                  react: 'El sillón, sí. 🙂', reactEn: 'The armchair, yes.',
                  why: '<b>Sillón</b> is a boy word: <b>el más especial</b>.' },
              ],
            },
            {
              them: 'Mi hermano menor quiere la mesa grande.',
              en: 'My younger brother wants the big table.',
              choices: [
                { es: '¿Es más grande que su cocina?', en: 'Is it bigger than his kitchen?', good: true,
                  note: 'A funny, useful question: will it even fit?' },
                { es: '¿Es más grande como su cocina?', en: 'Is it bigger like his kitchen?',
                  react: '¿Como? 🤔', reactEn: '"Like"?',
                  why: 'With <b>más</b>, use <b>que</b>.' },
                { es: '¿Su hermano mayor?', en: 'Your older brother?',
                  react: 'No, menor. 🙂', reactEn: 'No, younger.',
                  why: 'She said <b>menor</b> (younger).' },
              ],
            },
            {
              them: '¡Ja! Sí, es muy grande para su apartamento.',
              en: "Ha! Yes, it's too big for his apartment.",
              choices: [
                { es: 'Entonces la donamos. Es la mejor opción.', en: "Then we donate it. It's the best option.", good: true,
                  note: '<b>La mejor opción</b> = the best option.' },
                { es: 'Entonces la donamos. Es la peor opción.', en: "Then we donate it. It's the worst option.",
                  react: '¿La peor? 🤔', reactEn: 'The worst?',
                  why: '<b>Peor</b> = worst. You mean <b>la mejor opción</b>.' },
                { es: 'Entonces la donamos. Es el mejor opción.', en: "Then we donate it. It's the (boy) best option.",
                  react: 'La mejor, sí. 🙂', reactEn: 'The best, yes.',
                  why: '<b>Opción</b> is a girl word: <b>la mejor opción</b>.' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
