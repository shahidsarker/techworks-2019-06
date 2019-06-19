# Hex Clock Exercise

```javascript
const time = () => {
  // use the built in Date method
  let date = new Date();
  // get the hours
  let hours = date.getHours();
  // get the minutes
  let minutes = date.getMinutes();
  // get the seconds
  let seconds = date.getSeconds();
  // values less than 10 are single digit so let's fix for that
  let arr = [hours, minutes, seconds].map(num => {
    if (num < 10) {
      // value will be turned into a string
      return "0" + num;
    } else {
      // the value will be an integer but we want a string
      return String(num);
    }
  });
  // reassign the named variables to their corresponding string values
  hours = arr[0];
  minutes = arr[1];
  seconds = arr[2];

  // return a string of the 3 values
  return hours + minutes + seconds;
};

// function to apply time to page
const output = time => {
  // make a hex string using the inputted time
  let color = "#" + time;
  // apply the color as a background
  document.body.bgColor = color;
  // display the hextag
  document.body.textContent = color;
};

output(time());

// setInterval() helper function
// takes a callback function and a time period
setInterval(() => output(time()), 1000);

// extra:
// Click and double click
const startClick = callback => {
  document.body.addEventListener("dblclick", event => {
    callback();
  });
};

const stopClick = (callback, name) => {
  document.body.addEventListener("click", event => {
    callback(name);
  });
};

const init = () => {
  const tick = setInterval(() => {
    output(time());
  }, 1000);
  stopClick(clearInterval, tick);
  startClick(init);
};

init();
```
