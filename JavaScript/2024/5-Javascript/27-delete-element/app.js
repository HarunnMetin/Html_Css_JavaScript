const header = document.querySelector("header");

// const ilkElement = header.firstElementChild;
// ilkElement.remove();

// console.log(ilkElement);

const nav = document.querySelectorAll("nav>ul");
let ulArray = Array.from(nav);

console.log(nav);
nav.forEach(function (ul) {
  console.log(ul.textContent);
  if (ul[1].textContent == "Hizmetler") {
    ul[0].innerHTML = "EVET";
  } else {
    ul[2].innerHTML = "HAYIR";
  }
});
