// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'Give your project a name!',
        name: 'Title',
        default: 'Project 1',
    },

    {
        type: 'input',
        message: 'Write a brief description of your project!',
        name: 'Description',
        default: 'N/A'
    },

    {
        type: 'input',
        message: 'Provide installation instructions for your application!',
        name: 'Installation',
        default: 'N/A'
    },

    {
        type: 'input',
        message: 'Provide user instructions for this application!',
        name: 'Usage',
        default: 'N/A'
    },

    {
        type: 'input',
        message: 'Credit your contributers here!',
        name: 'Credits & Acknowledgments',
        default: 'N/A'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
