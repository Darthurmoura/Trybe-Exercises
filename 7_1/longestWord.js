const longestWord = phrase => {
  let words = phrase.split(' ');
  let longest = '';
  for(let i = 0; i < words.length; i += 1) {
    if(words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord(`Crie uma função que receba uma frase e retorne qual a maior palavra. Rebekitchas é a maior palavra aqui.`));