// // Part 1: Separate Array Elements
// const topSixRestaurants = [
//   "Chick-fil-A",
//   "In-N-Out",
//   "Chipotle",
//   "McDonald's",
//   "Taco Bell",
//   "KFC"
// ];

// console.log(...topSixRestaurants);

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(2);
// set.add(1);

// console.log("🚀 ~ set:", set);

// let obj = {
//   key: 1,
//   value: 4
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);

// function count(...basket) {
//   console.log(basket.length);
// }

// count(10, 9, 8, 7, 6);

// function scopeTest() {
//   var y = 44;

//   console.log(x);
// }

// var x = 33;
// scopeTest();

// class Animal {}

// class Dog extends Animal {
//   constructor() {
//     super();
//     this.noise = "bark";
//   }

//   makeNoise() {
//     return this.noise;
//   }
// }

// class Wolf extends Dog {
//   constructor() {
//     super();
//     this.noise = "growl";
//   }
// }

// var result = new Wolf();
// console.log(result.makeNoise());

function count(...food) {
  console.log(food.length);
}

count("Burgers", "Fries", null);
