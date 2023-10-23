// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is your project title?",
        name: "title"
    },
    {
        type:"input",
        message:"what is the description of your project?",
        name: "description"
    },
    {
        type:"input",
        message:"what are the installation instructions?",
        name: "installation"
    },
    {
        type:"input",
        message:"what is the usage info?",
        name: "usage"
    },
    {
        type:"input",
        message:"what are the contribution guidelines?",
        name: "contribution"
    },
    {
        type:"input",
        message:"what are the test instructions?",
        name: "test"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        const readmeContents= `# ${data.title}`
        + "\n" + `## Table of Contents`+ "\n" +`1. [Description](#description) \n2. [Installation](#installation)\n3. [Usage Information](#usage-information)\n4. [Contribution Guidelines](#contribution-guidelines)\n5. [Testing](#testing)`
        + "\n" + `## Description`+ "\n" +`${data.description}`
        + "\n" + `## Installation`+ "\n" +`${data.installation}`
        + "\n" + `## Usage Information`+ "\n" +`${data.usage}`
        + "\n" + `## Constribution Guidelines`+ "\n" +`${data.contribution}`
        + "\n" + `## Testing`+ "\n" +`${data.test}`;
        writeToFile("README.md",readmeContents);

    })
}

// Function call to initialize app
init();
