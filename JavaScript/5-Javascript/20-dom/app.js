let value;

value = document.getElementById("container");

console.log(value);

const button = document.getElementById("buttonClick");
console.log(button.id);
console.log(button.getAttribute("id"));

if (button.getAttribute("id") == "buttonClick") {
  console.log("Right");
} else {
  console.log("Left");
}

// const classList = button.classList;

const classList = button.classList;

classList.forEach(function (classList) {
  console.log(classList);
});

// console.log(classList);

button.innerHTML = "<b>No Click</b>";

let buttonText = button.textContent;
let buttonHtml = button.innerHTML;

console.log(buttonText);
console.log(buttonHtml);
