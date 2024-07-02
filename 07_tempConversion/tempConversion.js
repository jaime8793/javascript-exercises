const convertToCelsius = function (fahrenheit) {
  //console.log((fahrenheit - 32) * (5 / 9));
  let number = (fahrenheit - 32) * (5 / 9);
  let fixed = Math.round(number * 10) / 10;
  //console.log(fixed);
  return fixed;
};

//convertToCelsius(32);

const convertToFahrenheit = function (celcius) {
  // console.log(celcius * (9 / 5) + 32);
  let number = celcius * (9 / 5) + 32;
  let fixed = Math.round(number * 10) / 10;
  // console.log(fixed);
  return fixed;
};
//convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
