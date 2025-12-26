let fuel = 60;
let round = 0;
let under30Round = 0;

while (fuel > 0) {
  round++;

  if (fuel > 30) {
    fuel -= 7;
  } else {
    fuel -= 5;
    under30Round++;
  }
}

console.log("Toplam tur :" + round);
console.log("Son turda kalan litre :" + fuel);
console.log("30 litre alti tur sayisi: " + under30Round);
