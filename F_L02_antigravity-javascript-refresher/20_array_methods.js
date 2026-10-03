const students = [
  { name: "Ydrey", grade: 89 },
  { name: "Joe", grade: 90 },
  { name: "Priya", grade: 59 },
];

const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name)); // ["Ydrey", "Joe"]

const priya = students.find(s => s.name === "Priya");
console.log(priya); // { name: "Priya", grade: 59 }

console.log(students.some(s => s.grade < 60)); // true
console.log(students.every(s => s.grade >= 60)); // false

const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // ["Joe", "Ydrey", "Priya"]