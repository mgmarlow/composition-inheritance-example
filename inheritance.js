function Animal (name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log('eating');
}

function Dog (name) {
  Animal.call(this, name);
}
// Inherit
Dog.prototype = Object.create(Animal.prototype);
// Redefine base constructor
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log('bark bark, my name is: ' + this.name);
}
// Override
Dog.prototype.eat = function () {
  console.log('new eating');
}

// Node exports
exports.Animal = Animal;
exports.Dog = Dog;