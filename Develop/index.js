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
    'What type of license does this project have?',

];


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'What problems does this project solve?',
      name: 'problems_solved',
    },
    {
        type: 'input',
        message: 'What did you learn from this project?',
        name: 'lessons_learned',
    },
    {
      type: 'input',
      message: 'What are the steps to install this project?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is an example for usage of this project?',
        name: 'use_case',
    },
    {
        type: 'input',
        message: 'Who do you list in your credits?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What type of license does this project have?',
        name: 'confirm',
    },
  ])
//   .then((response) =>
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
//   );


function writeToFile(fileName, data) {

    fs.appendFile('README.md', `${process.argv[2]}\n`, (err) =>

    err ? console.error(err) : console.log('README file created!')
    );

}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
