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

const promptRoleSpecificInfo = async (role) => {
    switch (role) {
        case "Manager":
            return inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the manager's office number?",
                    validate: answer => (answer !== "") ? true : "Please enter at least one character."
                }
            ]);

        case "Engineer":
            return inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's GitHub username?",
                    validate: answer => (answer !== "") ? true : "Please enter at least one character."
                }
            ]);

        case "Intern":
            return inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What is the intern's school?",
                    validate: answer => (answer !== "") ? true : "Please enter at least one character."
                }
            ]);

        default:
            return {};
    }
};

const gatherTeamInfo = async () => {
    let moreMembers = true;

    while (moreMembers) {
        const generalInfo = await inquirer.prompt(questions);
        const roleSpecificInfo = await promptRoleSpecificInfo(generalInfo.role);

        let member;

        switch (generalInfo.role) {
            case "Manager":
                member = new Manager(generalInfo.name, generalInfo.id, generalInfo.email, roleSpecificInfo.officeNumber);
                break;
            case "Engineer":
                member = new Engineer(generalInfo.name, generalInfo.id, generalInfo.email, roleSpecificInfo.github);
                break;
            case "Intern":
                member = new Intern(generalInfo.name, generalInfo.id, generalInfo.email, roleSpecificInfo.school);
                break;
            default:
                break;
        }

        teamMembers.push(member);

        const { addAnother } = await inquirer.prompt({
            type: "confirm",
            name: "addAnother",
            message: "Do you want to add another team member?",
        });

        moreMembers = addAnother;
    }
};

const renderTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};

const init = async () => {
    try {
        await gatherTeamInfo();
        renderTeam();
        console.log("Team information has been successfully gathered and HTML file has been generated.");
    } catch (error) {
        console.error("Error occurred:", error);
    }
};

// Call the initialization function
init();


