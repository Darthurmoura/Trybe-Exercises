let array = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(array) {
  return array.indexOf(array.reduce(function(a, b) {
  return Math.min(a, b);
}));
}


console.log(menorIndice(array));