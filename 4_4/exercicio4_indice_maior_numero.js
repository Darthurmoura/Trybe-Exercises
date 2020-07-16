let array = [2, 3, 6, 7, 10, 1]

function maiorIndice(array) {
  return array.indexOf(Math.max(...array));
}

console.log(maiorIndice(array));
console.log(array);