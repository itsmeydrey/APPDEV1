class Person {
  constructor(name) { this.name = name; }
  sayHello() { console.log("Hi there! I am " + this.name + "."); }
}
 
class Student extends Person {
  study() { console.log(this.name + " is studying JavaScript."); }
}
 
const student = new Student("Ydrey");
student.sayHello();
student.study();