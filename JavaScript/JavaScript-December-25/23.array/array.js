const arr = [100, 40, 30, 210, 135, 16];

const price = (arr) => {
  let aboweOneHondretFifty = 0;
  let total = 0;

  for (const item of arr) {
    let increasePrice = item + (item * 10) / 100;
    if (increasePrice >= 150) {
      aboweOneHondretFifty++;
    }
    total += increasePrice;
  }
  console.log("150 Ustu olanlar :" + aboweOneHondretFifty);
  return total;
};

console.log(price(arr));
