let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let newArray = [];

function maiorNome(array) {
  for(let i in array) {
    newArray.push(array[i].length);
  }
  return array[newArray.indexOf(Math.max(...newArray))];
}

console.log(maiorNome(array));