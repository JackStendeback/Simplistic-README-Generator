// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Created an array of questions for user input
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
  const readMeSkeleton = ({title, description, installation, usage, license, contributing, tests, github, email}) => {
  const githubLink = `[${github}](https://github.com/${github})`;
  
  let licenseNotice = '';
  let licenseBadgeURL = '';

  if (license === 'MIT') {
    licenseNotice = `
This application is covered under the [MIT License](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
    licenseBadgeURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'Apache') {
    licenseNotice = `
This application is covered under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;
    licenseBadgeURL = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else if (license === 'GPL-3.0') {
    licenseNotice = `
This application is covered under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`;
    licenseBadgeURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  } else if (license === 'ISC') {
    licenseNotice = `
This application is covered under the [ISC License](https://opensource.org/licenses/ISC).

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
`;
    licenseBadgeURL = 'https://img.shields.io/badge/License-ISC-blue.svg';
  } else if (license === 'BSD-3-Clause') {
    licenseNotice = `
This application is covered under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).

[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
`;
    licenseBadgeURL = 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
  }

  return `
  
  # ${title}

  ${description}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

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
  - GitHub: ${githubLink}
  - Email: ${email}
        - I am available by email during normal work day hours(9-5), so feel free to send me any questions or comments you may have about the code or its functionality!
`;
  };