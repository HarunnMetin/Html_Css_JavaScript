/*Bir öğrencinin:

Adı

3 sınav notu

Devamsızlık gün sayısı

veriliyor.

📌 Kurallar

Ortalama hesaplanacak

Ortalama:

≥ 85 → "Pekiyi"

70 – 84 → "İyi"

50 – 69 → "Orta"

< 50 → "Kaldı"

Eğer devamsızlık > 10 ise:

Ortalama ne olursa olsun "Devamsızlıktan Kaldı"*/

let studentName = "Faruk";
let studentGrade1 = 80;
let studentGrade2 = 85;
let studentGrade3 = 76;

let absence = 3;

let avarage = (studentGrade1 + studentGrade2 + studentGrade3) / 3;

if (absence > 10) {
  console.log("STUDENT STAYED CLASS REASON: ABSENCE");
} else {
  if (avarage >= 85) {
    console.log("STUDENT GRADE IS GOOD AVARAGE: " + `${avarage.toFixed(1)}`);
  } else if ((avarage >= 70) & (avarage < 85)) {
    console.log("STUDENT GRADE IS MEDİUM AVARAGE: " + `${avarage.toFixed(1)}`);
  } else {
    console.log("STUDENT STAYED THE CLASS REASON: AVARAGE İS LESS " + `${avarage.toFixed(1)}`);
  }
}
