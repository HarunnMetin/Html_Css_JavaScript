let fiyat = 60;
let indirimOrani = 10;

function price(fiyat, indirimOrani) {
  let indirim = (fiyat * indirimOrani) / 100;
  let yeniFiyat = fiyat - indirim;

  if (yeniFiyat < 0) {
    console.log("Fiyat sifirdan kucuk");
  }
  return yeniFiyat;
}

console.log(price(fiyat,indirimOrani));

