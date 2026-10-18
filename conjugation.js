// Verbs for the Verb gym and the Rules page, by tense.
// A group builds its forms one of four ways:
//   endings        stem (verb minus -ar/-er/-ir) + ending, one list for the whole group
//   endingsBy      same, but a list per verb type: { ar: [...], er: [...], ir: [...] }
//   addToInfinitive  the whole verb + ending (the future works this way)
//   goingTo        voy / vas / va / vamos / van + a + the whole verb
// or a verb lists all five forms itself (irregulars), with a tip as the 4th item.
window.CONJ = {
  persons: [
    { key: 'yo', en: 'I', show: ['yo'] },
    { key: 'tú', en: 'you (friend)', show: ['tú'] },
    { key: 'él / ella / usted', en: 'he / she / you (polite)', show: ['él', 'ella', 'usted'] },
    { key: 'nosotros', en: 'we', show: ['nosotros'] },
    { key: 'ellos / ellas / ustedes', en: 'they / you all', show: ['ellos', 'ellas', 'ustedes'] },
  ],

  tenses: [
    {
      id: 'present', title: 'Present', cues: [''],
      about: 'What happens now or usually. <b>Trabajo los sábados.</b> I work on Saturdays.',
      groups: [
        {
          id: 'ar', title: '-AR verbs',
          rule: 'Drop the <b>-ar</b> and add <b>-o, -as, -a, -amos, -an</b>.',
          endings: ['o', 'as', 'a', 'amos', 'an'],
          verbs: [
            ['trabajar', 'to work'], ['hablar', 'to speak'], ['cargar', 'to load'], ['necesitar', 'to need'],
            ['limpiar', 'to clean'], ['llevar', 'to carry, to take'], ['ayudar', 'to help'], ['estudiar', 'to study'],
            ['tirar', 'to throw out'], ['llamar', 'to call'], ['pagar', 'to pay'], ['manejar', 'to drive'],
          ],
        },
        {
          id: 'er', title: '-ER verbs',
          rule: 'Drop the <b>-er</b> and add <b>-o, -es, -e, -emos, -en</b>.',
          endings: ['o', 'es', 'e', 'emos', 'en'],
          verbs: [
            ['comer', 'to eat'], ['beber', 'to drink'], ['aprender', 'to learn'], ['vender', 'to sell'],
            ['correr', 'to run'], ['leer', 'to read'], ['comprender', 'to understand'],
          ],
        },
        {
          id: 'ir', title: '-IR verbs',
          rule: 'Drop the <b>-ir</b> and add <b>-o, -es, -e, -imos, -en</b>. Same as -er, except <b>nosotros: -imos</b>.',
          endings: ['o', 'es', 'e', 'imos', 'en'],
          verbs: [
            ['vivir', 'to live'], ['escribir', 'to write'], ['abrir', 'to open'], ['subir', 'to go up, to lift'],
            ['recibir', 'to receive'], ['decidir', 'to decide'],
          ],
        },
        {
          id: 'irr', title: 'Irregulars',
          rule: 'These break the pattern, so learn them by heart. They are the most used verbs in Spanish.',
          trick: '<b>Boot verbs:</b> write the five forms in a table and draw a boot around yo, tú, él and ellos. Inside the boot the stem changes (quiero, puedo). <b>Nosotros</b> is outside the boot, so it stays normal (queremos, podemos).',
          verbs: [
            ['ser', 'to be (what / who)', ['soy', 'eres', 'es', 'somos', 'son'], 'Totally irregular. DOCTOR: who or what something is.'],
            ['estar', 'to be (how / where)', ['estoy', 'estás', 'está', 'estamos', 'están'], 'Yo is <b>estoy</b>, and the rest have an accent: es-TÁ. PLACE: how or where.'],
            ['tener', 'to have', ['tengo', 'tienes', 'tiene', 'tenemos', 'tienen'], 'Yo is special (<b>tengo</b>), then it\'s a boot verb: e → ie.'],
            ['ir', 'to go', ['voy', 'vas', 'va', 'vamos', 'van'], 'Every form starts with <b>v</b> and ends like an -ar verb: voy, vas, va…'],
            ['querer', 'to want', ['quiero', 'quieres', 'quiere', 'queremos', 'quieren'], 'Boot verb: e → ie inside the boot. Nosotros stays <b>queremos</b>.'],
            ['poder', 'can, to be able to', ['puedo', 'puedes', 'puede', 'podemos', 'pueden'], 'Boot verb: o → ue inside the boot. Nosotros stays <b>podemos</b>.'],
            ['hacer', 'to do, to make', ['hago', 'haces', 'hace', 'hacemos', 'hacen'], 'Only yo is weird: <b>hago</b>. The rest are regular -er.'],
          ],
        },
      ],
    },

    {
      id: 'preterite', title: 'Past: finished', name: 'finished past', cues: ['Ayer', 'Anoche', 'El sábado'],
      about: 'One finished action, done and over: <b>Ayer trabajé.</b> Yesterday I worked. Clue words: <b>ayer</b> (yesterday), <b>anoche</b> (last night), <b>el sábado</b> (on Saturday).',
      trick: '<b>Snapshot or video?</b> If you could take one snapshot of it (I ate, she called, we went), use this past. If it\'s background, like a video playing (I was eating, I used to call), use the "used to" past.',
      groups: [
        {
          id: 'pret', title: 'Regular',
          rule: '-AR: <b>-é, -aste, -ó, -amos, -aron</b>. -ER and -IR share: <b>-í, -iste, -ió, -imos, -ieron</b>.',
          trick: 'The accent changes everything: <b>trabajo</b> = I work, <b>trabajó</b> = he worked. Say the punch at the end: traba-<b>JÓ</b>.',
          endingsBy: {
            ar: ['é', 'aste', 'ó', 'amos', 'aron'],
            er: ['í', 'iste', 'ió', 'imos', 'ieron'],
            ir: ['í', 'iste', 'ió', 'imos', 'ieron'],
          },
          verbs: [
            ['trabajar', 'to work'], ['hablar', 'to speak'], ['limpiar', 'to clean'], ['ayudar', 'to help'],
            ['llamar', 'to call'], ['necesitar', 'to need'], ['manejar', 'to drive'],
            ['comer', 'to eat'], ['beber', 'to drink'], ['aprender', 'to learn'], ['vender', 'to sell'],
            ['vivir', 'to live'], ['escribir', 'to write'], ['abrir', 'to open'], ['recibir', 'to receive'],
          ],
        },
        {
          id: 'pret-irr', title: 'Irregular',
          rule: 'The most used verbs are irregular in the past too. No accents on these!',
          verbs: [
            ['ser', 'to be', ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'], 'Same forms as <b>ir</b>! <b>Fui</b> = I was OR I went. The sentence tells you which.'],
            ['ir', 'to go', ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'], 'Same forms as <b>ser</b>! <b>Fui al trabajo</b> = I went to work.'],
            ['estar', 'to be (how / where)', ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvieron'], 'Stem <b>estuv-</b>, then -e, -iste, -o, -imos, -ieron.'],
            ['tener', 'to have', ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvieron'], 'Stem <b>tuv-</b>. It rhymes with estuve.'],
            ['hacer', 'to do, to make', ['hice', 'hiciste', 'hizo', 'hicimos', 'hicieron'], 'Stem <b>hic-</b>, and él gets a z: <b>hizo</b>.'],
            ['poder', 'can, to be able to', ['pude', 'pudiste', 'pudo', 'pudimos', 'pudieron'], 'Stem <b>pud-</b>. <b>No pude</b> = I couldn\'t.'],
            ['querer', 'to want', ['quise', 'quisiste', 'quiso', 'quisimos', 'quisieron'], 'Stem <b>quis-</b>.'],
            ['decir', 'to say, to tell', ['dije', 'dijiste', 'dijo', 'dijimos', 'dijeron'], 'Stem <b>dij-</b>, and ellos drops the i: <b>dijeron</b>.'],
          ],
        },
      ],
    },

    {
      id: 'imperfect', title: 'Past: used to / was -ing', name: '"used to" past', cues: ['Antes', 'De niño,'],
      about: 'The background of the past: what used to happen, or what was going on. <b>Antes trabajaba los domingos.</b> I used to work on Sundays. Clue words: <b>antes</b> (before), <b>de niño</b> (as a kid), <b>siempre</b> (always).',
      trick: 'It\'s the easiest past: only <b>three</b> irregular verbs in the whole language (ser, ir, ver). And yo and él are always the same form: <b>yo trabajaba, él trabajaba</b>.',
      groups: [
        {
          id: 'imp', title: 'Regular',
          rule: '-AR: <b>-aba, -abas, -aba, -ábamos, -aban</b>. -ER and -IR share: <b>-ía, -ías, -ía, -íamos, -ían</b>.',
          endingsBy: {
            ar: ['aba', 'abas', 'aba', 'ábamos', 'aban'],
            er: ['ía', 'ías', 'ía', 'íamos', 'ían'],
            ir: ['ía', 'ías', 'ía', 'íamos', 'ían'],
          },
          verbs: [
            ['trabajar', 'to work'], ['hablar', 'to speak'], ['jugar', 'to play'], ['estudiar', 'to study'],
            ['estar', 'to be (how / where)'], ['comer', 'to eat'], ['tener', 'to have'], ['querer', 'to want'],
            ['vivir', 'to live'], ['escribir', 'to write'], ['hacer', 'to do, to make'], ['poder', 'can, to be able to'],
          ],
        },
        {
          id: 'imp-irr', title: 'The only 3 irregulars',
          rule: 'Just three. Learn them and you know this whole tense.',
          verbs: [
            ['ser', 'to be', ['era', 'eras', 'era', 'éramos', 'eran'], '<b>Era</b> = I was / he was / it was. <b>Era muy alto de niño.</b>'],
            ['ir', 'to go', ['iba', 'ibas', 'iba', 'íbamos', 'iban'], '<b>Iba</b> = I used to go / I was going.'],
            ['ver', 'to see, to watch', ['veía', 'veías', 'veía', 'veíamos', 'veían'], 'Keeps the e: <b>veía</b>, not vía.'],
          ],
        },
      ],
    },

    {
      id: 'goingto', title: 'Going to', name: '"going to" form', cues: ['Mañana', 'Esta noche'],
      about: 'The easiest way to talk about the future, used all the time: <b>Voy a trabajar mañana.</b> I\'m going to work tomorrow.',
      trick: 'If you know <b>ir</b> (voy, vas, va, vamos, van), you already know this. Add <b>a</b> and the whole verb. Nothing else changes.',
      groups: [
        {
          id: 'ira', title: 'Going to',
          rule: '<b>ir</b> + <b>a</b> + the whole verb: <b>voy a, vas a, va a, vamos a, van a</b>.',
          goingTo: true,
          verbs: [
            ['trabajar', 'to work'], ['comer', 'to eat'], ['limpiar', 'to clean'], ['llamar', 'to call'],
            ['estudiar', 'to study'], ['cargar', 'to load'], ['vender', 'to sell'], ['escribir', 'to write'],
            ['tener', 'to have'], ['hacer', 'to do, to make'],
          ],
        },
      ],
    },

    {
      id: 'future', title: 'Future: will', name: 'future', cues: ['Mañana', 'El próximo año'],
      about: 'What will happen: <b>Mañana trabajaré.</b> Tomorrow I will work. Clue words: <b>mañana</b> (tomorrow), <b>el próximo año</b> (next year).',
      trick: 'The easiest endings in Spanish: keep the <b>whole verb</b> and add <b>-é, -ás, -á, -emos, -án</b>. Same endings for -ar, -er and -ir!',
      groups: [
        {
          id: 'fut', title: 'Regular',
          rule: 'Whole verb + <b>-é, -ás, -á, -emos, -án</b>.',
          addToInfinitive: ['é', 'ás', 'á', 'emos', 'án'],
          verbs: [
            ['trabajar', 'to work'], ['hablar', 'to speak'], ['ayudar', 'to help'], ['limpiar', 'to clean'],
            ['comer', 'to eat'], ['aprender', 'to learn'], ['vivir', 'to live'], ['escribir', 'to write'],
            ['ser', 'to be'], ['estar', 'to be (how / where)'], ['ir', 'to go'],
          ],
        },
        {
          id: 'fut-irr', title: 'Irregular',
          rule: 'Same endings, but the verb gets a short new stem.',
          verbs: [
            ['tener', 'to have', ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendrán'], 'Stem <b>tendr-</b>.'],
            ['poder', 'can, to be able to', ['podré', 'podrás', 'podrá', 'podremos', 'podrán'], 'Stem <b>podr-</b> (the e falls out).'],
            ['hacer', 'to do, to make', ['haré', 'harás', 'hará', 'haremos', 'harán'], 'Stem <b>har-</b>.'],
            ['querer', 'to want', ['querré', 'querrás', 'querrá', 'querremos', 'querrán'], 'Stem <b>querr-</b> (double r).'],
            ['decir', 'to say, to tell', ['diré', 'dirás', 'dirá', 'diremos', 'dirán'], 'Stem <b>dir-</b>.'],
            ['salir', 'to leave, to go out', ['saldré', 'saldrás', 'saldrá', 'saldremos', 'saldrán'], 'Stem <b>saldr-</b>.'],
            ['venir', 'to come', ['vendré', 'vendrás', 'vendrá', 'vendremos', 'vendrán'], 'Stem <b>vendr-</b>.'],
          ],
        },
      ],
    },
  ],
};
