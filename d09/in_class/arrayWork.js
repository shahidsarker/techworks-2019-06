// Work with this array:
// [10, 15, 3, -2, 9000, -44];
// Write code:

// Find the smallest number in the array

let array = [10, 15, 3, -2, 9000, -44];

// Find the largest number in the array

let largestNumber = array[0];

for (let i = 0; i < array.length; i++) {
  if (largestNumber < array[i]) {
    largestNumber = array[i];
  }
}

console.log("Largest:", largestNumber);

// Find the smallest number in the array

let smallestNumber = array[0];

for (let i = 0; i < array.length; i++) {
  if (smallestNumber > array[i]) {
    smallestNumber = array[i];
  }
}

console.log("Smallest:", smallestNumber);

// Create a new array that is the reverse of the above one without .reverse()
let reverseArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reverseArray.push(array[i]);
}

console.log("The first array", array);
console.log("The updated reverseArray", reverseArray);
