let productPrice = 250;
let quantity = 3;
let stock = 10;
let discountRate = 15;
let taxRate = 18;
let userBalance = 700;
let isMember = true;
let usedCoupon = false;
let isBanned = false;

let subTotal = productPrice * quantity;
let discountAmount = (subTotal * discountRate) / 100;

if (isBanned) {
  console.log("Sipariş reddedildi");
} else {
  if (quantity > stock) {
    console.log("Yetersiz Stok");
  } else {
    console.log("Devam edilebilir");
  }
}
if (discountRate !== null && isMember === true) {
  subTotal -= discountAmount;
  console.log("Indirim : " + subTotal);
}
if (isMember !== true && usedCoupon === true) {
  subTotal += 50;
}

let tax = (subTotal * taxRate) / 100;

let total = subTotal + tax;
console.log(total);

const result =
  total >= 500 && quantity >= 2
    ? "Sipariş onaylandi (büyük sipariş)"
    : "Sipariş onaylandı";
console.log(result);
