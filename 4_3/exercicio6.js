let numero = 37;
let ehPrimo = false;
let divisores = 0;

if(numero === 1) {
  ehPrimo = false;
} else
  if(numero === 2) {
  ehPrimo = true;
} else {
  for(let index = 1; index <= Math.ceil((numero - 1) /  2); index += 1) {
    if(numero % index == 0) {
      divisores += 1;
    }
  }
}
if(divisores === 1) {
  ehPrimo = true;
}
console.log(ehPrimo);
console.log(divisores);