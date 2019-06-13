// Convert Temperature
// Create a function celsiusToFahrenheit() that takes a temperature in Celsius as its argument.
// Take the temperature that’s passed in and convert to Fahrenheit.
// Output your temperature like so:
// 0 degrees Celsius is equal to 32 degrees Fahrenheit

function celsiusToFahrenheit(celsius) {
  //  32°F = (0°C × 9/5) + 32
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(
    celsius +
      " degrees Celsius is equal to " +
      fahrenheit +
      " degrees Fahrenheit"
  );
}

console.log(celsiusToFahrenheit(17));

// Create a function fahrenheitToCelsius() that takes a temperature in Fahrenheit as its argument.
// Take the temperature that’s passed in and convert to Celsius.
// Output your temperature like so:
// 32 degrees Fahrenheit is equal to 0 degrees Celsius

function fahrenheitToCelsius(fahrenheit) {
  // 0°C = (32°F − 32) × 5/9
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(
    fahrenheit +
      " degrees Fahrenheit is equal to " +
      celsius +
      " degrees Celsius"
  );
}

console.log(fahrenheitToCelsius(62.6));
