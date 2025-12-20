/*
1️⃣ Toplam Tutarı Hesapla

usage * unitPrice

Sonucu bill adlı değişkene ata

2️⃣ Kullanıma Göre Zam Uygula (if / else if / else)

KURALLAR:

Eğer usage > 300 → faturaya %25 zam

Değilse ama usage > 200 → %15 zam

Aksi halde → %5 zam

📌 Zam = oran, direkt sayı ekleme yok 
*/

let usage = 380; // kWh
let unitPrice = 1.8; // TL

let bill = usage * unitPrice;

if (usage > 300) {
  bill += bill * (25 / 100);
  
} else if (usage > 200) {
  bill += bill * (15 / 100);
} else {
  bill += bill * (5 / 100);
}

console.log("Fatura :"+bill);

let consumeLevel;

switch (true) {
  case (usage > 400):
    consumeLevel = "Cok Yuksek";
    break;
  case (usage > 250 ):
    consumeLevel = "Yuksek";
    break;
  default:
    consumeLevel = "Normal";
    break;
}
console.log("Tuketim Seviyesi :" +consumeLevel);


let result = bill > 600 ? "Pahali Fatura" : "Normal Fatura";
console.log("Sonuc :"+result);

