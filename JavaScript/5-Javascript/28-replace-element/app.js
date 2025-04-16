const body = document.querySelector("body");


let h1 = document.createElement("h1");
h1.style.fontSize = "60px";
h1.innerHTML = "WELCOME TO NEW WORLD";

let replaceElement = body.childNodes[7];
console.log(replaceElement);

body.replaceChild(h1,replaceElement)




