let cumle = prompt("Cumle Giriniz");

let sonuc = kelimeHesaplama(cumle);
console.log(sonuc);

function kelimeHesaplama(cumle) {
  let kelime = cumle.trim().split(" ");
  let kelimeSayisi = kelime.length;
  return kelimeSayisi;
}
