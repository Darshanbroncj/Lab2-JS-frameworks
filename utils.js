// utils.js

// Function to greet the user
function greetUser(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to calculate the factorial of a number
function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}

// Advanced function: Generate Fibonacci sequence up to n numbers
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Export the functions
module.exports = {
    greetUser,
    convertCelsiusToFahrenheit,
    calculateFactorial,
    generateFibonacci
};
