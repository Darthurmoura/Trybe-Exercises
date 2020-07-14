// Exercício bônus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i+= 1) {
    for (let j = 0; j < i; j+= 1) {
      if (numbers[i] < numbers[j]) {
        let salvarValor = numbers[i];
    
        numbers[i] = numbers[j];
        numbers[j] = salvarValor;
      }
    }
  }
console.log(numbers);

// Exercício bônus 2
for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j+= 1) {
      if (numbers[i] > numbers[j]) {
        let salvarValor = numbers[i];
    
        numbers[i] = numbers[j];
        numbers[j] = salvarValor;
      }
    }
  }
console.log(numbers);

// Exercício bônus 3
let newNumbers = [];
let multiplyNumbers;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i += 1) {
    if(i === numbers.length - 1) {
    multiplyNumbers = numbers[i] * 2;
    } else {
    multiplyNumbers = numbers[i] * numbers[i + 1];
    }
    newNumbers.push(multiplyNumbers)
}
console.log(newNumbers);