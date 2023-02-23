// Define and export the Engineer class
// This class should inherit from Employee
const Employee = require("./Employee");

class Engineer extends Employee {
  //constructor, the order of this matters when passing the arguments or otherwise tests will fail
  constructor(name, id, email, github) {
    // inherited from parent
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Id: ${this.id}`);
    console.log(`Email: ${this.email}`);
    console.log(`Github: ${this.github}`);
  }
}

//export Engineer
module.exports = Engineer;

let engineer = new Engineer(
  "Helena",
  121,
  "helena.gilja@gmail.com",
  "cyberrie"
);
console.log(engineer);
