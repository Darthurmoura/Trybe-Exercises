function verificaFimPalavra(palavra, fim) {
    let pedacoPalavra = palavra.slice(-fim.length);
    if (fim !== pedacoPalavra) {
      return false;
    } else if (fim === pedacoPalavra) {
      return true;
    }
  }

  console.log(verificaFimPalavra("Trybe", "te"));
  console.log(verificaFimPalavra("Verão", "rão"));
  console.log(verificaFimPalavra("Trybe", "be"));
  console.log(verificaFimPalavra("angeladavis", "davis"));