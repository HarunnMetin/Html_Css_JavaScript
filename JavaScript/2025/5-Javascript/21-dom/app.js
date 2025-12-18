const lists = document.getElementsByClassName("listItems");

console.log(lists);

const listArray = Array.from(lists);

listArray.forEach(function(item){
    console.log(item);
    
})
