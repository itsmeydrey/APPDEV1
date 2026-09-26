const person = { name: "Ydrey", age: 20 };
const { name, age } = person;
console.log(name + ", " + age); // Ydrey, 20
 
const hobbies = ["Watching movies", "Reading", "Singing"];
const [hobby1, hobby2] = hobbies;
console.log("Hobbies: " + hobby1 + ", " + hobby2); // Hobbies: Watching movies, Reading
 
function printName({ name }) {
  console.log(name);
}

printName(person); // Ydrey