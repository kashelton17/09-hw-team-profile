const Engineer = require('../utils/js/engineer.js')

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with a name, ID, email, github', ()=> {
            const engineer = new Engineer('Bob', 4, 'bob@company.com', 'bob1524')

            expect(engineer.name).toEqual('Bob')
            expect(engineer.id).toEqual(4)
            expect(engineer.email).toEqual('bob@company.com')
            expect(engineer.github).toEqual('bob1524')
        })
    })
    describe('getRole', () => {
        it('should return "Engineer" when called on Engineer object', () => {
            const engineer = new Engineer('Bob', 4, 'bob@company.com', 'bob1524')
            const engineerRole = engineer.getRole()
            expect(engineerRole).toEqual('Engineer')
        })
    })
    describe('getGithub', () => {
        it('should get the github property of the employee object', () => {
            const engineer = new Engineer('Bob', 4, 'bob@company.com', 'bob1524')
            const github = engineer.getGithub()
            expect(github).toEqual('bob1524')
        })
    })
})