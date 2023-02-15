//shorthand -> key and value name must be same

const age = 10;
const batch = "B43WD";
const mark = 90;

// const student = {
//   name: "Deepika",
//   age: age,
//   batch: batch,
// };

//object shorthand
const student = {
  name: "Deepika",
  age,
  batch,
  score: mark,
};

console.log(student);
//{name: 'Deepika', age: 10, batch: 'B43WD'}
//{name: 'Deepika', age: 10, batch: 'B43WD', score: 90}

function printDetails(student) {
  return (
    student.name +
    " has got " +
    student.score +
    " and she belongs to " +
    student.batch
  );
}
console.log(printDetails(student));

function printDetails1(student) {
  const { name, score, batch } = student;
  return name + " has got " + score + " and she belongs to " + batch;
}
console.log(printDetails1(student));

function printDetails2({ name, score, batch }) {
  // const { name, score, batch } = student;
  return name + " has got " + score + " and she belongs to " + batch;
}
console.log(printDetails2(student));

//json
//   const student1 = [
//     {
//         "id":"1",
//         "name":"john",
//         "age": 20
//     },
//     {
//         "id":"2",
//         "name":"jack",
//         "age": 30
//     }
//   ]

//template literals => ` ${}`
//backtick ``
//${} - interpolation - substituting a value

function printDetails3({ name, score, batch }) {
  return `${name} has got ${score} and she belongs to ${batch}`;
}
console.log(printDetails3(student));

//Arrow function  + Template literals +  Destructuring
// const printDetails4 = ({ name, score, batch }) =>
//   `${name} has got ${score} and she belongs to ${batch}`;

// console.log(printDetails4(student));
