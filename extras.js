// A secret customer. Once in a while, when a lesson is replayed, he shows up in place of
// the normal conversation (see startLesson in app.js). Meeting him puts a badge on home.
// Doesn't count toward the score or the review list.
window.SECRET_CUSTOMER = {
  type: 'talk',
  secret: 'chupacabra',
  title: 'A very strange customer',
  who: { name: 'El Chupacabra', emoji: '🐐' },
  setup: 'Midnight. A call from a number that\'s all zeros. The address is a farm at the end of a dirt road. Someone is waiting in the dark… 🌙',
  tips: [
    { mood: 3, text: 'He pays in gold coins from 1847 🪙' },
    { mood: 2, text: 'He pays, then vanishes into the shadows' },
    { mood: 1, text: 'He pays in… goat cheese 🧀' },
    { mood: 0, text: 'He disappears without paying. Was he ever there? 🌫️' },
  ],
  lines: [
    {
      them: 'Buenas noches. Necesito sacar un sofá. Está un poco… mordido.',
      en: 'Good evening. I need to get rid of a couch. It\'s a little… bitten.',
      choices: [
        { es: 'Claro. ¿De qué tamaño es?', en: 'Sure. What size is it?', good: true,
          note: 'A pro asks about the job, no matter who the customer is. 😅' },
        { es: '¿Mordido? ¿Por quién?', en: 'Bitten? By whom?',
          react: 'Por… nadie. Nadie. 😏', reactEn: 'By… nobody. Nobody.',
          why: 'Some questions are better left unasked. Ask about the job: <b>¿De qué tamaño es?</b>' },
        { es: '¡Adiós! 🏃', en: 'Bye! 🏃',
          react: '¡Espere! Pago muy bien. 💰', reactEn: 'Wait! I pay very well.',
          why: 'A customer is a customer! Ask: <b>¿De qué tamaño es?</b>' },
      ],
    },
    {
      them: 'Es grande y muy pesado. También hay cuarenta cabras… de peluche.',
      en: 'It\'s big and very heavy. There are also forty goats… stuffed toy ones.',
      choices: [
        { es: '¿Las cabras se van o se quedan?', en: 'Do the goats go or stay?', good: true,
          note: 'Always ask what goes and what stays. Even with goats.' },
        { es: '¿Las cabras se va o se queda?', en: 'Does the goats go or stay?',
          react: 'Se van, se quedan… son muchas cabras. 🙂', reactEn: '"Se van", "se quedan"… it\'s a lot of goats.',
          why: 'More than one goat: <b>se van</b> / <b>se quedan</b>.' },
        { es: '¿Y dónde están las cabras de verdad?', en: 'And where are the real goats?',
          react: '¿Qué cabras? 😶', reactEn: 'What goats?',
          why: 'Don\'t ask. Really, don\'t. 😅 Ask: <b>¿Se van o se quedan?</b>' },
      ],
    },
    {
      them: 'Se van todas. Me dan… hambre.',
      en: 'They all go. They make me… hungry.',
      choices: [
        { es: 'Entendido. Va a tomar unas dos horas.', en: 'Got it. It\'s going to take about two hours.', good: true,
          note: 'Calm. Professional. Not looking at his teeth. 😐' },
        { es: '¿Hambre? ¡Me voy! 🏃', en: 'Hungry? I\'m out of here! 🏃',
          react: 'No, no, tranquilo. Ya cené. 🙂', reactEn: 'No, no, relax. I already had dinner.',
          why: 'Stay calm! Tell him how long: <b>Va a tomar unas dos horas.</b>' },
        { es: 'Entendido. Va a toma unas dos horas.', en: 'Got it. It\'s going to takes about two hours.',
          react: 'Tomar. Yo también hablo español. 😏', reactEn: '"Tomar". I speak Spanish too.',
          why: 'After <b>va a</b>, the verb stays whole: <b>tomar</b>.' },
      ],
    },
    {
      them: '¿Cuánto me va a costar?',
      en: 'How much is it going to cost me?',
      choices: [
        { es: 'Doscientos dólares. ¿Le parece bien?', en: 'Two hundred dollars. Does that sound good?', good: true,
          note: 'Price, then <b>¿Le parece bien?</b> Then wait. Don\'t blink.' },
        { es: 'Doscientas cabras.', en: 'Two hundred goats.',
          react: '¿Doscientas cabras? Hmm… es un buen precio. 🤔', reactEn: 'Two hundred goats? Hmm… that\'s a good price.',
          why: 'Your boss wants dollars, not goats! <b>Doscientos dólares.</b>' },
        { es: 'Doscientos dólares. ¿Le parece bueno?', en: 'Two hundred dollars. Does it seem good (bueno)?',
          react: '¿Bueno? Ah, ¿bien? 🙂', reactEn: '"Bueno"? Oh, "bien"?',
          why: 'The phrase is <b>¿Le parece bien?</b>' },
      ],
    },
    {
      them: 'Me parece bien. ¿Puedo pagar en efectivo? Tengo unas monedas muy… viejas.',
      en: 'Sounds good. Can I pay cash? I have some very… old coins.',
      choices: [
        { es: 'Claro, en efectivo está bien. ¡Gracias, señor Chupacabra!', en: 'Sure, cash is fine. Thanks, Mr. Chupacabra!', good: true,
          note: 'He smiles. You wish he hadn\'t. 😬' },
        { es: 'No, solo con tarjeta.', en: 'No, only by card.',
          react: '¿Tarjeta? Vivo en una cueva. 😑', reactEn: 'A card? I live in a cave.',
          why: 'Cash is fine! <b>Claro, en efectivo está bien.</b>' },
        { es: 'Claro, con efectivo.', en: 'Sure, with cash.',
          react: 'En efectivo. Hace siglos que hablo español. 🙂', reactEn: '"En efectivo". I\'ve been speaking Spanish for centuries.',
          why: 'IN cash: <b>en efectivo</b>.' },
      ],
    },
  ],
};
