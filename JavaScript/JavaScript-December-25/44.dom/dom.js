const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
console.log(decrease);
const card = document.querySelector(".card");
console.log(card);
const title = document.querySelector(".title");
title.textContent = "Selam krallll";
title.innerHTML = "<h5>Helloooo</h5>";

title.style.color = "red";
title.style.fontSize = "45px";
title.style.backgroundColor = "black";
title.classList.add(".active");

const item = document.querySelectorAll(".item ");

item.forEach((item) => {
  item.textContent = "Degisti";
  item.style.color = "blue";
});
