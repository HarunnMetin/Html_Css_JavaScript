let cars = ["Porshe", "Lamborghini", "Tesla", "Ford", "Toyota"];

cars.push("Maserati");
cars.forEach(function (car) {
  console.log(car);
});
console.log(cars);
console.log("************************************");

cars.unshift("Honda");

cars.forEach(function (car) {
  console.log(car);
});

console.log("************************************");

cars.pop();

cars.forEach(function (car) {
  console.log(car);
});
console.log("************************************");


let arr = ["Mavi","Beyaz","Sari","Yesil"];

arr.splice(0,0,"Pembe");
console.log(arr);


let stringArr = arr.join("****");
console.log(stringArr);

let tostringArr = arr.toString();
console.log(tostringArr);


let birlesim = cars.concat(arr);
console.log(birlesim.toString());

let tersi = arr.reverse().toString();

console.log(tersi);

let index = arr.indexOf("Sari");
console.log(index);

let includ = arr.includes("mavi");
console.log(includ);











