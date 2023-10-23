// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "zLib License":
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Boost Software License 1.0":
      return "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
    case "MIT":
      return "[MIT](https://opensource.org/license/mit/)";
    case "ISC":
      return "[ISC](https://opensource.org/license/isc-license-txt/)";
    case "Mozilla Public License 2.0":
      return "[Mozilla Public License 2.0](https://opensource.org/license/mpl-2-0/)";
    case "zLib License":
      return "[zLib License](https://opensource.org/license/zlib/)";
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);

  if (badge === '') {
    return '';
  }

  let licenseSection = `## License\n\n${badge}\n\nThis project is licensed under the ${license}. For more details, see ${link} or refer to the included [LICENSE file](./LICENSE).`;
  
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);
  return `${licenseSection}

  
`;
}


module.exports = generateMarkdown;
