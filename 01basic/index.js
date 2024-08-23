// usecase of common js pattern

// const lib = require('./lib.js')

// console.log("sum is ",lib.sum(4,5))


// // usecase of module pattern

// import {sum, diff} from './lib.js'

// console.log("sum is ",sum(4,5))

// console.log("diff is ",diff(4,5))



// const fs = require('fs');
// const t1 = performance.now()
// // console.log(t1)
// const txt = fs.readFileSync("demo.txt","utf-8")

// // const txt = fs.readFile("demo.txt","utf-8", (err, data) => {
// //     if (err) {
// //         console.log(err)
// //     } else {
// //         console.log(data)
// //     }
// // })
// console.log(txt);
// const t2 = performance.now()
// // console.log(t2)
// console.log("hello world");

// console.log(t2-t1)


// // understanding npm

const {sum, diff} = require('./lib.js')

console.log(diff(5,5)) 
// const express = require('express');

// console.log("hello world")
// const server = express();
// server.listen(8080)