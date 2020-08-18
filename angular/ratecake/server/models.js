const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ratecake', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    comment: {type: String},
    rating: {type: Number},
}, {timestamp: true});

const CakeSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:2},
    image: {type: String, required: true},
    comments: [CommentSchema],
},{timestamp: true});

const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;