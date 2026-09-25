const aboutMe = {
  name: "Ydrey",
  age: 20,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}. Currently taking ${this.course} course`);
  }
};
 
aboutMe.hobby = "Watching movies";
aboutMe.introduce();
console.log(`Hobby: ${aboutMe.hobby}`);