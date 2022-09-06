// Declaring VARs

const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateHTML = require('./src/generateHTML.js');
const { writeFile, copyFile } = require('./utils/generate-site');


// The function tht will generate the generate HTML page using the file system


// THE ARRAYS Containing OBJECTS ASSIGNED BY USER-INPUT

const team = [];

// prompt
const addManager = () => {
    return inquirer.prompt ([
    {

        type: "input",
        message: "What's the name of the Manager?",
        name: "name"

},
{
    type: "input",
    message: "what's the Manager Office Number?",
    name: "OfficeNumber",
},
{
    type: "input",
    message: "What's the Manager ID",
    name: "ID",
},
{
    type: "input",
    message: "What's the Managers Email?",
    name: "Manager Email"

},

    ])

    .then((answers) =>{

        const manager = new Manager(answers.name, answers.OfficeNumber, answers.ID, answers.email);
        // add it to the team array
        team.push(manager);
    })

    };

    // prompt
    const addEmployee = () => {
        return inquirer

        .prompt([
        {
            type: "input",
            message: "add another employee?",
            name: "addAnotherEmployee",

        }, {
            type: "input",
            message: "What's the name of the Employee?",
            name: "employeeName",
             
        }

    addManager()

  .then(addEmployee)
  .then(data => {
    return generateHTML(data);
  })
  .then(HTML => {
    return writeFile(HTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  }