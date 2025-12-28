/*
Bir fonksiyon:

fiyat alacak

vergi oranı alacak

indirim varsa düşecek

sonra vergi ekleyecek

sonucu return edecek

fiyat ≤ 0 ise hemen çıkacak 


*/

let price = 3000;
let taxRate = 30;
let discount = 13;

console.log(product(price, taxRate, discount));

function product(price, taxRate, discount) {
  if (price <= 0) {
    console.log("Fiyat 0 dan kucuk olamaz");
  }
  let discountAmount = (price * discount) / 100;
  let discountedAmount = price - discountAmount;
  let taxRateAmount = discountedAmount * (taxRate / 100);
  let finalyPrice = discountedAmount + taxRateAmount;

  return finalyPrice;
}
