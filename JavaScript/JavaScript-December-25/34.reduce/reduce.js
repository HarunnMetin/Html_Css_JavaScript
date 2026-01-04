/*
1️⃣ Toplam bakiyeyi bul
2️⃣ Kaç tane harcama var (negatif)
3️⃣ Kaç tane gelir var (pozitif)
*/

let transactions = [120, -50, 300, -100, 200, -30];

let totalBalance = transactions.reduce((acc, total) => {
  return (acc + total);
}, 0);

console.log("Toplam bakiye:" + totalBalance);

let negativeSpending = transactions.reduce((count, value) => {
  if (value < 0) {
    count++;
  }
  return count;
}, 0);

console.log("Negatif harcama sayisi:" + negativeSpending);

let income = transactions.reduce((count, value) => {
  if (value > 0) {
    count++;
  }
  return count;
},0);
console.log("Gelir sayisi:" + income);
