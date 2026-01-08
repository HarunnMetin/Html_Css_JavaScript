let i = 0;
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
const colors = ["red", "green", "blue"];

const btn = document.querySelector(".btn");
const box = document.querySelector("#box");





btn.addEventListener("click", () => {
  box.style.backgroundColor = colors[i%3];
  i++;
});

