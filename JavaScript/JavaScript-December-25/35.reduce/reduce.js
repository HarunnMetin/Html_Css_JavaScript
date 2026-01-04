/*
Banlı olmayan

Level ≥ 10

En yüksek level’a sahip oyuncuyu bul

Yoksa → null
*/

const players = [
  { username: "Shadow", level: 12, banned: false },
  { username: "RogueX", level: 25, banned: true },
  { username: "Knight", level: 18, banned: false },
  { username: "Noob", level: 9, banned: false },
];

let noBnnedPlayer = players.reduce((find, player) => {
  if (player.banned === true) {
    return find;
  }
  if (player.level <10) {
    return find;
  }
  if (find === null) {
    return player;
  }
  if (player.level > find.level) {
    return player;
  }

  return find;
}, null);

console.log(noBnnedPlayer);
