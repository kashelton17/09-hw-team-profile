const Employee = require('../utils/js/employee.js')

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an object with a name, ID and email", ()=> {
            const employee = new Employee('Bob', 4, 'bob@company.com')

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual(4)
            expect(employee.email).toEqual('bob@company.com')
        })
    })
})