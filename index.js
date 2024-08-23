// index.js

// Get the arguments passed to the script
const args = process.argv.slice(2);

// Convert arguments to numbers
const num1 = parseInt(args[0], 10);
const num2 = parseInt(args[1], 10);

// Perform operations with the numbers
const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
