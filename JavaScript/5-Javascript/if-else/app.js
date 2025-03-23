let not = 15;

if(not > 50){
    console.log("gectiniz " + not);
    
}
else{
    console.log("kaldiniz " + not);
    
}

let yas = Number(prompt("yasinizi giriniz :"));
let butce = Number(prompt("butcenizi giriniz"));

if(yas >= 18  && butce >= 15000){

    console.log("Aday ehliyet alabilir");
    alert("ehliyet alabilirsiniz");
    
}
else{
    console.log("Aday ehliyet alamaz");
    alert("ehliyet alamazsiniz");
}