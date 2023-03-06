// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide information on how to contribute to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide information on how to run tests for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Please provide your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address:',
  },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  const writeFileAsync = util.promisify(fs.writeFile);
  await writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      console.log(answers);
  
      const template = `# ${answers.projectName}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## License
  ![${answers.license} license](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue.svg)
  
  This project is covered under the ${answers.license} license.
  
  ## Questions
  If you have any questions, please contact me using the following information:
  
  - GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  - Email: [${answers.email}](mailto:${answers.email})`;
  
      await writeToFile('README.md', template);
    } catch (error) {
      console.error(error);
    }
  }
  

// Function call to initialize app
init();