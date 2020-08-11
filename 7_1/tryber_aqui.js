const skillsArray = ["JavaScript", "HTML", "CSS", "Philosophy", "Marxism"];

/*const xReplace = (string, replacement) => {
  let words = string.split(" ");
  for(let i = 0; i < words.length; i += 1) {
    if(words[i] === "x") {
      words[i] = replacement;
    }
  }
  return words.join(" ");
}*/

const xReplace = (string) => {
  let phrase = `Tryber x aqui!`;
  let newPhrase = phrase.replace("x", string);
  return newPhrase;
}

const tryberSkills = (string, array) => {
  let skills = array.sort();
  let skillsList = [];
  for(let i = 0; i < skills.length; i += 1) {
    skillsList.push(`${skills[i]};
`);
  }

  let tryber = xReplace(string);

  return `${tryber}

Minhas cinco principais habilidades são:
${skillsList.join("")}#gotrybe`;
}

console.log(tryberSkills("Daniel", skillsArray));