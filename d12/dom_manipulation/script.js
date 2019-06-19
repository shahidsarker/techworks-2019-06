// let myDiv = document.createElement('DIV')

// // 100vh = 100% view height
// myDiv.style.height = '100vh'

// myDiv.style.backgroundColor = '#f0f0f0'

// document.body.appendChild(myDiv)

// myDiv.addEventListener('mousemove', (event) => {
//   console.log(event)
//   let x = event.clientX
//   let y = event.clientY
//   myDiv.textContent = x + ', ' + y
//   myDiv.style.backgroundColor = 'rgb(' + x + ',' + y + ',100)'
// })

// create a function that makes an element 100% of the view height
const fullscreen = element => {
  let newElement = document.createElement(element);
  newElement.style.height = "100vh";
  document.body.appendChild(newElement);
  return newElement;
};

// create a function that connects an input to an element and a callback
const input = (inputType, domElement, callback) => {
  domElement.addEventListener(inputType, event => {
    let x = event.clientX;
    let y = event.clientY;
    callback(domElement, x, y);
  });
};

const output = (element, x, y) => {
  element.textContent = x + ", " + y;
  element.style.backgroundColor = "rgb(" + x + "," + y + ",100)";
};

input("click", fullscreen("DIV"), output);
