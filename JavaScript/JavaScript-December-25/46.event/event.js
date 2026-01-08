/*
1️⃣ Sayfa açıldığında sonuç 0 olacak
2️⃣ +5 butonuna her tıklamada sayı 5 artsın
3️⃣ -3 butonuna her tıklamada sayı 3 azalsın
4️⃣ ×2 butonuna her tıklamada sayı 2 ile çarpılsın
5️⃣ Reset butonu sonucu 0 yapsın
6️⃣ Tüm işlemler aynı sayı üzerinden devam etsin
7️⃣ Sadece addEventListener("click") kullan
*/

const result = document.querySelector("#result");
let count = 0;

const add = document.querySelector(".add");
add.addEventListener("click", () => {
  count += 5;
  result.textContent = count;
});
const sub = document.querySelector(".sub");
sub.addEventListener("click", () => {
  count -= 3;
  result.textContent = count;
});
const mul = document.querySelector(".mul");
mul.addEventListener("click", () => {
  count *= 2;
  result.textContent = count;
});
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  count = 0;
  result.textContent = count;
});
