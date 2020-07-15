let asteriscos = 7;

if(asteriscos % 2 === 0) {
  for(let index = 2; index <= asteriscos; index += 2) {
    console.log(" ".repeat((asteriscos - index) /2) +  "*".repeat(index) + " ".repeat((asteriscos - index) /2));
  }
} else {
  for(let index = 1; index <= asteriscos; index += 2) {
    console.log(" ".repeat((asteriscos - index) /2) +  "*".repeat(index) + " ".repeat((asteriscos - index) /2));
  }
}