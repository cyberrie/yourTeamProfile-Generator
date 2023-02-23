const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
// create an empty array storing all the team info
const teamMembers = [];

// add manager
function addManager() {
  console.log("Please enter information for the Team Manager:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptUser();
    });
}
// Call addManager to start the process
addManager();

// await fs.writeFile("team.html", teamProfiles);
// // Message to the user when it ends
// console.log(
//   "Thank you for your input, your Team Profile Page has now been generated."
// );
