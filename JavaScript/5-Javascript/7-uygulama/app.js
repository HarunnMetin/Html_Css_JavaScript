let yeniSatir = "\r\n";

let metin =
  "LUTFEN BIR GUN SECINIZ \r\n" +
  "1-Pazartesi \r\n" +
  "2-Sali \r\n" +
  "3-Carsamba \r\n" +
  "4-Persembe \r\n" +
  "5-Cuma \r\n" +
  "6-Cumartesi \r\n" +
  "7-Pazar ";

let secilenGun = Number(prompt(metin));

switch (secilenGun) {
  case 1: {
    console.log("secilen gun Pazartesi");
    break;
  }
  case 2: {
    console.log("secilen gun Sali");
    break;
  }
  case 3: {
    console.log("secilen gun Carsamba");
    break;
  }
  case 4: {
    console.log("secilen gun Persembe");
    break;
  }
  case 5: {
    console.log("secilen gun Cuma");
    break;
  }
  case 6: {
    console.log("secilen gun Cumartesi");
    break;
  }
  case 7: {
    console.log("secilen gun Pazar");
    break;
  }
  default: {
    console.log("lutfen gün giriniz");
    break;
  }
}
