birikim(1000);

function birikim(bakiye) {
  let month = 0;
  while (bakiye < 2000) {
    month++;
    bakiye += bakiye * 0.08;
    if (month % 3 === 0) {
      bakiye += 100;
    }
  }
  console.log(Math.floor(bakiye));
}
