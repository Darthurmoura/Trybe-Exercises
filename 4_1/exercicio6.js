let peca = "ursO".toLowerCase();

switch (peca) {
    case "peao":
        console.log("O Peão se move 1 quadrado a frente (2, se no começo da partida).\nEle come a peça adversária na diagonal adjacente.");
        break;
    case "rainha":
        console.log("A Rainha se move por todo o tabuleiro em linha reta ou nas diagonais.");
        break;
    case "rei":
        console.log("O Rei se move 1 quadrado em qualquer direção.");
        break;
    case "cavalo":
        console.log("O Cavalo se move em L (2 quadrados em linha reta e 1 quadrado ao lado).");
        break;
    case "bispo":
        console.log("O Bispo se move por todo o tabuleiro nas diagonais.");
        break;
    case "torre":
        console.log("A Torre se move por todo o tabuleiro em linhas retas.");
        break;
    default:
        console.log("Erro: Essa peça não existe no Xadrez!")
}