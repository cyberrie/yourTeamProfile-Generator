# Team Profile-Generator

## Table of contents

- [Overview](#overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Application Demo](#application-demo)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-I-learned)
- [Directions for future development](#directions-for-future-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

- This is a Node.js command-line application takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person

  - User input is collected using [Inquirer package](https://www.npmjs.com/package/inquirer)

- The application was developed using Test-Driven Development

  - Unit testing is performed using [Jest package](https://www.npmjs.com/package/jest)

## Acceptance Criteria

- Classes have to be created for each team member provided and exported

- The tests for these classes (in the `_tests_` directory) must ALL pass

- When a user starts the application then they are prompted to enter the **team manager**’s:

- Input validation is performed for all user inputs and user cannot proceed without completing all fields correctly

  - Name
  - Employee ID
  - Email address
  - Office number

- When a user enters those requirements then the user is presented with a menu with the option to:

  - Add an engineer
  - Add an intern
  - Finish building the team

- When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:

  - Engineer's Name
  - ID
  - Email
  - GitHub username

- When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:

  - Intern’s name
  - ID
  - Email
  - School

- When a user decides to finish building their team then they exit the application, and the HTML is generated from the information on all employees

## Usage

- The application can be invoked by using the following command:

```bash
node index.js
```

- Unit test can be performed on all files in the lib file usig following command:

```bash
npm run test
```

## Application Demo

Open the following link to view App Demo:

- [Team Profile Generator]()

## Built with...

- JavaScript

- HTML

- CSS / Bootstrap

- Node.js

- Inquirer

- Jest

## What I learned

## Directions for future development

Things for the future may include:

## Useful Resources

- [Object-oriented programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)

- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- [npm inquirer](https://www.npmjs.com/package/inquirer)

- [jest package](https://www.npmjs.com/package/jest)

## Author

©️ Helena Gilja 2023. All Rights Reserved.

- Starter code was supplied for this project, including testing files and a template-page file. Template page has been changed and styled.

- GitHub - [cyberrie](https://github.com/cyberrie)

## Acknowledgements
