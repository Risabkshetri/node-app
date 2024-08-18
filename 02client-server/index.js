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
const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'));
// const product = data[0];

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.end(index)

    // res.setHeader('Content-Type', 'application/json')
    // res.end(data)

    if(req.url.startsWith('/product')) {
       const id = req.url.split('/')[2]
     const product = data.find(item => item.id === (+id))
            res.setHeader('Content-Type', 'text/html')
            let modifiedIndex = index.replace('**title**', product.title)
            .replace('**thumbnail**', product.thumbnail)
            .replace('**description**', product.description)
            .replace('**price**', product.price)
            .replace('**discountPercentage**', product.discountPercentage)
            .replace('**rating**', product.rating)
            .replace('**stock**', product.stock)
            .replace('**brand**', product.brand)
            .replace('**category**', product.category)
            .replace('**availabilityStatus**', product.availabilityStatus);
            res.end(modifiedIndex)
            return;
    } 

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html')
            res.end(index)
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
            break;
        // case '/product':
        //     res.setHeader('Content-Type', 'text/html')
        //     let modifiedIndex = index.replace('**title**', product.title)
        //     .replace('**thumbnail**', product.thumbnail)
        //     .replace('**description**', product.description)
        //     .replace('**price**', product.price)
        //     .replace('**discountPercentage**', product.discountPercentage)
        //     .replace('**rating**', product.rating)
        //     .replace('**stock**', product.stock)
        //     .replace('**brand**', product.brand)
        //     .replace('**category**', product.category)
        //     .replace('**availabilityStatus**', product.availabilityStatus);
        //     res.end(modifiedIndex)
        //     break;
    
        default: 
            res.writeHead(404, 'Not Found')
            res.end('Not Found')
            break;
    }
})

server.listen(8080)
