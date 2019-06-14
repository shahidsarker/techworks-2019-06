// let alertWhenRun = (callback) => {
//   callback()

//   return console.log('The callback has been invoked!')
// }

// let sayHello = () => {
//   console.log('Hello')
// }

// alertWhenRun(sayHello)

let multiplyTheAnswerByFive = (callback, input) => {
  return 5 * callback(input);
};

let addOne = input => {
  return input + 1;
};

console.log(addOne(4));

console.log(multiplyTheAnswerByFive(addOne, 4));
