//? INPUT EVENT

const input = document.querySelector("#isim");

input.addEventListener("focus",run);

function run(){
  console.log("focus");
  
}

input.addEventListener("copy",copy);

function copy(){

  console.log("copy");
  
}

input.addEventListener("cut",cut);

function cut(){
  console.log("cut");
  
}


