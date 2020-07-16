// --------------
// PARTE 1: -----
// --------------
// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda, " + info.personagem);

// --------------
// PARTE 2: -----
// --------------
// Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

info.recorrente = "Sim"

// --------------
// PARTE 3: -----
// --------------
// Faça um for/in que mostre todas as chaves do objeto.

for(chaves in info) {
    console.log(chaves);
  }

// --------------
// PARTE 4: -----
// --------------
// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

for(chaves in info) {
    console.log(info[chaves]);
  }

// --------------
// PARTE 5: -----
// --------------
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let patinhas = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };

// --------------
// PARTE 6: -----
// --------------
// Mostre os dados dos dois objetos de forma que o resultado na tela seja assim:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

console.log(`${info.personagem} e ${patinhas.personagem}`);
console.log(`${info.origem} e ${patinhas.origem}`);
console.log(`${info.nota} e ${patinhas.nota}`);
if(info.recorrente === "Sim" && patinhas.recorrente === "Sim") {
  console.log(`Ambos recorrentes`);
} else {
  console.log(`Recorrente? ${info.recorrente} e ${patinhas.recorrente}`)
}