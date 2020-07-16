function invertePalavra(palavra){
    return palavra.split('').reverse().join('')
  }

  function verificaPalindrome(palavra) {
    if(palavra == invertePalavra(palavra)) {
      return true
    } else {
      return false
    }
  }

  console.log(verificaPalindrome("arara"));
  console.log(verificaPalindrome("palavra"));