// server.js

// Import functions from the utilities file
const utils = require('./utils'); // Using CommonJS syntax

// Invoke the functions
utils.greetUser('John', 'Doe');
console.log(utils.convertCelsiusToFahrenheit(25));
console.log(utils.calculateFactorial(5));
console.log(utils.generateFibonacci(10));
