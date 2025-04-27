const set = new Set();

const obj = { no: 14 };

set.add("Harun");
set.add(false);
set.add(1);
set.add(obj);
set.add([1, 3, 5, 6, 0]);

set.delete(false);
console.log(set.size);
console.log(set.has(obj));

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5555");


for(let value of set){
  console.log(value);
  
}

console.log("*********************************");


const values = Array.from(set);

console.log(values);
console.log(values[3]);

let indexArr = Array.from(values[3]);
console.log(indexArr[0]);
console.log(indexArr[1]);
console.log(indexArr[2]);


console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

let bilgiler = [
  ["Einstein", "Relativity", 1879],
  ["Newton", "Gravity", 1643],
  ["Curie", "Radioactivity", 1867],
  ["Tesla", "Electromagnetism", 1856],
  ["Galileo", "Telescope", 1564],
];


const newSet = new Set(bilgiler);

console.log(newSet);




