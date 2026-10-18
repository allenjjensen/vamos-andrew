// Lesson: On the job, first customer.
// The "talk" step is a conversation: the customer speaks, Andrew picks a reply.
// Bad replies get a reaction from the customer (and lower her mood), then he picks again.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'job-1',
  title: 'On the job: first customer',
  subtitle: 'Talk a customer through a pickup',
  minutes: 10,
  terms: ['verb', 'pronoun'],

  recap: `<p>With customers, use <b>usted</b>: <b>quiere, tiene, está</b> (not quieres, tienes, estás).</p>
    <p>Where things are: <b>¿Dónde está? / ¿Dónde están?</b></p>
    <p>Prices: <b>Son … dólares.</b></p>`,

  phrases: [
    { es: 'Mucho gusto.', en: 'Nice to meet you.' },
    { es: '¿Qué quiere tirar?', en: 'What do you want to throw out?' },
    { es: '¿Dónde están?', en: 'Where are they?' },
    { es: 'No hay problema.', en: 'No problem.' },
    { es: 'Son ciento cincuenta dólares.', en: "It's 150 dollars." },
    { es: '¡Que tenga un buen día!', en: 'Have a good day! (polite)' },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '🚚',
      title: 'On the job: first customer',
      learn: [
        'Words for the stuff you haul',
        'How to talk politely to a customer',
        'A full pickup, from hello to goodbye',
      ],
    },

    // ---------- words and phrases ----------
    {
      type: 'teach', kicker: 'Words for the job',
      title: 'Things you haul',
      rows: [
        { es: 'el sofá', en: 'the couch' },
        { es: 'el colchón', en: 'the mattress' },
        { es: 'el refrigerador', en: 'the fridge' },
        { es: 'las cajas', en: 'the boxes' },
        { es: 'la basura', en: 'the trash, the junk' },
        { es: 'el garaje', en: 'the garage' },
        { es: 'el camión', en: 'the truck' },
      ],
      trick: '<b>Colchón</b> sounds like "coach-OWN". Picture a coach sleeping on his own mattress.',
    },
    {
      type: 'teach', kicker: 'Phrases for the job',
      title: 'What to say',
      rows: [
        { es: 'Mucho gusto.', en: 'Nice to meet you.' },
        { es: '¿Qué quiere tirar?', en: 'What do you want to throw out?' },
        { es: '¿Dónde está?', en: 'Where is it?' },
        { es: 'No hay problema.', en: 'No problem.' },
        { es: 'Es muy pesado.', en: "It's very heavy." },
        { es: '¡Que tenga un buen día!', en: 'Have a good day!' },
      ],
      trick: 'With customers, always use <b>usted</b> (the polite "you"). Its verbs look like the he/she form: <b>quiere, tiene, está</b>. Save <b>quieres, tienes, estás</b> for friends.',
    },

    // ---------- warm-up practice: three versions ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice', kicker: 'Be polite',
            prompt: '¿Qué ___ tirar, señora?', en: 'What do you want to throw out, ma\'am?',
            options: [
              { text: 'quiere', correct: true },
              { text: 'quieres', why: '<b>Quieres</b> is the tú form, for friends. A customer gets <b>usted</b>: <b>quiere</b>.' },
              { text: 'quiero', why: '<b>Quiero</b> means "I want." You\'re asking what <i>she</i> wants: <b>quiere</b>.' },
            ],
            explain: 'Usted uses the same form as he/she: <b>quiere</b>.',
            rule: 'Usted · polite you',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Dónde ___ el colchón?', en: 'Where is the mattress?',
            options: [
              { text: 'está', correct: true },
              { text: 'es', why: 'Asking where something is = <b>Location</b>, so use <b>estar</b>: ¿Dónde está?' },
            ],
            explain: 'Location uses <b>estar</b>.',
            rule: 'ESTAR · Location',
          },
          {
            type: 'build',
            en: 'No problem.',
            answer: ['No', 'hay', 'problema'],
            extra: ['es'],
            wrongWhy: { es: '"No problem" is a set phrase in Spanish: <b>No hay problema</b>. <b>Hay</b> means "there is."' },
            explain: '<b>No hay problema</b> word for word is "there is no problem."',
            rule: 'Phrase to keep',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice', kicker: 'Be polite',
            prompt: '¿___ usted ayuda con las cajas?', en: 'Do you need help with the boxes? (polite)',
            options: [
              { text: 'Necesita', correct: true },
              { text: 'Necesitas', why: '<b>Necesitas</b> is the tú form, for friends. For a customer (usted): <b>necesita</b>.' },
              { text: 'Necesito', why: '<b>Necesito</b> means "I need." You\'re asking about her: <b>necesita</b>.' },
            ],
            explain: 'Usted uses the same form as he/she: <b>necesita</b>.',
            rule: 'Usted · polite you',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Dónde ___ las cajas?', en: 'Where are the boxes?',
            options: [
              { text: 'están', correct: true },
              { text: 'son', why: 'Asking where something is = <b>Location</b>, so use estar. More than one box: <b>están</b>.' },
              { text: 'está', why: 'Right verb, but cajas is more than one: <b>están</b>.' },
            ],
            explain: 'Location uses <b>estar</b>.',
            rule: 'ESTAR · Location',
          },
          {
            type: 'build',
            en: 'Nice to meet you.',
            answer: ['Mucho', 'gusto'],
            extra: ['Mucha'],
            wrongWhy: { Mucha: '<b>Gusto</b> is a boy word (el gusto), so it\'s <b>mucho gusto</b>.' },
            explain: '<b>Mucho gusto</b>, word for word: "much pleasure."',
            rule: 'Phrase to keep',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice', kicker: 'Be polite',
            prompt: '¿___ usted algo más?', en: 'Do you have anything else? (polite)',
            options: [
              { text: 'Tiene', correct: true },
              { text: 'Tienes', why: '<b>Tienes</b> is for tú (friends). For a customer: <b>tiene</b>.' },
              { text: 'Tengo', why: '<b>Tengo</b> means "I have." You\'re asking about her things: <b>tiene</b>.' },
            ],
            explain: 'Usted uses the same form as he/she: <b>tiene</b>.',
            rule: 'Usted · polite you',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'El refrigerador ___ en la cocina.', en: 'The fridge is in the kitchen.',
            options: [
              { text: 'está', correct: true },
              { text: 'es', why: 'Where the fridge is = <b>Location</b>: <b>está</b>.' },
            ],
            explain: 'Location uses <b>estar</b>.',
            rule: 'ESTAR · Location',
          },
          {
            type: 'build',
            en: 'Have a good day! (polite)',
            answer: ['¡Que', 'tenga', 'un', 'buen', 'día!'],
            extra: ['tengas'],
            end: '',
            wrongWhy: { tengas: '<b>Tengas</b> is the tú form. To a customer: <b>¡Que tenga un buen día!</b>' },
            explain: 'The polite goodbye. Customers love it.',
            rule: 'Usted · polite you',
          },
        ],
      ],
    },
    { type: 'retry' },

    // ---------- the conversation: a different customer each version ----------
    {
      type: 'talkSet',
      scenes: [
        // ---------- Customer A ----------
        {
          type: 'talk',
          title: 'Garage full of junk',
          who: { name: 'Señora López', emoji: '👵' },
          setup: 'Your first pickup! Señora López has a garage full of junk. Be polite, be helpful, and get that tip.',
          tips: [
            { mood: 3, text: '$20 tip and a glass of lemonade 🍋' },
            { mood: 2, text: '$10 tip' },
            { mood: 1, text: '$5 tip… and a funny look' },
            { mood: 0, text: 'No tip. And a 1-star review 😬' },
          ],
          lines: [
            {
              them: '¡Buenos días! ¿Ustedes son de la compañía?',
              en: 'Good morning! Are you (all) from the company?',
              choices: [
                { es: 'Sí, somos de la compañía. Soy Andrew.', en: "Yes, we're from the company. I'm Andrew.", good: true,
                  note: '<b>Somos de…</b> = we are from (Origin). Names use ser: <b>Soy Andrew</b>.' },
                { es: 'Sí, estamos de la compañía.', en: 'Yes, we are (estar) from the company.',
                  react: '¿Están… de visita? 🤨', reactEn: 'You are… visiting?',
                  why: 'Where you\'re from, even a company, uses ser: <b>somos de la compañía</b>.' },
                { es: 'Buenas noches, señora.', en: 'Good night, ma\'am.',
                  react: '¿Noches? ¡Son las nueve de la mañana! 😂', reactEn: "Night? It's nine in the morning!",
                  why: '<b>Buenas noches</b> is for night. In the morning it\'s <b>buenos días</b>.' },
              ],
            },
            {
              them: '¡Qué bueno! Mucho gusto, Andrew. Yo soy la señora López.',
              en: "Great! Nice to meet you, Andrew. I'm Mrs. López.",
              choices: [
                { es: 'Mucho gusto, señora. ¿Qué quiere tirar?', en: 'Nice to meet you, ma\'am. What do you want to throw out?', good: true,
                  note: '<b>Quiere</b> is the polite usted form. Customers love that.' },
                { es: 'Mucho gusto. ¿Qué quieres tirar?', en: 'Nice to meet you. What do you (friend) want to throw out?',
                  react: '¿"Quieres"? ¿Somos amigos? 😄', reactEn: '"Quieres"? Are we friends now?',
                  why: '<b>Quieres</b> is for friends. With a customer use usted: <b>¿Qué quiere tirar?</b>' },
                { es: 'Mucho gusto. Estoy la señora López.', en: "Nice to meet you. I'm (estar) Mrs. López.",
                  react: '¡No, no! ¡Yo soy la señora López! 😅', reactEn: "No, no! I'm Mrs. López!",
                  why: 'Oops, that says <i>you</i> are Mrs. López. And names use <b>soy</b>, never estoy.' },
              ],
            },
            {
              them: 'Un sofá viejo, un colchón y muchas cajas.',
              en: 'An old couch, a mattress and lots of boxes.',
              choices: [
                { es: '¿Dónde están?', en: 'Where are they?', good: true,
                  note: 'Where things are = Location, so <b>estar</b>. More than one thing: <b>están</b>.' },
                { es: '¿Dónde son?', en: 'Where are (ser) they?',
                  react: '¿Dónde son…? No entiendo. 🤔', reactEn: "Where are… (wrong verb)? I don't understand.",
                  why: 'Asking where something is uses estar: <b>¿Dónde están?</b>' },
                { es: '¿Cuántos años tiene usted?', en: 'How old are you?',
                  react: '¡Qué pregunta! Eso es personal. 😤', reactEn: "What a question! That's personal.",
                  why: 'That asks how old she is! You want to know where the junk is: <b>¿Dónde están?</b>' },
              ],
            },
            {
              them: 'Están en el garaje. El sofá es muy pesado.',
              en: "They're in the garage. The couch is very heavy.",
              choices: [
                { es: 'No hay problema. Somos fuertes.', en: "No problem. We're strong.", good: true,
                  note: 'Strong is what you\'re like, a <b>Characteristic</b>: <b>somos fuertes</b>.' },
                { es: '¡Ay, no! Estoy cansado.', en: "Oh no! I'm tired.",
                  react: '¿Ya está cansado? ¡Son las nueve de la mañana! 😂', reactEn: "You're already tired? It's nine in the morning!",
                  why: 'Perfect Spanish, but not a great thing to tell a customer! Say something helpful: <b>No hay problema</b>.' },
                { es: 'No es problema. Estamos fuertes.', en: 'Not is problem. We are (estar) strong.',
                  react: 'Eh… ¿okay? 🤨', reactEn: 'Uh… okay?',
                  why: 'Two slips: the phrase is <b>No hay problema</b>, and strong is a characteristic, so <b>somos fuertes</b>.' },
              ],
            },
            {
              them: '¡Perfecto! El garaje está abierto. ¿Necesitan algo?',
              en: 'Perfect! The garage is open. Do you need anything?',
              choices: [
                { es: 'No, gracias. Empezamos ahora.', en: "No, thanks. We'll start now.", good: true,
                  note: '<b>Empezamos</b> = we start. Short, polite, ready to work.' },
                { es: 'Sí, un sándwich, por favor.', en: 'Yes, a sandwich, please.',
                  react: '¿Un sándwich? Eh… bueno… ¿de jamón? 😅', reactEn: 'A sandwich? Uh… okay… ham?',
                  why: 'Ha! Correct Spanish, but she was just being polite. Say <b>No, gracias</b> and get to work.' },
                { es: 'No, gracias. Es abierto.', en: "No, thanks. It's (ser) open.",
                  react: 'Sí… ya sé que está abierto. 🙄', reactEn: 'Yes… I know it\'s open.',
                  why: 'Open right now is a <b>Condition</b>: <b>está abierto</b>. And she just told you!' },
              ],
            },
            {
              narrate: '🚚 Twenty minutes later, the truck is full.',
              them: '¡Ay, qué rápido! ¿Cuánto es?',
              en: 'Wow, so fast! How much is it?',
              choices: [
                { es: 'Son ciento cincuenta dólares.', en: "It's 150 dollars.", good: true,
                  note: 'Prices with <b>¿Cuánto es?</b> use ser: <b>son</b> ciento cincuenta dólares.' },
                { es: 'Soy ciento cincuenta dólares.', en: 'I am 150 dollars.',
                  react: '¿Usted es ciento cincuenta dólares? ¡Qué caro! 😂', reactEn: 'YOU are 150 dollars? Pricey!',
                  why: '<b>Soy</b> means "I am." The price is <b>son</b> ciento cincuenta dólares.' },
                { es: 'Es gratis, señora.', en: "It's free, ma'am.",
                  react: '¿Gratis? ¡Qué amable! …¿De verdad? 😮', reactEn: 'Free? How kind! …Really?',
                  why: 'Your boss would not be happy! <b>Gratis</b> means free. Give her the price.' },
              ],
            },
            {
              them: 'Aquí está. ¡Muchas gracias, Andrew!',
              en: 'Here you go. Thank you so much, Andrew!',
              choices: [
                { es: 'Gracias a usted. ¡Que tenga un buen día!', en: 'Thank you. Have a good day!', good: true,
                  note: '<b>Que tenga un buen día</b> is the polite usted way to say "have a good day."' },
                { es: 'De nada. ¡Que tengas un buen día!', en: "You're welcome. Have a good day! (friend)",
                  react: '¿"Tengas"? Ay, qué joven tan amistoso. 😊', reactEn: '"Tengas"? Oh, what a friendly young man.',
                  why: '<b>Tengas</b> is the tú form. With customers: <b>que tenga un buen día</b>.' },
                { es: '¡Adiós, basura!', en: 'Bye, trash!',
                  react: '¿¡Basura!? ¿Yo? 😠', reactEn: 'Trash!? Me?',
                  why: 'Ha! <b>Basura</b> means trash. That sounds like you\'re calling her trash. Say <b>que tenga un buen día</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer B ----------
        {
          type: 'talk',
          title: 'The grumpy basement',
          who: { name: 'Don Esteban', emoji: '👴' },
          setup: 'Don Esteban is moving out, and he is NOT in a good mood. Be extra polite and win him over.',
          tips: [
            { mood: 3, text: 'A $20 tip… and almost a smile 🙂' },
            { mood: 2, text: '$5 tip and a grunt' },
            { mood: 1, text: 'No tip, just "hmph"' },
            { mood: 0, text: 'He calls your boss to complain 😬' },
          ],
          lines: [
            {
              them: 'Buenas tardes. ¿Ustedes son los de la basura?',
              en: 'Good afternoon. Are you the junk guys?',
              choices: [
                { es: 'Buenas tardes, señor. Sí, somos de la compañía.', en: "Good afternoon, sir. Yes, we're from the company.", good: true,
                  note: '<b>Buenas tardes</b> = good afternoon. <b>Somos de…</b> = we are from (Origin).' },
                { es: 'Buenos días, señor. Sí.', en: 'Good morning, sir. Yes.',
                  react: '¿Días? Ya son las tres de la tarde. 🙄', reactEn: "Morning? It's already three in the afternoon.",
                  why: 'After noon it\'s <b>buenas tardes</b>. <b>Buenos días</b> is only for the morning.' },
                { es: 'Sí, estamos los de la basura.', en: 'Yes, we are (estar) the junk guys.',
                  react: '¿Están…? ¿Qué? 🤨', reactEn: 'You are (estar)…? What?',
                  why: 'Who you are uses ser: <b>somos de la compañía</b>.' },
              ],
            },
            {
              them: 'Por fin. Todo está en el sótano.',
              en: 'Finally. Everything is in the basement.',
              choices: [
                { es: 'No hay problema, señor. ¿Qué quiere tirar?', en: 'No problem, sir. What do you want to throw out?', good: true,
                  note: 'Polite <b>usted</b>: <b>quiere</b>. Grumpy customers need it most.' },
                { es: '¿Qué quieres tirar, amigo?', en: 'What do you want to throw out, buddy?',
                  react: '¿Amigo? Yo no soy tu amigo. 😤', reactEn: "Buddy? I'm not your buddy.",
                  why: '<b>Quieres</b> and <b>amigo</b> are for friends. With a customer: <b>¿Qué quiere tirar, señor?</b>' },
                { es: '¿Dónde es el sótano?', en: 'Where is (ser) the basement?',
                  react: '¿"Es"? Está abajo, obviamente. 🙄', reactEn: '"Es"? It\'s downstairs, obviously.',
                  why: 'Where something is uses estar: <b>¿Dónde está el sótano?</b>' },
              ],
            },
            {
              them: 'Una mesa, cuatro sillas y un refrigerador viejo.',
              en: 'A table, four chairs and an old fridge.',
              choices: [
                { es: '¿El refrigerador está vacío?', en: 'Is the fridge empty?', good: true,
                  note: 'Empty right now is a condition: <b>está vacío</b>. Smart question!' },
                { es: '¿El refrigerador es vacío?', en: 'Is the fridge (always) empty?',
                  react: '¿Siempre? Hmm… no. 🤔', reactEn: 'Always? Hmm… no.',
                  why: 'Empty or full changes, so it\'s a condition: <b>está vacío</b>.' },
                { es: '¿La refrigerador está vacía?', en: 'Is the (girl-word) fridge empty?',
                  react: '¿"La" refrigerador? 😒', reactEn: '"La" fridge?',
                  why: '<b>Refrigerador</b> is a boy word (-or words usually are): <b>el refrigerador… vacío</b>.' },
              ],
            },
            {
              them: 'Sí, está vacío. Pero es muy pesado.',
              en: "Yes, it's empty. But it's very heavy.",
              choices: [
                { es: 'Tranquilo, señor. Somos fuertes.', en: "Don't worry, sir. We're strong.", good: true,
                  note: '<b>Tranquilo</b> = relax, don\'t worry. Strong is a characteristic: <b>somos fuertes</b>.' },
                { es: '¡Ay, no! ¿Muy pesado?', en: 'Oh no! Very heavy?',
                  react: '¿Tienes miedo? 😏', reactEn: 'Are you scared?',
                  why: 'Correct Spanish, but not very reassuring! Try: <b>Tranquilo, somos fuertes</b>.' },
                { es: 'Tranquilo, señor. Estamos fuertes.', en: "Don't worry, sir. We're (estar) strong.",
                  react: '¿Fuertes… solo hoy? 🤨', reactEn: 'Strong… only today?',
                  why: 'Strong is what you\'re like, a characteristic: <b>somos fuertes</b>.' },
              ],
            },
            {
              narrate: '🚚 Forty minutes later, the basement is empty.',
              them: '¡Increíble! ¿Cuánto es?',
              en: 'Incredible! How much is it?',
              choices: [
                { es: 'Son doscientos dólares, señor.', en: "It's two hundred dollars, sir.", good: true,
                  note: 'Prices: <b>son … dólares</b>. Doscientos = 200.' },
                { es: 'Soy doscientos dólares.', en: 'I am two hundred dollars.',
                  react: '¿Tú cuestas doscientos dólares? 😂', reactEn: 'YOU cost two hundred dollars?',
                  why: '<b>Soy</b> = I am. The price: <b>son doscientos dólares</b>.' },
                { es: 'Es gratis, señor.', en: "It's free, sir.",
                  react: '¿Gratis? …Bueno, ¡gracias! 😮', reactEn: 'Free? …Well, thanks!',
                  why: 'He\'d love that, but your boss wouldn\'t! Give him the price: <b>son doscientos dólares</b>.' },
              ],
            },
            {
              them: 'Muy bien. Ustedes trabajan rápido. Gracias.',
              en: 'Very good. You guys work fast. Thanks.',
              choices: [
                { es: 'Gracias a usted, señor. ¡Que tenga un buen día!', en: 'Thank you, sir. Have a good day!', good: true,
                  note: 'The polite goodbye. Even grumpy customers love it.' },
                { es: '¡Adiós, viejo!', en: 'Bye, old man!',
                  react: '¿¡Viejo!? 😠', reactEn: 'Old man!?',
                  why: '"Viejo" to a customer\'s face? Ouch. Use the polite goodbye: <b>que tenga un buen día</b>.' },
                { es: 'De nada, amigo. ¡Que tengas un buen día!', en: "You're welcome, buddy. Have a good day! (friend)",
                  react: 'Otra vez con "amigo"… 😒', reactEn: '"Buddy" again…',
                  why: '<b>Tengas</b> and <b>amigo</b> are for friends. With customers: <b>que tenga un buen día, señor</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer C ----------
        {
          type: 'talk',
          title: 'Third floor, no elevator',
          who: { name: 'Sofía', emoji: '👩‍🎓' },
          setup: 'Sofía is a college student moving out of her apartment. She\'s young and friendly. Listen to what she asks for!',
          tips: [
            { mood: 3, text: '$20 tip and pizza 🍕' },
            { mood: 2, text: '$10 tip' },
            { mood: 1, text: '$5 tip' },
            { mood: 0, text: 'No tip, and she tells all her friends 😬' },
          ],
          lines: [
            {
              them: '¡Hola! ¿Son de la compañía? Soy Sofía.',
              en: "Hi! Are you from the company? I'm Sofía.",
              choices: [
                { es: '¡Hola! Sí, soy Andrew. Mucho gusto.', en: "Hi! Yes, I'm Andrew. Nice to meet you.", good: true,
                  note: '<b>Soy</b> + your name. <b>Mucho gusto</b> = nice to meet you.' },
                { es: '¡Hola! Sí, estoy Andrew.', en: "Hi! Yes, I'm (estar) Andrew.",
                  react: '¿Estás Andrew? ¿Solo hoy? 😄', reactEn: "You're Andrew… just for today?",
                  why: 'Names use ser: <b>soy Andrew</b>.' },
                { es: 'Hola. ¿Cuántos años tiene?', en: 'Hello. How old are you?',
                  react: '¿Perdón? 😳', reactEn: 'Excuse me?',
                  why: 'That asks her age! Start with your name: <b>soy Andrew, mucho gusto</b>.' },
              ],
            },
            {
              them: 'Mucho gusto. Ay, por favor, háblame de tú. ¡Tengo veinte años!',
              en: "Nice to meet you. Oh please, talk to me with \"tú\". I'm twenty!",
              choices: [
                { es: '¡Claro! ¿Qué quieres tirar?', en: 'Sure! What do you want to throw out?', good: true,
                  note: 'She asked for <b>tú</b>, so now <b>quieres</b> is right. Usted is the safe default, but follow the customer\'s lead.' },
                { es: 'Claro. ¿Qué quiere tirar, señora?', en: "Sure. What do you want to throw out, ma'am?",
                  react: '¿Señora? ¡Ay, no! Tengo veinte años. 😂', reactEn: "Ma'am? Oh no! I'm twenty.",
                  why: 'Usted is usually right, but she asked for tú: <b>¿Qué quieres tirar?</b>' },
                { es: '¡Claro! ¿Qué quiero tirar?', en: 'Sure! What do I want to throw out?',
                  react: '¿Tú quieres tirar algo? 🤔', reactEn: 'YOU want to throw something out?',
                  why: '<b>Quiero</b> = I want. Ask about her: <b>¿Qué quieres tirar?</b>' },
              ],
            },
            {
              them: 'Mi colchón, una silla rota y unas cajas. Están en mi cuarto.',
              en: "My mattress, a broken chair and some boxes. They're in my room.",
              choices: [
                { es: '¿Dónde está tu cuarto?', en: 'Where is your room?', good: true,
                  note: '<b>Tu</b> (no accent) = your. Where = <b>está</b>.' },
                { es: '¿Dónde es tu cuarto?', en: 'Where is (ser) your room?',
                  react: '¿"Es"…? Mmm, ¿quieres decir "está"? 😅', reactEn: '"Es"…? Hmm, you mean "está"?',
                  why: 'Where something is uses estar: <b>¿Dónde está tu cuarto?</b>' },
                { es: '¿Dónde está su cuarto, señora?', en: "Where is your room, ma'am?",
                  react: '¡Otra vez "señora"! 😂', reactEn: '"Ma\'am" again!',
                  why: 'She asked for tú: <b>tu cuarto</b>, not su cuarto, señora.' },
              ],
            },
            {
              them: 'En el tercer piso. Y no hay elevador. 😬',
              en: "On the third floor. And there's no elevator.",
              choices: [
                { es: 'No hay problema. Estamos listos.', en: "No problem. We're ready.", good: true,
                  note: '<b>Estamos listos</b> = we\'re ready (estar + listo).' },
                { es: 'No hay problema. Somos listos.', en: "No problem. We're smart.",
                  react: '¿Son inteligentes? ¡Qué bueno! Pero, ¿están listos? 😄', reactEn: "You're smart? Great! But are you ready?",
                  why: '<b>Ser listo</b> = smart. <b>Estar listo</b> = ready: <b>estamos listos</b>.' },
                { es: '¿Tercer piso? Adiós. 👋', en: 'Third floor? Bye.',
                  react: '¡Nooo! ¡Por favor! 😭', reactEn: 'Nooo! Please!',
                  why: 'Ha! Don\'t leave. Say <b>no hay problema, estamos listos</b>.' },
              ],
            },
            {
              narrate: '🚚 Three trips down the stairs later…',
              them: '¡Gracias! ¿Están cansados?',
              en: 'Thanks! Are you guys tired?',
              choices: [
                { es: 'Un poco, pero estamos bien.', en: "A little, but we're fine.", good: true,
                  note: 'Feelings and conditions right now: <b>estar</b>.' },
                { es: 'Sí, somos cansados.', en: "Yes, we're (ser) tired.",
                  react: '¿Siempre? 😂', reactEn: 'Always?',
                  why: 'Tired right now is a condition: <b>estamos cansados</b>. Somos cansados sounds like it\'s your personality.' },
                { es: 'Sí, estoy muy cansada.', en: "Yes, I'm very tired (girl form).",
                  react: '¿Cansada? 🤔', reactEn: '"Cansada"?',
                  why: '<b>Cansada</b> is the girl form. Andrew is a guy: <b>cansado</b>.' },
              ],
            },
            {
              them: 'Toma, una propina. ¡Eres muy amable!',
              en: "Here, a tip. You're very kind!",
              choices: [
                { es: '¡Muchas gracias! Que tengas un buen día.', en: 'Thanks a lot! Have a good day.', good: true,
                  note: 'She uses tú, so <b>tengas</b> (the tú form) is right here!' },
                { es: 'Gracias. Que tenga un buen día, señora.', en: "Thanks. Have a good day, ma'am.",
                  react: '¡Señora otra vez! 😂 Bueno, gracias.', reactEn: "Ma'am again! Okay, thanks.",
                  why: 'She asked for tú, remember? <b>Que tengas un buen día</b>.' },
                { es: 'De nada.', en: "You're welcome.",
                  react: '¿De nada? Yo te di la propina… 🤨', reactEn: "You're welcome? I gave YOU the tip…",
                  why: '<b>De nada</b> = you\'re welcome. She gave you something, so say <b>gracias</b>.' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
