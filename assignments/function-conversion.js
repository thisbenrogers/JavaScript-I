// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction = () => {
  console.log("Function was invoked!");
};
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = x => {
  return x;
};

anotherFunction("Example");
console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (y, z) => {
  return y + z;
};
add(1, 2);
console.log(add(1, 2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (a, b) => {
  return a - b;
};
subtract(1, 2);
console.log(subtract(1, 2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(num => {
  return num * 3;
});
console.log(triple);
