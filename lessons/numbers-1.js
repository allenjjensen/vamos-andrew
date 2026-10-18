// Lesson: How much is it? Numbers and prices.
// Unit 2 (Booking jobs). Ends with a customer asking what the job costs.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'numbers-1',
  unit: 'Booking jobs',
  title: 'How much is it?',
  subtitle: 'Numbers and prices',
  minutes: 10,
  terms: ['noun', 'plural'],

  recap: `<p><b>0–15</b> by heart. <b>16–29</b> are one word: <b>dieciséis, veintidós</b>. From <b>31</b>, add <b>y</b>: <b>treinta y uno</b>.</p>
    <p><b>Sesenta</b> (60) has the S of <b>s</b>eis. <b>Setenta</b> (70) has the T of sie<b>t</b>e. <b>Quince</b> (15) is short, <b>cincuenta</b> (50) is long.</p>
    <p><b>Cien</b> = exactly 100. Anything more: <b>ciento</b> (ciento cincuenta). Watch <b>quinientos</b> (500), <b>setecientos</b> (700), <b>novecientos</b> (900).</p>
    <p><b>¿Cuánto cuesta?</b> (one thing) · <b>¿Cuánto cuestan?</b> (more than one). Before a noun, <b>uno → un</b>: <b>veintiún dólares</b>.</p>`,

  phrases: [
    { es: '¿Cuánto cuesta?', en: 'How much is it?' },
    { es: 'Cuesta ciento cincuenta dólares.', en: 'It costs one hundred fifty dollars.' },
    { es: 'Son doscientos dólares en total.', en: "It's two hundred dollars in total." },
    { es: '¿Acepta tarjeta o efectivo?', en: 'Do you take card or cash?' },
    { es: 'Le hago un descuento.', en: "I'll give you a discount." },
    { es: 'Le mando la cotización.', en: "I'll send you the quote." },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '💵',
      title: 'How much is it?',
      learn: [
        'Numbers from 0 to 1,000',
        'How to ask and give a price',
        'The number traps that trip everyone up (15 or 50? 60 or 70?)',
      ],
    },

    // ---------- warm-up: what does he already know? ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: '¿Cuánto ___?', en: 'How much is it?',
      options: [
        { text: 'cuesta', correct: true },
        { text: 'cuanto', why: '<b>Cuánto</b> is already "how much". The word after it is the verb "costs": <b>¿Cuánto cuesta?</b>' },
      ],
      explain: '<b>¿Cuánto cuesta?</b> = How much does it cost?',
      rule: 'Prices',
    },
    {
      type: 'choice', warmup: true, listen: true, kicker: 'Quick check: no pressure',
      say: 'veinte',
      options: [
        { text: '20', correct: true },
        { text: '12', why: '12 is <b>doce</b>. <b>Veinte</b> is 20, like the start of veinti-uno, veinti-dós…' },
        { text: '2', why: '2 is <b>dos</b>. <b>Veinte</b> is 20.' },
      ],
      explain: '<b>Veinte</b> = 20.',
      rule: 'Numbers · 20',
    },
    {
      type: 'warmupResult',
      all: 'Nice! You know more than you think. Now let\'s nail the tricky ones, so prices never trip you up.',
      some: 'Good start. A few tricks are coming that make numbers easy.',
      none: 'No worries. Numbers are just practice, and the next cards make them stick.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: 'Learn these by heart',
      title: '0 to 15',
      rows: [
        { tag: '0 · 1 · 2', es: 'cero · uno · dos', en: 'zero, one, two' },
        { tag: '3 · 4 · 5', es: 'tres · cuatro · cinco', en: 'three, four, five' },
        { tag: '6 · 7 · 8', es: 'seis · siete · ocho', en: 'six, seven, eight' },
        { tag: '9 · 10', es: 'nueve · diez', en: 'nine, ten' },
        { tag: '11 · 12 · 13', es: 'once · doce · trece', en: 'eleven, twelve, thirteen' },
        { tag: '14 · 15', es: 'catorce · quince', en: 'fourteen, fifteen' },
      ],
      trick: '<b>11 to 15 all end in -ce</b>: on-ce, do-ce, tre-ce, cator-ce, quin-ce. Think "-ce" = "-teen".',
    },
    {
      type: 'teach', kicker: 'Squished together',
      title: '16 to 29: one word',
      body: '<p>16 to 19 are "ten and six" squished into one word. 21 to 29 are "twenty and one" squished.</p>',
      rows: [
        { tag: '16', es: 'dieciséis', en: 'diez y seis → dieciséis' },
        { tag: '17 · 18 · 19', es: 'diecisiete · dieciocho · diecinueve', en: 'seventeen, eighteen, nineteen' },
        { tag: '20', es: 'veinte', en: 'twenty' },
        { tag: '21 · 22', es: 'veintiuno · veintidós', en: 'twenty-one, twenty-two' },
        { tag: '23 · 26', es: 'veintitrés · veintiséis', en: 'twenty-three, twenty-six' },
      ],
      trick: 'Watch the accents: dieci<b>séis</b>, veinti<b>dós</b>, veinti<b>trés</b>, veinti<b>séis</b>. The punch goes on the last part.',
    },
    {
      type: 'teach', kicker: 'Add "y"',
      title: '30 to 99',
      body: '<p>From 31 on, it\'s <b>tens + y + ones</b>, three separate words.</p>',
      rows: [
        { tag: '30 · 31', es: 'treinta · treinta y uno', en: 'thirty, thirty-one' },
        { tag: '40 · 50', es: 'cuarenta · cincuenta', en: 'forty, fifty' },
        { tag: '60 · 70', es: 'sesenta · setenta', en: 'sixty, seventy' },
        { tag: '80 · 90', es: 'ochenta · noventa', en: 'eighty, ninety' },
        { tag: '75', es: 'setenta y cinco', en: 'seventy-five' },
      ],
      trick: '<b>Sesenta</b> (60) has the <b>S</b> of <b>s</b>eis. <b>Setenta</b> (70) has the <b>T</b> of sie<b>t</b>e. And <b>quince</b> (15) is short and quick, <b>cincuenta</b> (50) is long.',
    },
    {
      type: 'teach', kicker: 'Big numbers',
      title: 'Hundreds',
      rows: [
        { tag: '100', es: 'cien', en: 'exactly one hundred' },
        { tag: '150', es: 'ciento cincuenta', en: '100 + more → ciento' },
        { tag: '200 · 300', es: 'doscientos · trescientos', en: 'two hundred, three hundred' },
        { tag: '500', es: 'quinientos', en: 'five hundred (a rebel!)' },
        { tag: '700 · 900', es: 'setecientos · novecientos', en: 'seven hundred, nine hundred (rebels)' },
        { tag: '1,000', es: 'mil', en: 'one thousand (no "un")' },
      ],
      trick: '<b>Cien</b> is a clean, exact hundred. Add anything and it becomes <b>ciento</b>: ciento uno, ciento cincuenta. There\'s never a "y" after ciento.',
    },
    {
      type: 'teach', kicker: 'On the job',
      title: 'Asking and giving a price',
      rows: [
        { es: '¿Cuánto cuesta?', en: 'How much is it? (one thing)' },
        { es: '¿Cuánto cuestan los colchones?', en: 'How much are the mattresses? (more than one)' },
        { es: 'Cuesta ochenta dólares.', en: 'It costs eighty dollars.' },
        { es: 'Son ciento veinte dólares en total.', en: "It's a hundred twenty dollars in total." },
        { es: 'veintiún dólares · un dólar', en: 'uno → un before a noun' },
      ],
      trick: '<b>Cuesta</b> for one thing, <b>cuestan</b> for more than one (just like <b>es</b> / <b>son</b>). For a total, say <b>Son … dólares</b>.',
    },

    // ---------- practice: three versions of the same rules ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice', listen: true,
            say: 'quince',
            options: [
              { text: '15', correct: true },
              { text: '50', why: '50 is <b>cincuenta</b>, a long word. <b>Quince</b> is short: 15.' },
              { text: '5', why: '5 is <b>cinco</b>. <b>Quince</b> is 15.' },
            ],
            explain: '<b>Quince</b> = 15. Short word, small number.',
            rule: 'Numbers · 15 or 50',
          },
          {
            type: 'choice',
            prompt: '17 = ___', en: 'seventeen',
            options: [
              { text: 'diecisiete', correct: true },
              { text: 'setenta', why: '<b>Setenta</b> is 70. 17 is "ten and seven": <b>diecisiete</b>.' },
              { text: 'diez y siete', why: 'Close! 16 to 19 are squished into one word: <b>diecisiete</b>.' },
            ],
            explain: '16 to 19 = <b>dieci-</b> + the number: <b>diecisiete</b>.',
            rule: 'Numbers · 16 to 29',
          },
          {
            type: 'choice',
            prompt: '60 = ___', en: 'sixty',
            options: [
              { text: 'sesenta', correct: true },
              { text: 'setenta', why: '<b>Setenta</b> is 70: it has the T of sie<b>t</b>e. 60 has the S of <b>s</b>eis: <b>sesenta</b>.' },
              { text: 'seiscientos', why: '<b>Seiscientos</b> is 600. 60 is <b>sesenta</b>.' },
            ],
            explain: '<b>Sesenta</b> (60) has the S of <b>s</b>eis.',
            rule: 'Numbers · 60 or 70',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Cuánto ___ el sofá?', en: 'How much is the couch?',
            options: [
              { text: 'cuesta', correct: true },
              { text: 'cuestan', why: '<b>Cuestan</b> is for more than one thing. One couch: <b>cuesta</b>.' },
              { text: 'es cuesta', why: 'Just one verb: <b>¿Cuánto cuesta el sofá?</b>' },
            ],
            explain: 'One thing → <b>cuesta</b>.',
            rule: 'Prices · cuesta / cuestan',
          },
          {
            type: 'build',
            en: 'It costs fifty dollars.',
            answer: ['Cuesta', 'cincuenta', 'dólares'],
            extra: ['quince'],
            wrongWhy: { quince: '<b>Quince</b> is 15. Fifty is <b>cincuenta</b>.' },
            explain: '<b>Cuesta</b> = it costs. <b>Cincuenta</b> = 50.',
            rule: 'Prices',
          },
          {
            type: 'choice',
            prompt: '100 = ___', en: 'exactly one hundred',
            options: [
              { text: 'cien', correct: true },
              { text: 'ciento', why: '<b>Ciento</b> needs more after it (ciento uno, ciento veinte). Exactly 100 is <b>cien</b>.' },
              { text: 'un cien', why: 'No "un" in Spanish: just <b>cien</b>.' },
            ],
            explain: 'Exactly 100 = <b>cien</b>.',
            rule: 'Numbers · cien / ciento',
          },
          {
            type: 'choice', listen: true,
            say: 'ciento cincuenta dólares',
            options: [
              { text: '$150', correct: true },
              { text: '$115', why: '$115 would be <b>ciento quince</b>. You heard <b>ciento cincuenta</b>: 150.' },
              { text: '$500', why: '$500 is <b>quinientos</b>. You heard <b>ciento cincuenta</b>: 150.' },
            ],
            explain: '<b>Ciento</b> (100) + <b>cincuenta</b> (50) = 150.',
            rule: 'Numbers · hundreds',
          },
          {
            type: 'choice',
            prompt: '500 = ___', en: 'five hundred',
            options: [
              { text: 'quinientos', correct: true },
              { text: 'cincocientos', why: 'Everyone tries this! 500 is a rebel: <b>quinientos</b>.' },
              { text: 'cincuenta', why: '<b>Cincuenta</b> is 50. 500 is <b>quinientos</b>.' },
            ],
            explain: '500 is a rebel: <b>quinientos</b>.',
            rule: 'Numbers · rebels',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '___ doscientos dólares en total.', en: "It's two hundred dollars in total.",
            options: [
              { text: 'Son', correct: true },
              { text: 'Es', why: 'Dollars are more than one, so it\'s <b>son</b>: <b>Son doscientos dólares</b>.' },
              { text: 'Está', why: '<b>Está</b> is for how or where. For a total: <b>Son … dólares</b>.' },
            ],
            explain: 'A total in dollars: <b>Son … dólares</b>.',
            rule: 'Prices · the total',
          },
          {
            type: 'choice',
            prompt: '$21 = ___ dólares', en: 'twenty-one dollars',
            options: [
              { text: 'veintiún', correct: true },
              { text: 'veintiuno', why: 'Before a noun like <b>dólares</b>, <b>uno</b> shortens to <b>un</b>: <b>veintiún dólares</b>.' },
              { text: 'veinte y uno', why: '21 is one word: <b>veintiuno</b>, and before a noun <b>veintiún</b>.' },
            ],
            explain: 'Before a noun, uno → un: <b>veintiún dólares</b>.',
            rule: 'Prices · uno → un',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice', listen: true,
            say: 'cincuenta',
            options: [
              { text: '50', correct: true },
              { text: '15', why: '15 is <b>quince</b>, a short word. <b>Cincuenta</b> is long: 50.' },
              { text: '500', why: '500 is <b>quinientos</b>. <b>Cincuenta</b> is 50.' },
            ],
            explain: '<b>Cincuenta</b> = 50. Long word, bigger number.',
            rule: 'Numbers · 15 or 50',
          },
          {
            type: 'choice',
            prompt: '22 = ___', en: 'twenty-two',
            options: [
              { text: 'veintidós', correct: true },
              { text: 'veinte y dos', why: '21 to 29 are squished into one word: <b>veintidós</b>.' },
              { text: 'doce', why: '<b>Doce</b> is 12. 22 is <b>veintidós</b>.' },
            ],
            explain: '21 to 29 = <b>veinti-</b> + the number: <b>veintidós</b>.',
            rule: 'Numbers · 16 to 29',
          },
          {
            type: 'choice',
            prompt: '70 = ___', en: 'seventy',
            options: [
              { text: 'setenta', correct: true },
              { text: 'sesenta', why: '<b>Sesenta</b> is 60 (the S of seis). 70 has the T of sie<b>t</b>e: <b>setenta</b>.' },
              { text: 'diecisiete', why: '<b>Diecisiete</b> is 17. 70 is <b>setenta</b>.' },
            ],
            explain: '<b>Setenta</b> (70) has the T of sie<b>t</b>e.',
            rule: 'Numbers · 60 or 70',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Cuánto ___ los colchones?', en: 'How much are the mattresses?',
            options: [
              { text: 'cuestan', correct: true },
              { text: 'cuesta', why: 'Mattresses are more than one, so: <b>cuestan</b>.' },
              { text: 'cuestas', why: '<b>Cuestas</b> would be "you cost". For things: <b>cuestan</b>.' },
            ],
            explain: 'More than one thing → <b>cuestan</b>.',
            rule: 'Prices · cuesta / cuestan',
          },
          {
            type: 'build',
            en: 'How much is the fridge?',
            answer: ['¿Cuánto', 'cuesta', 'el', 'refrigerador?'],
            extra: ['cuestan'],
            wrongWhy: { cuestan: 'One fridge, so <b>cuesta</b>. <b>Cuestan</b> is for more than one.' },
            explain: '<b>¿Cuánto cuesta…?</b> for one thing.',
            end: '',
            rule: 'Prices',
          },
          {
            type: 'choice',
            prompt: '120 = ___', en: 'one hundred twenty',
            options: [
              { text: 'ciento veinte', correct: true },
              { text: 'cien veinte', why: 'When more comes after it, 100 becomes <b>ciento</b>: <b>ciento veinte</b>.' },
              { text: 'ciento y veinte', why: 'No "y" after ciento: <b>ciento veinte</b>.' },
            ],
            explain: '100 + more → <b>ciento</b>. No "y": <b>ciento veinte</b>.',
            rule: 'Numbers · cien / ciento',
          },
          {
            type: 'choice', listen: true,
            say: 'setenta y cinco dólares',
            options: [
              { text: '$75', correct: true },
              { text: '$65', why: '$65 is <b>sesenta y cinco</b>. You heard <b>setenta</b>, with the T of siete: 75.' },
              { text: '$57', why: '$57 is <b>cincuenta y siete</b>. You heard <b>setenta y cinco</b>: 75.' },
            ],
            explain: '<b>Setenta</b> (70) + <b>cinco</b> (5) = 75.',
            rule: 'Numbers · 60 or 70',
          },
          {
            type: 'choice',
            prompt: '700 = ___', en: 'seven hundred',
            options: [
              { text: 'setecientos', correct: true },
              { text: 'sietecientos', why: 'Close! 700 drops the "i": <b>setecientos</b>.' },
              { text: 'setenta', why: '<b>Setenta</b> is 70. 700 is <b>setecientos</b>.' },
            ],
            explain: '700 is a rebel: <b>setecientos</b> (no "i").',
            rule: 'Numbers · rebels',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'La cotización es de ___ dólares.', en: 'The quote is for 300 dollars.',
            options: [
              { text: 'trescientos', correct: true },
              { text: 'treinta', why: '<b>Treinta</b> is 30. 300 is <b>trescientos</b>.' },
              { text: 'tres cien', why: 'Hundreds are one word: <b>trescientos</b>.' },
            ],
            explain: '300 = <b>trescientos</b>. <b>La cotización</b> = the quote.',
            rule: 'Numbers · hundreds',
          },
          {
            type: 'build',
            en: 'It costs one dollar.',
            answer: ['Cuesta', 'un', 'dólar'],
            extra: ['uno'],
            wrongWhy: { uno: 'Before a noun, <b>uno</b> becomes <b>un</b>: <b>un dólar</b>.' },
            explain: 'Before a noun, uno → <b>un</b>.',
            rule: 'Prices · uno → un',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice', listen: true,
            say: 'sesenta',
            options: [
              { text: '60', correct: true },
              { text: '70', why: '70 is <b>setenta</b>, with a T. You heard <b>sesenta</b>, with an S like seis: 60.' },
              { text: '16', why: '16 is <b>dieciséis</b>. You heard <b>sesenta</b>: 60.' },
            ],
            explain: '<b>Sesenta</b> = 60, the S of seis.',
            rule: 'Numbers · 60 or 70',
          },
          {
            type: 'choice',
            prompt: '14 = ___', en: 'fourteen',
            options: [
              { text: 'catorce', correct: true },
              { text: 'cuarenta', why: '<b>Cuarenta</b> is 40. 14 is <b>catorce</b>.' },
              { text: 'diecicuatro', why: 'Only 16 to 19 use dieci-. 14 is its own word: <b>catorce</b>.' },
            ],
            explain: '11 to 15 are their own words, all ending in -ce: <b>catorce</b>.',
            rule: 'Numbers · 0 to 15',
          },
          {
            type: 'choice',
            prompt: '45 = ___', en: 'forty-five',
            options: [
              { text: 'cuarenta y cinco', correct: true },
              { text: 'cuarentaicinco', why: 'From 31 on, it\'s three words: <b>cuarenta y cinco</b>.' },
              { text: 'catorce y cinco', why: '<b>Catorce</b> is 14. Forty is <b>cuarenta</b>: <b>cuarenta y cinco</b>.' },
            ],
            explain: '31 and up: tens + <b>y</b> + ones.',
            rule: 'Numbers · 30 to 99',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Las sillas ___ diez dólares cada una.', en: 'The chairs cost ten dollars each.',
            options: [
              { text: 'cuestan', correct: true },
              { text: 'cuesta', why: 'Chairs are more than one, so: <b>cuestan</b>.' },
              { text: 'son cuesta', why: 'Just one verb: <b>Las sillas cuestan diez dólares.</b>' },
            ],
            explain: 'More than one thing → <b>cuestan</b>.',
            rule: 'Prices · cuesta / cuestan',
          },
          {
            type: 'build',
            en: "It's eighty dollars in total.",
            answer: ['Son', 'ochenta', 'dólares', 'en', 'total'],
            extra: ['Es'],
            wrongWhy: { Es: 'Dollars are more than one, so <b>son</b>: <b>Son ochenta dólares</b>.' },
            explain: 'A total: <b>Son … dólares en total</b>.',
            rule: 'Prices · the total',
          },
          {
            type: 'choice', listen: true,
            say: 'doscientos cuarenta dólares',
            options: [
              { text: '$240', correct: true },
              { text: '$214', why: '$214 is <b>doscientos catorce</b>. You heard <b>cuarenta</b> (40): 240.' },
              { text: '$204', why: '$204 is <b>doscientos cuatro</b>. You heard <b>cuarenta</b> (40): 240.' },
            ],
            explain: '<b>Doscientos</b> (200) + <b>cuarenta</b> (40) = 240.',
            rule: 'Numbers · hundreds',
          },
          {
            type: 'choice',
            prompt: '900 = ___', en: 'nine hundred',
            options: [
              { text: 'novecientos', correct: true },
              { text: 'nuevecientos', why: 'Close! 900 is a rebel: <b>novecientos</b>.' },
              { text: 'noventa', why: '<b>Noventa</b> is 90. 900 is <b>novecientos</b>.' },
            ],
            explain: '900 is a rebel: <b>novecientos</b>.',
            rule: 'Numbers · rebels',
          },
          {
            type: 'choice',
            prompt: '1,000 = ___', en: 'one thousand',
            options: [
              { text: 'mil', correct: true },
              { text: 'un mil', why: 'No "un" before mil: just <b>mil</b>.' },
              { text: 'cien', why: '<b>Cien</b> is 100. 1,000 is <b>mil</b>.' },
            ],
            explain: '1,000 = <b>mil</b>. 2,000 = <b>dos mil</b>.',
            rule: 'Numbers · mil',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Son ___ dólares.', en: "That's thirty-one dollars.",
            options: [
              { text: 'treinta y un', correct: true },
              { text: 'treinta y uno', why: 'Before a noun like <b>dólares</b>, uno → <b>un</b>: <b>treinta y un dólares</b>.' },
              { text: 'trece y uno', why: '<b>Trece</b> is 13. Thirty is <b>treinta</b>: <b>treinta y un dólares</b>.' },
            ],
            explain: 'Before a noun, uno → un: <b>treinta y un dólares</b>.',
            rule: 'Prices · uno → un',
          },
          {
            type: 'build',
            en: 'How much are the boxes?',
            answer: ['¿Cuánto', 'cuestan', 'las', 'cajas?'],
            extra: ['cuesta'],
            wrongWhy: { cuesta: 'Boxes are more than one, so <b>cuestan</b>.' },
            explain: 'More than one thing → <b>cuestan</b>.',
            end: '',
            rule: 'Prices · cuesta / cuestan',
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
          title: 'What does it cost?',
          who: { name: 'Señor Gómez', emoji: '👨' },
          setup: 'Señor Gómez wants an old couch and a fridge gone. He wants prices before he says yes.',
          tips: [
            { mood: 3, text: 'He books the job and adds a $20 tip 💵' },
            { mood: 2, text: 'He books the job' },
            { mood: 1, text: '"Let me think about it…"' },
            { mood: 0, text: 'He calls another company 😬' },
          ],
          lines: [
            {
              them: 'Buenas tardes. ¿Cuánto cuesta llevar un sofá?',
              en: 'Good afternoon. How much does it cost to take a couch?',
              choices: [
                { es: 'Cuesta ochenta dólares.', en: 'It costs eighty dollars.', good: true,
                  note: '<b>Cuesta</b> for one thing. <b>Ochenta</b> = 80.' },
                { es: 'Cuestan ochenta dólares.', en: 'They cost eighty dollars.',
                  react: '¿"Cuestan"? Es un solo sofá. 🤔', reactEn: '"They cost"? It\'s just one couch.',
                  why: 'One couch → <b>cuesta</b>. <b>Cuestan</b> is for more than one thing.' },
                { es: 'Cuesta ocho dólares.', en: 'It costs eight dollars.',
                  react: '¿Ocho? ¡Qué barato! 😮', reactEn: 'Eight? That\'s cheap!',
                  why: '<b>Ocho</b> is 8. Eighty is <b>ochenta</b>.' },
              ],
            },
            {
              them: '¿Y el refrigerador?',
              en: 'And the fridge?',
              choices: [
                { es: 'El refrigerador cuesta sesenta dólares.', en: 'The fridge costs sixty dollars.', good: true,
                  note: '<b>Sesenta</b> = 60: the S of seis.' },
                { es: 'La refrigerador cuesta sesenta dólares.', en: 'The (girl) fridge costs sixty dollars.',
                  react: '¿"La" refrigerador? 🙃', reactEn: '"La" fridge?',
                  why: '<b>-or</b> words are boy words: <b>el refrigerador</b>.' },
                { es: 'El refrigerador cuesta seiscientos dólares.', en: 'The fridge costs six hundred dollars.',
                  react: '¡¿Seiscientos?! ¡Es más caro que un refrigerador nuevo! 😱', reactEn: 'Six HUNDRED?! That\'s more than a new fridge!',
                  why: '<b>Seiscientos</b> is 600. Sixty is <b>sesenta</b>.' },
              ],
            },
            {
              them: 'Entonces, ¿cuánto es en total?',
              en: 'So how much is it in total?',
              choices: [
                { es: 'Son ciento cuarenta dólares en total.', en: "It's a hundred forty dollars in total.", good: true,
                  note: '80 + 60 = 140: <b>ciento cuarenta</b>. A total in dollars uses <b>son</b>.' },
                { es: 'Son cien cuarenta dólares.', en: "It's a hundred forty dollars (wrong form).",
                  react: '¿Cien cuarenta? 🤔', reactEn: 'Hundred forty?',
                  why: 'With more after it, 100 becomes <b>ciento</b>: <b>ciento cuarenta</b>.' },
                { es: 'Son catorce dólares en total.', en: "It's fourteen dollars in total.",
                  react: '¿Catorce? ¿Seguro? 😅', reactEn: 'Fourteen? Are you sure?',
                  why: '<b>Catorce</b> is 14. 80 + 60 = 140: <b>ciento cuarenta</b>.' },
              ],
            },
            {
              them: 'Mmm, es un poco caro.',
              en: "Hmm, it's a little expensive.",
              choices: [
                { es: 'Le hago un descuento: ciento veinte dólares.', en: "I'll give you a discount: a hundred twenty dollars.", good: true,
                  note: '<b>Le hago un descuento</b> = I\'ll give you a discount (polite <b>le</b> for usted).' },
                { es: 'Le hago un descuento: ciento cincuenta dólares.', en: "I'll give you a discount: a hundred fifty dollars.",
                  react: '¿Un descuento… para subir el precio? 😂', reactEn: 'A discount… that raises the price?',
                  why: '150 is more than 140! A discount goes down: <b>ciento veinte</b> (120).' },
                { es: 'Sí, es caro.', en: 'Yes, it\'s expensive.',
                  react: 'Bueno… voy a llamar a otra compañía. 😕', reactEn: 'Well… I\'m going to call another company.',
                  why: 'Agreeing it\'s expensive loses the job. Offer a deal: <b>Le hago un descuento</b>.' },
              ],
            },
            {
              them: '¡Perfecto! ¿Aceptan tarjeta?',
              en: 'Perfect! Do you take cards?',
              choices: [
                { es: 'Sí, aceptamos tarjeta o efectivo.', en: 'Yes, we take card or cash.', good: true,
                  note: '<b>Aceptamos</b> = we accept. <b>Efectivo</b> = cash.' },
                { es: 'Sí, acepto tarjeta o efectivo.', en: 'Yes, I take card or cash.',
                  react: '¿Tú? ¿O la compañía? 🙂', reactEn: 'You? Or the company?',
                  why: 'Not wrong, but you speak for the company: <b>aceptamos</b> (we accept).' },
                { es: 'Sí, cuesta tarjeta.', en: 'Yes, it costs card.',
                  react: '¿Cuesta tarjeta? 🤨', reactEn: 'It costs card?',
                  why: '<b>Cuesta</b> is about price. "We accept" is <b>aceptamos</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer B ----------
        {
          type: 'talk',
          title: 'The tough bargainer',
          who: { name: 'Doña Carmen', emoji: '👵' },
          setup: 'Doña Carmen has three old mattresses and some boxes. She loves a good deal, and she will haggle.',
          tips: [
            { mood: 3, text: 'She books, and brings you tamales 🫔' },
            { mood: 2, text: 'She books the job' },
            { mood: 1, text: '"I\'ll ask my son…"' },
            { mood: 0, text: 'She hangs up on you 😬' },
          ],
          lines: [
            {
              them: 'Joven, ¿cuánto cuestan los colchones?',
              en: 'Young man, how much are the mattresses?',
              choices: [
                { es: 'Cuestan treinta dólares cada uno.', en: 'They cost thirty dollars each.', good: true,
                  note: 'More than one → <b>cuestan</b>. <b>Cada uno</b> = each.' },
                { es: 'Cuesta treinta dólares cada uno.', en: 'It costs thirty dollars each.',
                  react: '¿Cuesta? Son tres colchones, joven. 🤔', reactEn: 'It costs? There are three mattresses, young man.',
                  why: 'Mattresses are more than one: <b>cuestan</b>.' },
                { es: 'Cuestan trece dólares cada uno.', en: 'They cost thirteen dollars each.',
                  react: '¡Trece! ¡Qué bueno! Me llevo diez. 😂', reactEn: 'Thirteen! Great! I\'ll take ten.',
                  why: '<b>Trece</b> is 13. Thirty is <b>treinta</b>.' },
              ],
            },
            {
              them: '¿Treinta? ¡Es mucho! ¿Y las cajas?',
              en: 'Thirty? That\'s a lot! And the boxes?',
              choices: [
                { es: 'Las cajas cuestan quince dólares.', en: 'The boxes cost fifteen dollars.', good: true,
                  note: '<b>Quince</b> = 15. Short word, small number.' },
                { es: 'Las cajas cuestan cincuenta dólares.', en: 'The boxes cost fifty dollars.',
                  react: '¡¿Cincuenta?! ¡Ay, no! 😱', reactEn: 'FIFTY?! Oh no!',
                  why: 'Careful: <b>cincuenta</b> is 50. Fifteen is <b>quince</b>.' },
                { es: 'Los cajas cuestan quince dólares.', en: 'The (boy) boxes cost fifteen dollars.',
                  react: '¿"Los" cajas? 🙃', reactEn: '"Los" boxes?',
                  why: '<b>Caja</b> is a girl word: <b>las cajas</b>.' },
              ],
            },
            {
              them: 'Entonces… ¿cuánto es todo?',
              en: 'So… how much is everything?',
              choices: [
                { es: 'Son ciento cinco dólares.', en: "It's a hundred and five dollars.", good: true,
                  note: '3 × 30 = 90, + 15 = 105: <b>ciento cinco</b>.' },
                { es: 'Son cien cinco dólares.', en: "It's hundred five dollars (wrong form).",
                  react: '¿Cien cinco? 🤔', reactEn: 'Hundred five?',
                  why: 'With more after it, 100 becomes <b>ciento</b>: <b>ciento cinco</b>.' },
                { es: 'Son quinientos dólares.', en: "It's five hundred dollars.",
                  react: '¡¿Quinientos?! ¡Me va a dar un infarto! 😵', reactEn: 'FIVE HUNDRED?! I\'m going to have a heart attack!',
                  why: '<b>Quinientos</b> is 500. 105 is <b>ciento cinco</b>.' },
              ],
            },
            {
              them: '¿Me hace un descuento? Soy una señora mayor…',
              en: 'Will you give me a discount? I\'m an old lady…',
              choices: [
                { es: 'Claro, señora. Son noventa dólares.', en: 'Sure, ma\'am. It\'s ninety dollars.', good: true,
                  note: '<b>Noventa</b> = 90. <b>Claro</b> = sure, of course.' },
                { es: 'Claro, señora. Son nueve dólares.', en: 'Sure, ma\'am. It\'s nine dollars.',
                  react: '¡Nueve! ¡Eres un ángel! 😇', reactEn: 'Nine! You\'re an angel!',
                  why: '<b>Nueve</b> is 9. Your boss won\'t like that! Ninety is <b>noventa</b>.' },
                { es: 'Claro, señora. Son novecientos dólares.', en: 'Sure, ma\'am. It\'s nine hundred dollars.',
                  react: '¡¿Eso es un descuento?! 😠', reactEn: 'THAT\'s a discount?!',
                  why: '<b>Novecientos</b> is 900. Ninety is <b>noventa</b>.' },
              ],
            },
            {
              them: 'Bueno, está bien. ¿Le pago en efectivo?',
              en: 'Well, OK. Shall I pay you in cash?',
              choices: [
                { es: 'Sí, en efectivo está perfecto. Gracias, señora.', en: 'Yes, cash is perfect. Thank you, ma\'am.', good: true,
                  note: '<b>En efectivo</b> = in cash.' },
                { es: 'Sí, en tarjeta está perfecto.', en: 'Yes, card is perfect.',
                  react: 'Pero… yo dije efectivo. 🤨', reactEn: 'But… I said cash.',
                  why: 'She asked about <b>efectivo</b> (cash). Say yes to that: <b>en efectivo está perfecto</b>.' },
                { es: 'No, gracias.', en: 'No, thank you.',
                  react: '¿No quiere mi dinero? 😂', reactEn: 'You don\'t want my money?',
                  why: 'She\'s offering to pay! Say yes: <b>Sí, en efectivo está perfecto</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer C ----------
        {
          type: 'talk',
          title: 'The big cleanout',
          who: { name: 'Marcos', emoji: '🧑‍💼' },
          setup: 'Marcos manages an office that\'s closing. Lots of desks and chairs. He needs a quote for his boss.',
          tips: [
            { mood: 3, text: 'He books three more offices with you 🏢' },
            { mood: 2, text: 'He books the job' },
            { mood: 1, text: '"I\'ll email you…"' },
            { mood: 0, text: 'He picks another company 😬' },
          ],
          lines: [
            {
              them: 'Hola. Tenemos veinte escritorios. ¿Cuánto cuesta cada uno?',
              en: 'Hi. We have twenty desks. How much does each one cost?',
              choices: [
                { es: 'Cada escritorio cuesta veinticinco dólares.', en: 'Each desk costs twenty-five dollars.', good: true,
                  note: '<b>Veinticinco</b> = 25, one word. <b>Cada</b> = each, and it takes <b>cuesta</b>.' },
                { es: 'Cada escritorio cuesta veinte y cinco dólares.', en: 'Each desk costs twenty and five dollars.',
                  react: '¿Veinte y cinco? Ah, ¿veinticinco? 🙂', reactEn: 'Twenty and five? Oh, twenty-five?',
                  why: '21 to 29 are one word: <b>veinticinco</b>.' },
                { es: 'Cada escritorio cuesta doce dólares.', en: 'Each desk costs twelve dollars.',
                  react: '¿Doce? Muy barato… ¿seguro? 🤔', reactEn: 'Twelve? Very cheap… sure?',
                  why: '<b>Doce</b> is 12. Twenty-five is <b>veinticinco</b>.' },
              ],
            },
            {
              them: 'Veinte por veinticinco… son quinientos, ¿verdad?',
              en: 'Twenty times twenty-five… that\'s five hundred, right?',
              choices: [
                { es: 'Sí, son quinientos dólares.', en: 'Yes, it\'s five hundred dollars.', good: true,
                  note: '<b>Quinientos</b> = 500, one of the rebels.' },
                { es: 'Sí, son cincocientos dólares.', en: 'Yes, it\'s five hundred dollars (wrong form).',
                  react: '¿Cincocientos? 😅', reactEn: 'Five-hundred (wrong)?',
                  why: '500 is a rebel: <b>quinientos</b>.' },
                { es: 'Sí, son cincuenta dólares.', en: 'Yes, it\'s fifty dollars.',
                  react: '¿Cincuenta? Creo que no… 🤨', reactEn: 'Fifty? I don\'t think so…',
                  why: '<b>Cincuenta</b> is 50. 500 is <b>quinientos</b>.' },
              ],
            },
            {
              them: 'También hay setenta sillas.',
              en: 'There are also seventy chairs.',
              choices: [
                { es: '¿Setenta? Las sillas cuestan cinco dólares cada una.', en: 'Seventy? The chairs cost five dollars each.', good: true,
                  note: '<b>Setenta</b> = 70. <b>Cada una</b> for a girl word (la silla).' },
                { es: '¿Sesenta? Las sillas cuestan cinco dólares cada una.', en: 'Sixty? The chairs cost five dollars each.',
                  react: 'No, setenta. Siete, cero. 🙂', reactEn: 'No, seventy. Seven, zero.',
                  why: 'He said <b>setenta</b> (70, the T of siete). <b>Sesenta</b> is 60.' },
                { es: '¿Setenta? Las sillas cuesta cinco dólares.', en: 'Seventy? The chairs costs five dollars.',
                  react: '"Las sillas cuesta"… 🤔', reactEn: '"The chairs costs"…',
                  why: 'Chairs are more than one: <b>cuestan</b>.' },
              ],
            },
            {
              them: 'Setenta por cinco, trescientos cincuenta. ¿Y el total?',
              en: 'Seventy times five, three hundred fifty. And the total?',
              choices: [
                { es: 'Son ochocientos cincuenta dólares en total.', en: "It's eight hundred fifty dollars in total.", good: true,
                  note: '500 + 350 = 850: <b>ochocientos cincuenta</b>.' },
                { es: 'Son ochenta y cinco dólares en total.', en: "It's eighty-five dollars in total.",
                  react: '¿Ochenta y cinco? ¡Falta un cero! 😂', reactEn: 'Eighty-five? You\'re missing a zero!',
                  why: '85 is <b>ochenta y cinco</b>. 850 is <b>ochocientos cincuenta</b>.' },
                { es: 'Es ochocientos cincuenta dólares.', en: "It's eight hundred fifty dollars (singular verb).",
                  react: 'Ok… ¿"es" o "son"? 🙂', reactEn: 'OK… "es" or "son"?',
                  why: 'Dollars are more than one: <b>Son</b> ochocientos cincuenta dólares.' },
              ],
            },
            {
              them: 'Perfecto. ¿Me manda la cotización por correo?',
              en: 'Perfect. Can you send me the quote by email?',
              choices: [
                { es: 'Claro, le mando la cotización hoy.', en: "Sure, I'll send you the quote today.", good: true,
                  note: '<b>Le mando</b> = I\'ll send you (polite). <b>La cotización</b> = the quote.' },
                { es: 'Claro, me manda la cotización hoy.', en: 'Sure, you send me the quote today.',
                  react: '¿Yo le mando la cotización a usted? 😂', reactEn: 'I send YOU the quote?',
                  why: '<b>Me manda</b> = you send me. You\'re sending it to him: <b>le mando</b>.' },
                { es: 'Claro, cuesta la cotización.', en: 'Sure, the quote costs.',
                  react: '¿La cotización cuesta? 🤨', reactEn: 'The quote costs money?',
                  why: 'He asked you to send it. Say: <b>Le mando la cotización</b>.' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
