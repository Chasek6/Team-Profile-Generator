// Declaring VARs

const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./src/generateHTML.js");
// const { writeFile, copyFile } = require('./utils/generatemarkdown.js');

// The function tht will generate the generate HTML page using the file system

// THE ARRAYS Containing OBJECTS ASSIGNED BY USER-INPUT

const team = [];
const createTeam = () => {
  inquirer

    .prompt([
      {
        type: "list",
        message: "What kidney of employee would you like to add?",
        name: "addEmployee",
        choices: [
          "Engineer",
          "Intern",
          "Manager",
          "I dont want to add any more employees",
        ],
      },
    ])
    .then((answers) => {
      if (answers.addEmployee === "Engineer") {
        addEngineer();
      } else if (answers.addEmployee === "Intern") {
        addIntern();
      } else if (answers.addEmployee === "Manager") {
        addManager();
      } else {
        buildTeam();
      }
    });
};

// prompt
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the Manager?",
        name: "name",
      },
      {
        type: "input",
        message: "what's the Manager Office Number?",
        name: "officeNumber",
      },
      {
        type: "input",
        message: "What's the Manager id",
        name: "id",
      },
      {
        type: "input",
        message: "What's the Managers Email?",
        name: "email",
      },
    ])

    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      // add it to the team array
      team.push(manager);
      console.log(team);
      createTeam();
    });
};

const buildTeam = () => {
  fs.writeFileSync("./dist/output.html", generateHTML(team), "utf-8");
  console.log("Your team has been created!");
};
const addIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What's the name of the Intern?",
          name: "name",
        },
        {
          type: "input",
          message: "whats the Intern School?",
          name: "school",
        },
        {
          type: "input",
          message: "What's the Intern id",
          name: "id",
        },
        {
          type: "input",
          message: "What's the Intern Email?",
          name: "email",
        },
      ])
  
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        // add it to the team array
        team.push(intern);
        console.log(team);
        createTeam();
    });
};


        const addEngineer = () => {
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What's the name of the Engineer?",
                  name: "name",
                },
                {
                  type: "input",
                  message: "what's the Engineer GitHub ?",
                  name: "github",
                },
                {
                  type: "input",
                  message: "What's the Engineer id",
                  name: "id",
                },
                {
                  type: "input",
                  message: "What's the Engineer Email?",
                  name: "email",
                },
              ])
          
              .then((answers) => {
                const engineer = new Engineer(
                  answers.name,
                  answers.id,
                  answers.email,
                  answers.github
                );
                // add it to the team array
                team.push(engineer);
                console.log(team);

                createTeam();
              });
          };








        createTeam();
      

// prompt
// const addEmployee = () => {
//     return inquirer

//     .prompt([
//     {
//         type: "input",
//         message: "add another employee?",
//         name: "addAnotherEmployee",

//     }, {
//         type: "input",
//         message: "What's the name of the Employee?",
//         name: "employeeName",

//       }

// addManager()

//   .then(addEmployee)
//   .then(data => {
//     return generateHTML(data);
//   })

//   .then(HTML => {
//     return writeFile(HTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// };
