const express = require('express');
const productControler = require('../controler/product');
const router = express.Router();

router
.post('/', productControler.createProduct)
.get('/ssr', productControler.getAllProductsSSR)
.get('/', productControler.getAllProducts)
.get('/:id', productControler.getProduct)
.put('/:id', productControler.replaceProduct)
.patch('/:id', productControler.updateProduct)
.delete('/:id',productControler.deleteProduct);

exports.router = router