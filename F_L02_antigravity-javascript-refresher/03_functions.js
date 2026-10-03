function greet(name) {
  return "Welcome, " + name + "!";
}
 
const cube = (num) => {
  return num * num * num;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Ydrey"));
console.log(cube(4));
console.log(calculator(6, 7));