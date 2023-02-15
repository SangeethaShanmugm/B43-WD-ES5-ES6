//closure => own function scope + lexical scope
// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
// //10

function x() {
  var a = 10;
  function y() {
    console.log(a); //10
  }
  return y;
}
var z = x();
console.log(z);
//ƒ y() {
//     console.log(a);
//   }
z();

function outer() {
  var a = 20;
  function inner() {
    console.log(a); //20
  }
  return inner;
}
// outer()();
var close = outer();
close();

//passing params
function outer(b) {
  function inner() {
    console.log(a, b); //10 'Hello'
  }
  let a = 10;
  return inner;
}
// outer()();
var close = outer("Hello");
close();
