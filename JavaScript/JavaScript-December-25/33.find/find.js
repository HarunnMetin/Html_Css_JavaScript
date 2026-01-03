/*
✔️ Banlı OLMAYACAK
✔️ Level ≥ 20
✔️ Kazanma sayısı EN AZ 5
✔️ Enerji 50 ve üzeri

*/

let players = [
  { username: "Alpha", level: 18, banned: false, wins: 3, energy: 40 },
  { username: "Bravo", level: 22, banned: false, wins: 7, energy: 20 },
  { username: "Charlie", level: 15, banned: true, wins: 10, energy: 80 },
  { username: "Delta", level: 25, banned: false, wins: 10, energy: 65 },
  { username: "Echo", level: 30, banned: false, wins: 2, energy: 90 },
];

let firstPlayer = players.find((player) => {
  return (
    player.level >= 20 &&
    player.banned === false &&
    player.wins > 4 &&
    player.energy > 50
  );
});

if (firstPlayer) {
  console.log("Turnuvaya giren oyuncu:" + firstPlayer.username);
  console.log("Level:" + firstPlayer.level);
  console.log("Enerji:" + firstPlayer.energy);
} else {
  console.log("Uygun oyuncu yok");
}
