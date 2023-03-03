// Define and export the Intern class
// This class inherits from Employee

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  // for testing purposes
  // printInfo() {
  //   console.log(`Name: ${this.name}`);
  //   console.log(`Id: ${this.id}`);
  //   console.log(`Email: ${this.email}`);
  //   console.log(`School: ${this.school}`);
  // }
}
// export
module.exports = Intern;

// for testing purposes
// let intern = new Intern("Mark", 121, "mark.test@gmail.com", "Berkley");
// console.log(intern);
