//let const - block scope
//scope -lifetime of a variable
//{}  - block
// var  - function scope
{
  let y1 = 10;
  var y2 = 20;
}
// console.log(y1); // not defined
console.log(y2);

// not defined(error) vs undefined(value)

//can a block hold a var or will it leak outside?

//hoisting

console.log(a);
//100 lines
var a = 50;
console.log(a);

// JS - Does compilation happens? Yes
// JIT - Just In Time Compilation
// 1. compilation Phase
// 2. Execution Phase
//JS, context

//Example 1
// 1. compilation Phase
console.log(a); //Skip
var a = 50; // JS - Do you know a? No | What is value? -> context - undefined
console.log(a); //Skip

// 2. Execution Phase

console.log(a); // JS - Do you know a? Yes | What is value? - undefined
var a = 50; // JS - Do you know a? Yes | What is value? -> Note down ->  context - > a = 50
console.log(a); // JS - Do you know a? Yes | What is value? - 50

//Example 2
// 1. compilation Phase

// console.log(a1); // skip
// let a1 = 50; // JS - Do you know a1? No | What is value? -> context - dont initialize
// console.log(a1); // skip

// // 2. Execution Phase

// console.log(a1); // JS - Do you know a1? Yes | What is value? -> context -> Error
// let a1 = 50;
// console.log(a1);

// redeclaration and reassignment

// var - redeclare and reassign
// var a  -> declaration
// a = 10 -> assignment

var a = 10;
var a = 20;
console.log(a);
// let -redeclare not allowed and reassign is allowed
let b = 10;
b = 20;
console.log(b);
// const - redeclare not allowed and reassign not allowed
// const c = 10;
// c = 20;
// console.log(c);

var price = 1000; //pant

function getPrice() {
  console.log("The old price is", price); //1000
  var price = 500; //MSD
  console.log("The new price is", price); //1000
}

getPrice();

// The old price is undefined
// The new price is 500

// The old price is 1000
// The new price is 1000

//shadowing - same var name , outside price lives in the shadow of inside price
// you cannot access outside price in the function
