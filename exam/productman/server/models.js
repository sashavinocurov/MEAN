const mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/productmanDB', (err) => {
    if (err){console.log(err), {useNewUrlParser: true}}
    console.log('Connected To Mongo!!!');
});

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    qty: {type: Number, required: true, min: 0},
    price: {type: Number, required: true, min: 0},
}, {timestamps: true});

const Product = mongoose.model ('Product', ProductSchema);
module.exports = Product;