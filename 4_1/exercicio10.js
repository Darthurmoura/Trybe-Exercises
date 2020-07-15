let custoProduto = 1000.00;
let valorVenda = 1500.00;
let lucro = ((valorVenda - custoProduto) - (custoProduto * 0.2)) * 1000;

if (custoProduto < 0 || valorVenda < 0) {
  console.log("Erro: Um dos valores inseridos é negativo. Use apenas valores válidos.\nO programa será encerrado.");
} else {
  console.log("Lucro: ", lucro);
}