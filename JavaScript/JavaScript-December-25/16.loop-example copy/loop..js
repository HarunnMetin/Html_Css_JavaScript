let star = "";

for (let i = 1; i <= 5; i++) {
  star += "*";
  console.log(star);
}
for (let j = 5; j > 0; j--) {
  star =  star.slice(0,-1);
  console.log(star);
}
