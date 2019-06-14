// In class example
let numbersArray = [2, 5, 87, 92, 21, 42, 67, 85];

let newArray = numbersArray.filter(number => {
  return number % 2 == 0;
});

console.log(newArray);

// 1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
  // your code here
  return arr.filter(number => {
    return number >= 5;
  });
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// 2. Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
  // your code here

  return arr.filter(number => {
    return number % 2 == 0;
  });
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// 3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
  // your code here
  return arr.filter(word => {
    return word.length <= 5;
  });
}
// test
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]

// 4. Given an array of people objects, return a new array that has filtered out all those who don’t belong to the club.

function peopleWhoBelongToTheIlluminati(arr) {
  // your code here
  let newArray = arr
    .filter(person => {
      return person.member;
    })
    .map(person => person.name);
  return newArray;
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

// 5. Filter out all the people who are not old enough to see The Matrix (younger than 18)

// function ofAge(arr) {
//   // your code here
//   return arr.filter((person) => person.age < 18).map(person => person.name +
//     ' is not old enough!')

// }

function ofAge(arr) {
  // your code here
  return arr
    .filter(person => {
      return person.age >= 18;
    })
    .map(person => {
      return person.name + " is old enough!";
    });
}

// test
console.log(
  ofAge([
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
      name: "Kanye West",
      age: 16
    },
    {
      name: "Bruce Wayne",
      age: 100
    }
  ])
);
