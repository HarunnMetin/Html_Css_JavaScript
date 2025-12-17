sessionStorage.setItem("TC", "1363163413784");
sessionStorage.setItem("A", "Alfabenin ilk harfi");

sessionStorage.setItem("304", "Deniz Sert");

sessionStorage.removeItem("TC");

let value = sessionStorage.getItem("A");

if (value === null) {
  console.log("Deger Bulunamadi");
} else {
  console.log("Deger Bulundu :", value);
}

sessionStorage.clear();
