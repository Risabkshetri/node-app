const fs = require('fs');
const model = require('../model/product')
const mongoose = require('mongoose');
const Product = model.Product;
const ejs = require('ejs');
const path = require('path');

// view
// exports.getAllProductsSSR = async (req, res) => {
//   const products = await Product.find();
//   ejs.renderFile(path.join(__dirname, '../pages/index.ejs'), {product: products[0] }, (err, result) => {
//     res.send(result);
//     if (err) {
//       console.log(err);
//     }
//   })
// };

exports.getAllProductsSSR = async (req, res) => {
  try {
    const products = await Product.find();
    ejs.renderFile(
      path.join(__dirname, '../pages/index.ejs'),
      { products: products }, 
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('An error occurred');
        }
        res.send(result);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};
// Create
exports.createProduct = async (req, res) => {
  try {
    let result;
    if (Array.isArray(req.body)) {
      result = await Product.insertMany(req.body);
    } else {
      const product = new Product(req.body);
      result = await product.save();
    }

    res.status(201).json(result);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    if (err.code === 11000) {
      return res.status(409).json({ error: "Duplicate key error. Product with this unique field already exists." });
    }
    console.error("Error in createProduct:", err);
    res.status(500).json({ error: "An error occurred while creating product(s)" });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({id})
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteProduct = (async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});
