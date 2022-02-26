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

## Project Description 

${data.description}

 

 ## Contents:
 ---

* [Installation](#installation)

* [Usage](#usage)

* [Contact](#contact)

* [Testing, Bugs & Troubleshooting](#tests)

*[License](#license)


## Installation - 
---
Please find details on installing this project below: 

${data.installation}

## Usage - 
Please find details on usage below:

${data.usage}


## Trouble Shooting, Bugs & Tests: 
---
Here are any problems I encountered with this project or any tests I ran:
${data.tests}

## Authors Contact: 
---
### Authors email: ${data.email}
### Authors GitHub: [${data.github}](https://github.com/${data.github}/)


##License:

 © [${data.name}](https://github.com/${data.github}/)


`;
}

module.exports = generateMarkdown;
