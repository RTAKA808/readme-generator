// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){

  return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){

    return ""
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of contents
    
  1.Description

  2.Installation

  3.Licensing
  
  4.Usage
  
  5.Contributions
  
  6.Tests
  
  7.questions

  ## Description
    ${data.description}
  ##  Installation
    ${data.installation}
  ## Licensing
    ${data.licensing}
  ## Usage
    ${data.usage}
  ## Contributions
    ${data.contributions}
  ## Tests
    ${data.tests}
  ## Questions
    ${data.questions}

`;
}

module.exports = generateMarkdown;
