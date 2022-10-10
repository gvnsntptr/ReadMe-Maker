// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.appendFile('log.md', `${process.argv[2]}\n`, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Commit logged!')
    );

}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
