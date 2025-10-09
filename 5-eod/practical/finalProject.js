// Dataset representing dishes
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 12.55 },
  { name: "Vegetarian Pizza", price: 6.45 }
];

const tax = 1.2;

// Step 2: Define getPrices()
function getPrices(taxBoolean) {
  // Step 3: Loop over dishData
  for (let i = 0; i < dishData.length; i++) {
    // Step 4: Declare finalPrice
    let finalPrice;

    // Step 5: Handle conditional pricing
    if (taxBoolean === true) {
      finalPrice = dishData[i].price * tax;
    } else if (taxBoolean === false) {
      // Step 6: Handle no-tax pricing
      finalPrice = dishData[i].price;
    } else {
      // Step 7: Handle invalid input
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }

    // Step 8: Log dish details
    console.log(
      "Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2)
    );
  }
}

// Step 9: Define getDiscount()
function getDiscount(taxBoolean, guests) {
  // Step 10: Invoke getPrices()
  getPrices(taxBoolean);

  // Step 11: Validate input
  if (typeof guests === "number" && guests > 0 && guests < 30) {
    // Step 12: Calculate discount
    let discount = 0;

    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }

    console.log("Discount is: $" + discount);
  } else {
    // Step 13: Handle invalid input
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Step 14: Test your code
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount("yes", 4); // Invalid input example
getDiscount(true, 50); // Invalid guest number
