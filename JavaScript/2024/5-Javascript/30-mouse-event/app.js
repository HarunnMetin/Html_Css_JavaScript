//? MOUSE EVENT

document.addEventListener("DOMContentLoaded", run);

function run() {
  alert("merhaba");
}

window.addEventListener("load",function(){
  alert("my object");
})

const h1 = document.querySelector(".h1");

h1.addEventListener("click",function(){
  console.log("Basliga tiklandi");
  
})

const h2 = document.querySelector(".h2");
h2.addEventListener("dblclick",function(){
  let a = 10;
  let b =20;
  console.log(a+b);
  
})

const h3 = document.querySelector(".h3");
h3.addEventListener("mouseover",function(){
  console.log("Mouse Over");
  
})

const img = document.querySelector(".img");
img.addEventListener("mouseout",function(){
  console.log("mouse out");
  
})

const myList = document.querySelectorAll(".myList .listItem");
const list = Array.from(myList);
list[0].addEventListener("mouseenter",function(){
  console.log("ilk eleman enter");
  
})
list[0].addEventListener("mouseleave", function () {
  console.log("ilk eleman leave");
});
console.log(myList);
