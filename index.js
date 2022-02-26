// List of necessities for this project
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for the user to answer for the readme.
const questions = [
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What would you like the title of your project to be?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description for your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide a detailed, instructional overview of how to install of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide detailed instructions of how to use your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please write in detail any bugs, problems or tests you ran.",
  },
];

// This function writed the information to the README
function writeToFile(fileName, data) {
  //Create the Path where we want to add the new readme
  const pathName = path.join(process.cwd(), fileName);
  //Create README.md in current working directory with users answers
  return fs.writeFileSync(pathName, data);
}

// Initialising App Function
function init() {
  inquirer.prompt(questions).then((inquirerAnswers) => {
    // Creating variable to store string returned from GenerateMarkdown using Users console answers
    const markdownData = generateMarkdown({ ...inquirerAnswers });
    // Passing file name and the users answers string to writeToFile function
    writeToFile("Project-README.md", markdownData);
  });
}

// Function call to initialize app
init();
