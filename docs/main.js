var cash = 0;
var multiplier = 0;
var hydrogen = 0;
var helium = 0;
var lithium = 0;
var berylium = 0;
var boron = 0;
var carbon = 0;
var nitrogen = 0;
var oxygen = 0;
var flourine = 0;
var neon = 0;
var cashMulti = 1;
var multiMulti = 1;
var hydrogenMulti = 1;
var heliumMulti = 1;
var lithiumMulti = 1;
var beryliumMulti = 1;
var boronMulti = 1;
var carbonMulti = 1;
var nitrogenMulti = 1;
var oxygenMulti = 1;
var flourineMulti = 1;
var scene = 1.5;

function sceneChanger(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (mouseX >= 0 && mouseX <= 600 && mouseY >= 500 && mouseY <= 600) {
    scene = 2.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 10 && mouseY <= 60) {
    scene = 1.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 70 && mouseY <= 120) {
    scene = 3.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 130 && mouseY <= 180) {
    scene = 4.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 190 && mouseY <= 240) {
    scene = 5.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 250 && mouseY <= 300) {
    scene = 6.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 310 && mouseY <= 360) {
    scene = 7.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 370 && mouseY <= 420) {
    scene = 8.5;
  }
  if (scene === 2 && mouseX >= 300 && mouseX <= 400 && mouseY >= 430 && mouseY <= 480) {
    scene = 9.5;
  }
  if (scene === 2 && mouseX >= 450 && mouseX <= 550 && mouseY >= 10 && mouseY <= 60) {
    scene = 10.5;
  }
  if (scene === 2 && mouseX >= 450 && mouseX <= 550 && mouseY >= 70 && mouseY <= 120) {
    scene = 11.5;
  }
  if (scene === 2 && mouseX >= 450 && mouseX <= 550 && mouseY >= 130 && mouseY <= 180) {
    scene = 12.5;
  }
  if (scene === 2 && mouseX >= 0 && mouseX <= 150 && mouseY >= 400 && mouseY <= 500) {
    scene = 192;
  }
}

function multiplierGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 1 && cash >= 100 && mouseX >= 150 && mouseX <= 300 && mouseY >= 30 && mouseY <= 80) {
    multiplier += 1 * multiMulti;
    cash -= 100;
  }
  if (scene === 1 && cash >= 500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 90 && mouseY <= 140) {
    multiplier += 3 * multiMulti;
    cash -= 500;
  }
  if (scene === 1 && cash >= 1000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    multiplier += 7 * multiMulti;
    cash -= 1000;
  }
  if (scene === 1 && cash >= 2500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 210 && mouseY <= 260) {
    multiplier += 20 * multiMulti;
    cash -= 2500;
  }
  if (scene === 1 && cash >= 10000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 270 && mouseY <= 320) {
    multiplier += 45 * multiMulti;
    cash -= 10000;
  }
  if (scene === 1 && cash >= 25000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 330 && mouseY <= 380) {
    multiplier += 100 * multiMulti;
    cash -= 25000;
  }
  if (scene === 1 && cash >= 100000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 30 && mouseY <= 80) {
    multiplier += 250 * multiMulti;
    cash -= 100000;
  }
  if (scene === 1 && cash >= 500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 90 && mouseY <= 140) {
    multiplier += 450 * multiMulti;
    cash -= 500000;
  }
  if (scene === 1 && cash >= 1000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 150 && mouseY <= 200) {
    multiplier += 1000 * multiMulti;
    cash -= 1000000;
  }
  if (scene === 1 && cash >= 2500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 210 && mouseY <= 260) {
    multiplier += 2500 * multiMulti;
    cash -= 2500000;
  }
  if (scene === 1 && cash >= 10000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 270 && mouseY <= 320) {
    multiplier += 4500 * multiMulti;
    cash -= 10000000;
  }
  if (scene === 1 && cash >= 25000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 330 && mouseY <= 380) {
    multiplier += 10000 * multiMulti;
    cash -= 25000000;
  }
}

function hydrogenGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 3 && multiplier >= 100 && mouseX >= 150 && mouseX <= 300 && mouseY >= 30 && mouseY <= 80) {
    hydrogen += 1 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 90 && mouseY <= 140) {
    hydrogen += 3 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 1000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    hydrogen += 7 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 2500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 210 && mouseY <= 260) {
    hydrogen += 20 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 10000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 270 && mouseY <= 320) {
    hydrogen += 45 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 25000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 330 && mouseY <= 380) {
    hydrogen += 100 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 100000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 30 && mouseY <= 80) {
    hydrogen += 250 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 90 && mouseY <= 140) {
    hydrogen += 450 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 1000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 150 && mouseY <= 200) {
    hydrogen += 1000 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 2500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 210 && mouseY <= 260) {
    hydrogen += 2500 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 10000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 270 && mouseY <= 320) {
    hydrogen += 4500 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 3 && multiplier >= 25000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 330 && mouseY <= 380) {
    hydrogen += 10000 * hydrogenMulti;
    multiplier = 0;
    cash = 0;
  }
}

function heliumGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 4 && hydrogen >= 100 && mouseX >= 150 && mouseX <= 300 && mouseY >= 30 && mouseY <= 80) {
    helium += 1 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 90 && mouseY <= 140) {
    helium += 3 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 1000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    helium += 7 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 2500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 210 && mouseY <= 260) {
    helium += 20 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 10000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 270 && mouseY <= 320) {
    helium += 45 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 25000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 330 && mouseY <= 380) {
    helium += 100 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 100000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 30 && mouseY <= 80) {
    helium += 250 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 90 && mouseY <= 140) {
    helium += 450 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 1000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 150 && mouseY <= 200) {
    helium += 1000 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 2500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 210 && mouseY <= 260) {
    helium += 2500 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 10000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 270 && mouseY <= 320) {
    helium += 4500 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 4 && hydrogen >= 25000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 330 && mouseY <= 380) {
    helium += 10000 * heliumMulti;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
}

function lithiumGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 5 && helium >= 100 && mouseX >= 150 && mouseX <= 300 && mouseY >= 30 && mouseY <= 80) {
    lithium += 1 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 90 && mouseY <= 140) {
    lithium += 3 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 1000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    lithium += 7 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 2500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 210 && mouseY <= 260) {
    lithium += 20 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 10000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 270 && mouseY <= 320) {
    lithium += 45 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 25000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 330 && mouseY <= 380) {
    lithium += 100 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 100000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 30 && mouseY <= 80) {
    lithium += 250 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 90 && mouseY <= 140) {
    lithium += 450 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 1000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 150 && mouseY <= 200) {
    lithium += 1000 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 2500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 210 && mouseY <= 260) {
    lithium += 2500 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 10000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 270 && mouseY <= 320) {
    lithium += 4500 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 5 && helium >= 25000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 330 && mouseY <= 380) {
    lithium += 10000 * lithiumMulti;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
}

function beryliumGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 6 && lithium >= 100 && mouseX >= 150 && mouseX <= 300 && mouseY >= 30 && mouseY <= 80) {
    berylium += 1 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 90 && mouseY <= 140) {
    berylium += 3 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 1000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    berylium += 7 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 2500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 210 && mouseY <= 260) {
    berylium += 20 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 10000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 270 && mouseY <= 320) {
    berylium += 45 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 25000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 330 && mouseY <= 380) {
    berylium += 100 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 100000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 30 && mouseY <= 80) {
    berylium += 250 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 90 && mouseY <= 140) {
    berylium += 450 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 1000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 150 && mouseY <= 200) {
    berylium += 1000 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 2500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 210 && mouseY <= 260) {
    berylium += 2500 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 10000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 270 && mouseY <= 320) {
    berylium += 4500 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 6 && lithium >= 25000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 330 && mouseY <= 380) {
    berylium += 10000 * beryliumMulti;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
}

function boronGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 7 && berylium >= 100 && mouseX >= 150 && mouseX <= 300 && mouseY >= 30 && mouseY <= 80) {
    boron += 1 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 90 && mouseY <= 140) {
    boron += 3 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 1000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    boron += 7 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 2500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 210 && mouseY <= 260) {
    boron += 20 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 10000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 270 && mouseY <= 320) {
    boron += 45 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 25000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 330 && mouseY <= 380) {
    boron += 100 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 100000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 30 && mouseY <= 80) {
    boron += 250 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 90 && mouseY <= 140) {
    boron += 450 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 1000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 150 && mouseY <= 200) {
    boron += 1000 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 2500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 210 && mouseY <= 260) {
    boron += 2500 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 10000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 270 && mouseY <= 320) {
    boron += 4500 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 7 && berylium >= 25000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 330 && mouseY <= 380) {
    boron += 10000 * boronMulti;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
}

function carbonGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 8 && boron >= 100 && mouseX >= 150 && mouseX <= 300 && mouseY >= 30 && mouseY <= 80) {
    carbon += 1 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 90 && mouseY <= 140) {
    carbon += 3 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 1000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    carbon += 7 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 2500 && mouseX >= 150 && mouseX <= 300 && mouseY >= 210 && mouseY <= 260) {
    carbon += 20 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 10000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 270 && mouseY <= 320) {
    carbon += 45 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 25000 && mouseX >= 150 && mouseX <= 300 && mouseY >= 330 && mouseY <= 380) {
    carbon += 100 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 100000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 30 && mouseY <= 80) {
    carbon += 250 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 90 && mouseY <= 140) {
    carbon += 450 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 1000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 150 && mouseY <= 200) {
    carbon += 1000 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 2500000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 210 && mouseY <= 260) {
    carbon += 2500 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 10000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 270 && mouseY <= 320) {
    carbon += 4500 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
  if (scene === 8 && boron >= 25000000 && mouseX >= 350 && mouseX <= 500 && mouseY >= 330 && mouseY <= 380) {
    carbon += 10000 * carbonMulti;
    boron = 0;
    berylium = 0;
    lithium = 0;
    helium = 0;
    hydrogen = 0;
    multiplier = 0;
    cash = 0;
  }
}

function drawAll() {
  if (scene === 1.5) {
    drawScene1();
    scene = 1;
  }
  if (scene === 2.5) {
    drawScene2();
    scene = 2;
  }
  if (scene === 3.5) {
    drawScene3();
    scene = 3;
  }
  if (scene === 4.5) {
  	drawScene4();
    scene = 4;
  }
  if (scene === 5.5) {
  	drawScene5();
    scene = 5;
  }
  if (scene === 6.5) {
  	drawScene6();
    scene = 6;
  }
  if (scene === 7.5) {
  	drawScene7();
    scene = 7;
  }
  if (scene === 8.5) {
  	drawScene8();
    scene = 8;
  }
  if (scene === 9.5) {
  	drawScene9();
    scene = 9;
  }
  if (scene === 10.5) {
  	drawScene10();
    scene = 10;
  }
  if (scene === 11.5) {
  	drawScene11();
    scene = 11;
  }
  if (scene === 12.5) {
  	drawScene12();
    scene = 12;
  }
  if (scene === 1) {
    drawScene1();
  }
  if (scene === 2) {
    drawScene2();
  }
  if (scene === 3) {
    drawScene3();
  }
  if (scene === 4) {
  	drawScene4();
  }
  if (scene === 5) {
  	drawScene5();
  }
  if (scene === 6) {
  	drawScene6();
  }
  if (scene === 7) {
  	drawScene7();
  }
  if (scene === 8) {
  	drawScene8();
  }
  if (scene === 9) {
  	drawScene9();
  }
  if (scene === 10) {
  	drawScene10();
  }
  if (scene === 11) {
  	drawScene11();
  }
  if (scene === 12) {
  	drawScene12();
  }
  if (scene === 192) {
    drawRebuild();
  }
}

function drawStuff() {
  var cashE = cash.toExponential(0);
  var multiplierE = multiplier.toExponential(0);
  var hydrogenE = hydrogen.toExponential(0);
  var heliumE = helium.toExponential(0);
  var lithiumE = lithium.toExponential(0);
  var beryliumE = berylium.toExponential(0);
  var boronE = boron.toExponential(0);
  var carbonE = carbon.toExponential(0);
  var nitrogenE = nitrogen.toExponential(0);
  var oxygenE = oxygen.toExponential(0);
  var flourineE = flourine.toExponential(0);
  var neonE = neon.toExponential(0);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("cash:", 0, 20, 100, 100);
  context.fillText("multiplier:", 0, 40, 100, 100);
  context.fillText("hydrogen:", 0, 60, 100, 100);
  context.fillText("helium:", 0, 80, 100, 100);
  context.fillText("lithium:", 0, 100, 100, 100);
  context.fillText("berylium:", 0, 120, 100, 100);
  context.fillText("boron:", 0, 140, 100, 100);
  context.fillText("carbon:", 0, 160, 100, 100);
  context.fillText("nitrogen:", 0, 180, 100, 100);
  context.fillText("oxygen:", 0, 200, 100, 100);
  context.fillText("flourine:", 0, 220, 100, 100);
  context.fillText("neon:", 0, 240, 100, 100);
  context.fillText(cashE, 50, 20, 1000, 1000);
  context.fillText(multiplierE, 90, 40, 1000, 1000);
  context.fillText(hydrogenE, 90, 60, 1000, 1000);
  context.fillText(heliumE, 70, 80, 1000, 1000);
  context.fillText(lithiumE, 70, 100, 1000, 1000);
  context.fillText(beryliumE, 85, 120, 1000, 1000);
  context.fillText(boronE, 60, 140, 1000, 1000);
  context.fillText(carbonE, 70, 160, 1000, 1000);
  context.fillText(nitrogenE, 80, 180, 1000, 1000);
  context.fillText(oxygenE, 75, 200, 1000, 1000);
  context.fillText(flourineE, 75, 220, 1000, 1000);
  context.fillText(neonE, 50, 240, 1000, 1000);
  context.fillStyle = '#00ff00';
  context.fillRect(0, 499, 599, 99);
  context.fillStyle = 'black';
  context.font = '50px Arial';
  context.fillText("elements", 200, 550, 1000, 1000);
}

function drawScene1() {
  context.fillStyle = '#ff0000';
  context.fillRect(150, 30, 150, 50);
  context.fillRect(150, 90, 150, 50);
  context.fillRect(150, 150, 150, 50);
  context.fillRect(150, 210, 150, 50);
  context.fillRect(150, 270, 150, 50);
  context.fillRect(150, 330, 150, 50);
  context.fillRect(350, 30, 150, 50);
  context.fillRect(350, 90, 150, 50);
  context.fillRect(350, 150, 150, 50);
  context.fillRect(350, 210, 150, 50);
  context.fillRect(350, 270, 150, 50);
  context.fillRect(350, 330, 150, 50);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("1e+0 multiplier", 160, 50, 150, 50);
  context.fillText("3e+0 multiplier", 160, 110, 150, 50);
  context.fillText("7e+0 multiplier", 160, 170, 150, 50);
  context.fillText("2e+1 multiplier", 160, 230, 150, 50);
  context.fillText("4.5e+1 multiplier", 150, 290, 150, 50);
  context.fillText("1e+2 multiplier", 160, 350, 150, 50);
  context.fillText("cost:1e+2 cash", 160, 70, 150, 50);
  context.fillText("cost:5e+2 cash", 160, 130, 150, 50);
  context.fillText("cost:1e+3 cash", 160, 190, 150, 50);
  context.fillText("cost:2.5e+3 cash", 150, 250, 250, 50);
  context.fillText("cost:1e+4 cash", 160, 310, 150, 50);
  context.fillText("cost:2.5e+4 cash", 150, 370, 250, 50);
  context.fillText("2.5e+2 multiplier", 350, 50, 150, 50);
  context.fillText("4.5e+2 multiplier", 350, 110, 150, 50);
  context.fillText("1e+3 multiplier", 360, 170, 150, 50);
  context.fillText("2.5e+3 multiplier", 350, 230, 150, 50);
  context.fillText("4.5e+3 multiplier", 350, 290, 150, 50);
  context.fillText("1e+4 multiplier", 355, 350, 150, 50);
  context.fillText("cost:1e+5 cash", 355, 70, 250, 50);
  context.fillText("cost:5e+5 cash", 355, 130, 250, 50);
  context.fillText("cost:1e+6 cash", 355, 190, 250, 50);
  context.fillText("cost:2.5e+6 cash", 350, 250, 250, 50);
  context.fillText("cost:1e+7 cash", 355, 310, 250, 50);
  context.fillText("cost:2.5e+7 cash", 350, 370, 250, 50);
}

function drawScene2() {
  context.fillStyle = 'white';
  context.fillRect(300, 10, 100, 50);
  context.fillRect(300, 70, 100, 50);
  context.fillRect(300, 130, 100, 50);
  context.fillRect(300, 190, 100, 50);
  context.fillRect(300, 250, 100, 50);
  context.fillRect(300, 310, 100, 50);
  context.fillRect(300, 370, 100, 50);
  context.fillRect(300, 430, 100, 50);
  context.fillRect(450, 10, 100, 50);
  context.fillRect(450, 70, 100, 50);
  context.fillRect(450, 130, 100, 50);
  context.fillRect(450, 190, 100, 50);
  context.fillRect(450, 250, 100, 50);
  context.fillRect(450, 310, 100, 50);
  context.fillRect(450, 370, 100, 50);
  context.fillRect(450, 430, 100, 50);
  context.fillRect(0, 400, 150, 100);
  context.strokeStyle = 'black';
  context.strokeRect(300, 10, 100, 50);
  context.strokeRect(300, 70, 100, 50);
  context.strokeRect(300, 130, 100, 50);
  context.strokeRect(300, 190, 100, 50);
  context.strokeRect(300, 250, 100, 50);
  context.strokeRect(300, 310, 100, 50);
  context.strokeRect(300, 370, 100, 50);
  context.strokeRect(300, 430, 100, 50);
  context.strokeRect(450, 10, 100, 50);
  context.strokeRect(450, 70, 100, 50);
  context.strokeRect(450, 130, 100, 50);
  context.strokeRect(450, 190, 100, 50);
  context.strokeRect(450, 250, 100, 50);
  context.strokeRect(450, 310, 100, 50);
  context.strokeRect(450, 370, 100, 50);
  context.strokeRect(450, 430, 100, 50);
  context.strokeRect(0, 400, 150, 100);
  context.fillStyle = 'black';
  context.font = '25px Arial';
  context.fillText("Mu", 300, 30, 100, 100);
  context.fillText("H", 300, 90, 100, 100);
  context.fillText("He", 300, 150, 100, 100);
  context.fillText("Li", 300, 210, 100, 100);
  context.fillText("Be", 300, 270, 100, 100);
  context.fillText("B", 300, 330, 100, 100);
  context.fillText("C", 300, 390, 100, 100);
  context.fillText("N", 300, 450, 100, 100);
  context.fillText("O", 450, 30, 100, 100);
  context.fillText("F", 450, 90, 100, 100);
  context.fillText("Ne", 450, 150, 100, 100);
  context.fillText("rebuilding", 10, 450, 200, 100);
}

function drawScene3() {
  context.fillStyle = '#0000ff';
  context.fillRect(150, 30, 150, 50);
  context.fillRect(150, 90, 150, 50);
  context.fillRect(150, 150, 150, 50);
  context.fillRect(150, 210, 150, 50);
  context.fillRect(150, 270, 150, 50);
  context.fillRect(150, 330, 150, 50);
  context.fillRect(350, 30, 150, 50);
  context.fillRect(350, 90, 150, 50);
  context.fillRect(350, 150, 150, 50);
  context.fillRect(350, 210, 150, 50);
  context.fillRect(350, 270, 150, 50);
  context.fillRect(350, 330, 150, 50);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("1e+0 hydrogen", 160, 50, 250, 50);
  context.fillText("3e+0 hydrogen", 160, 110, 250, 50);
  context.fillText("7e+0 hydrogen", 160, 170, 250, 50);
  context.fillText("2e+1 hydrogen", 160, 230, 250, 50);
  context.fillText("4.5e+1 hydrogen", 150, 290, 250, 50);
  context.fillText("1e+2 hydrogen", 160, 350, 250, 50);
  context.fillText("cost:1e+2 multiplier", 160, 70, 250, 50);
  context.fillText("cost:5e+2 multiplier", 160, 130, 250, 50);
  context.fillText("cost:1e+3 multiplier", 160, 190, 250, 50);
  context.fillText("cost:2.5e+3 multiplier", 150, 250, 250, 50);
  context.fillText("cost:1e+4 multiplier", 160, 310, 250, 50);
  context.fillText("cost:2.5e+4 multiplier", 150, 370, 250, 50);
  context.fillText("2.5e+2 hydrogen", 350, 50, 250, 50);
  context.fillText("4.5e+2 hydrogen", 350, 110, 250, 50);
  context.fillText("1e+3 hydrogen", 360, 170, 250, 50);
  context.fillText("2.5e+3 hydrogen", 350, 230, 250, 50);
  context.fillText("4.5e+3 hydrogen", 350, 290, 250, 50);
  context.fillText("1e+4 hydrogen", 355, 350, 250, 50);
  context.fillText("cost:1e+5 multiplier", 355, 70, 250, 50);
  context.fillText("cost:5e+5 multiplier", 355, 130, 250, 50);
  context.fillText("cost:1e+6 multiplier", 355, 190, 250, 50);
  context.fillText("cost:2.5e+6 multiplier", 350, 250, 250, 50);
  context.fillText("cost:1e+7 multiplier", 355, 310, 250, 50);
  context.fillText("cost:2.5e+7 multiplier", 350, 370, 250, 50);
}

function drawScene4() {
  context.fillStyle = '#00ff00';
  context.fillRect(150, 30, 150, 50);
  context.fillRect(150, 90, 150, 50);
  context.fillRect(150, 150, 150, 50);
  context.fillRect(150, 210, 150, 50);
  context.fillRect(150, 270, 150, 50);
  context.fillRect(150, 330, 150, 50);
  context.fillRect(350, 30, 150, 50);
  context.fillRect(350, 90, 150, 50);
  context.fillRect(350, 150, 150, 50);
  context.fillRect(350, 210, 150, 50);
  context.fillRect(350, 270, 150, 50);
  context.fillRect(350, 330, 150, 50);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("1e+0 helium", 160, 50, 250, 50);
  context.fillText("3e+0 helium", 160, 110, 250, 50);
  context.fillText("7e+0 helium", 160, 170, 250, 50);
  context.fillText("2e+1 helium", 160, 230, 250, 50);
  context.fillText("4.5e+1 helium", 150, 290, 250, 50);
  context.fillText("1e+2 helium", 160, 350, 250, 50);
  context.fillText("cost:1e+2 hydrogen", 160, 70, 250, 50);
  context.fillText("cost:5e+2 hydrogen", 160, 130, 250, 50);
  context.fillText("cost:1e+3 hydrogen", 160, 190, 250, 50);
  context.fillText("cost:2.5e+3 hydrogen", 150, 250, 250, 50);
  context.fillText("cost:1e+4 hydrogen", 160, 310, 250, 50);
  context.fillText("cost:2.5e+4 hydrogen", 150, 370, 250, 50);
  context.fillText("2.5e+2 helium", 350, 50, 250, 50);
  context.fillText("4.5e+2 helium", 350, 110, 250, 50);
  context.fillText("1e+3 helium", 360, 170, 250, 50);
  context.fillText("2.5e+3 helium", 350, 230, 250, 50);
  context.fillText("4.5e+3 helium", 350, 290, 250, 50);
  context.fillText("1e+4 helium", 355, 350, 250, 50);
  context.fillText("cost:1e+5 hydrogen", 355, 70, 250, 50);
  context.fillText("cost:5e+5 hydrogen", 355, 130, 250, 50);
  context.fillText("cost:1e+6 hydrogen", 355, 190, 250, 50);
  context.fillText("cost:2.5e+6 hydrogen", 350, 250, 250, 50);
  context.fillText("cost:1e+7 hydrogen", 355, 310, 250, 50);
  context.fillText("cost:2.5e+7 hydrogen", 350, 370, 250, 50);
}

function drawScene5() {
  context.fillStyle = '#FF00FF';
  context.fillRect(150, 30, 150, 50);
  context.fillRect(150, 90, 150, 50);
  context.fillRect(150, 150, 150, 50);
  context.fillRect(150, 210, 150, 50);
  context.fillRect(150, 270, 150, 50);
  context.fillRect(150, 330, 150, 50);
  context.fillRect(350, 30, 150, 50);
  context.fillRect(350, 90, 150, 50);
  context.fillRect(350, 150, 150, 50);
  context.fillRect(350, 210, 150, 50);
  context.fillRect(350, 270, 150, 50);
  context.fillRect(350, 330, 150, 50);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("1e+0 lithium", 160, 50, 250, 50);
  context.fillText("3e+0 lithium", 160, 110, 250, 50);
  context.fillText("7e+0 lithium", 160, 170, 250, 50);
  context.fillText("2e+1 lithium", 160, 230, 250, 50);
  context.fillText("4.5e+1 lithium", 150, 290, 250, 50);
  context.fillText("1e+2 lithium", 160, 350, 250, 50);
  context.fillText("cost:1e+2 helium", 160, 70, 250, 50);
  context.fillText("cost:5e+2 helium", 160, 130, 250, 50);
  context.fillText("cost:1e+3 helium", 160, 190, 250, 50);
  context.fillText("cost:2.5e+3 helium", 150, 250, 250, 50);
  context.fillText("cost:1e+4 helium", 160, 310, 250, 50);
  context.fillText("cost:2.5e+4 helium", 150, 370, 250, 50);
  context.fillText("2.5e+2 lithium", 350, 50, 250, 50);
  context.fillText("4.5e+2 lithium", 350, 110, 250, 50);
  context.fillText("1e+3 lithium", 360, 170, 250, 50);
  context.fillText("2.5e+3 lithium", 350, 230, 250, 50);
  context.fillText("4.5e+3 lithium", 350, 290, 250, 50);
  context.fillText("1e+4 lithium", 355, 350, 250, 50);
  context.fillText("cost:1e+5 helium", 355, 70, 250, 50);
  context.fillText("cost:5e+5 helium", 355, 130, 250, 50);
  context.fillText("cost:1e+6 helium", 355, 190, 250, 50);
  context.fillText("cost:2.5e+6 helium", 350, 250, 250, 50);
  context.fillText("cost:1e+7 helium", 355, 310, 250, 50);
  context.fillText("cost:2.5e+7 helium", 350, 370, 250, 50);
}

function drawScene6() {
  context.fillStyle = '#FFFF00';
  context.fillRect(150, 30, 150, 50);
  context.fillRect(150, 90, 150, 50);
  context.fillRect(150, 150, 150, 50);
  context.fillRect(150, 210, 150, 50);
  context.fillRect(150, 270, 150, 50);
  context.fillRect(150, 330, 150, 50);
  context.fillRect(350, 30, 150, 50);
  context.fillRect(350, 90, 150, 50);
  context.fillRect(350, 150, 150, 50);
  context.fillRect(350, 210, 150, 50);
  context.fillRect(350, 270, 150, 50);
  context.fillRect(350, 330, 150, 50);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("1e+0 berylium", 160, 50, 250, 50);
  context.fillText("3e+0 berylium", 160, 110, 250, 50);
  context.fillText("7e+0 berylium", 160, 170, 250, 50);
  context.fillText("2e+1 berylium", 160, 230, 250, 50);
  context.fillText("4.5e+1 berylium", 150, 290, 250, 50);
  context.fillText("1e+2 berylium", 160, 350, 250, 50);
  context.fillText("cost:1e+2 lithium", 160, 70, 250, 50);
  context.fillText("cost:5e+2 lithium", 160, 130, 250, 50);
  context.fillText("cost:1e+3 lithium", 160, 190, 250, 50);
  context.fillText("cost:2.5e+3 lithium", 150, 250, 250, 50);
  context.fillText("cost:1e+4 lithium", 160, 310, 250, 50);
  context.fillText("cost:2.5e+4 lithium", 150, 370, 250, 50);
  context.fillText("2.5e+2 berylium", 350, 50, 250, 50);
  context.fillText("4.5e+2 berylium", 350, 110, 250, 50);
  context.fillText("1e+3 berylium", 360, 170, 250, 50);
  context.fillText("2.5e+3 berylium", 350, 230, 250, 50);
  context.fillText("4.5e+3 berylium", 350, 290, 250, 50);
  context.fillText("1e+4 berylium", 355, 350, 250, 50);
  context.fillText("cost:1e+5 lithium", 355, 70, 250, 50);
  context.fillText("cost:5e+5 lithium", 355, 130, 250, 50);
  context.fillText("cost:1e+6 lithium", 355, 190, 250, 50);
  context.fillText("cost:2.5e+6 lithium", 350, 250, 250, 50);
  context.fillText("cost:1e+7 lithium", 355, 310, 250, 50);
  context.fillText("cost:2.5e+7 lithium", 350, 370, 250, 50);
}

function drawScene7() {
	context.fillStyle = '#00FFFF';
  context.fillRect(150, 30, 150, 50);
  context.fillRect(150, 90, 150, 50);
  context.fillRect(150, 150, 150, 50);
  context.fillRect(150, 210, 150, 50);
  context.fillRect(150, 270, 150, 50);
  context.fillRect(150, 330, 150, 50);
  context.fillRect(350, 30, 150, 50);
  context.fillRect(350, 90, 150, 50);
  context.fillRect(350, 150, 150, 50);
  context.fillRect(350, 210, 150, 50);
  context.fillRect(350, 270, 150, 50);
  context.fillRect(350, 330, 150, 50);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("1e+0 boron", 160, 50, 250, 50);
  context.fillText("3e+0 boron", 160, 110, 250, 50);
  context.fillText("7e+0 boron", 160, 170, 250, 50);
  context.fillText("2e+1 boron", 160, 230, 250, 50);
  context.fillText("4.5e+1 boron", 150, 290, 250, 50);
  context.fillText("1e+2 boron", 160, 350, 250, 50);
  context.fillText("cost:1e+2 berylium", 160, 70, 250, 50);
  context.fillText("cost:5e+2 berylium", 160, 130, 250, 50);
  context.fillText("cost:1e+3 berylium", 160, 190, 250, 50);
  context.fillText("cost:2.5e+3 berylium", 150, 250, 250, 50);
  context.fillText("cost:1e+4 berylium", 160, 310, 250, 50);
  context.fillText("cost:2.5e+4 berylium", 150, 370, 250, 50);
  context.fillText("2.5e+2 boron", 350, 50, 250, 50);
  context.fillText("4.5e+2 boron", 350, 110, 250, 50);
  context.fillText("1e+3 boron", 360, 170, 250, 50);
  context.fillText("2.5e+3 boron", 350, 230, 250, 50);
  context.fillText("4.5e+3 boron", 350, 290, 250, 50);
  context.fillText("1e+4 boron", 355, 350, 250, 50);
  context.fillText("cost:1e+5 berylium", 355, 70, 250, 50);
  context.fillText("cost:5e+5 berylium", 355, 130, 250, 50);
  context.fillText("cost:1e+6 berylium", 355, 190, 250, 50);
  context.fillText("cost:2.5e+6 berylium", 350, 250, 250, 50);
  context.fillText("cost:1e+7 berylium", 355, 310, 250, 50);
  context.fillText("cost:2.5e+7 berylium", 350, 370, 250, 50);
}

function drawScene8() {
	context.fillStyle = '#B700FF';
  context.fillRect(150, 30, 150, 50);
  context.fillRect(150, 90, 150, 50);
  context.fillRect(150, 150, 150, 50);
  context.fillRect(150, 210, 150, 50);
  context.fillRect(150, 270, 150, 50);
  context.fillRect(150, 330, 150, 50);
  context.fillRect(350, 30, 150, 50);
  context.fillRect(350, 90, 150, 50);
  context.fillRect(350, 150, 150, 50);
  context.fillRect(350, 210, 150, 50);
  context.fillRect(350, 270, 150, 50);
  context.fillRect(350, 330, 150, 50);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText("1e+0 carbon", 160, 50, 250, 50);
  context.fillText("3e+0 carbon", 160, 110, 250, 50);
  context.fillText("7e+0 carbon", 160, 170, 250, 50);
  context.fillText("2e+1 carbon", 160, 230, 250, 50);
  context.fillText("4.5e+1 carbon", 150, 290, 250, 50);
  context.fillText("1e+2 carbon", 160, 350, 250, 50);
  context.fillText("cost:1e+2 boron", 160, 70, 250, 50);
  context.fillText("cost:5e+2 boron", 160, 130, 250, 50);
  context.fillText("cost:1e+3 boron", 160, 190, 250, 50);
  context.fillText("cost:2.5e+3 boron", 150, 250, 250, 50);
  context.fillText("cost:1e+4 boron", 160, 310, 250, 50);
  context.fillText("cost:2.5e+4 boron", 150, 370, 250, 50);
  context.fillText("2.5e+2 carbon", 350, 50, 250, 50);
  context.fillText("4.5e+2 carbon", 350, 110, 250, 50);
  context.fillText("1e+3 carbon", 360, 170, 250, 50);
  context.fillText("2.5e+3 carbon", 350, 230, 250, 50);
  context.fillText("4.5e+3 carbon", 350, 290, 250, 50);
  context.fillText("1e+4 carbon", 355, 350, 250, 50);
  context.fillText("cost:1e+5 boron", 355, 70, 250, 50);
  context.fillText("cost:5e+5 boron", 355, 130, 250, 50);
  context.fillText("cost:1e+6 boron", 355, 190, 250, 50);
  context.fillText("cost:2.5e+6 boron", 350, 250, 250, 50);
  context.fillText("cost:1e+7 boron", 355, 310, 250, 50);
  context.fillText("cost:2.5e+7 boron", 350, 370, 250, 50);
}

function drawRebuild(){
    context.fillStyle = 'white';
    context.fillRect(150,30,150,50);
    context.fillRect(150,90,150,50);
    context.fillRect(150,150,150,50);
    context.fillRect(150,210,150,50);
    context.fillRect(150,270,150,50);
    context.fillRect(150,330,150,50);
    context.fillRect(350,30,150,50);
    context.fillRect(350,90,150,50);
    context.fillRect(350,150,150,50);
    context.fillRect(350,210,150,50);
    context.strokeStyle = 'black';
    context.strokeRect(150,30,150,50);
    context.strokeRect(150,90,150,50);
    context.strokeRect(150,150,150,50);
    context.strokeRect(150,210,150,50);
    context.strokeRect(150,270,150,50);
    context.strokeRect(150,330,150,50);
    context.strokeRect(350,30,150,50);
    context.strokeRect(350,90,150,50);
    context.strokeRect(350,150,150,50);
    context.strokeRect(350,210,150,50);
    context.fillStyle = 'black';
    context.font = '20px Arial';
    context.fillText("1e9 cash",175,55,150,50);
    context.fillText("1e8 multiplier",175,115,150,50);
    context.fillText("1e7 hydrogen",175,175,150,50);
    context.fillText("1e6 helium",175,235,150,50);
    context.fillText("1e5 lithium",175,295,150,50);
    context.fillText("1e4 berylium",175,355,150,50);
    context.fillText("rq:1e+2 helium",165,80,150,50);
    context.fillText("rq:1e+2 lithium",165,140,150,50);
    context.fillText("rq:1e+2 berylium",160,200,150,50);
    context.fillText("rq:1e+2 boron",160,260,170,50);
    context.fillText("rq:1e+2 carbon",155,320,150,50);
    context.fillText("rq:1e+2 nitrogen",155,380,150,50);
    context.fillText("1e3 boron",365,55,150,50);
    context.fillText("1e2 carbon",365,115,150,50);
    context.fillText("1e1 nitrogen",360,175,150,50);
    context.fillText("1e0 oxygen",360,235,150,50);
    context.fillText("rq:1e+2 oxygen",355,80,250,50);
    context.fillText("rq:1e+2 flourine",355,140,250,50);
    context.fillText("rq:1e+2 neon",355,200,250,50);
    context.fillText("rq:1e+4 neon",355,260,250,50);
}

function checkMulti() {
  if (cashMulti < 1) {
    cashMulti = 1;
  }
  if (multiMulti < 1) {
    multiMulti = 1;
  }
  if (hydrogenMulti < 1) {
    hydrogenMulti = 1;
  }
  if (heliumMulti < 1) {
    heliumMulti = 1;
  }
  if (lithiumMulti < 1) {
    lithiumMulti = 1;
  }
  if (beryliumMulti < 1) {
    beryliumMulti = 1;
  }
  if (boronMulti < 1) {
    boronMulti = 1;
  }
  if (carbonMulti < 1) {
    carbonMulti = 1;
  }
  if (nitrogenMulti < 1) {
    nitrogenMulti = 1;
  }
  if (oxygenMulti < 1) {
    oxygenMulti = 1;
  }
  if (flourineMulti < 1) {
    flourineMulti = 1;
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawAll();
  cash += 0.5 * cashMulti;
  cashMulti = multiplier * 2;
  multiMulti = hydrogen * 4;
  hydrogenMulti = helium * 8;
  heliumMulti = lithium * 16;
  lithiumMulti = berylium * 32;
  beryliumMulti = boron * 64;
  boronMulti = carbon * 128;
  carbonMulti = nitrogen * 256;
  nitrogenMulti = oxygen * 512;
  oxygenMulti = flourine * 1024;
  flourineMulti = neon * 2048;
  drawStuff();
  checkMulti();
}
