const inq = require('inquirer')
const Intern = require('./utils/js/intern.js')
const Engineer = require('./utils/js/engineer.js')
const Manager = require('./utils/js/manager.js')
const pages = require('./src/pages.js')
const fs = require('fs')

const manQuestions = ['Enter name of the team manager: ', 'Enter employee ID of team manager:', 'Enter email of team manager:', 'Enter office number of team manager:']
const teamMembers = []

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log('Error message:',err) : console.log(`${fileName} successfully written!`))
}

function init() {
    inq
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: manQuestions[0],
            },
            {
                type: 'input',
                name: 'managerID',
                message: manQuestions[1],
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: manQuestions[2],
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: manQuestions[3],
            }
        ])
        .then((data) => {
            const manager1 = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)
            console.log(manager1)
            teamMembers.push(manager1)
            chooseRole(teamMembers)
        })
}

function chooseRole(members) {
    inq
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: ['Create another team member?'],
                choices: ['Engineer', 'Intern', 'None']
            }
        ])
        .then((data) => {
            if (data.role === 'Engineer'){
                const engineerQuestions = [`Enter name of the ${data.role}: `, `Enter employee ID of ${data.role}:`, `Enter email of ${data.role}:`, `Enter GitHub username of ${data.role}:`]
                getQuestions(data.role, engineerQuestions)
            } else if ( data.role === 'Intern') {
                const internQuestions = [`Enter name of the ${data.role}: `, `Enter employee ID of ${data.role}:`, `Enter email of ${data.role}:`, `Enter school of ${data.role}:`]
                getQuestions(data.role, internQuestions)
            } else {
                console.log(teamMembers)
                console.log('team is built')
                let cardsArray = teamMembers.map(member => pages.createCards(member))
                const cards = cardsArray.join('\n')
                let htmlArray = []
                htmlArray.push(pages.headHTML)
                htmlArray.push(cards)
                htmlArray.push(pages.endHTML)
                const htmlPage = htmlArray.join('\n')
                writeToFile('teamPage.html', htmlPage)
            }
        })
}

function getQuestions(role, questions){
    inq
        .prompt([
            {
                type: 'input',
                name: `name`,
                message: questions[0],
            },
            {
                type: 'input',
                name: 'id',
                message: questions[1],
                validate: id => {
                        const idMatch = teamMembers.find(member => member.id === id.id)
                        console.log(idMatch)
                        if (idMatch) {
                            return 'Enter valid ID'
                        } else {
                            return true
                        }
                    }
            },
            {
                type: 'input',
                name: 'email',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'other',
                message: questions[3],
            }
        ])
        .then((data) => {
            if (role === 'Engineer') {
                let engineer = new Engineer(data.name, data.id, data.email, data.other)
                teamMembers.push(engineer)
                chooseRole()
            } else if (role === 'Intern') {
                let intern = new Intern(data.name, data.id, data.email, data.other)
                teamMembers.push(intern)
                chooseRole()
            } 
        })
}

init()