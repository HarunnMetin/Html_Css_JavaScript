/*
{
  totalPlayers: 4,
  bannedCount: 1,
  avgLevel: 16.0
}
*/

const players = [
  { username: "A", level: 10, banned: false },
  { username: "B", level: 20, banned: true },
  { username: "C", level: 15, banned: false },
  { username: "D", level: 19, banned: false },
];

let playerSum = players.reduce((totalPlayers, player) => {
  
    totalPlayers++;
  
  return totalPlayers;
}, 0);

console.log(playerSum);
let bannedCount = players.reduce((bannedCount, player) => {
  if (player.banned) {
    bannedCount++;
  }
  return bannedCount;
}, 0);

console.log(bannedCount);

let avgLevel = players.reduce((levelSum, player) => {
   levelSum += player.level/playerSum;
  return levelSum;
},0);
console.log(avgLevel);
