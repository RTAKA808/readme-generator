// TODO: Create a function that returns a license badge based on which license is passed in
//can call function in template literals
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch(license){
case 'MIT':  
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

    break;

case 'Apache2.0':  
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'    
    break;

case 'GNU':
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    break;

case 'Mozilla':
    return'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    break;
    
case 'BSD':
    return'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    break;

default:
    return''
    break;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch(license){
case 'MIT':  
    return'[License: MIT](https://opensource.org/licenses/MIT)'
    break;

case 'Apache2.0':  
    return'[License](https://opensource.org/licenses/Apache-2.0)'    
    break;

case 'GNU':
    return'[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
    break;

case 'Mozilla':
    return'[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)'
    break;
    
case 'BSD':
    return'[License](https://opensource.org/licenses/BSD-3-Clause)'
    break;

default:
    return''
    break;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){

    return ""
    }
    return `
## Licensing
${renderLicenseBadge(license)} This project is using the${renderLicenseLink(license)} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of contents
    
1.[description](#description)

2.[Installation](#installation)

3.[Licensing](#licensing)
  
4.[Usage](#usage)
  
5.[Contributions](#contributions)
  
6.[Tests](#tests)
  
7.[Questions](#questions)

## Description
${data.description}
##  Installation
${data.installation}
${renderLicenseSection(data.license)}
## Usage
${data.usage}
## Contributions
${data.contributions}
## Tests
${data.tests}
## Questions
Please send additional questions to ${data.questions}
[github](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
