// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please give n overview of installing of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please give n overview of using of your project.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //Creathe Path where we want to add the new readme
  const pathName = path.join(process.cwd(), fileName);
  //Create README.md in current working directory with users answers
  return fs.writeFileSync(pathName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerAnswers) => {
    // Creating variable to store string returned from GenerateMarkdown using Users console answers
    const markdownData = generateMarkdown({ ...inquirerAnswers });
    // Passing file name and the users answers string to writeToFile function
    writeToFile("README.md", markdownData);
  });
}

// Function call to initialize app
init();
