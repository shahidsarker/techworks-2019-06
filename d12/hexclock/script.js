const time = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // console.log(hours,minutes,seconds)

  let arr = [hours, minutes, seconds].map(num => {
    if (num < 10) {
      return "0" + num;
    } else {
      return String(num);
    }
  });

  // console.log(arr)

  hours = arr[0];
  minutes = arr[1];
  seconds = arr[2];

  return hours + minutes + seconds;
};

// console.log(time())

const output = time => {
  let color = "#" + time;

  document.body.bgColor = color;
  document.body.textContent = "";
  let container = document.createElement("DIV");
  container.style.textAlign = "center";

  let myH1 = document.createElement("H1");
  myH1.innerText = time;
  myH1.style.fontFamily = "Arial";
  myH1.style.fontSize = "12em";
  myH1.style.color = "white";

  document.body.appendChild(container);
  container.appendChild(myH1);
};

setInterval(() => {
  output(time());
}, 1000);
