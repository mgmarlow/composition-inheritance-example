var Employee = {
  create: function (state) {
    var instance = Object.create(this);
    Object.keys(state).forEach(function (key) {
      instance[key] = state[key];
    });
    return instance;
  },
  sayName: function () {
    console.log(this.name);
  },
  doJob: function () {
    return this.roles.forEach(function (role) {
      role.perform();
    });
  }
}

var Role = {
  create: function (state) {
    var instance = Object.create(this);
    instance.roleName = state.roleName
    instance.perform = state.perform
    return instance;
  },
  getRole: function () {
    console.log(this.role);
  }
}

// Define Role Types
var Engineer = Role.create({
  roleName: 'Engineer',
  perform: function () {
    console.log('Coding...');
  }
});
var Manager = Role.create({
  roleName: 'Manager',
  perform: function () {
    console.log('Managing...');
  }
});


// Create our Employees
var bob = Employee.create({
  name: 'Bob',
  roles: [Engineer]
});

var michelle = Employee.create({ name: 'Michelle' });
michelle.roles = [Manager];

var david = Employee.create({ name: 'David' });
david.roles = [Engineer, Manager];


// Node module exports
exports.engineer = bob;
exports.manager = michelle;
exports.mangineer = david;