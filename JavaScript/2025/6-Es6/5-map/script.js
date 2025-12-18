const map1 = new Map();

const obj = { ad: "harun", soyad: "metin" };
map1.set(1, "harun");
map1.set(true, "metin");
map1.set(obj, ["a", "b", "c"]);

// let sonuc = map1.get(1);
// console.log(sonuc);

map1.forEach((value, key) => {
  console.log(key, value);
});

console.log(map1.delete(1));
console.log(map1.size);

console.log(map1.has(true));

for (let [key, value] of map1) {
  console.log(key, value);
}

console.log("*****************************");

let arr = [1, 2, 3, 4];
let [a, b, ...kalanlar] = arr;
console.log(a, b, ...kalanlar);

console.log("½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½½");

let map2 = new Map();

map2.set(1, "Madrid");
map2.set(2, "Barcelona");
map2.set(3, "Istanbul");
map2.set(4, "Helsinki");

const keys = Array.from(map2.keys());

keys.forEach((key) => {
  console.log(key, map2.get(key));
});
const value = map2.values();

// console.log(keys,value);

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

for (let key of map2.keys()) {
  console.log(key, map2.get(key));
}

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55");

for (let value of map2.values()) {
  console.log(value);
}

console.log("**************************************************");

const array = Array.from(map2);

array.forEach((value) => {
  console.log(value[0], value[1]);
});

// console.log(array);

// console.log(array[1]);
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&6");

let bilgiler = [
  ["elma", "armut"],
  ["soda", "kola"],
  ["araba", "bisiklet"],
  ["masa", "sandalye"],
  ["kedi", "köpek"],
];

const newMap = new Map(bilgiler);

console.log(newMap);

const arr1 = Array.from(newMap);
console.log(arr1);

arr1.forEach((arr) => {
  console.log(arr[0] + " > " + arr[1]);
});
