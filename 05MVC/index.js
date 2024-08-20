const express = require('express');
const morgan = require('morgan');
const server = express();
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/users', userRouter.router);
server.use('/products', productRouter.router);

// MVC: Model View Controller


server.listen(8080, () => {
  console.log('server started');
});