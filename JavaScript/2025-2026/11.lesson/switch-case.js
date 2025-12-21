let totalBirds = "240";
let flyingAwayRate = "35"; // %
let landingRate = "20"; // %

totalBirds = Number(totalBirds);
flyingAwayRate = Number(flyingAwayRate);
landingRate = Number(landingRate);

let goneBird = totalBirds * (flyingAwayRate / 100);


let remainBirds = totalBirds - goneBird;

let landedBirds = remainBirds * (landingRate / 100);
let finalyBirds = landedBirds + remainBirds;

console.log(finalyBirds);

