const section = document.createElement("section");
const button = document.createElement("button");
const header = document.querySelector("header");

button.id = "click";
button.className = "btn mt-3 click-me";
button.innerHTML = "CLİCK ME";

header.appendChild(section);
section.appendChild(button);