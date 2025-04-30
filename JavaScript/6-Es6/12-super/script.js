// Kullanıcı sınıfı
class Kullanici {
  constructor(ad, yas) {
    this.ad = ad;
    this.yas = yas;
    this.sepet = [];
  }

  selamla() {
    console.log(`Merhaba, ben ${this.ad}.`);
  }

  sepeteEkle(urun) {
    this.sepet.push(urun);
    console.log(`${this.ad}, "${urun}" ürününü sepete ekledi.`);
  }

  sepetiGoster() {
    console.log(`${this.ad}'nin sepeti:`, this.sepet);
  }
}

// Ürün sınıfı
class Urun extends Kullanici{
  constructor(ad, fiyat, stok) {
    this.ad = ad;
    this.fiyat = fiyat;
    this.stok = stok;
  }

  bilgiGoster() {
    console.log(
      `Ürün: ${this.ad}, Fiyat: ${this.fiyat} TL, Stok: ${this.stok}`
    );
  }

  sat(adet) {
    if (adet > this.stok) {
      console.log(`Yeterli stok yok. Kalan: ${this.stok}`);
    } else {
      this.stok -= adet;
      console.log(`${adet} adet ${this.ad} satildi. Kalan stok: ${this.stok}`);
    }
  }
}

// Kullanım örneği
const kisi = new Kullanici("Zeynep", 25);
kisi.selamla();
kisi.sepeteEkle("Klavye");
kisi.sepetiGoster();

const urun = new Urun("Klavye", 350, 10);
urun.bilgiGoster();
urun.sat(2);
