carFuelProblem(50);

function carFuelProblem(startFuel) {
  let round = 0;
  let coupleTour = 0;

  while (startFuel > 10) {
    round++;
    startFuel -= startFuel * 0.12;
    if (round % 2 === 0) {
      startFuel += 2;
      coupleTour++;
    }
  }
  console.log("Tur sayisi: " + round);
  console.log("Son kalan yakit: " + Math.floor(startFuel));
  console.log("Ek yakit ekleme sayisi: " + coupleTour);
}
