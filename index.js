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
        name: 'installation',
        message: 'Installation Instructions: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please insert README usage information: ',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your contribution guidelines: ',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter your testing instructions: ',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose the type of license you would like to use: ',
        choices: ['MIT', 'Apache', 'GPL', 'Other'],
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
    const READMEContent = readMeSkeleton(answers);
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const fileName = `README_${timestamp}.md`;

    fs.writeFile(fileName, READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


  // creating skeleton of the README using template literals
  const readMeSkeleton = ({title, description, installation, usage, license, contributing, tests, github, email}) => 
  `
  # ${title}

  ${description}

  ## Table of Contents
  [Description]
  [Installation]
  [Usage]
  [License]
  [Contributing]
  [Tests]
  [Questions]

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
  - ${github}
  - ${email}
`;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
