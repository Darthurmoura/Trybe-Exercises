let salarioBruto =  2500.00;
let salarioPosINSS;
let salarioLiquido;
let impostoINSS;
let recolheIR;

if (salarioBruto < 1556.95) {
  impostoINSS = salarioBruto * 0.08;
} else if(salarioBruto >= 1556.95 && salarioBruto < 2594.92) {
  impostoINSS = salarioBruto * 0.09;
} else if(salarioBruto >= 2594.92 && salarioBruto < 5189.82) {
  impostoINSS = salarioBruto * 0.11;
} else {
  impostoINSS = 570.88;
}

salarioPosINSS = salarioBruto - impostoINSS;

if(salarioPosINSS < 1903.99) {
  recolheIR = 0;
} else if(salarioPosINSS >= 1903.99 && salarioPosINSS < 2826.66) {
  recolheIR = ((salarioPosINSS * 0.075) - 142.80);
} else if(salarioPosINSS >= 2826.65 && salarioPosINSS < 3751.06) {
  recolheIR = ((salarioPosINSS * 0.15) - 354.80);
} else if(salarioPosINSS >= 3751.05 && salarioPosINSS < 4664.69) {
  recolheIR = ((salarioPosINSS * 0.225) - 636.13);
} else if(salarioPosINSS >= 4664.68) {
  recolheIR = ((salarioPosINSS * 0.275) - 869.36);
}

salarioLiquido = salarioPosINSS - recolheIR;

console.log("Salário Líquido: R$" + salarioLiquido.toFixed(2));