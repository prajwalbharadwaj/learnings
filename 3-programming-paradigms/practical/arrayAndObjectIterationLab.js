// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake"
];

function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

// logDairy(dairy);
// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
const animal = {
  canJump: true
};

const bird = Object.create();
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(bird) {
  for (let property of Object.keys(bird)) {
    console.log(property + ": " + bird[property]);
  }
}

birdCan(bird);
console.log("---");

// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan(animal) {
  for (const key in animal) {
    console.log(key + ": " + animal[key]);
  }
}
animalCan(bird);
