function converteRomano(romano) {
    if (romano === "I") {
      return 1;
    } else if (romano === "V") {
      return 5;
    } else if (romano === "X") {
      return 10;
    } else if (romano === "L") {
      return 50;
    } else if (romano === "C") {
      return 100;
    } else if (romano === "D") {
      return 500;
    } else if (romano === "M") {
      return 1000;
    }
  }

  function converteRomanos(romanos) {
    let numero = converteRomano(romanos[0]);

    for (i = 0; i <= romanos.length; i += 1) {
      let atual = converteRomano(romanos[i]);
      let anterior = converteRomano(romanos[i - 1]);
      if (atual <= anterior) {
        numero = numero + atual
      } else if (atual > anterior) {
        numero = numero + (atual - anterior) - anterior;
      }
    }
    return numero
  }

  console.log(converteRomanos("MMCM"));
  console.log(converteRomanos("CMXL"));
  console.log(converteRomanos("MMMXXIII"));
  console.log(converteRomanos("MCDIX"));