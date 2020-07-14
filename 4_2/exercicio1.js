// Configurando variáveis e iterador
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;
let somaTodos = 0;

// Exercício 1
for(i in numbers) {
  console.log(numbers[i]);
}

console.log("");

// Exercício 2
for(i = 0; i < numbers.length; i++) {
	somaTodos = somaTodos + numbers[i];
}
console.log("A soma de todos os itens no array é", somaTodos);

// Exercício 3 
let mediaArit = somaTodos / numbers.length;
console.log("A média aritmética do array é", mediaArit);

// Exercício 4
if(mediaArit > 20) {
	console.log("A média aritmética é maior que 20.");
} else {
	console.log("A média aritmética é menor ou igual a 20.");
}

