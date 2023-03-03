// Write code to define and export the Manager class
//This class inherits from Employee
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  // for testing purposes
  // printInfo() {
  //   console.log(`Name: ${this.name}`);
  //   console.log(`Id: ${this.id}`);
  //   console.log(`Email: ${this.email}`);
  //   console.log(`Office Number: ${this.officeNumber}`);
  // }
}

module.exports = Manager;
