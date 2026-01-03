let salaries = [8000, 12000, 6000, 15000];

let cost = 0;
let person = 0;
let moreThen10000 = [];
salaries.forEach((salary) => {
  if (salary > 10000) {
    moreThen10000.push(salary);
  } else if (salary < 7000) {
    person++;
  }

  cost += salary;
});
console.log(moreThen10000);
console.log("7000 den az maas alan kisi sayisi :" + person);
console.log("Toplam: " + cost);
