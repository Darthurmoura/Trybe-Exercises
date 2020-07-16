// Exercício de refatoração dos exercícios do dia 01 do módulo 04

// Função Soma
function soma(a, b) {
    return a + b;
  }

// Função Divide
  function divide(a, b) {
    return a / b;
  }

// Função Multiplica
  function multiplica(a, b) {
    return a * b;
  }

// Função Subtrai
  function subtrai(a, b) {
    return a - b;
  }

// Função Maior número
  function maiorNumero(a, b) {
    return (a > b) ? a : b;
  }

  console.log(maiorNumero(978, 88));

// Função Maior dentre 3 números
  function maiorDeTodos(a, b, c) {
    if (a > b && a > c) {
      return a;
  } if (b > a && b > c) {
      return b;
  } if (c > a && c > b) {
      return c;
  }
  }

  console.log(maiorDeTodos(88, 8888, 10000));

// Função Positivo/Negativo
  function tipoNumero(a) {
    if (a > 0) {
      return "positive";
  } if (a < 0) {
      return "negative";
  } if (a == 0) {
      return 0;
  }
  }

  console.log(tipoNumero(90))

// Função de triângulo real
  function trianguloExiste(a, b, c) {
    return ((a + b + c) == 180) ? true : false;
  }

  console.log(trianguloExiste(90, 45, 45))

// Função de peças do Xadrez
  function pecaXadrez(peca) {
    switch (peca.toLowerCase()) {
      case "peao":
          return "O Peão se move 1 quadrado a frente (2, se no começo da partida). Ele come a peça adversária na diagonal adjacente.";
          break;
      case "rainha":
          return "A Rainha se move por todo o tabuleiro em linha reta ou nas diagonais.";
          break;
      case "rei":
          return "O Rei se move 1 quadrado em qualquer direção.";
          break;
      case "cavalo":
          return "O Cavalo se move em L (2 quadrados em linha reta e 1 quadrado ao lado).";
          break;
      case "bispo":
          return "O Bispo se move por todo o tabuleiro nas diagonais.";
          break;
      case "torre":
          return "A Torre se move por todo o tabuleiro em linhas retas.";
          break;
      default:
          return "Erro: Essa peça não existe no Xadrez!"
  }
  }

  console.log(pecaXadrez("peao"));
  console.log(pecaXadrez("torRe"));
  console.log(pecaXadrez("Urso"));

// Função Par
  function ehPar(a, b, c) {
    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return true;
  } else {
    return false;
  }
  }

  console.log(ehPar(4, 5, 6));
  console.log(ehPar(11, 5, 7));

// Função Ímpar
  function ehImpar(a, b, c) {
    if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    return true;
  } else {
    return false;
  }
  }

  console.log(ehImpar(4, 8, 6));
  console.log(ehImpar(11, 5, 7));

// Função Cálculo do Lucro
  function calculoLucro(custoProduto, valorVenda) {
    if (custoProduto < 0 || valorVenda < 0) {
    return "Erro: Um dos valores inseridos é negativo. Use apenas valores válidos.\nO programa será encerrado.";
    }
    return (((valorVenda - custoProduto) - (custoProduto * 0.2)) * 1000).toFixed(2);
  }

  console.log("Lucro: ", calculoLucro(-1000, 1500));
  console.log("Lucro: ", calculoLucro(1000, 1500));

// Função Cálculo do Salário Líquido
  function calculaSalarioLiquido(salarioBruto) {
    let salarioPosINSS;
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

  return (salarioPosINSS - recolheIR).toFixed(2);
  }

  console.log("Salário Líquido: R$" + calculaSalarioLiquido(5000));
