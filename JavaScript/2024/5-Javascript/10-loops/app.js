let sayi = 1;
let sonuc = "";

// while (sayi <= 10) {
//   sonuc += sayi + " ";

//   sayi++;
// }
// console.log(sonuc);
let cift = " ";
let tek = " ";

while (sayi <= 10) {
  if (sayi % 2 == 0) {
    cift += sayi + " ";
  } else {
    tek += sayi + " ";
  }
  sayi++;
}

console.log("Cift :" + cift);
console.log("Tek :" + tek);
