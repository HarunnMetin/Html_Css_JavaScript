let prices = [120, 80, 200, 45, 300, 90, 150];

prices.push(60);
prices.unshift(500);

console.log(prices);

prices.pop();
prices.shift();

console.log(prices);

console.log(prices.includes(200));

console.log(prices.indexOf(45));

let newPriceArr = prices.slice(0, 4);

console.log(newPriceArr);

let raiseNewPrice = [];
for (let i = 0; i < prices.length; i++) {
  let increase = prices[i] + prices[i]*(10/100);
  raiseNewPrice.push(increase)
  
}
console.log(raiseNewPrice);


