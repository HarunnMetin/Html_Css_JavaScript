const container = document.querySelector(".container");
const card2 = document.querySelector("#card2");

let value;

value = container.children;

value = Array.from(value);

value.forEach(function (item) {
  item.style.backgroundColor = "#60B5FF";
  let firstChild = container.children[0];
  firstChild.textContent = "WHY NOT";
});



value = card2.parentElement.parentElement;


value = card2.children[0];
value = card2.nextElementSibling;
// value = card2.nextElementSibling.nextElementSibling;


console.log(value);
