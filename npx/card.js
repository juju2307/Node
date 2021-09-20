const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear()

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Toss an ${chalk.bold("email")}?`,
                value: ( )=> {
                    open("mailto:example@example.com");
                    console.log("\nLooking forward to hearing your message and replying to you!<n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("Juju2307"),
    handle: chalk.white("@juju2307"),
    fact: chalk.hex('#B100000')('I love Open-Source!'),
    github: chalk.hex('#787878')("https://github.com/juju2307"),
    linkedin: chalk.hex('#787878')("https://www.linkedin.com/in/julie-metz/"),

    labelFact: chalk.hex('#FF6262').bold("Fun Fact:"),
    labelGithub: chalk.hex('#9E9E9E').bold("Github"),
    labelLinkedink: chalk.hex('#9E9E9E').bold("Linkedin")

};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact} ${data.fact}`,
        ``,
        `${data.labelGithub} ${data.github}`,
        ``,
        `${data.labelLinkedink} ${data.linkedin}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Juju2307, I'm a passionate about Web Development"
        )}`,
        `${chalk.bold("and web designer from Belgium, and have a")}`,
        `${chalk.bold("hobby for creating beautiful, cool, and responsive")}`,
        `${chalk.bold("web apps. Toss me an email if you want to collab!")}`

    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "blue"
    }
);

console.log(me);

prompt(questions).then(answer => answer.action());