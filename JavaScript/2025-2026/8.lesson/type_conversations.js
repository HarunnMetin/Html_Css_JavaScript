let price = "300";
let discountRate = "15"; // yüzde
let shipping = "40"; // TL
let taxRate = "18"; // yüzde

/*
İndirim uygula
2️⃣ Kargo ekle
3️⃣ Vergi ekle
4️⃣ Final fiyatı yazdır
*/

price = Number(price);
discountRate = Number(discountRate);
shipping = Number(shipping);
taxRate = Number(taxRate);

let discountAmount = price * (discountRate / 100);
let subTotal = price - discountAmount;
subTotal += shipping;
subTotal += subTotal * (taxRate / 100);
console.log(subTotal);
