function doubleNumbers(arr) {
  // your code here
  let newArray = arr.map(num => {
    return num * 2;
  });
  return newArray;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr) {
  // your code here

  let newArray = arr.map(num => {
    return num.toString();
  });
  return newArray;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr) {
  // your code here
  let newArray = arr.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
  return newArray;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function namesOnly(arr) {
  // your code here
  let newArray = arr.map(person => {
    return person.name;
  });
  return newArray;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
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
      name: "Bob Ziroll",
      age: 100
    }
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function makeStrings(arr) {
  // your code here
  let newArray = arr.map(person => {
    if (person.age >= 18) {
      return person.name + " can go to The Matrix";
    } else {
      return person.name + " is under age!!";
    }
  });
  return newArray;
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
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
      name: "Bob Ziroll",
      age: 100
    }
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
