const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];

// inquirer promts
const questions = [ 
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character."
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a positive number greater than zero."
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address."
        }
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

// render
function renderTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}
// output
function outputTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}
// write file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};



