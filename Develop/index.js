// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your a description of your project',
        validate: describeInput => {
          if (describeInput) {
            return true;
          } else {
            console.log('Please enter a description of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter how to install your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage information',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter how to use your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter your contribution guidlines',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('Please enter how to contribute to your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Enter your test instructions',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter how to test your project!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please pick a license you would like to use',
        choices: ["MIT", "Mozilla", "Common Development and Distribution", "GNU General Public"]
      },
      {
        type: 'input',
        name: 'user',
        message: 'Enter your Github username',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        }
      }
    ])
    .then(answer => {
        return answer;
    })
};

// TODO: Create a function to write README file
const writeToFile = data => {
    const fileName = "README.md";

    const pageHTML = generateMarkdown(data);

    fs.writeFile(fileName, pageHTML, err => {
        if(err) throw new Error(err);
    })
}

// TODO: Create a function to initialize app
const init = () => {
    console.log("we are here");
    promptUser()
    .then(writeToFile);
}

// Function call to initialize app
init();
