const correct = 4;
const wrong = 15;
const empty = 19;
const isCheated = true;

let net = correct - wrong / 4;

if (isCheated) {
  if (net >= 10) {
    console.log("Gecti");
    console.log("NET: " + net);
  } else {
    console.log("Kaldi");
  }
} else {
  console.log("Sinav Iptal");
}
