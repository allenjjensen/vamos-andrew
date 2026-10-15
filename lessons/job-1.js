// Lesson: On the job, first customer.
// The "talk" step is a conversation: the customer speaks, Andrew picks a reply.
// Bad replies get a reaction from the customer (and lower her mood), then he picks again.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'job-1',
  title: 'On the job: first customer',
  subtitle: 'Talk a customer through a pickup',
  minutes: 10,

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

    // ---------- warm-up practice ----------
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
    { type: 'retry' },

    // ---------- the conversation ----------
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
  ],
});
