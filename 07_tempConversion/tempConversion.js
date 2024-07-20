const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9;

  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 32 + (celsius * (9/5));

  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
