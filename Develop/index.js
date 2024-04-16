// TODO: Include packages needed for this application
// const { type } = require('os');
const inquirer= require('inquirer')
const fs =require('fs');
const generateMarkdown=require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the project title?"
    },
    {
        type:"input",
        name:"description",
        message:'Describe the project',
    },
    {
        type:"input",
        name:"installation",
        message:'How do you install this project?'
    },
    {
        type:"input",
        name:"licensing",
        message:"What kind of licensing did you use?",
    },
    {
        type:"input",
        name:"usage",
        message:'How do you use this project?'
    },    
    {
        type:"input",
        name:"contributions",
        message:'Is anyone or anything else credited for this project?'
    },    
    {
        type:"input",
        name:"tests",
        message:'How was this tested',
    },

    {
        type:'input',
        name:"questions",
        message:"Contact info?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error)=>
error ? console.error(error) : console.log('success')
)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        const markdown=generateMarkdown(answers)
    writeToFile('README.md', markdown)
    
})
    
}

// Function call to initialize app
init();
