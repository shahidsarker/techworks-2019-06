# Day 12: Afternoon

## DOM

Document Object Model

- The document is seen as an object
- It has properties that can be accessed/modified
- Built-in methods for manipulation

* Access `document` using DevTools
* `console.log(document)` allows you to access the `document` object

```javascript
// returns the document object itself
console.log(document);

// modify the document's background
document.bgColor = "blue";
```

## DOM: Functions

```javascript
// create a paragraph element
let myPara = document.createElement("P");

// add text to the paragraph
myPara.textContent = "Hello World!!";

// add the paragraph to the document body
document.body.appendChild(myPara);
```

## DOM: Event Listeners

Make your page interactive:

```javascript
// create a DIV element
let myDiv = document.createElement("DIV");

// set height to take up entire page
// '100vh' = 100% of view height
myDiv.style.height = "100vh";

// append the element to DOM
document.body.appendChild(myDiv);

// add an event listener to the element
// use a callback function for what to do
myDiv.addEventListener("mousemove", event => {
  // log mouse position
  // clientX and clientY show cursor position
  console.log(event);
  let x = event.clientX;
  let y = event.clientY;
  // display coordinates on page
  myDiv.textContent = x + ", " + y;
  // change page color based on position (red and green)
  myDiv.style.backgroundColor = "rgb(" + x + "," + y + ", 100)";
});
```

## Modify Code to Make It Functional

```javascript
// create a function to turn any element fullscreen
const fullScreen = element => {
  let newElement = document.createElement(element);
  newElement.style.height = "100vh";
  document.body.appendChild(newElement);
  return newElement;
};

const input = (inputType, DOMElement, callback) => {
  DOMElement.addEventListener(inputType, event => {
    let x = event.clientX;
    let y = event.clientY;
    callback(DOMElement, x, y);
  });
};

const output = (element, x, y) => {
  element.textContent = x + ", " + y;
  element.style.backgroundColor = "rgb(" + x + "," + y + ", 100)";
};

input("mousemove", fullScreen("DIV"), output);
```

What happens if you change the inputType to `"click"`?
