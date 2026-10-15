// Present-tense verbs for the Conjugation gym and the Rules page.
// Regular groups list endings; their forms are built as stem + ending.
// Irregulars list all five forms, plus a tip for how they break the pattern.
window.CONJ = {
  persons: [
    { key: 'yo', en: 'I', show: ['yo'] },
    { key: 'tú', en: 'you (friend)', show: ['tú'] },
    { key: 'él / ella / usted', en: 'he / she / you (polite)', show: ['él', 'ella', 'usted'] },
    { key: 'nosotros', en: 'we', show: ['nosotros'] },
    { key: 'ellos / ellas / ustedes', en: 'they / you all', show: ['ellos', 'ellas', 'ustedes'] },
  ],

  groups: [
    {
      id: 'ar', title: '-AR verbs',
      rule: 'Drop the <b>-ar</b> and add <b>-o, -as, -a, -amos, -an</b>.',
      ending: 'ar', endings: ['o', 'as', 'a', 'amos', 'an'],
      verbs: [
        ['trabajar', 'to work'], ['hablar', 'to speak'], ['cargar', 'to load'], ['necesitar', 'to need'],
        ['limpiar', 'to clean'], ['llevar', 'to carry, to take'], ['ayudar', 'to help'], ['estudiar', 'to study'],
        ['tirar', 'to throw out'], ['llamar', 'to call'], ['pagar', 'to pay'], ['manejar', 'to drive'],
      ],
    },
    {
      id: 'er', title: '-ER verbs',
      rule: 'Drop the <b>-er</b> and add <b>-o, -es, -e, -emos, -en</b>.',
      ending: 'er', endings: ['o', 'es', 'e', 'emos', 'en'],
      verbs: [
        ['comer', 'to eat'], ['beber', 'to drink'], ['aprender', 'to learn'], ['vender', 'to sell'],
        ['correr', 'to run'], ['leer', 'to read'], ['comprender', 'to understand'],
      ],
    },
    {
      id: 'ir', title: '-IR verbs',
      rule: 'Drop the <b>-ir</b> and add <b>-o, -es, -e, -imos, -en</b>. Same as -er, except <b>nosotros: -imos</b>.',
      ending: 'ir', endings: ['o', 'es', 'e', 'imos', 'en'],
      verbs: [
        ['vivir', 'to live'], ['escribir', 'to write'], ['abrir', 'to open'], ['subir', 'to go up, to lift'],
        ['recibir', 'to receive'], ['decidir', 'to decide'],
      ],
    },
    {
      id: 'irr', title: 'Must-know irregulars',
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
};
