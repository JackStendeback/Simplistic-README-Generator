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
      },
])
.then((answers) => {
    const READMEContent = generateREADME(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


  // creating skeleton of the README using template literals
  const readMeSkeleton = ({title, description, tableofcontents, installation, usage, license, contributing, tests, questions}) => 
  `
  # ${title}

  ${description}

  ## Table of Contents
  ${tableofcontents}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  This project is licensed under the ${license} License.

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  If you have any questions, feel free to contact me:
  - ${questions}
`;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
