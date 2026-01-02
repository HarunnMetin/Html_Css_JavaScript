let prices = [120, 80, 250, 40, 300, 90];

let increasePrice = prices.map((price) => {
  if (price >= 200) {
    return price + price * 0.15;
  } else if (price >= 100 && price < 200) {
    return price + price * 0.1;
  } else{
    return price + price * 0.05;
  }
});

console.log(increasePrice);
