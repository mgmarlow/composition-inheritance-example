// Functionality
function barker (state) {
  return function () {
    console.log('bark bark, my name is: ' + state.name);
  }
}

function doubler (state) {
  return function () {
    return state.speed * 2;
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

  function getSpeed () {
    return state.speed;
  }

  function setSpeed (speed) {
    state.speed = speed;
  }

  return {
    bark: barker(state),
    drive: driver(state),
    doubleSpeed: doubler(state),
    getSpeed: getSpeed,
    setSpeed: setSpeed
  };
}

// Node exports
exports.Dog = Dog;
exports.CatchingRobotDog = CatchingRobotDog;