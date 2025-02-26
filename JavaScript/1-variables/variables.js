

let num = "35";

let intNum = parseInt(num);

console.log(intNum * 2 );

let a = "5";
let b = 2;
let c = a * b;
console.log(c); 

//Kullanıcıdan alınan bir metni büyük harfe çevir ve ters çevirerek ekrana yazdır.

let userText = "hey i am the best ";

let reverseText = userText.split(" ").reverse().join().replaceAll(","," ");

console.log(reverseText);

//Bir cümlede kaç tane boşluk olduğunu bulan kodu yaz.

let text = "Are u okey to go to camp!";

let totalSplit = text.split(" ").length-1;

console.log("total split: " + totalSplit);

//Kullanıcının girdiği metin içinde "JavaScript" kelimesi geçiyorsa, onu "JS" ile değiştirerek ekrana yazdır.

let userText2 = "Hello i love JavaScript so much";

let content = userText2.includes("JavaScript");
// console.log(content);

if(content === true){

    let newText = userText2.replace("JavaScript","JS");
    console.log(newText);
    

}





