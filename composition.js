// Functionality
function barker (state) {
  return function () {
    console.log('bark bark, my name is: ' + state.name);
  }
}

function driver (state) {
  return function () {
    console.log('Driving at ' + state.speed + ' mph');
  }
}

function eater () {
  return function () {
    console.log('eating...');
  }
}

// Composed objects
function Dog (name) {
  var state = {
    name: name
  };

  return {
    eat: eater(),
    bark: barker(state)
  };
}

function CatchingRobotDog (name) {
  var state = {
    name: name,
    speed: 100,
    position: 0
  };

  return {
    bark: barker(state),
    drive: driver(state)
  };
}

// Node exports
exports.Dog = Dog;
exports.CatchingRobotDog = CatchingRobotDog;