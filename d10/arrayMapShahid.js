// My own solutions to the problems

// Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  // your code here
  return arr.map(num => num * 2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
function stringItUp(arr) {
  // your code here
  return arr.map(num => num.toString());
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// Capitalize each of an array of names
function capitalizeNames(arr) {
  // your code here
  return arr.map(
    string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  );
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// Make an array of strings of the names
function namesOnly(arr) {
  // your code here

  let newArray = arr.map(person => person.name);
  return newArray;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "John Smith",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bruce Wayne",
      age: 100
    }
  ])
);
// ["Angelina Jolie", "John Smith", "Paris Hilton", "Kayne West", "Bruce Wayne"]

function makeStrings(arr) {
  // your code here

  return arr.map(person => {
    if (person.age >= 18) {
      return person.name + " can go to The Matrix";
    } else {
      return person.name + " is under age!!";
    }
  });
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "John Smith",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bruce Wayne",
      age: 100
    }
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "John Smith is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bruce Wayne can go to The Matrix"]

function peopleWhoBelongToTheIlluminati(arr) {
  // your code here

  return arr.filter(person => {});
}
// test
console.log(
  peopleWhoBelongToTheIlluminati([
    {
      name: "Angelina Jolie",
      member: true
    },
    {
      name: "John Smith",
      member: false
    },
    {
      name: "Paris Hilton",
      member: true
    },
    {
      name: "Kanye West",
      member: false
    },
    {
      name: "Bruce Wayne",
      member: true
    }
  ])
);
