const Intern = require('../utils/js/intern.js')

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with a name, ID, email, school', ()=> {
            const intern = new Intern('Joey', 97, 'joey@company.com', 'Harvard')

            expect(intern.name).toEqual('Joey')
            expect(intern.id).toEqual(97)
            expect(intern.email).toEqual('joey@company.com')
            expect(intern.school).toEqual('Harvard')
        })
    })
    describe('getRole', () => {
        it('should return "Intern" when called on intern object', () => {
            const intern = new Intern('Joey', 97, 'joey@company.com', 'Harvard')
            const internRole = intern.getRole()
            expect(internRole).toEqual('Intern')
        })
    })
    describe('getSchool', () => {
        it('should get the school property of the employee object', () => {
            const intern = new Intern('Joey', 97, 'joey@company.com', 'Harvard')
            const school = intern.getSchool()
            expect(school).toEqual('Harvard')
        })
    })
})