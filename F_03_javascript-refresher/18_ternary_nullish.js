// Ternary Operator

const score = 80;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result); // "Pass"

const num = 2;
console.log(num % 2 === 0 ? "even" : "odd"); // "even"

// Optional Chaining & Nullish Coalescing

const user = { name: "Ydrey" }; // no address property

console.log(user.address?.city); // undefined, no crash

const age = 0;
console.log(age || 20); // 20 -- wrong! 0 is falsy, so || overrides it
console.log(age ?? 20); // 0  -- right, ?? only replaces null/undefined