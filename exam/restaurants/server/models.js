const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eatrestDb', (err) =>{
    if (err){console.log(err), {useNewUrlParser: true}}
    console.log('MONGO');
});

const ReviewSchema =new mongoose.Schema({
    reviewer: {type: String, required: true, minlength: 3},
    review: {type: String, required: true, minlength: 3},
    rate: {type: Number, required: true, min: 1, max: 5}
},{timestamps: true});

const RestaurantSchema = new mongoose.Schema({
    restName: {type: String, required: true, minlength: 3},
    cuisine: {type: String, required: true, minlength: 3},
    reviews: [ReviewSchema]
}, {timestamps: true});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;