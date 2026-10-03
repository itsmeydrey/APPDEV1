const hobbies = ["watching movies", "reading", "singing"];
hobbies.map(hobby => console.log(hobby));
 
const student = { name: "Ydrey", age: 20 };
const { name, age } = student;
console.log(name, age);
 
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newNumbers);