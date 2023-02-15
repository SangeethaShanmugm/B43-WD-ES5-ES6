//class -  blueprint of an object
//create an object
// this  - to access a property of an object
//setter - set the value of an object
//getter - get the value of an object

function Person3() {
  (this.name = "Anusha"), (this.age = 20);
}

//creating an object
const person1 = new Person3();
console.log(person1.name); //Anusha

//creating a class
class Person {
  constructor(name) {
    this.name = name;
    // this.age = age;
  }
  greet = () => {
    return `Say Hi to ${name}`;
  };
  //getter
  //accessor property(getter)
  get PersonName() {
    return this.name;
  }
  //setter
  //accessor property(setter)
  set PersonName(n) {
    this.name = n;
  }
}

//create an object
const person2 = new Person("John");
console.log("Getter Person Name is =", person2.name);
// console.log("Person Age is =", person2.age);
// Person Name is = John
//  Person Age is = 30

//changing value of name property
person2.PersonName = "Jack";
console.log("Setter Person Name is =", person2.name);

//this
let firstName = "Ari";
let lastName = "Krishnan";

let SayHi = {
  firstName: "Arjun",
  lastName: "Singh",
  greet: function () {
    return `Say Hi to ${firstName} ${lastName}`;
  },
};
console.log(SayHi.greet());
