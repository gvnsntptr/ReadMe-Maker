// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',
    'What is your project motivation?',
    'What problems does this project solve?',
    'What did you learn from this project?',

    'What are the steps to install this project?',
    'What is an example for usage of this project?',
    'Who do you list in your credits?',
    'What type of license does this project have?'

];

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
