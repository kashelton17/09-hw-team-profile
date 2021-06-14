const Employee = require('../utils/js/employee.js')

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name, ID and email', ()=> {
            const employee = new Employee('Bob', 4, 'bob@company.com')

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual(4)
            expect(employee.email).toEqual('bob@company.com')
        })
    })
    describe('getName', () => {
        it('should get the name property of the employee object', () => {
            const employee = new Employee('Bob', 4, 'bob@company.com')
            const employeeName = employee.getName()
            expect(employeeName).toEqual('Bob')
        })
    })
    describe('getId', () => {
        it('should get the id property of the employee object', () => {
            const employee = new Employee('Bob', 4, 'bob@company.com')
            const employeeId = employee.getId()
            expect(employeeId).toEqual(4)
        })
    })
    describe('getEmail', () => {
        it('should get the email property of the employee object', () => {
            const employee = new Employee('Bob', 4, 'bob@company.com')
            const employeeEmail = employee.getEmail()
            expect(employeeEmail).toEqual('bob@company.com')
        })
    })
    describe('getRole', () => {
        it('should return "employee" when called on an employee object', () => {
            const employee = new Employee('Bob', 4, 'bob@company.com')
            const employeeRole = employee.getRole()
            expect(employeeRole).toEqual('Employee')
        })
    })
    
})