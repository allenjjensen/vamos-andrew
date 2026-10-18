// Lesson: On the phone. Answering, getting the details, and confirming a booking.
// Unit 2 (Booking jobs). Pulls together numbers, times and dates in full booking calls.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'phone-1',
  unit: 'Booking jobs',
  title: 'On the phone',
  subtitle: 'Taking a booking call',
  minutes: 10,
  terms: ['pronoun', 'verb'],

  recap: `<p>Answer: <b>¿Bueno?</b> (Mexico) or <b>¿Aló?</b>, then <b>Habla Andrew.</b> (Andrew speaking.)</p>
    <p>Ask for details: <b>¿Me da su nombre / dirección / número?</b> (Can you give me your…?)</p>
    <p>Didn't catch it: <b>¿Me lo repite, por favor?</b> · <b>Más despacio, por favor.</b></p>
    <p>Phone numbers often go in pairs: <b>treinta y cuatro, setenta y ocho</b> = 34-78.</p>
    <p>Wrap up: <b>Le confirmo: el martes a las tres.</b> · <b>Gracias por llamar.</b></p>`,

  phrases: [
    { es: 'Habla Andrew. ¿En qué le puedo ayudar?', en: 'Andrew speaking. How can I help you?' },
    { es: '¿Me da su dirección, por favor?', en: 'Can you give me your address, please?' },
    { es: '¿Me lo repite, por favor?', en: 'Can you repeat that, please?' },
    { es: 'Más despacio, por favor.', en: 'Slower, please.' },
    { es: 'Le confirmo: el martes a las tres.', en: "Let me confirm: Tuesday at three." },
    { es: 'Gracias por llamar.', en: 'Thanks for calling.' },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '📞',
      title: 'On the phone',
      learn: [
        'How to answer the phone and say who you are',
        'How to ask for a name, address and phone number',
        'What to say when they talk too fast, and how to confirm the job',
      ],
    },

    // ---------- warm-up ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: '¿___ da su nombre, por favor?', en: 'Can you give me your name, please?',
      options: [
        { text: 'Me', correct: true },
        { text: 'Le', why: '<b>Le</b> = to you. "Give <b>me</b>" is <b>me da</b>.' },
        { text: 'Yo', why: '<b>Yo</b> = I. "Give <b>me</b>" is <b>me da</b>.' },
      ],
      explain: '<b>¿Me da…?</b> = Can you give me…? (polite)',
      rule: 'Asking for details',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: '___ despacio, por favor.', en: 'Slower, please.',
      options: [
        { text: 'Más', correct: true },
        { text: 'Menos', why: '<b>Menos</b> = less. Slower is <b>más despacio</b> (more slowly).' },
        { text: 'Muy', why: '<b>Muy despacio</b> = very slowly. To ask for slower: <b>más despacio</b>.' },
      ],
      explain: 'Slower = <b>más despacio</b>.',
      rule: "When you don't understand",
    },
    {
      type: 'warmupResult',
      all: '¡Muy bien! Now let\'s put it all together: a whole booking call.',
      some: 'Good start. A few phrases will carry you through any call.',
      none: 'No worries. Phone calls are hard in any language. These phrases will help.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: 'Answering',
      title: 'Picking up the phone',
      rows: [
        { es: '¿Bueno?', en: 'Hello? (Mexico)' },
        { es: '¿Aló?', en: 'Hello? (most other countries)' },
        { es: 'Habla Andrew.', en: 'Andrew speaking.' },
        { es: '¿En qué le puedo ayudar?', en: 'How can I help you?' },
        { es: '¿De parte de quién?', en: "Who's calling?" },
      ],
      trick: '<b>Habla Andrew</b> literally means "Andrew speaks". It\'s how you say "this is Andrew" on the phone. <b>Le</b> = you (polite), so <b>¿En qué le puedo ayudar?</b> = In what can I help you?',
    },
    {
      type: 'teach', kicker: 'Getting the details',
      title: '¿Me da…?',
      rows: [
        { es: '¿Me da su nombre?', en: 'Can you give me your name?' },
        { es: '¿Me da su dirección?', en: 'Can you give me your address?' },
        { es: '¿Me da su número de teléfono?', en: 'Can you give me your phone number?' },
        { es: '¿Qué tiene para tirar?', en: 'What do you have to throw out?' },
      ],
      trick: '<b>¿Me da…?</b> = "Do you give me…?" It\'s the easy, polite way to ask for anything. <b>Su</b> = your (polite).',
    },
    {
      type: 'teach', kicker: 'Lifesavers',
      title: "When you don't understand",
      rows: [
        { es: '¿Me lo repite, por favor?', en: 'Can you repeat that, please?' },
        { es: 'Más despacio, por favor.', en: 'Slower, please.' },
        { es: '¿Cómo se escribe?', en: 'How do you spell it?' },
        { es: 'Perdón, no le oigo bien.', en: "Sorry, I can't hear you well." },
      ],
      trick: 'Nobody minds these. Customers would much rather repeat their address than have the truck go to the wrong house! <b>Lo</b> = it, so <b>¿Me lo repite?</b> = Will you repeat it to me?',
    },
    {
      type: 'teach', kicker: 'Phone numbers',
      title: 'Numbers in pairs',
      rows: [
        { tag: '555-1234', es: 'cinco, cincuenta y cinco, doce, treinta y cuatro', en: '5 · 55 · 12 · 34' },
        { tag: '34-78', es: 'treinta y cuatro, setenta y ocho', en: '34 · 78' },
        { tag: '0', es: 'cero', en: 'zero' },
        { tag: '05', es: 'cero cinco', en: 'zero five' },
      ],
      trick: 'Many Latin Americans say phone numbers <b>two digits at a time</b>. Write each pair down as you hear it, then read it back to check.',
    },
    {
      type: 'teach', kicker: 'Wrapping up',
      title: 'Confirming the job',
      rows: [
        { es: 'Le confirmo: el martes a las tres.', en: 'Let me confirm: Tuesday at three.' },
        { es: 'Entonces, nos vemos el martes.', en: 'So, see you Tuesday.' },
        { es: 'Le llamo antes de llegar.', en: "I'll call you before we get there." },
        { es: 'Gracias por llamar.', en: 'Thanks for calling.' },
      ],
      trick: 'Always say the <b>day and time back</b> to the customer. If you heard something wrong, they\'ll catch it now instead of on the job.',
    },

    // ---------- practice ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Bueno? ___ Andrew.', en: 'Hello? Andrew speaking.',
            options: [
              { text: 'Habla', correct: true },
              { text: 'Hablo', why: '<b>Hablo</b> = I speak. On the phone, say <b>Habla Andrew</b>.' },
              { text: 'Es', why: 'On the phone, "this is Andrew" is <b>Habla Andrew</b>.' },
            ],
            explain: 'On the phone: <b>Habla Andrew</b> = Andrew speaking.',
            rule: 'Answering',
          },
          {
            type: 'choice',
            prompt: '¿Me da su ___?', en: 'Can you give me your address?',
            options: [
              { text: 'dirección', correct: true },
              { text: 'nombre', why: '<b>Nombre</b> = name. Address is <b>dirección</b>.' },
              { text: 'número', why: '<b>Número</b> = number. Address is <b>dirección</b>.' },
            ],
            explain: 'Address = <b>dirección</b>.',
            rule: 'Asking for details',
          },
          {
            type: 'choice', listen: true,
            say: 'treinta y cuatro, setenta y ocho',
            options: [
              { text: '34-78', correct: true },
              { text: '34-68', why: '68 is <b>sesenta y ocho</b>. You heard <b>setenta</b>: 70s.' },
              { text: '43-78', why: '43 is <b>cuarenta y tres</b>. You heard <b>treinta y cuatro</b>: 34.' },
            ],
            explain: 'Pairs: <b>treinta y cuatro</b> (34), <b>setenta y ocho</b> (78).',
            rule: 'Phone numbers',
          },
          {
            type: 'build',
            en: 'Can you repeat that, please?',
            answer: ['¿Me', 'lo', 'repite,', 'por', 'favor?'],
            extra: ['le'],
            wrongWhy: { le: 'Here it\'s <b>me lo</b>: "repeat <b>it</b> to <b>me</b>".' },
            explain: '<b>¿Me lo repite?</b> = Will you repeat it to me?',
            end: '',
            rule: "When you don't understand",
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿En qué ___ puedo ayudar?', en: 'How can I help you?',
            options: [
              { text: 'le', correct: true },
              { text: 'me', why: '<b>Me</b> = me. You\'re helping <b>them</b>: <b>le</b> (you, polite).' },
              { text: 'su', why: '<b>Su</b> = your (before a thing). "Help you" is <b>le</b> puedo ayudar.' },
            ],
            explain: '<b>Le</b> = (to) you, polite.',
            rule: 'Answering',
          },
          {
            type: 'choice',
            prompt: 'Perdón, no le ___ bien.', en: "Sorry, I can't hear you well.",
            options: [
              { text: 'oigo', correct: true },
              { text: 'veo', why: '<b>Veo</b> = I see. On the phone you <b>hear</b>: <b>oigo</b>.' },
              { text: 'hablo', why: '<b>Hablo</b> = I speak. "I hear" is <b>oigo</b>.' },
            ],
            explain: 'I hear = <b>oigo</b> (from oír).',
            rule: "When you don't understand",
          },
          {
            type: 'choice', listen: true,
            say: 'cinco, cincuenta y cinco, doce',
            options: [
              { text: '5-55-12', correct: true },
              { text: '5-15-12', why: '15 is <b>quince</b>. You heard <b>cincuenta y cinco</b>: 55.' },
              { text: '5-55-02', why: '2 is <b>dos</b>. You heard <b>doce</b>: 12.' },
            ],
            explain: '<b>cinco</b> (5), <b>cincuenta y cinco</b> (55), <b>doce</b> (12).',
            rule: 'Phone numbers',
          },
          {
            type: 'build',
            en: 'Let me confirm: Tuesday at three.',
            answer: ['Le', 'confirmo:', 'el', 'martes', 'a', 'las', 'tres'],
            extra: ['en'],
            wrongWhy: { en: 'No "en" with days: <b>el martes</b>. At three: <b>a las tres</b>.' },
            explain: '<b>Le confirmo</b> = Let me confirm (for you).',
            rule: 'Confirming',
          },
          {
            type: 'choice',
            prompt: 'Gracias por ___.', en: 'Thanks for calling.',
            options: [
              { text: 'llamar', correct: true },
              { text: 'llamo', why: 'After <b>por</b>, use the base form: <b>por llamar</b>.' },
              { text: 'llama', why: 'After <b>por</b>, use the base form: <b>por llamar</b>.' },
            ],
            explain: 'After <b>por</b> (for), the verb stays in its base form: <b>llamar</b>.',
            rule: 'Confirming',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Qué tiene para ___?', en: 'What do you have to throw out?',
            options: [
              { text: 'tirar', correct: true },
              { text: 'comprar', why: '<b>Comprar</b> = to buy. Throw out is <b>tirar</b>.' },
              { text: 'tiene', why: 'After <b>para</b>, use the base form, and the verb is <b>tirar</b> (throw out).' },
            ],
            explain: 'To throw out = <b>tirar</b>.',
            rule: 'Asking for details',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿___? Habla Andrew.', en: 'Hello? Andrew speaking. (in Mexico)',
            options: [
              { text: 'Bueno', correct: true },
              { text: 'Bien', why: '<b>Bien</b> = well/fine. In Mexico the phone "hello" is <b>¿Bueno?</b>' },
              { text: 'Hola', why: '<b>Hola</b> works with friends, but Mexicans answer the phone with <b>¿Bueno?</b>' },
            ],
            explain: 'Mexico: <b>¿Bueno?</b> Most other countries: <b>¿Aló?</b>',
            rule: 'Answering',
          },
          {
            type: 'choice',
            prompt: '¿Me da su número de ___?', en: 'Can you give me your phone number?',
            options: [
              { text: 'teléfono', correct: true },
              { text: 'dirección', why: '<b>Dirección</b> = address. Phone is <b>teléfono</b>.' },
              { text: 'nombre', why: '<b>Nombre</b> = name. Phone is <b>teléfono</b>.' },
            ],
            explain: 'Phone number = <b>número de teléfono</b>.',
            rule: 'Asking for details',
          },
          {
            type: 'choice', listen: true,
            say: 'cero cinco, noventa',
            options: [
              { text: '05-90', correct: true },
              { text: '05-19', why: '19 is <b>diecinueve</b>. You heard <b>noventa</b>: 90.' },
              { text: '50-90', why: '50 is <b>cincuenta</b>. You heard <b>cero cinco</b>: 05.' },
            ],
            explain: '<b>cero cinco</b> (05), <b>noventa</b> (90).',
            rule: 'Phone numbers',
          },
          {
            type: 'build',
            en: 'Slower, please.',
            answer: ['Más', 'despacio,', 'por', 'favor'],
            extra: ['menos'],
            wrongWhy: { menos: '<b>Menos</b> = less. Slower is <b>más despacio</b>.' },
            explain: 'Slower = <b>más despacio</b>.',
            rule: "When you don't understand",
          },
          {
            type: 'choice',
            prompt: '¿Cómo se ___?', en: 'How do you spell it?',
            options: [
              { text: 'escribe', correct: true },
              { text: 'llama', why: '<b>¿Cómo se llama?</b> = What\'s your name? Spell it: <b>¿Cómo se escribe?</b>' },
              { text: 'dice', why: '<b>¿Cómo se dice?</b> = How do you say it? Spell it: <b>¿Cómo se escribe?</b>' },
            ],
            explain: '<b>¿Cómo se escribe?</b> = How is it written?',
            rule: "When you don't understand",
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿De parte de ___?', en: "Who's calling?",
            options: [
              { text: 'quién', correct: true },
              { text: 'qué', why: '<b>Qué</b> = what. Who is <b>quién</b>.' },
              { text: 'dónde', why: '<b>Dónde</b> = where. Who is <b>quién</b>.' },
            ],
            explain: '<b>¿De parte de quién?</b> = On behalf of whom? (Who\'s calling?)',
            rule: 'Answering',
          },
          {
            type: 'choice', listen: true,
            say: 'dieciséis, cuarenta',
            options: [
              { text: '16-40', correct: true },
              { text: '60-40', why: '60 is <b>sesenta</b>. You heard <b>dieciséis</b>: 16.' },
              { text: '16-14', why: '14 is <b>catorce</b>. You heard <b>cuarenta</b>: 40.' },
            ],
            explain: '<b>dieciséis</b> (16), <b>cuarenta</b> (40).',
            rule: 'Phone numbers',
          },
          {
            type: 'build',
            en: "I'll call you before we get there.",
            answer: ['Le', 'llamo', 'antes', 'de', 'llegar'],
            extra: ['llego'],
            wrongWhy: { llego: 'After <b>antes de</b>, use the base form: <b>llegar</b>.' },
            explain: '<b>Le llamo</b> = I\'ll call you. <b>Antes de llegar</b> = before arriving.',
            rule: 'Confirming',
          },
          {
            type: 'choice',
            prompt: 'Entonces, nos ___ el jueves.', en: 'So, see you Thursday.',
            options: [
              { text: 'vemos', correct: true },
              { text: 'vamos', why: '<b>Vamos</b> = we go. "See you" is <b>nos vemos</b>.' },
              { text: 'ven', why: '<b>Ven</b> = they see. "See you" is <b>nos vemos</b> (we see each other).' },
            ],
            explain: '<b>Nos vemos</b> = see you (we see each other).',
            rule: 'Confirming',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Me da su ___, por favor?', en: 'Can you give me your name, please?',
            options: [
              { text: 'nombre', correct: true },
              { text: 'hombre', why: '<b>Hombre</b> = man! Name is <b>nombre</b>.' },
              { text: 'número', why: '<b>Número</b> = number. Name is <b>nombre</b>.' },
            ],
            explain: 'Name = <b>nombre</b>.',
            rule: 'Asking for details',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Aló? Habla Andrew. ¿En qué le puedo ___?', en: 'Hello? Andrew speaking. How can I help you?',
            options: [
              { text: 'ayudar', correct: true },
              { text: 'ayudo', why: 'After <b>puedo</b> (I can), use the base form: <b>ayudar</b>.' },
              { text: 'ayuda', why: 'After <b>puedo</b> (I can), use the base form: <b>ayudar</b>.' },
            ],
            explain: '<b>Puedo</b> + base form: <b>puedo ayudar</b>.',
            rule: 'Answering',
          },
          {
            type: 'choice',
            prompt: '¿___ lo repite, por favor?', en: 'Can you repeat it (for me), please?',
            options: [
              { text: 'Me', correct: true },
              { text: 'Yo', why: '<b>Yo</b> = I. "To me" is <b>me</b>: <b>¿Me lo repite?</b>' },
              { text: 'Mi', why: '<b>Mi</b> = my (before a thing). "To me" is <b>me</b>.' },
            ],
            explain: '<b>Me</b> = (to) me.',
            rule: "When you don't understand",
          },
          {
            type: 'choice', listen: true,
            say: 'ochenta y dos, trece',
            options: [
              { text: '82-13', correct: true },
              { text: '82-30', why: '30 is <b>treinta</b>. You heard <b>trece</b>: 13.' },
              { text: '72-13', why: '72 is <b>setenta y dos</b>. You heard <b>ochenta</b>: 80s.' },
            ],
            explain: '<b>ochenta y dos</b> (82), <b>trece</b> (13).',
            rule: 'Phone numbers',
          },
          {
            type: 'build',
            en: 'Can you give me your address?',
            answer: ['¿Me', 'da', 'su', 'dirección?'],
            extra: ['mi'],
            wrongWhy: { mi: '<b>Mi</b> = my. You want <b>their</b> address: <b>su dirección</b>.' },
            explain: '<b>Su</b> = your (polite).',
            end: '',
            rule: 'Asking for details',
          },
          {
            type: 'choice',
            prompt: 'Perdón, ¿___? No entendí.', en: "Sorry, what? I didn't understand.",
            options: [
              { text: 'cómo', correct: true },
              { text: 'qué tal', why: '<b>¿Qué tal?</b> = How\'s it going? To ask "what?" politely: <b>¿Cómo?</b>' },
              { text: 'cuándo', why: '<b>¿Cuándo?</b> = when? To say "what? / pardon?": <b>¿Cómo?</b>' },
            ],
            explain: '<b>¿Cómo?</b> = Pardon? What was that? (Polite.)',
            rule: "When you don't understand",
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Le confirmo: el viernes ___ las diez.', en: 'Let me confirm: Friday at ten.',
            options: [
              { text: 'a', correct: true },
              { text: 'en', why: '"At" a time is <b>a</b>: <b>a las diez</b>.' },
              { text: 'son', why: '<b>Son las diez</b> = it\'s ten now. At ten: <b>a las diez</b>.' },
            ],
            explain: 'At ten = <b>a las diez</b>.',
            rule: 'Confirming',
          },
          {
            type: 'choice', listen: true,
            say: 'cuarenta y cinco, cero siete',
            options: [
              { text: '45-07', correct: true },
              { text: '45-70', why: '70 is <b>setenta</b>. You heard <b>cero siete</b>: 07.' },
              { text: '55-07', why: '55 is <b>cincuenta y cinco</b>. You heard <b>cuarenta y cinco</b>: 45.' },
            ],
            explain: '<b>cuarenta y cinco</b> (45), <b>cero siete</b> (07).',
            rule: 'Phone numbers',
          },
          {
            type: 'build',
            en: 'Thanks for calling.',
            answer: ['Gracias', 'por', 'llamar'],
            extra: ['llamo'],
            wrongWhy: { llamo: 'After <b>por</b>, use the base form: <b>llamar</b>.' },
            explain: '<b>Gracias por llamar</b> = Thanks for calling.',
            rule: 'Confirming',
          },
          {
            type: 'choice',
            prompt: '¿Qué ___ para tirar?', en: 'What do you have to throw out?',
            options: [
              { text: 'tiene', correct: true },
              { text: 'tengo', why: '<b>Tengo</b> = I have. Asking the customer: <b>¿Qué tiene?</b>' },
              { text: 'es', why: '<b>Es</b> = is. "Do you have" is <b>tiene</b>.' },
            ],
            explain: '<b>Tiene</b> = you have (polite).',
            rule: 'Asking for details',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Perdón, no le oigo ___.', en: "Sorry, I can't hear you well.",
            options: [
              { text: 'bien', correct: true },
              { text: 'bueno', why: '<b>Bueno</b> describes a thing (a good truck). "Well" (how) is <b>bien</b>.' },
              { text: 'mal', why: '<b>Mal</b> = badly. "I can\'t hear you well" = no le oigo <b>bien</b>.' },
            ],
            explain: 'Well = <b>bien</b>. Good (a thing) = <b>bueno</b>.',
            rule: "When you don't understand",
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
          title: 'The garage call',
          who: { name: 'Señora Morales', emoji: '👩' },
          setup: 'The phone rings. It\'s a new customer with a garage full of stuff. You take the whole booking call yourself.',
          tips: [
            { mood: 3, text: 'She books, and tells her neighbors about you ⭐' },
            { mood: 2, text: 'She books the job' },
            { mood: 1, text: '"I\'ll think about it…"' },
            { mood: 0, text: 'She hangs up confused 😬' },
          ],
          lines: [
            {
              them: '(Ring, ring…)',
              en: '(The phone is ringing.)',
              choices: [
                { es: '¿Bueno? Habla Andrew. ¿En qué le puedo ayudar?', en: 'Hello? Andrew speaking. How can I help you?', good: true,
                  note: 'A friendly, professional start: <b>Habla Andrew</b> + <b>¿En qué le puedo ayudar?</b>' },
                { es: '¿Bueno? Hablo Andrew.', en: 'Hello? I speak Andrew.',
                  react: '¿Habla… Andrew? 🙂 Ah, ¿es usted Andrew?', reactEn: 'Speaks… Andrew? Oh, are you Andrew?',
                  why: 'On the phone it\'s <b>Habla Andrew</b> (Andrew speaks), not hablo.' },
                { es: '¿Qué quiere?', en: 'What do you want?',
                  react: 'Eh… ¿es la compañía de basura? 😟', reactEn: 'Uh… is this the junk company?',
                  why: 'Too blunt for a customer! Try <b>¿En qué le puedo ayudar?</b>' },
              ],
            },
            {
              them: 'Hola. Tengo un garaje lleno de cosas viejas. ¿Ustedes las recogen?',
              en: 'Hi. I have a garage full of old stuff. Do you pick it up?',
              choices: [
                { es: 'Sí, claro. ¿Me da su nombre, por favor?', en: 'Yes, of course. Can you give me your name, please?', good: true,
                  note: '<b>¿Me da su nombre?</b> = Can you give me your name?' },
                { es: 'Sí, claro. ¿Me da mi nombre?', en: 'Yes, of course. Can you give me my name?',
                  react: '¿Su nombre? ¿No sabe su nombre? 😂', reactEn: 'Your name? You don\'t know your name?',
                  why: '<b>Mi</b> = my. You want <b>su nombre</b> (your name).' },
                { es: 'Sí, claro. ¿Me da su hombre?', en: 'Yes, of course. Can you give me your man?',
                  react: '¿Mi HOMBRE? 😳', reactEn: 'My MAN?',
                  why: '<b>Hombre</b> = man! Name is <b>nombre</b>.' },
              ],
            },
            {
              them: 'Soy Rosa Morales. Vivo en la calle Olmo, número cuatrocientos doce.',
              en: 'I\'m Rosa Morales. I live on Elm Street, number 412.',
              choices: [
                { es: 'Perdón, ¿me lo repite, por favor? ¿El número?', en: 'Sorry, can you repeat it, please? The number?', good: true,
                  note: 'Checking the address is pro. <b>¿Me lo repite?</b> = Can you repeat it?' },
                { es: 'Muy bien. Calle Olmo, cuarenta y dos.', en: 'Very good. Elm Street, 42.',
                  react: 'No, no. ¡Cuatrocientos DOCE! 😟', reactEn: 'No, no. Four hundred TWELVE!',
                  why: 'She said <b>cuatrocientos doce</b> (412). When unsure, ask: <b>¿Me lo repite?</b>' },
                { es: 'Muy bien. ¿Calle Hola?', en: 'Very good. Hello Street?',
                  react: '¡Olmo! O-L-M-O. 😅', reactEn: 'Olmo! O-L-M-O.',
                  why: 'If a word is new, ask <b>¿Cómo se escribe?</b> (How do you spell it?)' },
              ],
            },
            {
              them: 'Cuatrocientos doce. ¿Cuándo pueden venir?',
              en: 'Four hundred twelve. When can you come?',
              choices: [
                { es: '¿Le queda bien el martes a las diez?', en: 'Does Tuesday at ten work for you?', good: true,
                  note: 'Day + time in one go: <b>el martes a las diez</b>.' },
                { es: '¿Le queda bien en martes en las diez?', en: 'Does "in Tuesday in ten" work?',
                  react: '¿"En martes"? ¿El martes? 🤔', reactEn: '"In Tuesday"? Tuesday?',
                  why: 'No "en": <b>el martes</b>. At ten: <b>a las diez</b>.' },
                { es: '¿Le queda bien el martes son las diez?', en: 'Does Tuesday it-is-ten work?',
                  react: '¿Son las diez? No, son las tres. 🙂', reactEn: 'It\'s ten? No, it\'s three.',
                  why: 'To set a time: <b>a las diez</b>.' },
              ],
            },
            {
              them: 'Sí, el martes está bien.',
              en: 'Yes, Tuesday is fine.',
              choices: [
                { es: 'Le confirmo: el martes a las diez, calle Olmo cuatrocientos doce. ¡Gracias por llamar!', en: 'Let me confirm: Tuesday at ten, 412 Elm Street. Thanks for calling!', good: true,
                  note: 'Day, time AND address read back. She\'ll trust you completely.' },
                { es: 'Le confirmo: el jueves a las diez. ¡Gracias!', en: 'Let me confirm: Thursday at ten. Thanks!',
                  react: '¿Jueves? ¡Dijo martes! 😟', reactEn: 'Thursday? You said Tuesday!',
                  why: 'You agreed on <b>el martes</b>. Read back exactly what you agreed.' },
                { es: 'Ok. Adiós.', en: 'OK. Bye.',
                  react: 'Eh… ¿adiós? 😕', reactEn: 'Uh… bye?',
                  why: 'Confirm before you hang up: <b>Le confirmo: el martes a las diez</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer B ----------
        {
          type: 'talk',
          title: 'The fast talker',
          who: { name: 'Don Ramiro', emoji: '👴' },
          setup: 'Don Ramiro talks very fast and is in a hurry. He wants an old couch and two mattresses gone.',
          tips: [
            { mood: 3, text: 'He laughs: "¡Usted sí escucha!" and books two jobs 🛋️' },
            { mood: 2, text: 'He books the job' },
            { mood: 1, text: 'He gets impatient, but books' },
            { mood: 0, text: 'He gives up and hangs up 😬' },
          ],
          lines: [
            {
              them: '¡Hola-sí-buenas-tengo-un-sofá-y-dos-colchones-y-necesito-que-vengan-hoy!',
              en: 'Hi-yes-hello-I-have-a-couch-and-two-mattresses-and-I-need-you-to-come-today!',
              choices: [
                { es: 'Perdón, más despacio, por favor.', en: 'Sorry, slower, please.', good: true,
                  note: '<b>Más despacio, por favor</b>: a lifesaver. Nobody minds.' },
                { es: 'Sí, sí. Muy bien.', en: 'Yes, yes. Very good.',
                  react: '¿Muy bien? ¿Entonces vienen hoy? ¿A qué hora? 😤', reactEn: 'Very good? So you\'re coming today? What time?',
                  why: 'Don\'t pretend you understood! Ask: <b>Más despacio, por favor</b>.' },
                { es: 'Perdón, menos despacio.', en: 'Sorry, less slowly.',
                  react: '¿¡MÁS rápido!? 😂', reactEn: 'FASTER?!',
                  why: '<b>Menos despacio</b> = faster! Slower is <b>más despacio</b>.' },
              ],
            },
            {
              them: 'Perdón. Tengo un sofá y dos colchones. ¿Pueden venir hoy?',
              en: 'Sorry. I have a couch and two mattresses. Can you come today?',
              choices: [
                { es: 'Hoy no, pero mañana en la mañana sí.', en: 'Not today, but tomorrow morning, yes.', good: true,
                  note: '<b>Mañana en la mañana</b> = tomorrow morning.' },
                { es: 'Hoy no, pero ayer sí.', en: 'Not today, but yesterday, yes.',
                  react: '¿Ayer? 😂', reactEn: 'Yesterday?',
                  why: '<b>Ayer</b> = yesterday. Tomorrow is <b>mañana</b>.' },
                { es: 'Hoy no, pero los mañanas sí.', en: 'Not today, but the tomorrows, yes.',
                  react: '¿"Los mañanas"? 🤔', reactEn: '"The tomorrows"?',
                  why: 'Tomorrow morning: <b>mañana en la mañana</b>.' },
              ],
            },
            {
              them: 'Bueno, mañana. Mi número es el cinco, cincuenta y cinco, setenta y dos, dieciocho.',
              en: 'OK, tomorrow. My number is 5-55-72-18.',
              choices: [
                { es: 'Le repito: cinco, cincuenta y cinco, setenta y dos, dieciocho.', en: 'Let me repeat: 5-55-72-18.', good: true,
                  note: '<b>Le repito</b> = Let me repeat (to you). Reading numbers back saves a lot of trouble.' },
                { es: 'Le repito: cinco, quince, setenta y dos, dieciocho.', en: 'Let me repeat: 5-15-72-18.',
                  react: '¡No! Cincuenta y CINCO. 😤', reactEn: 'No! Fifty-FIVE.',
                  why: '<b>Quince</b> = 15. He said <b>cincuenta y cinco</b> (55).' },
                { es: 'Le repito: cinco, cincuenta y cinco, sesenta y dos, dieciocho.', en: 'Let me repeat: 5-55-62-18.',
                  react: 'Setenta, no sesenta. 😤', reactEn: 'Seventy, not sixty.',
                  why: '<b>Sesenta</b> = 60. He said <b>setenta</b> (70).' },
              ],
            },
            {
              them: 'Eso. ¿Y cuánto me va a costar?',
              en: 'That\'s it. And how much is it going to cost me?',
              choices: [
                { es: 'El sofá y los colchones cuestan ciento veinte dólares.', en: 'The couch and the mattresses cost $120.', good: true,
                  note: 'More than one thing → <b>cuestan</b>. <b>Ciento veinte</b> = 120.' },
                { es: 'El sofá y los colchones cuesta ciento veinte dólares.', en: 'The couch and the mattresses costs $120.',
                  react: 'Bueno… 🙂', reactEn: 'OK…',
                  why: 'Several things → <b>cuestan</b>, not cuesta.' },
                { es: 'Cuestan cien veinte dólares.', en: 'They cost "hundred twenty" dollars.',
                  react: '¿"Cien veinte"? ¿Ciento veinte? 🤔', reactEn: '"Hundred twenty"? A hundred twenty?',
                  why: '100 is <b>cien</b> alone, but <b>ciento</b> when more follows: <b>ciento veinte</b>.' },
              ],
            },
            {
              them: 'Bien. ¡Hasta mañana!',
              en: 'Good. See you tomorrow!',
              choices: [
                { es: 'Hasta mañana. Le llamo antes de llegar.', en: 'See you tomorrow. I\'ll call you before we get there.', good: true,
                  note: '<b>Le llamo antes de llegar</b>: a busy customer loves a heads-up.' },
                { es: 'Hasta mañana. Le llamo antes de llego.', en: 'See you tomorrow. I\'ll call before I arrive (wrong form).',
                  react: 'Ok… 🙂', reactEn: 'OK…',
                  why: 'After <b>antes de</b>, use the base form: <b>antes de llegar</b>.' },
                { es: 'Hasta luego. Nos vemos el lunes.', en: 'See you later. See you Monday.',
                  react: '¿El LUNES? ¡Dijimos mañana! 😤', reactEn: 'MONDAY? We said tomorrow!',
                  why: 'You agreed on <b>mañana</b>. Don\'t change the day!' },
              ],
            },
          ],
        },

        // ---------- Customer C ----------
        {
          type: 'talk',
          title: 'Bad connection',
          who: { name: 'Gabriela', emoji: '👩‍💻' },
          setup: 'Gabriela is calling from her car. The signal keeps cutting out. She needs an office cleared on a weekday.',
          tips: [
            { mood: 3, text: 'She books, and sends a thank-you text 📱' },
            { mood: 2, text: 'She books the job' },
            { mood: 1, text: '"I\'ll text you…" (she never does)' },
            { mood: 0, text: 'The call drops for good 😬' },
          ],
          lines: [
            {
              them: 'Hola… ¿…pañía de…? …cesito… …ficina…',
              en: 'Hi… (com)pany of…? …need… …office…',
              choices: [
                { es: 'Perdón, no le oigo bien. ¿Me lo repite?', en: 'Sorry, I can\'t hear you well. Can you repeat it?', good: true,
                  note: '<b>No le oigo bien</b> = I can\'t hear you well.' },
                { es: 'Perdón, no le veo bien.', en: 'Sorry, I can\'t see you well.',
                  react: '¿Verme? ¡Es una llamada! 😂', reactEn: 'See me? It\'s a phone call!',
                  why: '<b>Veo</b> = I see. On the phone: <b>no le oigo bien</b> (I can\'t hear you).' },
                { es: 'Sí, muy bien. Gracias.', en: 'Yes, very good. Thanks.',
                  react: '¿Hola? ¿Me escucha? 😕', reactEn: 'Hello? Can you hear me?',
                  why: 'You didn\'t understand, so say so: <b>No le oigo bien. ¿Me lo repite?</b>' },
              ],
            },
            {
              them: '¿Ahora sí? Necesito vaciar una oficina. Me llamo Gabriela Quiñones.',
              en: 'Better now? I need to empty out an office. My name is Gabriela Quiñones.',
              choices: [
                { es: 'Sí, ahora sí. ¿Cómo se escribe Quiñones?', en: 'Yes, now I can. How do you spell Quiñones?', good: true,
                  note: '<b>¿Cómo se escribe?</b> = How do you spell it? Great for names.' },
                { es: 'Sí, ahora sí. ¿Cómo se llama Quiñones?', en: 'Yes, now I can. What is Quiñones called?',
                  react: '¿Cómo se llama Quiñones? 🤔 Quiñones es mi apellido…', reactEn: 'What\'s Quiñones called? Quiñones is my last name…',
                  why: '<b>¿Cómo se llama?</b> = What\'s (your) name? To spell: <b>¿Cómo se escribe?</b>' },
                { es: 'Sí, ahora sí. ¿Cómo se dice Quiñones?', en: 'Yes, now I can. How do you say Quiñones?',
                  react: 'Pues… Quiñones. 🙂', reactEn: 'Well… Quiñones.',
                  why: 'She just said it! To get the letters: <b>¿Cómo se escribe?</b>' },
              ],
            },
            {
              them: 'Q-U-I-Ñ-O-N-E-S. ¿Pueden venir el miércoles?',
              en: 'Q-U-I-Ñ-O-N-E-S. Can you come on Wednesday?',
              choices: [
                { es: 'Sí. ¿Le queda bien el miércoles a la una?', en: 'Yes. Does Wednesday at one work for you?', good: true,
                  note: 'One o\'clock is singular: <b>a la una</b>.' },
                { es: 'Sí. ¿Le queda bien el miércoles a las una?', en: 'Yes. Does Wednesday at "the ones" work?',
                  react: '¿"A las una"? Ah, a la una. 🙂', reactEn: '"At the ones"? Oh, at one.',
                  why: 'One is singular: <b>a la una</b>, not las.' },
                { es: 'Sí. ¿Le queda bien los miércoles a la una?', en: 'Yes. Do Wednesdays at one work?',
                  react: '¿Todos los miércoles? ¡Es una sola oficina! 😅', reactEn: 'Every Wednesday? It\'s just one office!',
                  why: '<b>Los miércoles</b> = every Wednesday. One day: <b>el miércoles</b>.' },
              ],
            },
            {
              them: 'Perfecto. ¿Me da su… …mero… …caso…?',
              en: 'Perfect. Can you give me your… (num)ber… in case…?',
              choices: [
                { es: 'Perdón, se corta. ¿Mi número? Es el cinco, cincuenta y cinco, cero ocho, cuarenta.', en: 'Sorry, it\'s cutting out. My number? It\'s 5-55-08-40.', good: true,
                  note: '<b>Se corta</b> = it\'s cutting out. Repeating her question to check is smart.' },
                { es: 'Perdón, se corta. ¿Su número?', en: 'Sorry, it\'s cutting out. Your number?',
                  react: 'No, SU número. El número de usted. 🙂', reactEn: 'No, YOUR number. Yours.',
                  why: 'She asked for <b>su número</b> (your number). From your side, that\'s <b>mi número</b>.' },
                { es: '¿Qué tal?', en: 'How\'s it going?',
                  react: '¿Qué? ¿Hola? 😕', reactEn: 'What? Hello?',
                  why: '<b>¿Qué tal?</b> = How\'s it going? Tell her: <b>se corta</b> (it\'s cutting out).' },
              ],
            },
            {
              them: 'Lo tengo. ¡Gracias!',
              en: 'Got it. Thanks!',
              choices: [
                { es: 'Le confirmo: el miércoles a la una. ¡Gracias por llamar!', en: 'Let me confirm: Wednesday at one. Thanks for calling!', good: true,
                  note: 'With a bad signal, confirming is twice as important.' },
                { es: 'Le confirmo: el miércoles a las once. ¡Gracias!', en: 'Let me confirm: Wednesday at eleven. Thanks!',
                  react: '¿Once? ¡Dijimos a la una! 😟', reactEn: 'Eleven? We said one!',
                  why: '<b>Once</b> = 11. You agreed on <b>a la una</b> (1:00).' },
                { es: 'Gracias por llamo.', en: 'Thanks for "I call".',
                  react: '🙂 …¿Hola? (Se cortó.)', reactEn: '…Hello? (It cut out.)',
                  why: 'After <b>por</b>, base form: <b>gracias por llamar</b>. And confirm first!' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
