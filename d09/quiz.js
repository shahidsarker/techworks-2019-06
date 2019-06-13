// create an ask function that takes a question and an answer
function ask(question, answer) {
  // use a prompt to ask question and store user input
  let input = prompt(question, "");
  // check if input is null or not equal to answer
  if (input === null || input !== answer) {
    // return 0
    return 0;
  } else if (input === answer) {
    // if answer is correct, return 1
    return 1;
  }
}

// var point = ask("Is the moon made of cheese?", "yes");

// console.log(point);

let questions = [
  "Is the sky blue?",
  "Do pigs fly?",
  "Is it cold in the room?",
  "Do you love JavaScript?"
];

let answers = ["yes", "no", "no", "yes"];

//your code

// // loop through the set of questions
// for (let i = 0; i < questions.length; i++) {
//   ask(questions[i], answers[i]);
// }

// score keeping variant

let score = 0;
// loop through the set of questions
for (let i = 0; i < questions.length; i++) {
  score += ask(questions[i], answers[i]);
}

// alert user about their points
alert("You scored " + score + " points!");
