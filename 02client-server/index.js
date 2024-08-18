//// basic http server

// const http = require('http');
// const data = {
//     name: "Rishab",
//     age: 18,
//     city: "Delhi"
// }
// const server = http.createServer((req, res) => {

//     console.log(req.url)

//     console.log("server is running")

//     res.setHeader("Dummy", "DummyValue");
//     res.setHeader('Content-Type', 'text/html')
//     res.end('<h1>Rishab Kshetri</h1>')
//     // res.setHeader('Content-Type', 'application/json')
//     // res.end(JSON.stringify(data))
   
// })

// server.listen(8080)

///// Advanced http server

const http = require('http');
const fs = require('fs');

const index = fs.readFileSync("index.html", 'utf-8')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(index)
})

server.listen(8080)
