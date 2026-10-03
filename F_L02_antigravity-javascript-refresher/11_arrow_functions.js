const greet = name => "Hello there! I'm " + name + "!";  // implicit return
const square = n => n * n;                               // implicit return
 
const sayHi = () => {
  console.log("HI!");
};

console.log(greet("Drey"));
console.log(square(6));
sayHi();