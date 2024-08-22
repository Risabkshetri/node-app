require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express();
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
console.log('env',process.env.DB_PASSWORD)
//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/users', userRouter.router);
server.use('/products', productRouter.router);

// MVC: Model View Controller


server.listen(process.env.PORT, () => {
  console.log('server started');
});


