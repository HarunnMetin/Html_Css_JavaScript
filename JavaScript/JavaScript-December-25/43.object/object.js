let person = {
  name: "Ali",
  age: 20,
  address: {
    city: "İstanbul",
    country: "Türkiye",
  },
  sayname() {
    console.log("Benim adim ", this.name, " yasim ", this.age);
  },
  haveBirthday() {
    this.age++;
    console.log("Yeni yasim ", this.age);
  },
  showLocation() {
    console.log("Ikamet adresim ", this.address.city, "/", this.address.country);
  },
  getSummary() {
    return {
      name: this.name,
      age: this.age,
      city: this.address.city,
    };
  },
};
console.log("Isim :", person.name, " Yas :", person.age);
person.sayname();
person.haveBirthday();
person.showLocation();

console.log(person.getSummary());
