
//function that takes in the answers from prompt in index js file, returns a readme file with info filled form user prompt
function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.projectTitle} </h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.question}<br />
<br />
GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email me: ${answers.email}<br /><br />
  `;
}
module.exports = generateMarkdown;