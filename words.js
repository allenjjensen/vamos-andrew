// Little words for the gym and the Rules page: this / that, and my / mine.
// Nouns: [singular, plural, gender (m / f), English, English plural, optional note for rule-breakers].
window.WORDS = {
  nouns: [
    ['camión', 'camiones', 'm', 'truck', 'trucks'],
    ['caja', 'cajas', 'f', 'box', 'boxes'],
    ['sofá', 'sofás', 'm', 'couch', 'couches'],
    ['colchón', 'colchones', 'm', 'mattress', 'mattresses'],
    ['silla', 'sillas', 'f', 'chair', 'chairs'],
    ['libro', 'libros', 'm', 'book', 'books'],
    ['llave', 'llaves', 'f', 'key', 'keys'],
    ['puerta', 'puertas', 'f', 'door', 'doors'],
    ['casa', 'casas', 'f', 'house', 'houses'],
    ['carro', 'carros', 'm', 'car', 'cars'],
    ['bolsa', 'bolsas', 'f', 'bag', 'bags'],
    ['mesa', 'mesas', 'f', 'table', 'tables'],
    ['trabajo', 'trabajos', 'm', 'job', 'jobs'],
    ['problema', 'problemas', 'm', 'problem', 'problems', 'Rule-breaker: <b>problema</b> ends in -a but it\'s a boy word (el problema).'],
    ['mano', 'manos', 'f', 'hand', 'hands', 'Rule-breaker: <b>mano</b> ends in -o but it\'s a girl word (la mano).'],
    ['día', 'días', 'm', 'day', 'days', 'Rule-breaker: <b>día</b> ends in -a but it\'s a boy word (el día).'],
  ],

  // [ms, fs, mp, fp] = one boy word, one girl word, several boy words, several girl words
  demonstratives: [
    { id: 'near', en: ['this', 'these'], forms: ['este', 'esta', 'estos', 'estas'], neuter: 'esto', neuterEn: 'this' },
    { id: 'mid', en: ['that', 'those'], forms: ['ese', 'esa', 'esos', 'esas'], neuter: 'eso', neuterEn: 'that' },
    { id: 'far', en: ['that … over there', 'those … over there'], forms: ['aquel', 'aquella', 'aquellos', 'aquellas'], neuter: 'aquello', neuterEn: 'that (way over there)' },
  ],
  demoRule: '<b>Este</b> = this (near me). <b>Ese</b> = that (near you). <b>Aquel</b> = that over there (far from both of us). Each one matches the noun: boy or girl, one or more.',
  demoTrick: '<b>This and these have T\'s:</b> es<b>t</b>e, es<b>t</b>a, es<b>t</b>os, es<b>t</b>as. <b>That and those don\'t:</b> ese, esa, esos, esas.',
  neuterRule: 'No noun, or you don\'t know what it is? Use <b>esto, eso, aquello</b>: <b>¿Qué es esto?</b> What is this? They end in -o but they aren\'t boy words.',

  possessives: [
    { who: 'yo', en: 'my', enLong: 'mine', short: ['mi', 'mis'], long: 'mío' },
    { who: 'tú', en: 'your (friend)', enLong: 'yours (friend)', short: ['tu', 'tus'], long: 'tuyo' },
    { who: 'él', en: 'his', enLong: 'his', short: ['su', 'sus'], long: 'suyo' },
    { who: 'ella', en: 'her', enLong: 'hers', short: ['su', 'sus'], long: 'suyo' },
    { who: 'usted', en: 'your (polite)', enLong: 'yours (polite)', short: ['su', 'sus'], long: 'suyo' },
    { who: 'nosotros', en: 'our', enLong: 'ours', long: 'nuestro' },
    { who: 'ellos', en: 'their', enLong: 'theirs', short: ['su', 'sus'], long: 'suyo' },
  ],
  possRule: 'Before a noun: <b>mi, tu, su</b> (add -s for more than one: <b>mis cajas</b>). <b>Nuestro</b> also matches boy or girl: <b>nuestra casa</b>.',
  possLongRule: 'With no noun after it, like after <b>es / son</b>, use the long form, which matches the thing: <b>El camión es mío. La caja es mía.</b>',
  possTrick: '<b>Su</b> can mean his, her, their or your (polite). If it\'s confusing, say whose: <b>el camión de él</b> (his truck), <b>el camión de ella</b> (her truck).',
};
