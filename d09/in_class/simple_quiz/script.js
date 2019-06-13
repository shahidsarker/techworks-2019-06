// define a function that takes a question and an answer
function ask(question, answer) {
  // prompt the user for an input with the question that's passed in
  // stores the input in userInput
  let userInput = prompt(question);

  if (userInput === null || userInput !== answer) {
    // if userInput is null or userInput is not equal to the answer
    // return 0 because it is an incorrect answer
    return 0;
  } else if (userInput === answer) {
    // is userInput is equal to the answer
    // return 1 because it is a correct answer
    return 1;
  }
}

// Example of running the ask function and getting back a point
// var point = ask("Is the moon made of cheese?", "yes")
// console.log(point)

// An array of questions
let questions = [
  "Is the sky blue?",
  "Do pigs fly?",
  "Is it cold in the room?",
  "Do you love JavaScript?"
];

// An array of answers
let answers = ["yes", "no", "no", "yes"];

// Both the questions and their corresponding answers have the same index-value

// keep track of the user's score in userScore
let userScore = 0;

// loop through the questions and answers using the length of the questions array as a reference
for (let i = 0; i < questions.length; i++) {
  // on each iteration: ask a question and store the returned value in a point variable
  // I get this point from the ask() function
  let point = ask(questions[i], answers[i]);
  // update userScore with the point value for this iteration of the loop
  userScore += point;
}

// alert the user of their score
alert("You scored: " + userScore);
