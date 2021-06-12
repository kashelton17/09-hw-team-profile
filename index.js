const inq = require('inquirer')
const Intern = require('./utils/js/intern.js')
const Engineer = require('./utils/js/engineer.js')
const Manager = require('./utils/js/manager.js')

const manQuestions = ['Enter name of the team manager: ', 'Enter employee ID of team manager:', 'Enter email of team manager:', 'Enter office number of team manager:']

function init() {
    inq
        .prompt([
            {
                type: 'input',
                name: 'manager-name',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'manager-name',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'manager-name',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'manager-name',
                message: questions[3],
            }
        ])
        .then((data) => {
            const {name,} = new Manager(data)
            return managerInfo
        })
}

function chooseRole() {
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
            if (data === 'Enginner'){

            }
        })
}