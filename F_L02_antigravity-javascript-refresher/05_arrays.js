let favoriteFoods = ["Ampalaya", "Sisig", "Takoyaki"];
favoriteFoods.push("Fries"); // ["Ampalaya", "Sisig", "Takoyaki", "Fries"];
favoriteFoods.shift();       // ["Sisig", "Takoyaki", "Fries"];
 
for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);