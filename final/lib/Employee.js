// Define and export the Employee class
class Employee {
  // class constructor
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
let employee = new Employee("Helena", 100, "helena.gilja@gmail.com");
console.log(employee);
