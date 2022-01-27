const inquirer = require('inquirer');
const { generateReadMe } = require('./readme');
const licenses = require('./licenses');

const licenseChoices = () => {
    return licenses.map(x => x.license);
}

async function main() {
    const answers = await inquirer.prompt([
        {
            name: 'projectTitle',
            type: 'input',
            message: 'What is the project\'s title?',
            default: 'My Project'
        },
        {
            name: 'description',
            type: 'input',
            message: `Provide a short description explaining the what, why, and how of your project:\n`,
            default: 'This is an example description, that needs to be changed.'
        },
        {
            name: 'installationInstructions',
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?\n',
            default: 'Installation example: execute `npm install`'
        },
        {
            name: 'usageInformation',
            type: 'input',
            message: 'Provide instructions and examples for use:',
            default: 'Instruccion for how to use it goes here.'
        },
        {
            name: 'contribution',
            type: 'input',
            message: 'Include guidelines for how to contribute to your project. The Contributor Covenant (https://www.contributor-covenant.org/) is an industry standard, but you can always write your own:\n',
            default: 'Example if you want to contribute, here'
        },
        {
            name: 'testInstructions',
            type: 'input',
            message: 'Provide examples on how to run your tests, it can be steps and commands:\n',
            default: 'Examples of how to run tests: `npm run test`'
        },
        {
            name: 'license',
            type: 'list',
            choices: licenseChoices(),
            message: 'Please select a license (limited to use of the Software):',
            default: 'MIT License'
        },
        {
            name: 'githubUsername',
            type: 'input',
            message: 'What is your Github username?',
            default: 'myUsername'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email address?',
            default: 'myemail@example.com'
        },

    ])

    const index = licenses.findIndex(x => x.license === answers.license);
    const licenseBadge = licenses[index].badge;

    generateReadMe(
        answers.projectTitle, 
        answers.description,
        answers.installationInstructions,
        answers.usageInformation,
        answers.contribution,
        answers.testInstructions,
        answers.license,
        licenseBadge,
        answers.githubUsername,
        answers.email
        );
}

main();