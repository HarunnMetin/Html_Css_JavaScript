let colors = ["Red", "Black", "Green", "Pink"];

let colr1, colr2, colr3, colr4;

// colr1 = colors[0];
// colr2 = colors[1];
// colr3 = colors[2];
// colr4 = colors[3];

[colr1, colr2, colr3, colr4] = colors;

console.log(colr1, colr2, colr3, colr4);

const hesapla = (a, b) => {
  const toplam = a + b;
  const cikarma = a - b;
  const carpim = a * b;
  const bolum = a / b;

  const dizi = [toplam, cikarma, carpim, bolum];
  return dizi;
};

let [a,b,c,d] = hesapla(10,2);
console.log(a,b,c,d);

