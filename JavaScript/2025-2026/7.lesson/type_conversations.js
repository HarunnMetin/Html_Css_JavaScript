let price = "120";
let discountRate = "25"; // yüzde

price = Number(price);
discountRate = Number(discountRate);

let discountAmount = price * discountRate /100;
let finalPrice = price - discountAmount;
console.log(finalPrice);
