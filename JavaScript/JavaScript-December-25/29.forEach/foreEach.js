/*
1️⃣ Toplam ciroyu hesapla

2️⃣ 1000 TL üstü satış sayısını bul

3️⃣ 500 TL altı satışların ortalamasını hesapla
📌 (toplam / adet)

4️⃣ En yüksek satış tutarını bul

5️⃣ Satışlara göre seviye etiketi üret

2000+ → "Premium"

1000–1999 → "Standart"

altı → "Düşük"

📌 Etiketleri ayrı bir array’de tut
*/

let cost = 0;
let soldCount = 0;
let avarage = 0;

let lessThen500Count = 0;
let lessThen500Cost = 0;

let highSales = 0;

let label = [];

let sales = [1200, 450, 800, 2200, 150, 600, 3100];

sales.forEach((sale) => {
  cost += sale;
  if (sale > 1000) {
    soldCount++;
  }

  if (sale < 500) {
    lessThen500Count++;
    lessThen500Cost += sale;
    avarage = lessThen500Cost / lessThen500Count;
  }

  if (sale > highSales) {
    highSales = sale;
  }

  if (sale >= 2000) {
    label.push("Premium");
  } else if (sale >= 1000 && sale < 2000) {
    label.push("Standart");
  } else {
    label.push("Dusuk");
  }
});

console.log("Toplam Ciro :" + cost);
console.log("1000 tl ustu satilan urun sayisi :" + soldCount);
console.log("500 tl alti satislarin ortalamasi:" + avarage);
console.log("En yüksek satiş tutari:" + highSales);
console.log("Etiketler :" + label);
