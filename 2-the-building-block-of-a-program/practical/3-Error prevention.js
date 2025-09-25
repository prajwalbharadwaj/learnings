function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("The first argument is not a number.");
    } else if (typeof b != "number") {
      throw new ReferenceError("The second argument is not a number.");
    } else {
      console.log(a + b);
    }
    console.log("It still works");
  } catch (err) {
    console.log("Error!", err);
  }
  console.log("It still works");
}

addTwoNums(5, "5");
