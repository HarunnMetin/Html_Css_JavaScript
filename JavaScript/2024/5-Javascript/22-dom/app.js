const btn = document.querySelector("#myButton");

console.log(btn);

const lists = document.querySelectorAll("li:nth-child(even)");

lists.forEach(function(item){
    item.style.backgroundColor = "#BF9264";
    
})
console.log(lists);


