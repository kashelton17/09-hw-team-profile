const Manager = require('../utils/js/manager.js')

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an object with a name, ID, email, office', ()=> {
            const manager = new Manager('Bill', 7, 'bill@company.com', '15')

            expect(manager.name).toEqual('Bill')
            expect(manager.id).toEqual(7)
            expect(manager.email).toEqual('bill@company.com')
            expect(manager.office).toEqual('15')
        })
    })
    describe('getRole', () => {
        it('should return "Manager" when called on manager object', () => {
            const manager = new Manager('Bill', 7, 'bill@company.com', '15')
            const managerRole = manager.getRole()
            expect(managerRole).toEqual('Manager')
        })
    })
})