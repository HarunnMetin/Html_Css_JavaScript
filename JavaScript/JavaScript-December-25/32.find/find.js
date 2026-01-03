/*
1️⃣ Level ≥ 10 olan ve banlı olmayan ilk oyuncuyu bul
2️⃣ Eğer yoksa "Uygun oyuncu yok" yazdır
3️⃣ Bulunan oyuncunun adını ve level’ını yazdır
*/

let players = [
  { username: "Shadow", level: 12, banned: false },
  { username: "RogueX", level: 8, banned: true },
  { username: "Knight", level: 20, banned: false },
  { username: "Mage", level: 5, banned: false },
];

let firstPlayer = players.find((player) => {
  return player.level > 10 && player.banned === false;
});

if (firstPlayer) {
  console.log("Ad :" + firstPlayer.username);
  console.log("Level :" + firstPlayer.level);
} else {
  console.log("Uygun oyuncu yok");
}
