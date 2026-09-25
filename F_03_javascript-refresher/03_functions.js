function greet(name) {
  return "Welcome, " + name + "!";
}
 
const square = (num) => {
  return num * num;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Ydrey"));
console.log(square(2));
console.log(calculator(6, 7));