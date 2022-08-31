const fs = require('fs');

const writeFile = fileContents => {
    fs.writeFile('./dist/index.html', fileContents, err => {
        // if a error occurs
        if (err){
            console.log(err);
            return;
            // when the profile file has been created
        } else { 
            console.log("Mission Complete! peep dist/index.html!")
        }
    })
}
c