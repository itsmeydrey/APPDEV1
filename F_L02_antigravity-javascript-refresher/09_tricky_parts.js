// Equality & Emptiness

console.log(5 == "5");   // true
console.log(5 === "5");  // false
 
let notDefined;
let empty = null;
 
console.log(notDefined); // undefined
console.log(empty);      // null

// this & Reference vs Copy

const student = {
  name: "Ydrey",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};
 
student.regularMethod(); // "Ydrey"
student.arrowMethod();   // undefined
 
const original = [10, 20, 30];

const copyByReference = original;
copyByReference.push(40);
console.log(original);     // [ 10, 20, 30, 40 ]

const copyBySpread = [...original];
copyBySpread.push(50);
console.log(original);     // [ 10, 20, 30, 40 ]
console.log(copyBySpread); // [ 10, 20, 30, 40, 50 ]