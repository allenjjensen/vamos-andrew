// Lesson: What day works? Days, months and dates.
// Unit 2 (Booking jobs). Ends with a customer picking a day for the pickup.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 'dates-1',
  unit: 'Booking jobs',
  title: 'What day works?',
  subtitle: 'Days, months and dates',
  minutes: 10,
  terms: ['noun', 'preposition'],

  recap: `<p>Days and months have <b>no capital letters</b>: <b>el lunes, en mayo</b>.</p>
    <p>"On Monday" = <b>el lunes</b> (no "en"). "On Mondays" (every week) = <b>los lunes</b>.</p>
    <p>A date: <b>el + number + de + month</b>: <b>el diez de junio</b>. The 1st: <b>el primero</b>.</p>
    <p><b>Hoy</b> today · <b>mañana</b> tomorrow · <b>pasado mañana</b> the day after · <b>la próxima semana</b> next week.</p>`,

  phrases: [
    { es: '¿Qué día le queda bien?', en: 'What day works for you?' },
    { es: '¿Le queda bien el martes?', en: 'Does Tuesday work for you?' },
    { es: 'Vamos el sábado en la mañana.', en: "We'll come Saturday morning." },
    { es: 'Me mudo el treinta de junio.', en: "I'm moving on June 30th." },
    { es: 'Trabajamos de lunes a sábado.', en: 'We work Monday through Saturday.' },
    { es: 'Le confirmo mañana.', en: "I'll confirm with you tomorrow." },
  ],

  steps: [
    {
      type: 'intro',
      emoji: '📅',
      title: 'What day works?',
      learn: [
        'The days of the week and the months',
        'How to say a date: el cinco de mayo',
        'Today, tomorrow, next week, and "what day works for you?"',
      ],
    },

    // ---------- warm-up ----------
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'Vamos ___ lunes.', en: "We're coming on Monday.",
      options: [
        { text: 'el', correct: true },
        { text: 'en', why: '"On Monday" is just <b>el lunes</b>. Spanish doesn\'t use "en" with days.' },
      ],
      explain: 'On Monday = <b>el lunes</b>.',
      rule: 'Days · on Monday',
    },
    {
      type: 'choice', warmup: true, kicker: 'Quick check: no pressure',
      prompt: 'Hoy es ___.', en: 'Today is Friday.',
      options: [
        { text: 'viernes', correct: true },
        { text: 'Viernes', why: 'Days have <b>no capital letter</b> in Spanish: <b>viernes</b>.' },
        { text: 'martes', why: '<b>Martes</b> is Tuesday. Friday is <b>viernes</b>.' },
      ],
      explain: 'Friday = <b>viernes</b>, lowercase.',
      rule: 'Days',
    },
    {
      type: 'warmupResult',
      all: '¡Excelente! Now let\'s add months and dates, so you can book any job.',
      some: 'Good start. Two small rules make dates easy.',
      none: 'No worries. Dates follow a simple pattern, coming up next.',
    },

    // ---------- teaching ----------
    {
      type: 'teach', kicker: 'Los días',
      title: 'The days of the week',
      rows: [
        { tag: 'Mon', es: 'lunes', en: 'Monday (Luna, the moon)' },
        { tag: 'Tue', es: 'martes', en: 'Tuesday (Marte, Mars)' },
        { tag: 'Wed', es: 'miércoles', en: 'Wednesday (Mercurio)' },
        { tag: 'Thu', es: 'jueves', en: 'Thursday (Júpiter)' },
        { tag: 'Fri', es: 'viernes', en: 'Friday (Venus)' },
        { tag: 'Sat · Sun', es: 'sábado · domingo', en: 'Saturday, Sunday' },
      ],
      trick: 'Monday to Friday are named after the moon and planets, and all end in <b>-es</b>. The weekend is different: <b>sábado</b> and <b>domingo</b>. No capital letters!',
    },
    {
      type: 'teach', kicker: 'Using days',
      title: 'On Monday, on Mondays',
      rows: [
        { es: 'Vamos el lunes.', en: "We're coming on Monday. (this Monday)" },
        { es: 'Trabajo los sábados.', en: 'I work on Saturdays. (every week)' },
        { es: 'de lunes a viernes', en: 'Monday through Friday' },
        { es: 'el fin de semana', en: 'the weekend' },
      ],
      trick: '<b>No "en" with days.</b> One day: <b>el lunes</b>. Every week: <b>los lunes</b>. Sábado and domingo add -s: <b>los sábados, los domingos</b>.',
    },
    {
      type: 'teach', kicker: 'Los meses',
      title: 'The months',
      rows: [
        { tag: '1–3', es: 'enero · febrero · marzo', en: 'January, February, March' },
        { tag: '4–6', es: 'abril · mayo · junio', en: 'April, May, June' },
        { tag: '7–9', es: 'julio · agosto · septiembre', en: 'July, August, September' },
        { tag: '10–12', es: 'octubre · noviembre · diciembre', en: 'October, November, December' },
      ],
      trick: 'Most months look like English with a Spanish ending. Watch out for <b>enero</b> (January) and the twins <b>junio / julio</b>: ju<b>n</b>io is Ju<b>n</b>e, ju<b>l</b>io is Ju<b>l</b>y. No capital letters!',
    },
    {
      type: 'teach', kicker: 'Dates',
      title: 'el + number + de + month',
      rows: [
        { es: 'el cinco de mayo', en: 'May 5th' },
        { es: 'el veinte de junio', en: 'June 20th' },
        { es: 'el primero de julio', en: 'July 1st' },
        { es: 'el martes tres de marzo', en: 'Tuesday, March 3rd' },
      ],
      trick: 'Spanish says the <b>day first</b>, then the month, like "the fifth of May". The first of the month is <b>el primero</b>; every other day is a normal number.',
    },
    {
      type: 'teach', kicker: 'On the job',
      title: 'When?',
      rows: [
        { es: 'hoy · mañana · pasado mañana', en: 'today · tomorrow · the day after tomorrow' },
        { es: 'esta semana · la próxima semana', en: 'this week · next week' },
        { es: '¿Qué día le queda bien?', en: 'What day works for you?' },
        { es: '¿Le queda bien el jueves?', en: 'Does Thursday work for you?' },
        { es: 'mañana en la mañana', en: 'tomorrow morning' },
      ],
      trick: '<b>Mañana</b> = tomorrow AND morning. <b>Mañana en la mañana</b> = tomorrow morning. And <b>¿Le queda bien…?</b> is the polite way to check a day with a customer.',
    },

    // ---------- practice ----------
    {
      type: 'practice',
      sets: [
        // ---------- Set A ----------
        [
          {
            type: 'choice',
            prompt: 'Hoy es ___.', en: 'Today is Wednesday.',
            options: [
              { text: 'miércoles', correct: true },
              { text: 'martes', why: '<b>Martes</b> is Tuesday. Wednesday is <b>miércoles</b> (Mercury).' },
              { text: 'jueves', why: '<b>Jueves</b> is Thursday. Wednesday is <b>miércoles</b>.' },
            ],
            explain: 'Wednesday = <b>miércoles</b>.',
            rule: 'Days',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Vamos ___ sábado.', en: "We're coming on Saturday.",
            options: [
              { text: 'el', correct: true },
              { text: 'en el', why: 'No "en" with days: just <b>el sábado</b>.' },
              { text: 'los', why: '<b>Los sábados</b> means every Saturday. This Saturday: <b>el sábado</b>.' },
            ],
            explain: 'On Saturday (once) = <b>el sábado</b>.',
            rule: 'Days · on Monday',
          },
          {
            type: 'choice', listen: true,
            say: 'el cinco de mayo',
            options: [
              { text: 'May 5', correct: true },
              { text: 'May 15', why: '15 would be <b>quince</b>. You heard <b>cinco</b>: 5.' },
              { text: 'March 5', why: 'March is <b>marzo</b>. You heard <b>mayo</b>: May.' },
            ],
            explain: '<b>El cinco de mayo</b> = May 5th.',
            rule: 'Dates',
          },
          {
            type: 'choice',
            prompt: 'La cita es el diez de ___.', en: 'The appointment is on June 10th.',
            options: [
              { text: 'junio', correct: true },
              { text: 'julio', why: '<b>Julio</b> is July. June is <b>junio</b>.' },
              { text: 'Junio', why: 'Months have no capital letter: <b>junio</b>.' },
            ],
            explain: 'June = <b>junio</b>, lowercase.',
            rule: 'Months',
          },
          {
            type: 'build',
            en: 'What day works for you?',
            answer: ['¿Qué', 'día', 'le', 'queda', 'bien?'],
            extra: ['es'],
            wrongWhy: { es: 'The phrase is <b>¿Qué día le queda bien?</b> (What day suits you?)' },
            explain: '<b>¿Qué día le queda bien?</b> = What day works for you? (polite)',
            end: '',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'Trabajo ___ domingos.', en: 'I work on Sundays (every week).',
            options: [
              { text: 'los', correct: true },
              { text: 'el', why: '<b>El domingo</b> is one Sunday. Every Sunday: <b>los domingos</b>.' },
              { text: 'en', why: 'No "en" with days: <b>los domingos</b>.' },
            ],
            explain: 'Every week = <b>los</b> + day.',
            rule: 'Days · every week',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Vamos ___.', en: "We're coming the day after tomorrow.",
            options: [
              { text: 'pasado mañana', correct: true },
              { text: 'mañana', why: '<b>Mañana</b> is tomorrow. The day after is <b>pasado mañana</b>.' },
              { text: 'ayer', why: '<b>Ayer</b> is yesterday! The day after tomorrow is <b>pasado mañana</b>.' },
            ],
            explain: 'The day after tomorrow = <b>pasado mañana</b>.',
            rule: 'When',
          },
          {
            type: 'choice',
            prompt: 'Me mudo ___ de julio.', en: "I'm moving on July 1st.",
            options: [
              { text: 'el primero', correct: true },
              { text: 'el uno', why: 'Most of Latin America says <b>el primero</b> for the 1st. (Some places say el uno, but primero is safest.)' },
              { text: 'en el primero', why: 'No "en" with dates: <b>el primero de julio</b>.' },
            ],
            explain: 'The 1st = <b>el primero</b>.',
            rule: 'Dates · el primero',
          },
          {
            type: 'build',
            en: "We're coming on Thursday.",
            answer: ['Vamos', 'el', 'jueves'],
            extra: ['en'],
            wrongWhy: { en: 'No "en" with days: <b>el jueves</b>.' },
            explain: 'On Thursday = <b>el jueves</b>.',
            rule: 'Days · on Monday',
          },
          {
            type: 'choice',
            prompt: 'Mi cumpleaños es en ___.', en: 'My birthday is in January.',
            options: [
              { text: 'enero', correct: true },
              { text: 'junio', why: '<b>Junio</b> is June. January is <b>enero</b>.' },
              { text: 'febrero', why: '<b>Febrero</b> is February. January is <b>enero</b>.' },
            ],
            explain: 'January = <b>enero</b>. ("In" a month does use <b>en</b>.)',
            rule: 'Months',
          },
        ],

        // ---------- Set B ----------
        [
          {
            type: 'choice',
            prompt: 'Mañana es ___.', en: 'Tomorrow is Thursday.',
            options: [
              { text: 'jueves', correct: true },
              { text: 'miércoles', why: '<b>Miércoles</b> is Wednesday. Thursday is <b>jueves</b> (Jupiter).' },
              { text: 'viernes', why: '<b>Viernes</b> is Friday. Thursday is <b>jueves</b>.' },
            ],
            explain: 'Thursday = <b>jueves</b>.',
            rule: 'Days',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: '¿Le queda bien ___ martes?', en: 'Does Tuesday work for you?',
            options: [
              { text: 'el', correct: true },
              { text: 'en', why: 'No "en" with days: <b>el martes</b>.' },
              { text: 'la', why: 'Days are boy words: <b>el martes</b>.' },
            ],
            explain: 'Days are boy words: <b>el martes</b>.',
            rule: 'Days · on Monday',
          },
          {
            type: 'choice', listen: true,
            say: 'el veinte de agosto',
            options: [
              { text: 'August 20', correct: true },
              { text: 'August 12', why: '12 is <b>doce</b>. You heard <b>veinte</b>: 20.' },
              { text: 'April 20', why: 'April is <b>abril</b>. You heard <b>agosto</b>: August.' },
            ],
            explain: '<b>El veinte de agosto</b> = August 20th.',
            rule: 'Dates',
          },
          {
            type: 'choice',
            prompt: 'La cita es ___.', en: 'The appointment is on March 3rd.',
            options: [
              { text: 'el tres de marzo', correct: true },
              { text: 'el marzo tres', why: 'Spanish puts the day first: <b>el tres de marzo</b>.' },
              { text: 'en tres de marzo', why: 'Dates start with <b>el</b>, no "en": <b>el tres de marzo</b>.' },
            ],
            explain: 'el + number + <b>de</b> + month.',
            rule: 'Dates',
          },
          {
            type: 'build',
            en: "We'll come next week.",
            answer: ['Vamos', 'la', 'próxima', 'semana'],
            extra: ['en'],
            wrongWhy: { en: 'No "en" here: <b>la próxima semana</b>.' },
            explain: 'Next week = <b>la próxima semana</b>.',
            rule: 'When',
          },
          {
            type: 'choice',
            prompt: 'Trabajamos de lunes ___ viernes.', en: 'We work Monday through Friday.',
            options: [
              { text: 'a', correct: true },
              { text: 'y', why: '"Through" is <b>a</b>: <b>de lunes a viernes</b> (from Monday to Friday).' },
              { text: 'en', why: '"From… to…" is <b>de… a…</b>: <b>de lunes a viernes</b>.' },
            ],
            explain: 'From… to… = <b>de… a…</b>',
            rule: 'Days · de… a…',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Vamos mañana en la ___.', en: "We're coming tomorrow morning.",
            options: [
              { text: 'mañana', correct: true },
              { text: 'tarde', why: '<b>En la tarde</b> is the afternoon. Morning is <b>en la mañana</b>.' },
              { text: 'noche', why: '<b>En la noche</b> is at night. Morning is <b>en la mañana</b>.' },
            ],
            explain: 'Tomorrow morning = <b>mañana en la mañana</b>. Two mañanas!',
            rule: 'When',
          },
          {
            type: 'choice',
            prompt: 'El primer día del año es el primero de ___.', en: 'The first day of the year is January 1st.',
            options: [
              { text: 'enero', correct: true },
              { text: 'diciembre', why: '<b>Diciembre</b> is December, the last month. January is <b>enero</b>.' },
              { text: 'Enero', why: 'Months are lowercase: <b>enero</b>.' },
            ],
            explain: 'January 1st = <b>el primero de enero</b>.',
            rule: 'Months',
          },
          {
            type: 'build',
            en: "I'm moving on June 30th.",
            answer: ['Me', 'mudo', 'el', 'treinta', 'de', 'junio'],
            extra: ['julio'],
            wrongWhy: { julio: '<b>Julio</b> is July. June is <b>junio</b>.' },
            explain: '<b>Me mudo</b> = I\'m moving. <b>El treinta de junio</b> = June 30th.',
            rule: 'Dates',
          },
          {
            type: 'choice',
            prompt: 'Hoy es ___ catorce de febrero.', en: 'Today is Friday, February 14th.',
            options: [
              { text: 'viernes', correct: true },
              { text: 'en viernes', why: 'No "en" with days: <b>Hoy es viernes catorce de febrero.</b>' },
              { text: 'Viernes', why: 'Days have no capital letter: <b>viernes</b>.' },
            ],
            explain: 'After <b>hoy es</b>, just the day: <b>Hoy es viernes</b>.',
            rule: 'Days',
          },
        ],

        // ---------- Set C ----------
        [
          {
            type: 'choice',
            prompt: 'El ___ no trabajo.', en: "On Sunday I don't work.",
            options: [
              { text: 'domingo', correct: true },
              { text: 'sábado', why: '<b>Sábado</b> is Saturday. Sunday is <b>domingo</b>.' },
              { text: 'lunes', why: '<b>Lunes</b> is Monday. Sunday is <b>domingo</b>.' },
            ],
            explain: 'Sunday = <b>domingo</b>.',
            rule: 'Days',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'No trabajamos ___ domingo.', en: "We don't work on Sunday.",
            options: [
              { text: 'el', correct: true },
              { text: 'en', why: 'No "en" with days: <b>el domingo</b>.' },
              { text: 'en el', why: 'No "en" with days: just <b>el domingo</b>.' },
            ],
            explain: 'On Sunday = <b>el domingo</b>.',
            rule: 'Days · on Monday',
          },
          {
            type: 'choice', listen: true,
            say: 'el primero de octubre',
            options: [
              { text: 'October 1', correct: true },
              { text: 'October 8', why: '8 is <b>ocho</b>. <b>Primero</b> is the 1st.' },
              { text: 'August 1', why: 'August is <b>agosto</b>. You heard <b>octubre</b>: October.' },
            ],
            explain: '<b>El primero de octubre</b> = October 1st.',
            rule: 'Dates · el primero',
          },
          {
            type: 'choice',
            prompt: 'Me voy de vacaciones en ___.', en: "I'm going on vacation in July.",
            options: [
              { text: 'julio', correct: true },
              { text: 'junio', why: '<b>Junio</b> is June. July is <b>julio</b>.' },
              { text: 'abril', why: '<b>Abril</b> is April. July is <b>julio</b>.' },
            ],
            explain: 'July = <b>julio</b>.',
            rule: 'Months',
          },
          {
            type: 'build',
            en: 'Does Friday work for you?',
            answer: ['¿Le', 'queda', 'bien', 'el', 'viernes?'],
            extra: ['en'],
            wrongWhy: { en: 'No "en" with days: <b>el viernes</b>.' },
            explain: '<b>¿Le queda bien…?</b> = Does … work for you? (polite)',
            end: '',
            rule: 'On the job',
          },
          {
            type: 'choice',
            prompt: 'La mudanza es ___.', en: 'The move is on September 15th.',
            options: [
              { text: 'el quince de septiembre', correct: true },
              { text: 'el septiembre quince', why: 'Day first: <b>el quince de septiembre</b>.' },
              { text: 'el cincuenta de septiembre', why: '<b>Cincuenta</b> is 50! Fifteen is <b>quince</b>.' },
            ],
            explain: 'el + <b>quince</b> + de + <b>septiembre</b>.',
            rule: 'Dates',
          },
          {
            type: 'choice', kicker: 'On the job',
            prompt: 'Le confirmo ___.', en: "I'll confirm with you tomorrow.",
            options: [
              { text: 'mañana', correct: true },
              { text: 'ayer', why: '<b>Ayer</b> is yesterday. Tomorrow is <b>mañana</b>.' },
              { text: 'hoy', why: '<b>Hoy</b> is today. Tomorrow is <b>mañana</b>.' },
            ],
            explain: 'Tomorrow = <b>mañana</b>.',
            rule: 'When',
          },
          {
            type: 'choice',
            prompt: 'Vamos ___ fin de semana.', en: "We're coming on the weekend.",
            options: [
              { text: 'el', correct: true },
              { text: 'en', why: 'Like days, no "en": <b>el fin de semana</b>.' },
              { text: 'la', why: '<b>Fin</b> is a boy word: <b>el fin de semana</b>.' },
            ],
            explain: 'On the weekend = <b>el fin de semana</b>.',
            rule: 'Days · on Monday',
          },
          {
            type: 'build',
            en: 'We work on Saturdays.',
            answer: ['Trabajamos', 'los', 'sábados'],
            extra: ['el'],
            wrongWhy: { el: 'Every Saturday is plural: <b>los sábados</b>.' },
            explain: 'Every week = <b>los sábados</b>.',
            rule: 'Days · every week',
          },
          {
            type: 'choice',
            prompt: 'Diciembre es el mes ___.', en: 'December is month number twelve.',
            options: [
              { text: 'doce', correct: true },
              { text: 'dos', why: '<b>Dos</b> is 2 (February). December is <b>doce</b>.' },
              { text: 'diez', why: '<b>Diez</b> is 10 (October). December is <b>doce</b>.' },
            ],
            explain: 'December is month <b>doce</b> (12).',
            rule: 'Months',
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
          title: 'Picking a day',
          who: { name: 'Señor Vargas', emoji: '👨‍🦳' },
          setup: 'Señor Vargas is cleaning out his late mother\'s house. He needs a day that works for the whole family.',
          tips: [
            { mood: 3, text: 'He thanks you warmly and tips $30 🙏' },
            { mood: 2, text: 'He books the job' },
            { mood: 1, text: '"I\'ll call you back…"' },
            { mood: 0, text: 'He books someone else 😬' },
          ],
          lines: [
            {
              them: 'Buenos días. ¿Qué día pueden venir?',
              en: 'Good morning. What day can you come?',
              choices: [
                { es: '¿Le queda bien el jueves?', en: 'Does Thursday work for you?', good: true,
                  note: '<b>¿Le queda bien…?</b> = Does … work for you? Polite and friendly.' },
                { es: '¿Le queda bien en jueves?', en: 'Does "in Thursday" work?',
                  react: '¿"En jueves"? Ah, el jueves. 🙂', reactEn: '"In Thursday"? Oh, Thursday.',
                  why: 'No "en" with days: <b>el jueves</b>.' },
                { es: '¿Le quedan bien los jueves?', en: 'Do Thursdays work for you?',
                  react: '¿Todos los jueves? Solo es un día. 🙂', reactEn: 'Every Thursday? It\'s just one day.',
                  why: '<b>Los jueves</b> = every Thursday. One day: <b>el jueves</b>.' },
              ],
            },
            {
              them: 'El jueves no puedo. ¿Y el fin de semana?',
              en: 'Thursday I can\'t. And the weekend?',
              choices: [
                { es: 'Sí, el sábado en la mañana.', en: 'Yes, Saturday morning.', good: true,
                  note: '<b>El sábado en la mañana</b> = Saturday morning.' },
                { es: 'Sí, el domingo en la mañana.', en: 'Yes, Sunday morning.',
                  react: 'Perfecto… pero ¿ustedes trabajan los domingos? 🤔', reactEn: 'Perfect… but do you work on Sundays?',
                  why: 'Your company doesn\'t work Sundays! Offer <b>el sábado</b>.' },
                { es: 'Sí, los sábados en la mañana.', en: 'Yes, on Saturdays in the morning.',
                  react: '¿Todos los sábados? Solo necesito uno. 😅', reactEn: 'Every Saturday? I just need one.',
                  why: '<b>Los sábados</b> = every Saturday. One day: <b>el sábado</b>.' },
              ],
            },
            {
              them: '¿Qué fecha es el sábado?',
              en: 'What\'s the date on Saturday?',
              choices: [
                { es: 'Es el doce de abril.', en: 'It\'s April 12th.', good: true,
                  note: 'el + number + de + month: <b>el doce de abril</b>.' },
                { es: 'Es el abril doce.', en: 'It\'s April twelve.',
                  react: '¿El abril doce? 🤔', reactEn: 'The April twelve?',
                  why: 'Day first: <b>el doce de abril</b>.' },
                { es: 'Es el doce de agosto.', en: 'It\'s August 12th.',
                  react: '¿Agosto? ¡Pero estamos en abril! 😅', reactEn: 'August? But it\'s April!',
                  why: '<b>Agosto</b> is August. April is <b>abril</b>.' },
              ],
            },
            {
              them: 'Muy bien. ¿Y a qué hora?',
              en: 'Very good. And what time?',
              choices: [
                { es: 'A las nueve. ¿Le queda bien?', en: 'At nine. Does that work for you?', good: true,
                  note: '<b>A las nueve</b> = at nine. Checking with <b>¿Le queda bien?</b> is extra polite.' },
                { es: 'Son las nueve.', en: 'It\'s nine o\'clock.',
                  react: '¿Ahora? No, son las diez. 🙂', reactEn: 'Now? No, it\'s ten.',
                  why: 'To set a time: <b>a las nueve</b>. (<b>Son las nueve</b> = it\'s nine now.)' },
                { es: 'En las nueve.', en: 'In the nine.',
                  react: '¿"En las nueve"? 🤔', reactEn: '"In the nine"?',
                  why: '"At" a time is <b>a</b>: <b>a las nueve</b>.' },
              ],
            },
            {
              them: 'Sí, perfecto. Nos vemos el sábado.',
              en: 'Yes, perfect. See you Saturday.',
              choices: [
                { es: 'Perfecto. Le confirmo el viernes. ¡Que tenga buen día!', en: 'Perfect. I\'ll confirm on Friday. Have a good day!', good: true,
                  note: '<b>Le confirmo</b> = I\'ll confirm with you. Calling the day before is pro.' },
                { es: 'Perfecto. Nos vemos el lunes.', en: 'Perfect. See you Monday.',
                  react: '¿El lunes? ¡Dijimos el sábado! 😟', reactEn: 'Monday? We said Saturday!',
                  why: 'You agreed on <b>el sábado</b>. Don\'t confuse the customer!' },
                { es: 'Perfecto. Nos vemos ayer.', en: 'Perfect. See you yesterday.',
                  react: '¿Ayer? 😂', reactEn: 'Yesterday?',
                  why: '<b>Ayer</b> = yesterday. Use <b>el sábado</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer B ----------
        {
          type: 'talk',
          title: 'Moving day',
          who: { name: 'Valeria', emoji: '👩‍🦱' },
          setup: 'Valeria is moving to another state. Everything she isn\'t taking has to go before her lease ends.',
          tips: [
            { mood: 3, text: 'She gives you her old TV for free 📺' },
            { mood: 2, text: 'She books the job' },
            { mood: 1, text: 'She\'s stressed, but books' },
            { mood: 0, text: 'She panics and hangs up 😬' },
          ],
          lines: [
            {
              them: 'Hola. Me mudo el treinta de junio. ¿Pueden venir antes?',
              en: 'Hi. I\'m moving on June 30th. Can you come before?',
              choices: [
                { es: 'Claro. ¿El veintiocho de junio?', en: 'Sure. June 28th?', good: true,
                  note: '<b>El veintiocho de junio</b>: two days before the move.' },
                { es: 'Claro. ¿El veintiocho de julio?', en: 'Sure. July 28th?',
                  react: '¡¿Julio?! ¡Ya no voy a estar aquí! 😱', reactEn: 'JULY?! I won\'t be here anymore!',
                  why: '<b>Julio</b> is July, after the move. June is <b>junio</b>.' },
                { es: 'Claro. ¿En veintiocho de junio?', en: 'Sure. In June 28th?',
                  react: '¿"En veintiocho"? 🤔', reactEn: '"In twenty-eight"?',
                  why: 'Dates use <b>el</b>, not en: <b>el veintiocho de junio</b>.' },
              ],
            },
            {
              them: 'El veintiocho es miércoles, ¿verdad?',
              en: 'The 28th is a Wednesday, right?',
              choices: [
                { es: 'Sí, es miércoles.', en: 'Yes, it\'s Wednesday.', good: true,
                  note: '<b>Miércoles</b> = Wednesday (Mercury).' },
                { es: 'Sí, es jueves.', en: 'Yes, it\'s Thursday.',
                  react: '¿Jueves? Yo creo que es miércoles. 🤔', reactEn: 'Thursday? I think it\'s Wednesday.',
                  why: '<b>Jueves</b> is Thursday. She said <b>miércoles</b> (Wednesday).' },
                { es: 'Sí, es mañana.', en: 'Yes, it\'s tomorrow.',
                  react: '¿Mañana? Hoy es el diez… 🤔', reactEn: 'Tomorrow? Today is the 10th…',
                  why: '<b>Mañana</b> = tomorrow. Agree with her: <b>Sí, es miércoles</b>.' },
              ],
            },
            {
              them: 'Uy, el miércoles trabajo. ¿Y el martes?',
              en: 'Oh, Wednesday I work. What about Tuesday?',
              choices: [
                { es: 'Sí, el martes veintisiete está bien.', en: 'Yes, Tuesday the 27th is fine.', good: true,
                  note: '<b>El martes veintisiete</b>: day name + number.' },
                { es: 'Sí, el martes diecisiete está bien.', en: 'Yes, Tuesday the 17th is fine.',
                  react: '¿Diecisiete? Eso es la otra semana. 🤔', reactEn: 'The 17th? That\'s a different week.',
                  why: 'Tuesday before the 28th is the <b>veintisiete</b> (27). <b>Diecisiete</b> is 17.' },
                { es: 'Sí, los martes están bien.', en: 'Yes, Tuesdays are fine.',
                  react: '¿Todos los martes? Solo es una vez. 😅', reactEn: 'Every Tuesday? It\'s just once.',
                  why: '<b>Los martes</b> = every Tuesday. One Tuesday: <b>el martes</b>.' },
              ],
            },
            {
              them: '¿Puede venir pasado mañana a ver las cosas? Así me da un precio.',
              en: 'Can you come the day after tomorrow to look at the stuff? That way you can give me a price.',
              choices: [
                { es: 'Sí, pasado mañana en la tarde.', en: 'Yes, the day after tomorrow in the afternoon.', good: true,
                  note: '<b>Pasado mañana</b> = the day after tomorrow. <b>En la tarde</b> = in the afternoon.' },
                { es: 'Sí, ayer en la tarde.', en: 'Yes, yesterday afternoon.',
                  react: '¿Ayer? ¡No tengo máquina del tiempo! 😂', reactEn: 'Yesterday? I don\'t have a time machine!',
                  why: '<b>Ayer</b> = yesterday. The day after tomorrow is <b>pasado mañana</b>.' },
                { es: 'Sí, mañana en la mañana.', en: 'Yes, tomorrow morning.',
                  react: 'Mañana… bueno, también está bien. 🙂', reactEn: 'Tomorrow… well, that works too.',
                  why: 'Not bad, but she asked about <b>pasado mañana</b> (the day after tomorrow).' },
              ],
            },
            {
              them: '¡Gracias! Me siento mucho mejor.',
              en: 'Thanks! I feel much better.',
              choices: [
                { es: 'Con gusto. Le confirmo el lunes.', en: 'My pleasure. I\'ll confirm with you on Monday.', good: true,
                  note: '<b>Con gusto</b> = my pleasure. <b>Le confirmo</b> = I\'ll confirm with you.' },
                { es: 'Con gusto. Le confirmo en lunes.', en: 'My pleasure. I\'ll confirm "in Monday".',
                  react: '¿"En lunes"? 🙂', reactEn: '"In Monday"?',
                  why: 'No "en" with days: <b>el lunes</b>.' },
                { es: 'De nada. Adiós.', en: 'You\'re welcome. Bye.',
                  react: 'Ok… ¿me van a llamar? 😕', reactEn: 'OK… are you going to call me?',
                  why: 'A stressed customer likes to know what\'s next: <b>Le confirmo el lunes</b>.' },
              ],
            },
          ],
        },

        // ---------- Customer C ----------
        {
          type: 'talk',
          title: 'Every month',
          who: { name: 'Señora Ortiz', emoji: '👩‍💼' },
          setup: 'Señora Ortiz runs an apartment building. She wants a regular pickup for the trash tenants leave behind. A big repeat customer!',
          tips: [
            { mood: 3, text: 'She signs a one-year contract 📝' },
            { mood: 2, text: 'She signs up for three months' },
            { mood: 1, text: '"Send me the information…"' },
            { mood: 0, text: 'She picks another company 😬' },
          ],
          lines: [
            {
              them: 'Necesito una recogida cada mes. ¿Qué días trabajan?',
              en: 'I need a pickup every month. What days do you work?',
              choices: [
                { es: 'Trabajamos de lunes a sábado.', en: 'We work Monday through Saturday.', good: true,
                  note: '<b>De lunes a sábado</b> = from Monday to Saturday.' },
                { es: 'Trabajamos de lunes y sábado.', en: 'We work of Monday and Saturday.',
                  react: '¿Solo lunes y sábado? 🤔', reactEn: 'Only Monday and Saturday?',
                  why: '"Through" is <b>de… a…</b>: <b>de lunes a sábado</b>.' },
                { es: 'Trabajamos el lunes.', en: 'We work on Monday.',
                  react: '¿Solo este lunes? 🤨', reactEn: 'Only this Monday?',
                  why: 'Your work week: <b>de lunes a sábado</b>.' },
              ],
            },
            {
              them: '¿Pueden venir el primer lunes de cada mes?',
              en: 'Can you come the first Monday of every month?',
              choices: [
                { es: 'Sí, el primer lunes de cada mes está perfecto.', en: 'Yes, the first Monday of every month is perfect.', good: true,
                  note: '<b>Primer</b> = first, before a noun (like uno → un). <b>Cada mes</b> = every month.' },
                { es: 'Sí, el primero lunes de cada mes.', en: 'Yes, the first (long form) Monday…',
                  react: '"Primero lunes"… 🙂', reactEn: '"Primero lunes"…',
                  why: 'Before a noun, <b>primero</b> shortens to <b>primer</b>: <b>el primer lunes</b>. (Like uno → un.)' },
                { es: 'Sí, los lunes.', en: 'Yes, Mondays.',
                  react: '¿Todos los lunes? ¡Es demasiado! 😅', reactEn: 'EVERY Monday? That\'s too much!',
                  why: '<b>Los lunes</b> = every Monday. She wants <b>el primer lunes de cada mes</b>.' },
              ],
            },
            {
              them: 'Muy bien. ¿Podemos empezar en mayo?',
              en: 'Very good. Can we start in May?',
              choices: [
                { es: 'Sí, empezamos el lunes cinco de mayo.', en: 'Yes, we start Monday, May 5th.', good: true,
                  note: '<b>El lunes cinco de mayo</b>: day name, number, de, month.' },
                { es: 'Sí, empezamos el lunes cinco de marzo.', en: 'Yes, we start Monday, March 5th.',
                  react: '¿Marzo? Dije mayo. 🤔', reactEn: 'March? I said May.',
                  why: '<b>Marzo</b> is March. May is <b>mayo</b>.' },
                { es: 'Sí, empezamos el lunes cinco mayo.', en: 'Yes, we start Monday five May.',
                  react: '¿"Cinco mayo"? Ah, el cinco de mayo. 🙂', reactEn: '"Five May"? Oh, May 5th.',
                  why: 'Don\'t forget <b>de</b>: <b>el cinco de mayo</b>.' },
              ],
            },
            {
              them: '¿Y en diciembre? Con las fiestas…',
              en: 'And in December? With the holidays…',
              choices: [
                { es: 'En diciembre también trabajamos, menos el veinticinco.', en: 'We work in December too, except the 25th.', good: true,
                  note: '<b>Menos</b> = except (here). <b>El veinticinco</b> = Christmas Day.' },
                { es: 'En diciembre también trabajamos, menos el veinticuatro de enero.', en: '…except January 24th.',
                  react: '¿Enero? Estamos hablando de diciembre. 😅', reactEn: 'January? We\'re talking about December.',
                  why: 'Christmas is <b>el veinticinco de diciembre</b>.' },
                { es: 'En diciembre no.', en: 'Not in December.',
                  react: '¿Nada en diciembre? Mmm… 😕', reactEn: 'Nothing in December? Hmm…',
                  why: 'You do work in December! Say so: <b>también trabajamos, menos el veinticinco</b>.' },
              ],
            },
            {
              them: 'Perfecto. ¿Me manda el contrato?',
              en: 'Perfect. Will you send me the contract?',
              choices: [
                { es: 'Sí, le mando el contrato mañana.', en: 'Yes, I\'ll send you the contract tomorrow.', good: true,
                  note: '<b>Le mando</b> = I\'ll send you. <b>Mañana</b> = tomorrow.' },
                { es: 'Sí, le mando el contrato ayer.', en: 'Yes, I\'ll send you the contract yesterday.',
                  react: '¿Ayer? 😂', reactEn: 'Yesterday?',
                  why: '<b>Ayer</b> = yesterday. Tomorrow is <b>mañana</b>.' },
                { es: 'Sí, le mando la contrato mañana.', en: 'Yes, I\'ll send you the (girl) contract.',
                  react: '"La contrato"… 🙂', reactEn: '"La contrato"…',
                  why: '<b>Contrato</b> ends in -o: <b>el contrato</b>.' },
              ],
            },
          ],
        },
      ],
    },
  ],
});
