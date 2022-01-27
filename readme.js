const fs = require('fs');
const path = require('path');

const generateReadMe = function (projectTitle, description, installationInstructions, usageInformation, contribution, testInstructions, license, licenseBadge, githubUsername, email) {
    license = 
    
    fs.writeFile(path.join('./result/README.md'),

        `
# ${projectTitle}
${licenseBadge}

## Description
${description}
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

<a name="installation"></a>
## Installation
${installationInstructions}

<a name="usage"></a>
## Usage
${usageInformation}
    
<a name="license"></a>
## License
${license.includes('License') ? `Licensed under the ${license}.` : `Licensed under the ${license} license.`}
    
---    
<a name="how-to-contribute"></a>
## How to Contribute
${contribution}

<a name="tests"></a>
## Tests
${testInstructions}

<a name="questions"></a>
## Questions
If you have any questions or concerns, please contact me:

- My github profile https://github.com/${githubUsername}
- My email ${email}, please with a brief description in the Subject (Bug, Suggestions, Question, Doubts).
`
        ,
        (err) =>
            err ? console.error(err) : console.log('README file generated!')
    );
}

exports.generateReadMe = generateReadMe;