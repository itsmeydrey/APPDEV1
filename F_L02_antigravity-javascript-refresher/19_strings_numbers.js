// String Methods

const raw = "  Ydrey Ramirez  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); // "YDREY"
console.log(clean.includes("Ramirez")); // true
console.log(clean.slice(0, 5)); // "Ydrey"
console.log(`Full name: ${first} ${last}`);

// Number Methods

console.log(parseInt("42px"));   // 42
console.log((19.9999).toFixed(2)); // "20.00"

const result = "abc" / 2;
console.log(result);          // NaN
console.log(Number.isNaN(result)); // true