// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 ### Authors email: ${data.email}

 ### Authors GitHub: [${data.github}](https://github.com/${data.github}/)

 ## Description 
 
 # ${data.description}

 ## Contents:

* [Installation](#installation)

* [Usage](#usage)

## Installation - Please find details on installing this project below: 

${data.installation}

## Usage - Please find details on usage below:

${data.usage}
`;
}

module.exports = generateMarkdown;
