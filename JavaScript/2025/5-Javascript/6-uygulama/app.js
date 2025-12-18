let yol1 = document.querySelector(".container .yol1");
let yol2 = document.querySelector(".container .yol2");
let yol3 = document.querySelector(".container .yol3");

let secilenYol = prompt("secmek istediginiz yolu seciniz");

if (secilenYol === "1") {
  yol1.style.backgroundColor = "#F1E7E7";
  yol1.style.color = "#210F37";

  yol1.innerHTML = "<h1>Yola Hosgeldiniz</h1>";
} 

else if (secilenYol === "2") {
  yol2.style.backgroundColor = "#8F87F1";
  yol2.style.color = "#210F37";
  yol2.innerHTML = "<h1>Yola Hosgeldiniz</h1>";
} 

else if (secilenYol === "3") {
  yol3.style.backgroundColor = "#7D0A0A";
  yol3.style.color = "#BE5985";
  yol3.innerHTML = "<h1>Yola Hosgeldiniz</h1>";
}
else{
    alert("Boyle Bir Yol Yok");
}
