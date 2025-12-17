class Person {
  firstName = "Harun";

  write() {
    console.log(`Person write : ${this.firstName}`);
  }
}

class Student extends Person {
  write() {
    console.log(`Student write : ${this.firstName}`);
    console.log(super.write());
  }
}

const student = new Student();
student.write();

// const person = new Person();
// person.write();
