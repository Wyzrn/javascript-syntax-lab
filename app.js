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