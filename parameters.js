//spread operator-> used to copy, expand, spread an array

const arr = ["Imagine", "the", "Impossible"]; // Array of strings

console.log(arr); //(3) ['Imagine', 'the', 'Impossible']
console.log(...arr); // Imagine the Impossible
console.log("Imagine", "the", "Impossible");

//copy array

const arr1 = ["red", "yellow"];
const arr2 = [...arr1, "black", "pink", "purple"];

console.log(arr2);
//["red", "yellow","black", "pink", "purple"]

//spread operator with object
const a = { x: 1, y: 2 };
const b = { z: 3 };
//adding a and b object property to c
const c = { ...a, ...b };
console.log(c);
// { x: 1, y: 2, z: 3  }

//rest parameter - when spread operator is used as a parameter

let func1 = function (...arg) {
  //parameter
  console.log(arg);
};

func1(1); //arguments // [1]
func1(2, 3, 4); // [2, 3, 4]

function add(x, y, x) {
  console.log(x + y + z);
}
const output = [5, 5, 5, 5];
add(...output); //15
