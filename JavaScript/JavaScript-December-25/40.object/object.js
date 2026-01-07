const shop = {
  name: "Tech Store",
  products: [
    { name: "Phone", price: 1000, inStock: true },
    { name: "Headset", price: 200, inStock: false },
    { name: "Charger", price: 50, inStock: true },
  ],
  owner: {
    name: "Ali",
    isActive: true,
  },
};

//Mağaza sahibinin adını console’a yazdır.

console.log(`Magaza sahibi adi :${shop.owner.name}`);

//Stokta olmayan en az bir ürün var mı?

let stockControl = shop.products.some((product) => product.inStock === false);
if (stockControl) {
  console.log(`Stokta olmayan en az bir urun var`);
}

//Stokta olan ürünlerin toplam fiyatını hesapla.

let productCount = 0;

let stock = shop.products.reduce((acc, product) => {
  if (product.inStock) {
    acc += product.price;
  }
  return acc;
}, 0);

console.log(`Stokta olan ürünlerin toplam: ${stock}`);

//Stokta olmayan ürünün adını bul ve yazdır

let nonStockProduct = shop.products.find((product) => {
  if (product.inStock === false) {
    console.log(`Stokta olmayan urun adi :${product.name}`);
  }
});

//Stokta olan ürünlerin isimlerini bir array olarak çıkar

let inStockProduct = shop.products
  .filter((product) => product.inStock)
  .map((product) => product.name);

console.log(`Stokta olan urunlerin isimleri :${inStockProduct}`);
