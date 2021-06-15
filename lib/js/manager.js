// creating Manager constructor 

const Employee = require('./employee.js')

function Manager(name, id, email, office) {
    Employee.call(this, name, id, email)

    this.office = office;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRole = function() {
    return 'Manager'
}

module.exports = Manager