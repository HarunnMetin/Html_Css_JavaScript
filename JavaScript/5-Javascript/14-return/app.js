//? GERIYE DEGER DONDUREN METHOD

let sayi = Number(prompt("Sayi giriniz"));



function cube(sayi) {
  console.log(sayi * sayi * sayi);
}

let donenDeger = carpim(sayi);
console.log(donenDeger);


function carpim(sayi){
    let sonuc = sayi * sayi;
    return sonuc;
}
