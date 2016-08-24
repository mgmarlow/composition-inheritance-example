var i_ex = require('./inheritance.js');
var c_ex = require('./composition.js');

console.log('---- Engineer ----');
c_ex.engineer.sayName();
c_ex.engineer.doJob();

console.log('---- Mangineer: ----');
c_ex.mangineer.sayName();
c_ex.mangineer.doJob();