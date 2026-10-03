console.log("Hello! This is Ydrey's JS refresher.");
 
let myName = "Ydrey";
let myname = "Ann";

console.log(myName); // Ydrey
console.log(myname); // Ann

// Naming Rules for Identifiers

// Valid -- follows every rule
let age = 20;
let _cache = "temporary-data";
let $total = 500.25;
let favoriteColor = "orange"; // camelCase convention

// Invalid -- each one breaks a rule (all throw a SyntaxError)
// let 2ndPlace = true;   -- can't start with a digit
// let user-id = "u123";  -- hyphens aren't allowed in a name
// let var = "math101"; -- "var" is a reserved word

console.log(`Age: ${age}, Cache: ${_cache}, Total: ${$total}, Favorite Color: ${favoriteColor}`);