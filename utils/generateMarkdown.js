// This function displays a badge on the README for the license
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "N/A") {
    return `<img src=https://img.shields.io/badge/License-${license}-green.svg>`;
  } else {
    return "";
  }
}

// Adds a link to the table contents directing towards the license section
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "N/A") {
    return `[License](#license)`;
  } else {
    return "";
  }
}

// Returns the License scetion of the README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "N/A") {
    return `## License: 
  Project Licensed By:  ${license} License`;
  } else {
    return "";
  }
}

// Generated Markdown using users provided answers
function generateMarkdown(data) {
  return `# ${data.title}


## Project Description 

${data.description}

 

 ## Contents:
 ---

* [Installation](#installation)

* [Usage](#usage)

* [Contact](#contact)

* [Tests](#tests)

* ${renderLicenseLink(data.license)}


## Installation 
---
Please find details on installing this project below: 

${data.installation}

## Usage 
Please find details on usage below:

${data.usage}


## Tests: 
---
Here are any problems I encountered with this project or any tests I ran:
${data.tests}

## Contributors:
---
${data.contributors}

## Contact 
---
Please contact me if you have any question or inquiries

### Authors email: ${data.email}

### Authors GitHub: [${data.github}](https://github.com/${data.github}/)


---
${renderLicenseSection(data.license)}  ©  [${data.name}](https://github.com/${
    data.github
  }/)
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
