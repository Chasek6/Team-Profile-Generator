// this will be the function that will generate the HTML for the page and translate the user into the prompt in index.js into the HTML page
// function generateHTML(user) {

generateHTML = (Data) => {
    // card for the first employee
    const managerCard = (manager) => {
        return '<div class="card">' style="width: 18rem;">
            '<div class="card-body">'
            <h2>manager: ${manager.name}</h2>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        ''
    }
    // card for the second employee which is a engineer
    const engineerCard = (engineer) => {
        return '<div class="card">' style="width: 18rem;">
            '<div class="card-body">'
            <h2>engineer: ${engineer.name}
            </h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github: ${engineer.github}</li>
            </ul>
        </div>
        ''
    }

    // card for the third employee which is a intern.
    const internCard = (intern) => {
        return '<div class="card">' style="width: 18rem;">
            '<div class="card-body">'
            <h2>intern: ${intern.name} </h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        ''
    }

    // card array to hold the cards for the employees
    employeeCard = [];
    // loop through the employees array and push the cards into the employeeCard array
    for (let i = 0; i < Data.length; i++) {
        const employee = Data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            employeeCard.push(managerCard(employee));

        } else if (role === 'Engineer') {
            employeeCard.push(engineerCard(employee));

        } else if (role === 'Intern') {
            employeeCard.push(internCard(employee));

        }

        // create the bones for the HTML page
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta viewport="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>Team Profile</title>
        </head>
        <body>

        <header>
        <h1 class="text-center">My Team</h1>
        </header>
        <main>
        <div class="container">
        <div class="row justify-content-center">
        ${employeeCard.join('')}
        </div>
        </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        </body>
        </html>`
    }
   module.exports = generateHTML;