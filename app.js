// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Use map() to create a new array where each value is multiplied by 2
const numsTimesTwo = nums.map((num) => {
  return num * 2;
});

// Console log the new array
console.log(numsTimesTwo);

// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):

const [firstIngredient, secondIngredient] = pizzaToppings;

// Console log the variables
console.log(firstIngredient);
console.log(secondIngredient);

// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
  make: 'Audi',
  model: 'Q5',
};

// Use object destructuring to extract make and model
const { make, model } = car;

// Console log the variables
console.log(make);
console.log(make);

