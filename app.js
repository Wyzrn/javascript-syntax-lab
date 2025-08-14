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

// ! Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ['Cheese', 'Sauce'];

// Duplicate the array using the spread operator
const uncontroversialPizzaToppings = [...morePizzaToppings];

// Console log the new array
console.log(uncontroversialPizzaToppings);

// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

// Duplicate the object using the spread operator
const myCar = { ...anotherCar };

// Change the make and model properties of myCar
myCar.make = 'Honda';
myCar.model = 'Civic';

// Console log both objects
console.log('myCar: ', myCar);
console.log('anotherCar: ', anotherCar);

// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like 
//    'username', 'age', or 'email') to it.
// 
// b. Create an object named `userProfile`. 
// 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:

// Define a variable named propertyName with a string
const propertyName = 'username';

// Create an object named userProfile with propertyName as a dynamic key
const userProfile = {
  [propertyName]: 'jdoe123'
};

// Console log the userProfile object
console.log(userProfile);