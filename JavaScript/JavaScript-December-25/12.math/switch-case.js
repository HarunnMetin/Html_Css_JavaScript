let balance = 5000; // TL
let interestRate = 12; // %
let months = 5.6; // ay

months = Math.ceil(months);

let interest = (balance * interestRate * months) / 100;

interest = Math.floor(interest);


let totalBalance = interest + balance;

console.log(Math.ceil(totalBalance));

let profit = totalBalance - balance;

if (profit >= 1000) {
  console.log("Guzel Kazanc");
} else {
  console.log("Dusuk Kazanc");
}
