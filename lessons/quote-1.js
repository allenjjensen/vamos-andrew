// Lesson: The quote. This / that, what goes and what stays, the price, and paying.
// Unit 3 (Sizing up the job). Ends with full on-site walkthroughs that use the whole unit.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'quote-1',
  unit: 'Sizing up the job',
  title: 'The quote',
  subtitle: 'This, that, the price, paying',
  minutes: 10,
  terms: ['pronoun', 'noun', 'verb'],

  recap: `<p>This: <b>este</b> (boy word), <b>esta</b> (girl word). That: <b>ese</b>, <b>esa</b>. More than one: <b>estos, estas, esos, esas</b>.</p>
    <p>Don't know the word, or it's a bunch of stuff? <b>esto</b> (this) and <b>eso</b> (that): <b>¿Esto también se va?</b></p>
    <p>Goes or stays: <b>se va</b> / <b>se queda</b>.</p>
    <p>The price: <b>Todo esto va a costar trescientos dólares.</b> Paying: <b>en efectivo</b> (cash), <b>con tarjeta</b> (card). Check: <b>¿Le parece bien?</b></p>`,

  phrases: [
    { es: '¿Esto también se va?', en: 'Is this going too?' },
    { es: 'Todo esto va a costar trescientos dólares.', en: "All this is going to cost three hundred dollars." },
    { es: '¿Le parece bien?', en: 'Does that sound good to you?' },
    { es: '¿Va a pagar en efectivo o con tarjeta?', en: 'Are you going to pay cash or card?' },
    { es: 'Esa mesa se queda.', en: 'That table stays.' },
    { es: 'El precio incluye todo.', en: 'The price includes everything.' },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '🧾',
      title: 'The quote',
      learn: [
        'This and that: este, esa, esto, eso',
        'What goes and what stays',
        'Giving the price and taking payment',
      ],
    },

    // ---------- warm-up ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: '___ mesa se va.', en: 'This table is going.',
      options: [
        { text: 'Esta', correct: true },
        { text: 'Este', why: '<b>Mesa</b> is a girl word: <b>esta mesa</b>.' },
      ],
      explain: 'Girl word → <b>esta</b>.',
      rule: 'This and that',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: '¿Va a pagar en ___?', en: 'Are you going to pay in cash?',
      options: [
        { text: 'efectivo', correct: true },
        { text: 'tarjeta', why: '<b>Tarjeta</b> = card. Cash is <b>efectivo</b>.' },
      ],
      explain: 'Cash = <b>efectivo</b>.',
      rule: 'Paying',
    },
    {
      type: 'warmupResult',
      all: '¡Excelente! You\'re ready to close the deal.',
      some: 'Good start. Last lesson of the unit: let\'s put it all together.',
      none: 'No worries. Last lesson of the unit: let\'s put it all together.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: 'Pointing',
      title: 'This and that',
      rows: [
        { es: 'este sofá', en: 'this couch (boy word)' },
        { es: 'esta mesa', en: 'this table (girl word)' },
        { es: 'ese colchón', en: 'that mattress' },
        { es: 'esa silla', en: 'that chair' },
        { es: 'estas cajas · esos muebles', en: 'these boxes · those pieces of furniture' },
      ],
      trick: 'This (close) has a <b>t</b>: <b>este, esta</b>. That (farther) doesn\'t: <b>ese, esa</b>. "This and these have T\'s."',
    },
    {
      type: 'teach', kicker: 'No noun needed',
      title: 'esto and eso',
      rows: [
        { es: '¿Qué es esto?', en: 'What is this?' },
        { es: 'Todo esto', en: 'All this (stuff)' },
        { es: '¿Eso también?', en: 'That too?' },
      ],
      trick: 'Pointing at a pile, or don\'t know the word? Use <b>esto</b> (this) or <b>eso</b> (that). They never change. No noun after them.',
    },
    {
      type: 'teach', kicker: 'Goes or stays',
      title: 'se va, se queda',
      rows: [
        { es: '¿Esto también se va?', en: 'Is this going too?' },
        { es: 'Sí, todo se va.', en: 'Yes, everything goes.' },
        { es: 'No, eso se queda.', en: 'No, that stays.' },
        { es: 'Las sillas se quedan.', en: 'The chairs stay.' },
      ],
      trick: '<b>Se va</b> = it goes (it leaves). <b>Se queda</b> = it stays. More than one: <b>se van</b>, <b>se quedan</b>. Always ask before you take something!',
    },
    {
      type: 'teach', kicker: 'The price',
      title: 'Giving the quote',
      rows: [
        { es: 'Todo esto va a costar…', en: 'All this is going to cost…' },
        { es: 'trescientos dólares en total', en: 'three hundred dollars total' },
        { es: 'El precio incluye todo.', en: 'The price includes everything.' },
        { es: '¿Le parece bien?', en: 'Does that sound good to you?' },
      ],
      trick: '<b>¿Le parece bien?</b> is a polite way to check: "is that OK with you?" Say it after the price, then wait.',
    },
    {
      type: 'teach', kicker: 'Paying',
      title: 'Cash or card',
      rows: [
        { es: '¿Cómo va a pagar?', en: 'How are you going to pay?' },
        { es: 'en efectivo', en: 'in cash' },
        { es: 'con tarjeta', en: 'by card' },
        { es: 'Aquí está su recibo.', en: "Here's your receipt." },
        { es: 'Firme aquí, por favor.', en: 'Sign here, please.' },
      ],
      trick: 'Cash is <b>en</b> efectivo, card is <b>con</b> tarjeta. Think "IN cash, WITH a card."',
    },

    // ---------- practice ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice',
            prompt: '___ sofá se va.', en: 'This couch is going.',
            options: [
              { text: 'Este', correct: true },
              { text: 'Esta', why: '<b>Sofá</b> is a boy word (even with the -a!): <b>este</b>.' },
              { text: 'Esto', why: '<b>Esto</b> never has a noun after it. This couch: <b>este sofá</b>.' },
            ],
            explain: '<b>Sofá</b> is a boy word → <b>este</b>.',
            rule: 'This and that',
          },
          {
            type: 'choice',
            prompt: '¿___ también se va?', en: 'Is this going too?',
            options: [
              { text: 'Esto', correct: true },
              { text: 'Este', why: '<b>Este</b> needs a noun after it (este sofá). Just "this": <b>esto</b>.' },
              { text: 'Esta', why: '<b>Esta</b> needs a noun after it (esta mesa). Just "this": <b>esto</b>.' },
            ],
            explain: 'No noun → <b>esto</b>.',
            rule: 'This and that · esto, eso',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'No, esa mesa se ___.', en: 'No, that table stays.',
            options: [
              { text: 'queda', correct: true },
              { text: 'va', why: '<b>Se va</b> = it goes. Stays is <b>se queda</b>.' },
              { text: 'quedan', why: 'One table: <b>se queda</b>.' },
            ],
            explain: 'Stays = <b>se queda</b>.',
            rule: 'Goes or stays',
          },
          {
            type: 'choice',
            prompt: 'Todo esto va a ___ trescientos dólares.', en: 'All this is going to cost three hundred dollars.',
            options: [
              { text: 'costar', correct: true },
              { text: 'cuesta', why: 'After <b>va a</b>, the verb stays whole: <b>costar</b>.' },
              { text: 'pagar', why: '<b>Pagar</b> = to pay. Cost is <b>costar</b>.' },
            ],
            explain: '<b>Va a costar</b> = it\'s going to cost.',
            rule: 'The price',
          },
          {
            type: 'build',
            en: 'Does that sound good to you?',
            answer: ['¿Le', 'parece', 'bien?'],
            extra: ['bueno'],
            wrongWhy: { bueno: 'The phrase is <b>¿Le parece bien?</b>' },
            explain: '<b>¿Le parece bien?</b> = does that sound good to you?',
            end: '',
            rule: 'The price',
          },
          {
            type: 'choice',
            prompt: '¿Va a pagar ___ tarjeta?', en: 'Are you going to pay by card?',
            options: [
              { text: 'con', correct: true },
              { text: 'en', why: '<b>En</b> goes with efectivo. Card: <b>con tarjeta</b>.' },
              { text: 'de', why: 'By card = <b>con tarjeta</b>.' },
            ],
            explain: 'WITH a card → <b>con tarjeta</b>.',
            rule: 'Paying',
          },
          {
            type: 'choice', listen: true,
            say: 'eso se queda',
            options: [
              { text: 'that stays', correct: true },
              { text: 'that goes', why: 'Goes is <b>se va</b>. You heard <b>se queda</b>: stays.' },
              { text: 'this stays', why: 'This is <b>esto</b>. You heard <b>eso</b>: that.' },
            ],
            explain: '<b>Eso se queda</b> = that stays.',
            rule: 'Goes or stays',
          },
          {
            type: 'choice',
            prompt: '___ cajas son pesadas.', en: 'These boxes are heavy.',
            options: [
              { text: 'Estas', correct: true },
              { text: 'Estos', why: '<b>Cajas</b> are girl words: <b>estas</b>.' },
              { text: 'Esta', why: 'More than one box: <b>estas</b>.' },
            ],
            explain: 'Girl, more than one → <b>estas</b>.',
            rule: 'This and that',
          },
          {
            type: 'build',
            en: 'The price includes everything.',
            answer: ['El', 'precio', 'incluye', 'todo'],
            extra: ['todos'],
            wrongWhy: { todos: 'Everything = <b>todo</b>. (Todos = everyone / all of them.)' },
            explain: '<b>Incluye todo</b> = includes everything.',
            rule: 'The price',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Aquí está su ___.', en: "Here's your receipt.",
            options: [
              { text: 'recibo', correct: true },
              { text: 'receta', why: '<b>Receta</b> is a recipe (or a prescription)! Receipt is <b>recibo</b>.' },
              { text: 'tarjeta', why: '<b>Tarjeta</b> = card. Receipt is <b>recibo</b>.' },
            ],
            explain: 'Receipt = <b>recibo</b>.',
            rule: 'Paying',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice',
            prompt: '¿Y ___ silla?', en: 'And that chair?',
            options: [
              { text: 'esa', correct: true },
              { text: 'ese', why: '<b>Silla</b> is a girl word: <b>esa</b>.' },
              { text: 'eso', why: '<b>Eso</b> never has a noun after it. That chair: <b>esa silla</b>.' },
            ],
            explain: 'Girl word → <b>esa</b>.',
            rule: 'This and that',
          },
          {
            type: 'choice',
            prompt: '¿Qué es ___?', en: 'What is this?',
            options: [
              { text: 'esto', correct: true },
              { text: 'este', why: 'No noun after it → <b>esto</b>.' },
              { text: 'esta', why: 'No noun after it → <b>esto</b>.' },
            ],
            explain: 'Don\'t know what it is? <b>¿Qué es esto?</b>',
            rule: 'This and that · esto, eso',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Las sillas se ___.', en: 'The chairs stay.',
            options: [
              { text: 'quedan', correct: true },
              { text: 'queda', why: 'More than one chair: <b>se quedan</b>.' },
              { text: 'van', why: '<b>Se van</b> = they go. Stay: <b>se quedan</b>.' },
            ],
            explain: 'More than one → <b>se quedan</b>.',
            rule: 'Goes or stays',
          },
          {
            type: 'choice',
            prompt: 'Son doscientos dólares en ___.', en: "It's two hundred dollars total.",
            options: [
              { text: 'total', correct: true },
              { text: 'todo', why: 'Total = <b>en total</b>.' },
              { text: 'efectivo', why: '<b>En efectivo</b> = in cash. Total is <b>en total</b>.' },
            ],
            explain: 'Total = <b>en total</b>.',
            rule: 'The price',
          },
          {
            type: 'build',
            en: 'Is this going too?',
            answer: ['¿Esto', 'también', 'se', 'va?'],
            extra: ['queda'],
            wrongWhy: { queda: '<b>Se queda</b> = stays. Going: <b>se va</b>.' },
            explain: 'Always ask before you take something!',
            end: '',
            rule: 'Goes or stays',
          },
          {
            type: 'choice',
            prompt: '___ colchones están sucios.', en: 'Those mattresses are dirty.',
            options: [
              { text: 'Esos', correct: true },
              { text: 'Esas', why: '<b>Colchones</b> are boy words: <b>esos</b>.' },
              { text: 'Estos', why: '<b>Estos</b> = these. Those: <b>esos</b>.' },
            ],
            explain: 'Boy, more than one, that → <b>esos</b>.',
            rule: 'This and that',
          },
          {
            type: 'choice', listen: true,
            say: 'con tarjeta',
            options: [
              { text: 'by card', correct: true },
              { text: 'in cash', why: 'Cash is <b>en efectivo</b>. You heard <b>tarjeta</b>: card.' },
              { text: 'by check', why: 'Check is <b>cheque</b>. You heard <b>tarjeta</b>: card.' },
            ],
            explain: '<b>Con tarjeta</b> = by card.',
            rule: 'Paying',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Cómo va a ___?', en: 'How are you going to pay?',
            options: [
              { text: 'pagar', correct: true },
              { text: 'paga', why: 'After <b>va a</b>, the verb stays whole: <b>pagar</b>.' },
              { text: 'costar', why: '<b>Costar</b> = to cost. Pay is <b>pagar</b>.' },
            ],
            explain: '<b>¿Cómo va a pagar?</b> = how are you going to pay?',
            rule: 'Paying',
          },
          {
            type: 'build',
            en: 'Sign here, please.',
            answer: ['Firme', 'aquí,', 'por', 'favor'],
            extra: ['allí'],
            wrongWhy: { 'allí': '<b>Allí</b> = there. Here is <b>aquí</b>.' },
            explain: '<b>Firme aquí</b> = sign here.',
            rule: 'Paying',
          },
          {
            type: 'choice',
            prompt: 'Todo ___ va a costar trescientos dólares.', en: 'All this is going to cost three hundred dollars.',
            options: [
              { text: 'esto', correct: true },
              { text: 'este', why: 'All this stuff, no noun → <b>todo esto</b>.' },
              { text: 'estos', why: 'All this stuff → <b>todo esto</b>.' },
            ],
            explain: 'All this (stuff) = <b>todo esto</b>.',
            rule: 'This and that · esto, eso',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice',
            prompt: '___ refrigerador está roto.', en: 'This fridge is broken.',
            options: [
              { text: 'Este', correct: true },
              { text: 'Ese', why: '<b>Ese</b> = that. This: <b>este</b>.' },
              { text: 'Esta', why: '<b>Refrigerador</b> is a boy word: <b>este</b>.' },
            ],
            explain: 'This, boy word → <b>este</b>.',
            rule: 'This and that',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿___ también?', en: 'That too?',
            options: [
              { text: 'Eso', correct: true },
              { text: 'Ese', why: '<b>Ese</b> needs a noun after it. Just "that": <b>eso</b>.' },
              { text: 'Esa', why: '<b>Esa</b> needs a noun after it. Just "that": <b>eso</b>.' },
            ],
            explain: 'No noun → <b>eso</b>.',
            rule: 'This and that · esto, eso',
          },
          {
            type: 'choice',
            prompt: 'Los colchones se ___.', en: 'The mattresses are going.',
            options: [
              { text: 'van', correct: true },
              { text: 'va', why: 'More than one: <b>se van</b>.' },
              { text: 'quedan', why: '<b>Se quedan</b> = they stay. Going: <b>se van</b>.' },
            ],
            explain: 'More than one, going → <b>se van</b>.',
            rule: 'Goes or stays',
          },
          {
            type: 'choice',
            prompt: 'Prefiero pagar ___ efectivo.', en: 'I prefer to pay in cash.',
            options: [
              { text: 'en', correct: true },
              { text: 'con', why: '<b>Con</b> goes with tarjeta. Cash: <b>en efectivo</b>.' },
              { text: 'de', why: 'In cash = <b>en efectivo</b>.' },
            ],
            explain: 'IN cash → <b>en efectivo</b>.',
            rule: 'Paying',
          },
          {
            type: 'build',
            en: 'That table stays.',
            answer: ['Esa', 'mesa', 'se', 'queda'],
            extra: ['Ese'],
            wrongWhy: { Ese: '<b>Mesa</b> is a girl word: <b>esa</b>.' },
            explain: 'That table → <b>esa mesa</b>. Stays → <b>se queda</b>.',
            rule: 'Goes or stays',
          },
          {
            type: 'choice', listen: true,
            say: 'todo esto va a costar cien dólares',
            options: [
              { text: 'all this is going to cost a hundred dollars', correct: true },
              { text: 'all this costs a hundred dollars', why: 'You heard <b>va a costar</b>: is going to cost.' },
              { text: 'all this is going to cost two hundred dollars', why: 'Two hundred is <b>doscientos</b>. You heard <b>cien</b>: a hundred.' },
            ],
            explain: '<b>Todo esto va a costar cien dólares.</b>',
            rule: 'The price',
          },
          {
            type: 'choice',
            prompt: '___ sillas se quedan.', en: 'These chairs stay.',
            options: [
              { text: 'Estas', correct: true },
              { text: 'Estos', why: '<b>Sillas</b> are girl words: <b>estas</b>.' },
              { text: 'Esto', why: '<b>Esto</b> never has a noun after it. These chairs: <b>estas sillas</b>.' },
            ],
            explain: 'Girl, more than one, this → <b>estas</b>.',
            rule: 'This and that',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Son trescientos dólares. ¿Le ___ bien?', en: "It's three hundred dollars. Does that sound good to you?",
            options: [
              { text: 'parece', correct: true },
              { text: 'gusta', why: '<b>¿Le gusta?</b> = do you like it? Sounds good: <b>¿Le parece bien?</b>' },
              { text: 'está', why: 'Sounds good to you = <b>¿Le parece bien?</b>' },
            ],
            explain: '<b>¿Le parece bien?</b> = does that sound good to you?',
            rule: 'The price',
          },
          {
            type: 'build',
            en: 'Are you going to pay cash or card?',
            answer: ['¿Va', 'a', 'pagar', 'en', 'efectivo', 'o', 'con', 'tarjeta?'],
            extra: ['paga'],
            wrongWhy: { paga: 'After <b>va a</b>, the verb stays whole: <b>pagar</b>.' },
            explain: 'IN cash, WITH a card.',
            end: '',
            rule: 'Paying',
          },
          {
            type: 'choice',
            prompt: 'El precio ___ todo.', en: 'The price includes everything.',
            options: [
              { text: 'incluye', correct: true },
              { text: 'incluir', why: 'One price, right now: <b>incluye</b>. (Incluir is the whole verb.)' },
              { text: 'cuesta', why: '<b>Cuesta</b> = costs. Includes is <b>incluye</b>.' },
            ],
            explain: 'Includes = <b>incluye</b>.',
            rule: 'The price',
          },
        ],
      ],
    },

    { type: 'retry' },

    // ---------- the conversation ----------
    {
      type: 'talkSet',
      scenes: [
        // ---------- Scene A: the garage ----------
        {
          type: 'talk',
          title: 'The garage quote',
          who: { name: 'Señor Vargas', emoji: '👨' },
          setup: 'Señor Vargas wants his garage cleared. You walk through it with him and give the quote. You\'re on your own today.',
          tips: [
            { mood: 3, text: 'He books today and leaves a 5-star review ⭐' },
            { mood: 2, text: 'He books with you' },
            { mood: 1, text: 'He wants to "think about it"' },
            { mood: 0, text: 'He calls another company 😬' },
          ],
          lines: [
            {
              them: 'Bueno, todo esto se va. Menos la bicicleta.',
              en: 'OK, all this goes. Except the bike.',
              choices: [
                { es: 'Entendido. La bicicleta se queda. ¿Y esas cajas?', en: 'Got it. The bike stays. And those boxes?', good: true,
                  note: 'Repeat what stays, then ask about what\'s unclear.' },
                { es: 'Entendido. La bicicleta se va.', en: 'Got it. The bike goes.',
                  react: '¡No! La bicicleta se queda. 😟', reactEn: 'No! The bike stays.',
                  why: '<b>Menos</b> = except. The bike <b>se queda</b>.' },
                { es: 'Entendido. ¿Y esos cajas?', en: 'Got it. And those (boy) boxes?',
                  react: 'Esas cajas, sí. 🙂', reactEn: 'Those boxes, yes.',
                  why: '<b>Cajas</b> are girl words: <b>esas cajas</b>.' },
              ],
            },
            {
              them: 'Esas cajas también se van. Están llenas de papeles viejos.',
              en: "Those boxes are going too. They're full of old papers.",
              choices: [
                { es: '¿Y eso? ¿Qué es eso?', en: 'And that? What is that?', good: true,
                  note: 'Pointing at something unknown: <b>¿Qué es eso?</b>' },
                { es: '¿Y ese? ¿Qué es ese?', en: 'And that one? What is that one?',
                  react: '¿Ese qué? 🤔', reactEn: 'That what?',
                  why: 'No noun after it → <b>eso</b>.' },
                { es: 'Las cajas se quedan.', en: 'The boxes stay.',
                  react: 'No, se van. 🤨', reactEn: 'No, they go.',
                  why: 'He said they\'re going: <b>se van</b>.' },
              ],
            },
            {
              them: 'Es una caminadora rota. Es muy pesada.',
              en: "It's a broken treadmill. It's very heavy.",
              choices: [
                { es: 'No hay problema. Es más pesada que el sofá, pero la vamos a sacar.', en: "No problem. It's heavier than the couch, but we're going to take it out.", good: true,
                  note: 'Comparing and going to, all in one! 💪' },
                { es: 'No hay problema. Es más pesado que el sofá.', en: "No problem. It's (boy) heavier than the couch.",
                  react: 'Pesada, la caminadora. 🙂', reactEn: '"Pesada", the treadmill.',
                  why: '<b>Caminadora</b> is a girl word: <b>más pesada</b>.' },
                { es: 'Uy, eso se queda.', en: 'Yikes, that stays.',
                  react: '¿Se queda? ¡Yo no la quiero! 😠', reactEn: 'It stays? I don\'t want it!',
                  why: 'Heavy is your job! <b>La vamos a sacar.</b>' },
              ],
            },
            {
              them: 'Bueno. ¿Cuánto va a costar todo esto?',
              en: 'OK. How much is all this going to cost?',
              choices: [
                { es: 'Todo esto va a costar trescientos dólares. ¿Le parece bien?', en: 'All this is going to cost three hundred dollars. Does that sound good?', good: true,
                  note: 'Price, then <b>¿Le parece bien?</b> Then wait.' },
                { es: 'Todo este va a costar trescientos dólares.', en: 'All this (one) is going to cost three hundred dollars.',
                  react: '¿Todo este…? Ah, todo esto. 🙂', reactEn: '"All this one"? Oh, all this.',
                  why: 'All this stuff → <b>todo esto</b>.' },
                { es: 'Todo esto va a cuesta trescientos dólares.', en: 'All this is going to costs three hundred dollars.',
                  react: '¿Va a cuesta? 🤔', reactEn: '"Going to costs"?',
                  why: 'After <b>va a</b>, the verb stays whole: <b>costar</b>.' },
              ],
            },
            {
              them: 'Me parece bien. ¿Puedo pagar con tarjeta?',
              en: 'Sounds good. Can I pay by card?',
              choices: [
                { es: 'Claro. Firme aquí, por favor. Aquí está su recibo.', en: "Of course. Sign here, please. Here's your receipt.", good: true,
                  note: 'Deal closed! 🎉' },
                { es: 'No, solo en tarjeta.', en: 'No, only in card.',
                  react: '¿En tarjeta? ¿Entonces sí? 😄', reactEn: '"In card"? So yes?',
                  why: 'Card is fine! <b>Claro. Firme aquí, por favor.</b>' },
                { es: 'Claro. Aquí está su receta.', en: "Of course. Here's your recipe.",
                  react: '¿Una receta? ¿De qué? 😂', reactEn: 'A recipe? For what?',
                  why: '<b>Receta</b> = recipe! Receipt is <b>recibo</b>.' },
              ],
            },
          ],
        },

        // ---------- Scene B: the landlord ----------
        {
          type: 'talk',
          title: 'The empty apartment',
          who: { name: 'Señora Medina (landlord)', emoji: '👩‍💼' },
          setup: 'A tenant left without taking their stuff. The landlord, Señora Medina, needs the apartment empty by Friday.',
          tips: [
            { mood: 3, text: 'She hires you for all her buildings 🏢' },
            { mood: 2, text: 'She books this job' },
            { mood: 1, text: 'She asks you to send the quote in writing' },
            { mood: 0, text: 'She says "never mind" 😬' },
          ],
          lines: [
            {
              them: 'Necesito todo vacío para el viernes.',
              en: 'I need everything empty by Friday.',
              choices: [
                { es: 'No hay problema. Vamos a venir el jueves.', en: "No problem. We're going to come on Thursday.", good: true,
                  note: 'A day early. She likes that.' },
                { es: 'No hay problema. Vamos a venir el sábado.', en: "No problem. We're going to come on Saturday.",
                  react: '¿El sábado? ¡Es muy tarde! 😟', reactEn: 'Saturday? That\'s too late!',
                  why: 'She needs it by Friday (<b>viernes</b>). Thursday is <b>jueves</b>.' },
                { es: 'No hay problema. Vamos venir el jueves.', en: "No problem. We're going come on Thursday.",
                  react: '¿Vamos venir? 🙂', reactEn: '"Going come"?',
                  why: 'Don\'t forget the <b>a</b>: <b>vamos a venir</b>.' },
              ],
            },
            {
              them: 'Los muebles se van. Y la alfombra también, está muy sucia.',
              en: "The furniture goes. And the carpet too, it's very dirty.",
              choices: [
                { es: '¿Y el refrigerador? ¿Se va o se queda?', en: 'And the fridge? Does it go or stay?', good: true,
                  note: 'Always ask about appliances. They often stay with the apartment.' },
                { es: '¿Y el refrigerador? ¿Se van o se quedan?', en: 'And the fridge? Do they go or stay?',
                  react: '¿Ellos? Es uno. 🙂', reactEn: '"They"? It\'s one.',
                  why: 'One fridge: <b>se va</b> / <b>se queda</b>.' },
                { es: 'Entonces todo se va, el refrigerador también.', en: 'Then everything goes, the fridge too.',
                  react: '¡No! El refrigerador es mío. 😠', reactEn: 'No! The fridge is mine.',
                  why: 'Never guess! Ask: <b>¿Se va o se queda?</b>' },
              ],
            },
            {
              them: 'El refrigerador se queda. Es del apartamento.',
              en: "The fridge stays. It belongs to the apartment.",
              choices: [
                { es: 'Perfecto. ¿Y esos colchones?', en: 'Perfect. And those mattresses?', good: true,
                  note: '<b>Esos colchones</b>: boy words, more than one.' },
                { es: 'Perfecto. ¿Y esas colchones?', en: 'Perfect. And those (girl) mattresses?',
                  react: 'Esos colchones, sí. 🙂', reactEn: 'Those mattresses, yes.',
                  why: '<b>Colchones</b> are boy words: <b>esos</b>.' },
                { es: 'Perfecto. ¿Y eso colchones?', en: 'Perfect. And that mattresses?',
                  react: '¿Eso…? 🤔', reactEn: '"That"?',
                  why: '<b>Eso</b> never has a noun after it. Those mattresses: <b>esos colchones</b>.' },
              ],
            },
            {
              them: 'Se van. ¿Cuánto me va a costar?',
              en: 'They go. How much is it going to cost me?',
              choices: [
                { es: 'Cuatrocientos dólares en total. El precio incluye la alfombra.', en: 'Four hundred dollars total. The price includes the carpet.', good: true,
                  note: 'Clear total, and what it includes. 👍' },
                { es: 'Cuatrocientos dólares en efectivo.', en: 'Four hundred dollars in cash.',
                  react: '¿Solo efectivo? 🤨', reactEn: 'Only cash?',
                  why: 'She asked the price, not how to pay. Total: <b>en total</b>.' },
                { es: 'Cuatrocientos dólares en todo.', en: 'Four hundred dollars in everything.',
                  react: '¿En todo? Ah, en total. 🙂', reactEn: '"In everything"? Oh, total.',
                  why: 'Total = <b>en total</b>.' },
              ],
            },
            {
              them: 'Es un poco caro.',
              en: "It's a little expensive.",
              choices: [
                { es: 'Es más barato que tirar todo usted misma. ¿Le parece bien?', en: "It's cheaper than throwing it all out yourself. Does that sound OK?", good: true,
                  note: 'Comparing to win the job! She laughs and agrees.' },
                { es: 'Es el más barato de la ciudad.', en: "It's the cheapest in the city.",
                  react: '¿Seguro? 🤨', reactEn: 'Are you sure?',
                  why: 'Don\'t promise what you don\'t know. Compare: <b>Es más barato que tirar todo usted misma.</b>' },
                { es: 'Es más caro que tirar todo usted misma.', en: "It's more expensive than throwing it all out yourself.",
                  react: '¿Entonces por qué los contrato? 😂', reactEn: 'Then why would I hire you?',
                  why: 'You mean <b>más barato</b> (cheaper).' },
              ],
            },
          ],
        },

        // ---------- Scene C: the big one ----------
        {
          type: 'talk',
          title: 'The whole house',
          who: { name: 'Los Herrera', emoji: '👫' },
          setup: 'Mr. and Mrs. Herrera are moving to a smaller house. They want a quote for everything they\'re leaving behind. Use the whole unit!',
          tips: [
            { mood: 3, text: 'They book and ask for your number for next time 📱' },
            { mood: 2, text: 'They book with you' },
            { mood: 1, text: 'They argue about it between themselves' },
            { mood: 0, text: 'They decide to have a garage sale instead 😬' },
          ],
          lines: [
            {
              them: 'Esta casa es muy grande para nosotros ahora.',
              en: 'This house is too big for us now.',
              choices: [
                { es: 'Entiendo. ¿Qué se va y qué se queda?', en: 'I understand. What goes and what stays?', good: true,
                  note: 'The most important question on any job.' },
                { es: 'Entiendo. ¿Qué se va y qué se quedan?', en: 'I understand. What goes and what (they) stay?',
                  react: 'Se queda. 🙂', reactEn: '"Se queda".',
                  why: '<b>Qué</b> is one idea: <b>se va</b> and <b>se queda</b>.' },
                { es: 'Sí, es muy pequeña.', en: "Yes, it's very small.",
                  react: '¿Pequeña? ¡Es enorme! 🤨', reactEn: 'Small? It\'s huge!',
                  why: 'They said it\'s big (<b>grande</b>). Ask what goes: <b>¿Qué se va?</b>' },
              ],
            },
            {
              them: 'Los muebles de la sala se van. Son viejos.',
              en: 'The living room furniture goes. It\'s old.',
              choices: [
                { es: '¿Están en buenas condiciones? Algunos se pueden donar.', en: 'Are they in good condition? Some can be donated.', good: true,
                  note: 'Lesson 9 back again: <b>¿Están en buenas condiciones?</b>' },
                { es: '¿Son en buenas condiciones?', en: 'Are they (es) in good condition?',
                  react: '¿Son? Están. 🙂', reactEn: '"Son"? "Están".',
                  why: 'Condition → <b>están</b>.' },
                { es: 'Sí, están muy feos.', en: "Yes, they're very ugly.",
                  react: '¡Oiga! 😠', reactEn: 'Hey!',
                  why: 'Be kind! Ask: <b>¿Están en buenas condiciones?</b>' },
              ],
            },
            {
              them: 'Sí, más o menos. ¿Y cuánto tiempo va a tomar?',
              en: 'Yes, more or less. And how long is it going to take?',
              choices: [
                { es: 'Va a tomar unas cinco horas. Vamos a venir con tres personas.', en: "It's going to take about five hours. We're going to come with three people.", good: true,
                  note: 'Time and the plan. They feel in good hands.' },
                { es: 'Va a tomar unos cinco horas.', en: "It's going to take about (boy) five hours.",
                  react: 'Unas cinco horas. 🙂', reactEn: '"Unas cinco horas".',
                  why: '<b>Horas</b> is a girl word: <b>unas</b>.' },
                { es: 'Toma cinco días.', en: 'It takes five days.',
                  react: '¡¿Cinco días?! 😱', reactEn: 'Five days?!',
                  why: 'A house is hours, not days: <b>Va a tomar unas cinco horas.</b>' },
              ],
            },
            {
              them: 'Bien. ¿Y el precio?',
              en: 'Good. And the price?',
              choices: [
                { es: 'Todo esto va a costar seiscientos dólares. ¿Les parece bien?', en: 'All this is going to cost six hundred dollars. Does that sound good to you (both)?', good: true,
                  note: '<b>¿Les parece bien?</b>: <b>les</b> for two people. Nice!' },
                { es: 'Todo eso va a costar seiscientos.', en: 'All that is going to cost six hundred.',
                  react: '¿Seiscientos qué? ¿Dólares? 😄', reactEn: 'Six hundred what? Dollars?',
                  why: 'Say the whole price: <b>seiscientos dólares</b>. Then <b>¿Les parece bien?</b>' },
                { es: 'Todo esto va a costar seiscientos dólares. Es el más caro.', en: "All this is going to cost six hundred dollars. It's the most expensive.",
                  react: '¿El más caro? Hmm… 🤨', reactEn: 'The most expensive? Hmm…',
                  why: 'Don\'t scare them! Ask: <b>¿Les parece bien?</b>' },
              ],
            },
            {
              them: 'Nos parece bien. Vamos a pagar en efectivo.',
              en: "Sounds good to us. We're going to pay in cash.",
              choices: [
                { es: '¡Perfecto! Muchas gracias. Nos vemos el sábado.', en: 'Perfect! Thank you very much. See you Saturday.', good: true,
                  note: 'Deal closed! You just did a whole job in Spanish. 🎉' },
                { es: '¡Perfecto! ¿Con efectivo?', en: 'Perfect! With cash?',
                  react: 'En efectivo, sí. 🙂', reactEn: 'In cash, yes.',
                  why: 'They said it already: <b>en efectivo</b>. Just thank them!' },
                { es: 'No, solo con tarjeta.', en: 'No, only by card.',
                  react: 'Ah… no tenemos tarjeta. 😕', reactEn: 'Oh… we don\'t have a card.',
                  why: 'Cash is great! <b>¡Perfecto! Muchas gracias.</b>' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
