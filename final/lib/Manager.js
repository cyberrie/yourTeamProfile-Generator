// Write code to define and export the Manager class
//This class inherits from Employee
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    // validate office number
    if (
      !this.officeNumber ||
      typeof this.officeNumber !== "number" ||
      this.officeNumber < 100
    ) {
      throw new Error(
        "Office Number must be recorded and it has to be at least 3 digts long"
      );
    }
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
