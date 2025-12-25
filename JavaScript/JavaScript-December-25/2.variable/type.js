/*name → string

price → number

stock → number

isActive → boolean

discountRate → number veya null

description → string veya undefined*/

const productName = "Headphone";
let price = 30;
const stock = 50;
let isActive = true;
const discountRate = 51;
const description = undefined;

if (isActive == false) {
  console.log("Ürün satişa kapali");
} else {
  if (stock <= 0) {
    console.log("Ürün stokta yok");
  } else {
    if (discountRate != null) {
      let discount = price - (price * discountRate) / 100;
      console.log("Indirimli fiyati: " + discount);
    } else {
      if ((prise < 100) & (stock > 5)) {
        console.log("Urun satin alinabilir");
      } else {
        console.log("Urun satin alinamaz");
      }
    }
  }
}
