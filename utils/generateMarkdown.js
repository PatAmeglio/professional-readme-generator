// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `\n* [License](#license)\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectName}

${renderLicenseBadge(answers.license)}

## Description

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(answers.license)}* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

${renderLicenseSection(answers.license)}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have any questions about the repo, please open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.githubUsername}.`;
}

module.exports = generateMarkdown;
