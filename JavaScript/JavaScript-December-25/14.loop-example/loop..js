let investment = 1200;
let month = 0;

while (investment < 3000) {
  month++;
  if (month <= 3) {
    investment += investment  * 0.10;
  } else {
    investment += investment * 0.6;
  }
}

console.log(investment);
console.log(month);
