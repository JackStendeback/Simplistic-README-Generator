// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your new README file: ',
      },
      {
        type: 'input',
        name: 'installation instructions',
        message: 'Installation Instructions: ',
      },
      {
        type: 'input',
        name: 'usage information',
        message: 'Please insert README usage information: ',
      },
      {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Please enter your contribution guidelines: ',
      },
      {
        type: 'input',
        name: 'test instuctions',
        message: 'Please enter your testing instructions: ',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose the type of license you would like to use: ',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter GitHub username: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter a valid email address: ',
      }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
