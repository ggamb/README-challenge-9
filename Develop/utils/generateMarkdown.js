const { makeBadge, ValidationError } = require('badge-maker');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(license === undefined) {
    return "";
  } else {
    const format = {
      label: "License",
      message: license,
      labelColor: "red",
    }

    const svg = makeBadge(format);
    console.log(svg);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
          ## Description
          ${data.description}

          ## Table of Contents 

          ## Installation
          ${data.install}

          ## Usage
          ${data.usage}

          ## License
          ${renderLicenseBadge(data.license)}
          ${renderLicenseLink(data.license)}
          ${renderLicenseSection(data.license)}
          
          ## Contributing
          ${data.contribute}

          ## Tests
          ${data.testing}

          ## Questions
          ${data.usage}
`;
}

module.exports = generateMarkdown;
