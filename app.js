var i_ex = require('./inheritance.js');
var c_ex = require('./composition.js');

var animal = new i_ex.Animal('test');
var spot = new i_ex.Dog('Spot');

spot.bark();
spot.eat();
animal.eat();

console.log(spot.constructor);
console.log(animal.constructor);


// Composition
console.log('-------------------------------');

var spot = c_ex.Dog('Spot');
spot.bark();
spot.eat();

var speedyBot = c_ex.CatchingRobotDog('speedyBot');
speedyBot.bark();
speedyBot.drive();

speedyBot.setSpeed(speedyBot.doubleSpeed());
speedyBot.drive();