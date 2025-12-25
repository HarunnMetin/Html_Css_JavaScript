//1️⃣ 1’den 20’ye kadar çift sayıları yazdır

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//2️⃣ 1–10 arasındaki sayıların toplamını bul

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Total : " + sum);

//3️⃣ 1000 TL, her turda %10 artarak 2000 TL’yi geçsin → kaç tur?

let cash = 1000;
let round = 0;

while (cash <= 2000) {
  cash += (cash * 10) / 100;
  round++;
}
console.log("Total Cash :" + Math.floor(cash));
console.log("Round :" + round);
