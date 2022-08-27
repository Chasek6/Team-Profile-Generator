// Declaring VARs

const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateHTML = require('./src/generateHTML.js');
const Manager = require("./lib/Manager.js");
const Manager = require("./lib/Manager.js");


// The function tht will generate the generate HTML page using the file system
const writeFile = data => {
    fs.writerFile('./dist/index.html', data, err => {
        // if a error occurs
    if (err){
        console.log(err);
        return;
        // when the profile file has been created
    } else { 
        console.log("Mission Complete! peep dist/index.html!")
}

    })
};

// THE ARRAYS Containing OBJECTS ASSIGNED BY USER-INPUT

const team = [];

// prompt
const addManager = () => {
    return inquirer 
    .prompt([
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

    .then(function(answers){

        const Manager = new Manager(answer.name, answer.OfficeNumber, answer.ID, answer.email);
        // add it to the team array
        team.push(Manager);
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
             
        }