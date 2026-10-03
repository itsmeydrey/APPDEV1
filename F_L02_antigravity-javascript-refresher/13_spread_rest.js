// Spread operator to expand an array to a new array

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]
 
// Spread operator to expand an object to a new object

const user = { name: "Ydrey", age: 20 };
const newUser = { ...user, email: "ydreyann.ramirez@student.laverdad.edu.ph" };
console.log(newUser); // { name: 'Ydrey', age: 20, email: 'ydreyann.ramirez@student.laverdad.edu.ph' }
 
// Rest operator to collect function arguments into an array

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(5, 10, 15, 20)); // 50