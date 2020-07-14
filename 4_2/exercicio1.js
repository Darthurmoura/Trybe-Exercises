let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;
let somaTodos = 0;

for(i in numbers) {
  console.log(numbers[i]);
}

console.log("");

for(i = 0; i < numbers.length; i++) {
	somaTodos = somaTodos + numbers[i];
}
console.log("A soma de todos os itens no array é", somaTodos);