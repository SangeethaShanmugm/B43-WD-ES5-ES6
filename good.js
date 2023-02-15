//named import renaming
import { printDetails4 as provideInfo, double, Msg } from "./util.js"; //named import

const student = {
  name: "Deepika",
  age: 20,
  batch: "B43WD",
  score: 90,
};

console.log(provideInfo(student));
console.log(double(10));
console.log(Msg);

//default
// import Msg from "./util.js";
// import printDetails4 from "./util.js";

//default import renaming
// import myFunction from "./util.js";

// console.log(myFunction(student));

// const student = {
//   name: "Deepika",
//   age: 20,
//   batch: "B43WD",
//   score: 90,
// };

// // console.log(Msg);
// console.log(printDetails4(student));
