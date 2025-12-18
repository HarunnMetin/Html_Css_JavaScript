let number = [15, 10, 10, 10];

const add = (a, b, c, d) => {
  console.log(a + b + c + d);
};

add(...number);

const diller = ["Java", "Python"];
// const diller2 = ["PHP","Html",diller[0],diller[1]];
const diller2 = ["PHP", "Html", ...diller];

console.log(diller2);

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, ...kalanSayilar] = sayilar;

console.log(a, b, kalanSayilar);

let array1 = ["A", "B", "C", "D"];
let array2 = [];

// array2[0] = array1[0];
// array2[1] = array1[1];
// array2[2] = array1[2];
// array2[3] = array1[3];

array2 = [...array1];

console.log(array2);

