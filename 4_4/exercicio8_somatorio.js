let array = [2, 3, 2, 5, 8, 2, 3];
let maxFreq = 1;
let rep = 0;
let item;

function maisRepetido(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        rep += 1;
        if (maxFreq < rep) {
          maxFreq = rep;
          item = array[i];
        }
      }
    }
    rep = 0
  }
  return item
}

console.log(maisRepetido(array));