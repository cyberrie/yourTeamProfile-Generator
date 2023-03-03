const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const renderTeam = require("./src/page-template.js");

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
        validate: validateString,
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: validateId,
      },
      {
        type: "input",
        name: "email",
        message: "Email address:",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office number:",
        validate: validateId,
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
        validate: validateString,
      },
      {
        type: "input",
        name: "id",
        message: "Intern ID:",
        validate: validateId,
      },
      {
        type: "input",
        name: "email",
        message: "Email address:",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "school",
        message: "School:",
        validate: validateString,
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
        validate: validateString,
      },
      {
        type: "input",
        name: "id",
        message: "Engineer ID:",
        validate: validateId,
      },
      {
        type: "input",
        name: "email",
        message: "Email address:",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "github",
        message: "GitHub Username:",
        validate: validateString,
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
          // call renderTeam and pass in the array containing all employee objects, teamMembers
          const html = renderTeam(teamMembers);
          // Create an HTML file using the HTML returned from the `render` function
          const outputPath = path.join(OUTPUT_DIR, "team.html");
          // Write it to a file named `team.html` in the `output` folder, outputPath
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

// validation
function validateEmail(value) {
  let pass = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  if (pass) {
    return true;
  }

  return "Please enter a valid email address.";
}

function validateString(value) {
  if (!value || typeof value !== "string") {
    return "This cannot remain empty - please uclainput required value.";
  }
  return true;
}

function validateId(value) {
  // inquirer prompt answers are always returned as strings
  const numValue = Number(value);
  // check isNan
  if (isNaN(numValue) || numValue < 100 || value.length < 3) {
    return "This cannot remain empty - please input a valid number of at least 3 digits long.";
  }
  return true;
}
