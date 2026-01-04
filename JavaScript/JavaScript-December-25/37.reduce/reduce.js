//Sepetin toplam fiyatını hesapla

const cart = [
  { name: "Phone", price: 1000 },
  { name: "Headset", price: 200, discountPrice: 150 },
  { name: "Charger", price: 50 },
];

let totalBalance = cart.reduce((total, produce) => {
  let price = produce.discountPrice ?? produce.price;
  return total + price;
}, 0);

console.log(totalBalance);
