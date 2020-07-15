let asteriscos = 11;

console.log(" ".repeat((asteriscos - 1) /2) + "*" + " ".repeat((asteriscos - 1) /2));
for(index = 1; index <= asteriscos - 3; index += 2) {
  console.log(" ".repeat(((asteriscos - index) /2) - 1) + "*" + " ".repeat(index) + "*" +  " ".repeat(((asteriscos - index) /2) - 1));
}
console.log("*".repeat(asteriscos));