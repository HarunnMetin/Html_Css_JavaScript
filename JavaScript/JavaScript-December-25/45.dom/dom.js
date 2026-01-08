const btn = document.querySelector(".btn");
const item = document.querySelectorAll(".item");
let btnPlus = document.querySelector(".btn-plus");
let count = document.querySelector("#count");
let btnMinus = document.querySelector(".btn-minus");

btn.addEventListener("click", () => {
  item.forEach((item) => {
    item.style.color = "red";
  });
  alert("Tiklandi ve kirmiziya döndü");
});
let start = 0;

btnPlus.addEventListener("click", () => {
  start++;
  count.textContent = start;
});

btnMinus.addEventListener("click", () => {
  start--;
  count.textContent = start;
});
