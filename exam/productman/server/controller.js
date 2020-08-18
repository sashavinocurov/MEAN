const Product = require('./models');
const path = require('path');

module.exports = {
    allProduct: (req,res) => {
        console.log("All Products route ########");
        Product.find()
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    newProduct: (req,res) => {
        console.log("New Product route #######");
        Product.create(req.body)
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    oneProduct: (req,res) => {
        console.log("One Product route #######");
        Product.findById(req.params.id)
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    editProduct: (req,res) => {
        console.log("Edit product route ########");
        Product.updateOne({_id: req.params.id}, req.body, {runValidators: true})
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    destroyProduct: (req,res) => {
        console.log("Delete product route ########");
        Product.findByIdAndDelete({_id: req.params.id})
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    }
};