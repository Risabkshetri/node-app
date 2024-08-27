const fs = require('fs');
const index = fs.readFileSync('./pages/index.html', 'utf-8');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const server = express();

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages','index.html'), (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

server.listen(8080, () => {
  console.log('server started');
});