let arr = [400, 100, 20, 75, 45, 750, 320];

const productPrice = (arr) => {
  let bigPrice = arr[0];
  let underOnewHunderedProduct = 0;
  let total = 0;
  let avarage = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bigPrice) {
      bigPrice = arr[i];
    }
    if (arr[i] < 100) {
      underOnewHunderedProduct++;
    }
    total += arr[i];
    avarage = total / arr.length;
  }
  console.log("Buyuk fiyat :" + bigPrice);
  console.log("100 alti urun :" + underOnewHunderedProduct);
  console.log("Ortalama : " + avarage.toFixed(1));

  return avarage;
};

productPrice(arr);
