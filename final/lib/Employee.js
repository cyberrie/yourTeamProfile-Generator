// Define and export the Employee class
class Employee {
  // class constructor
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // validation methods
  validateName() {
    if (!this.name || typeof this.name !== "string") {
      throw new Error("Name cannot remain empty. Please input your name.");
    }
  }

  validateId() {
    if (!this.id || typeof this.id !== "number" || this.id < 1) {
      throw new Error("ID number must be recorded and cannot be less than 1.");
    }
  }

  vaidateEmail() {
    if (
      !this.email ||
      typeof this.email !== "string" ||
      !this.email.includes("@")
    ) {
      throw new Error("Please insert a valid email");
    }
  }

  getName() {
    // console.log(`Name:${this.name}`);
    return this.name;
  }

  getId() {
    // console.log(`Id: ${this.id}`);
    return this.id;
  }

  getEmail() {
    // console.log(`Email: ${this.email}`);
    return this.email;
  }

  getRole() {
    // console.log(`Employee Details: ${Employee}`);
    return "Employee";
  }
}

// export Employee
module.exports = Employee;

// for testing purposes
// let employee = new Employee("Helena", 100, "helena.gilja@gmail.com");
// console.log(employee);
