let str = `  fx(3)= 2x^2 + 5x - 7 ;  LIMIT->∞ ;  seq:[1, 1, 2, 3,5,8] | user:ALPHA_99 |
  fx(5)= 2x^2 +5x -7;   ERROR;  seq:[13,21,34] |
  meta{ valid=true , score=  42  } ;
  fx(-2)=2x^2+5x-7 ; seq:[55,89] | user:beta_01 |
  fx(1)=2x^2+5x-7 ; meta{valid=false,score=13}`;

str = str.trim();
str = str.toLowerCase();
console.log(str);

let userWriteCount = 0;

str = str.split("");
let newSplitStr = [];
newSplitStr = str;

console.log(newSplitStr);

let count = 0;

for (let i = 0; i < newSplitStr.length; i++) {

  if(newSplitStr[i].includes(";")){
    count++
  }
}
console.log(count);

