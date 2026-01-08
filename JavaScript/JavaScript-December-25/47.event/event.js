/*
🔹 1. TIK
<p> yazısı: "Kırmızı ve Kalın"
Yazı rengi: kırmızı
Yazı bold */

/*
🔹 2. TIK
<p> yazısı: "Mavi ve İtalik"
Yazı rengi: mavi
Yazı italic*/

/*
🔹 3. TIK
<p> yazısı innerHTML ile:
<span style="color: green;">Yeşil HTML</span>
*/

/*

🔹 4. TIK
<p> içeriği:
Sıfırlandı
Tüm stiller kaldırılsın */

/*
🔁 5. TIk
Döngü tekrar 1. adıma dönsün
*/

let clickCount = 0;

const text = document.querySelector("#text");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  clickCount++;

  const step = clickCount % 4;

  text.style.color = "";
  text.style.fontWeight = "";
  text.style.fontStyle = "";

  if (step === 1) {
    text.innerText = "Kirmizi ve Kalin";
    text.style.color = "red";
    text.style.fontWeight = "bold";
  } else if (step === 2) {
    text.innerText = "Mavi ve İtalik";
    text.style.color = "blue";
    text.style.fontStyle = "italic";
  } else if (step === 3) {
    text.innerHTML = `<span style="color: green;">Yeşil HTML</span>`;
  } else {
    text.innerText = "Sifirlandi";
  }
});
