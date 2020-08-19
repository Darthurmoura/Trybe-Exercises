
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names
    .reduce((acc, name) => `${acc} ${name}`)
    .match(/[a]/gi)
    .length;
}

assert.deepEqual(containsA(), 20);