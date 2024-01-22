# Team profile generator

## Description

This Node.js command-line application is designed to streamline the process of gathering and organizing information about a development team, allowing users to create a well-structured HTML file that displays essential details for each team member. The app utilizes the inquirer library to prompt the user for information such as the team member's name, ID, email, and role. Additionally, role-specific information is collected based on the selected role (Manager, Engineer, or Intern).

The application employs a modular structure, utilizing classes (Manager, Engineer, Intern) to represent different roles within the team. These classes are instantiated with the user-provided information, creating organized and standardized objects for each team member.

The information gathering process is facilitated through a user-friendly interface with prompts and validations to ensure accurate input. The user has the option to add multiple team members, and the app dynamically adjusts the prompts based on the selected role, accommodating the unique details associated with each position.

Once all team information is collected, the application generates an HTML file using a template provided in the page-template module. The HTML file is structured to showcase the team members' details in an organized and visually appealing format. The generated file is saved in a designated output directory.

The application includes error handling to gracefully manage any unexpected issues that may arise during the information gathering and rendering process. Overall, this app provides an efficient and user-friendly solution for creating a comprehensive HTML representation of a development team, facilitating better collaboration and communication within the team.

## Table of contents

 - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

 ## Installation

  * Clone the repository containing the README Generator app to your local machine.
  * Navigate to the project directory
  * Install dependencies using npm install
  * Run the application using ' node index.js'

   Keep in mind that this process assumes you have Node.js and npm (Node Package Manager) installed on your machine. If you haven't installed them yet, you'll need to do so before proceeding. You can download Node.js from the official website: Node.js Downloads.

 ## Usage

 * Run the Application.
 * Provide General Information.
   The application prompts  to enter details for the first team member, starting with the employee's name, ID, email, and role (Manager, Engineer, or Intern).
 * Role-Specific Information.
    Depending on the selected role, the application prompts for additional role-specific information. For example, if the role is "Manager," the project manager is asked for the office number; if it's "Engineer," the GitHub username is requested; and for "Intern," the school information is collected.
 * Add More Team Members.
    After providing information for the first team member, the application asks if user wants to add another team member.
    If yes, the process repeats for each additional team member, accommodating different roles as needed.
 * Generate HTML.
    Once all team members have been added, the application generates an HTML file using the gathered information and a predefined template.
    The HTML file is saved in an output directory, creating a structured representation of the development team.
 * Update as Needed.
    If there are changes or additions to the team, the user can rerun the application, add or modify team member information, and regenerate the HTML file.

## License

This product is not licensed.

## Contributing

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

 ### Code Contributions

 - Fork the repository and create your branch from main.
 - Follow the code style and conventions.
 - Submit a pull request with a clear description of your changes.

### Bug Reports

 - Before submitting a bug report, ensure the issue hasn't already been reported.
 - Provide a detailed description, including steps to reproduce the issue.
 - Include relevant details like your operating system and Node.js version.

### Feature Requests

 - Check if the feature has already been requested or implemented.
 - Provide a clear description of the feature and its use case.

### Code Style and Standards
 - Follow the coding standards specified in the project.
 - Run linters and code formatters before submitting code.

 ## Tests

Before running tests make sure to install project dependencies.

## Questions

GitHub Profile: [sebswit](https://github.com/sebswit)

For additional questions, contact me at: sebastian.switakowski@gmail.com