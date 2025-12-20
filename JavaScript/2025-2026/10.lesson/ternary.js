let rabbitSpeed = 18; // km/s
let turtleSpeed = 4000000; // km/s
let distance = 12; // km

let rabbitTime = distance / rabbitSpeed;
let turtleTime = distance / turtleSpeed;

if (rabbitTime < turtleTime) {
  console.log("Tavsan Kazandi");
} else {
  console.log("Kaplumbağa Kazandi");
}

let speedDifference = turtleSpeed - rabbitSpeed;

switch (true) {
  case speedDifference >= 15:
    console.log("Ezici Fark");
    break;
  case speedDifference >= 8:
    console.log("Büyük fark");
    break;
  default:
    console.log("Yakin Yaris");
    break;
}

let raceComment = rabbitSpeed < 1 ? "Çok hizli yariş" : "Normal hizda yariş";
console.log(raceComment);
