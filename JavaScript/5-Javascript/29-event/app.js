//? EVENT

function changeTextContent() {
  document.querySelector(".h1").textContent = "HELLO SOFTWARE";
}


const list = document.querySelectorAll(".myList .listItem");
console.log(list);

const arrList = Array.from(list);


arrList[2].addEventListener("click",changeTextContent);

arrList[0].addEventListener("click",function(){
    alert("JavaScript");
})