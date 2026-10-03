// try, catch & throw

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Invalid caculation:", error.message);
}

// JSON.stringify & JSON.parse

const user = { name: "Ydrey", age: 20, isStudent: true };

const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Ydrey","age":20,...}'

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Ydrey"
console.log(typeof jsonString, typeof parsedUser); // string object