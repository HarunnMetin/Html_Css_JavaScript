class Insan {
  constructor(isim, soyisim, yas, maas) {
    this.isim = "Hacer";
    this.soyisim = "Deniz";
    this.yas = 45;
    this.maas = 90000;

    // console.log("constructor calisti");
  }

  bilgileriGoster() {
    console.log(
      `
       Isim: ${this.isim} 
       Soyisim: ${this.soyisim} 
       Yas: ${this.yas} 
       Maas: ${this.maas}`
    );
  }
}

const insan1 = new Insan();
insan1.bilgileriGoster();
