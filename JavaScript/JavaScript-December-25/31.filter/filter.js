/*
1️⃣ 100 TL üstü fiyatları al
2️⃣ 200 TL üstü ürünleri ayır
3️⃣ 100 TL altı ürünleri listele
*/

let prices = [120, 80, 250, 40, 300, 90];

let over100 = prices.filter((price) => {
  if (price > 100) {
    return price;
  }
});
let over200 = prices.filter((price) => {
  if (price > 200) {
    return price;
  }
});
let under100 = prices.filter((price) => {
  if (price < 100) {
    return price;
  }
});

console.log(over100);
console.log(over200);
console.log(under100);
