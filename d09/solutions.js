// Sum Loop

let prices = [42, 21, 87, 142, 9, 51];
let sum = 0;

// Your code here

// loop through the array values
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
}

console.log("The sum is: ", sum);

// 99 Bottles of Juice

// Use a for loop that iterates starting at 99 and stops before 0.
for (let i = 99; i > 0; i--) {
  if (i > 2) {
    // Any number of bottles above 2
    console.log(
      i +
        " bottles of juice on the wall! " +
        i +
        " bottles of juice!" +
        // use \n inside string to insert a new line
        "\nTake one down, pass it around...\n" +
        (i - 1) +
        " bottles of juice on the wall!\n"
    );
  } else if (i == 2) {
    // 2 bottles
    console.log(
      i +
        " bottles of juice on the wall! " +
        i +
        " bottles of juice!" +
        "\nTake one down, pass it around...\n" +
        (i - 1) +
        " bottle of juice on the wall!\n"
    );
  } else if (i == 1) {
    // 1 bottle
    console.log(
      i +
        " bottle of juice on the wall! " +
        i +
        " bottle of juice!" +
        "\nTake one down, pass it around...\n" +
        (i - 1) +
        " bottles of juice on the wall!"
    );
  }
}

// Bonus Array Question

// Define the array
let arr = [10, 15, 3, -2, 9000, -44];

// Find the largest number in the array
// Define a largest variable
let largest;

for (let i = 0; i < arr.length; i++) {
  // check if largest is undefined OR less than current value from array
  if (largest === undefined || largest < arr[i]) {
    // update recorded largest value
    largest = arr[i];
  }
}

console.log(largest);

// Find the smallest number in the array
// Define a smallest variable
let smallest;

for (let i = 0; i < arr.length; i++) {
  // check if smallest is undefined OR greater than current value from array
  if (smallest === undefined || smallest > arr[i]) {
    //  update recorded smallest value
    smallest = arr[i];
  }
}

console.log(smallest);

// Create a new array that is the reverse of the above one without .reverse()
let reverseArray = [];

// start at index value of 1 less than the length of the array
for (let i = arr.length - 1; i >= 0; i--) {
  // use the Array push() method to push each value into reverseArray()
  reverseArray.push(arr[i]);
}

console.log(reverseArray);

// Convert Temperature

// Celsius

function celsiusToFahrenheit(celsius) {
  // (C × 9/5) + 32 = F
  let fahrenheit = (celsius * 9) / 5 + 32;

  return (
    celsius +
    " degrees Celsius is equal to " +
    fahrenheit +
    " degrees Fahrenheit"
  );
}

// Fahrenheit

function fahrenheitToCelsius(fahrenheit) {
  // (F − 32) × 5/9 = C
  let celsius = (fahrenheit - 32) * (5 / 9);
  return (
    fahrenheit +
    " degrees Fahrenheit is equal to " +
    celsius +
    " degrees Celsius"
  );
}
