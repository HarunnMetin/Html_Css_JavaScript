

let names = ["ali","can","demir","ayse"];

// names.forEach(function(name){
//   console.log(name);
  
// })

// names.forEach((name)=>{

//   console.log(name);
  
// })

for(let name in names){
  console.log(name,names[name]);
  
}

for(let isim of names){
  console.log(isim,names.indexOf(isim));
  
}

