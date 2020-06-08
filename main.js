let degreesCelsius = getInput(1);
let degreesFahrenheit = c2f(degreesCelsius);
let message = makeMessage(degreesCelsius, degreesFahrenheit)
console.log(message);

function makeMessage(degreesCelsius, degreesFahrenheit) {
  return degreesCelsius + ' degrees celsius is ' + degreesFahrenheit + ' in fahrenheit.'
}

function c2f(degreesCelsius) {
  return degreesCelsius * 9 / 5 + 32;
}

function getInput(n) {
  return process.argv[n + 1];
}
