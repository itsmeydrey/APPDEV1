// Block scope

if (true) {
  let favoriteSnack = "Leslie’s Red Hot Cheezy Corn Crunch";
  console.log("Inside the block (Favorite Snack): " + favoriteSnack); // works fine
}

try {
  console.log(favoriteSnack); // ReferenceError
} catch (error) {
  console.log("Can't reach favoriteSnack out here: " + error.message);
}

// Closure

function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

const drinksCounter = createCounter();
const studyCounter = createCounter();

console.log("Lemonade cups: " + drinksCounter()); // 1
console.log("Lemonade cups: " + drinksCounter()); // 2
console.log("Study sessions: " + studyCounter());   // 1 -- independent of drinksCounter