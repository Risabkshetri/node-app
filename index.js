// // let number  = 20

// // console.log(number)

// const array = []
// let pos, ele, size;

// console.log("Enter size of array: ", size)
// for(let i = 0; i<size; i++){
//     array = array.push(arr[i])
// }

// console.log(array)

const readline = require('readline');

// Create an interface to read data from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Enter a value: ', (answer) => {
  console.log(`You entered: ${answer}`);

  // Close the readline interface
  rl.close();
});
