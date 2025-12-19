let num = "12" * 2;

let num2 = "34";
let result = Number(num2);

let num3 = "34px";
parseInt(num3);
result = parseInt("58px");
//console.log(result);

let password = "334kfi40rvko";

result = parseInt(password);
console.log(result);

let price = "200";
let quantity = "3";
let discount = "10"; // yüzde

let subTotal = Number(price) * Number(quantity);
let discountAmount = subTotal * Number(discount) / 100;

let finalPrice =subTotal- discountAmount;
console.log(finalPrice);


