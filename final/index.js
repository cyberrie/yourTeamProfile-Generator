const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");

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

// add intern
function addIntern() {
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
        message: "Intern ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Office School:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptUser();
    });
}

// add engineer
function addEngineer() {
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
        message: "Engineer ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Email address:",
      },
      {
        type: "input",
        name: "github",
        message: "GitHub Username:",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptUser();
    });
}

// function to choose who to add next
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do next?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building the team",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        // if engineer, prompt to add engineer's details
        case "Add an Engineer":
          addEngineer();
          break;
        // if intern prompt to add intern details
        case "Add an Intern":
          addIntern();
          break;

        // if finish building the team, render info on the page
        case "Finish building the team":
          const html = render(teamMembers);
          const outputPath = path.join(OUTPUT_DIR, "team.html");
          fs.writeFile(outputPath, html, (err) => {
            if (err) throw err;
            console.log(`Team profile page generated at ${outputPath}`);
          });
          break;
        default:
          break;
      }
    });
}

// Call addManager to start the process
addManager();

// await fs.writeFile("team.html", teamProfiles);
// // Message to the user when it ends
// console.log(
//   "Thank you for your input, your Team Profile Page has now been generated."
// );
