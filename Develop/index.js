// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
const question = [
    "What is the project title?",
    "Write a brief description of your project: ",
    "What is this project usage for?",
    "Who are the contributors of this projects?",
    "Is there a test included?",
    "Chose the appropriate license for this project: ",
    "Describe the installation process if any: ",
    "Questions?",
    "Please enter your GitHub username: ",
    "Please enter your email: "
];
 //prompt function with standard inquirer prompt, uses questions from array.
function prompt(){
  return inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: question[0],
    },
    {
        type: "input",
        name: "description",
        message: question[1],
    },
    {
        type: "input",
        name: "usage",
        message: question[2],
    },
    {
        type: "input",
        name: "contributing",
        message: question[3],
    },
    {
        type: "input",
        name: "tests",
        message: question[4],
    },
    {
        type: "list",
        name: "license",
        message: question[5],
        choices: [
            
            "Academic",
            "Apache",
            "Artistic",
            "Boost",
            "BSD",
            "Creative",
            "Eclipse",
            "GNU",
            "ISC",
            "Microsoft",
            "MIT",
            "Mozilla",
            "Open",
            "zLib"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: question[6],
    },
    {
        type: "input",
        name: "question",
        message: question[7],
    },
    {
        type: "input",
        name: "username",
        message: question[8],
    },
    {
        type: "input",
        name: "email",
        message:question[9],
    }
]);
} 

// TODO: Create a function to initialize app
async function init() {
  try {
      //gets the answers form the prompt
      const answers = await prompt();
      //uses the answers in the prompt for generateMarkdown function in the file with the same name, uses the info from answers.
      const generateContent = generateMarkdown(answers);
      //waits to see if the file generates
      await writeFileAsync('./README.md', generateContent);
      //logs success if does, otherwise throws error
      console.log('Success');
  }   catch(err) {
      console.log(err);
  }
}

init();  