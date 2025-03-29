// birden 10 a kadar sayilari yazdiralim 8 e geldigimizde donguden cikalim

let sayi = 1;
let yanYanaDizilis = "";
while (sayi <= 10) {
  yanYanaDizilis += sayi + " ";

  if (sayi == 8) {
    break;
  }
  sayi++;
}
console.log(yanYanaDizilis);

let sayac = 1;
yanYanaDizilis = "";

while (sayac <= 10) {
  yanYanaDizilis += sayac + " ";
  sayac++;

  if (sayac == 8) {
    sayac++;
    continue;
  }
}
console.log(yanYanaDizilis);
