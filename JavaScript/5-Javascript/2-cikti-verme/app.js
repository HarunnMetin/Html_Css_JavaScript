const p = document.querySelector("p");
p.innerText = "hello";

document.writeln("hello 2");
document.write("Thats easy");

console.log("clear");
console.log("clear");
console.log("clear");

let a = 45;
let b = 15;

setTimeout(() => {
  if (a / b === 3) {
    console.log("buyuktur");
  } else {
    console.clear();
  }
}, 2000);

console.log(window);
console.log(document.location.host);

alert("hosgeldiniz");
setTimeout(() => {
  alert("iki sayinin toplami:" + (a + b));
}, 1000);

console.log(window.location.port);




