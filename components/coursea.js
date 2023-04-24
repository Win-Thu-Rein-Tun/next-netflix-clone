const { error } = require("console");

// Task 1
function logDairy() {
  for (var product of dairy) {
    console.log(product);
  }
}

logDairy();

error.log("still error")
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (var key of Object.keys(bird)) {
    console.log(`${key}: ${bird[key]}`);
  }
}

birdCan();

// Task 3
function animalCan() {
  for (var key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}

animalCan();
