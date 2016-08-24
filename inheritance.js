function Employee (name) {
  this.name = name;
}
Employee.prototype.sayName = function () {
  console.log(this.name);
}


function Engineer (name) {
  this.name = name;
  this.performRole = function () {
    console.log('Coding...');
  }
}
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

function Manager (name) {
  this.name = name;
  this.performRole = function () {
    console.log('Managing...');
  }
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Employees
var bob = new Engineer('Bob');
var david = new Manager('David');

// Node exports
exports.Manager = Manager;
exports.Engineer = Engineer;