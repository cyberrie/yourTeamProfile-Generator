// Define and export the Employee class
class Employee {
  // class constructor
  constructor(name, id, email) {
    this.name = name;

    // validate name
    if (!this.name || typeof this.name !== "string") {
      throw new Error("Name cannot remain empty. Please input your name.");
    }

    this.id = id;
    // validate id
    if (!this.id || typeof this.id !== "number" || this.id < 100000) {
      throw new Error(
        "ID number must be recorded and it has to be at least 6 digits long."
      );
    }

    this.email = email;
    // validate email
    if (
      !this.email ||
      typeof this.email !== "string" ||
      !this.email.includes("@")
    ) {
      throw new Error("Please insert a valid email.");
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
