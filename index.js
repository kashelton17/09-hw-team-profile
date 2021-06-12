const inq = require('inquirer')
const Intern = require('./utils/js/intern.js')
const Engineer = require('./utils/js/engineer.js')
const Manager = require('./utils/js/manager.js')

const manQuestions = ['Enter name of the team manager: ', 'Enter employee ID of team manager:', 'Enter email of team manager:', 'Enter office number of team manager:']
const teamMembers = []

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
            chooseRole()
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
            if (data.role === 'Enginner'){
                const engineerQuestions = [`Enter name of the ${data.role}: `, `Enter employee ID of ${data.role}:`, `Enter email of ${data.role}:`, `Enter GitHub username of ${data.role}:`]
                getQuestions(data.role, engineerQuestions)
            } else if ( data.role === 'Intern') {
                const internQuestions = [`Enter name of the ${data.role}: `, `Enter employee ID of ${data.role}:`, `Enter email of ${data.role}:`, `Enter school of ${data.role}:`]
                getQuestions(data.role, engineerQuestions)
            } else {
                console.log('team is built')
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
            } else if (role === 'Inter') {
                let intern = new Intern(data.name, data.id, data.email, data.other)
                teamMembers.push(intern)
                chooseRole()
            }
        })
}
init()