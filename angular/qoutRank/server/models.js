const mongoose = require('mongoose');
mongoose.connect ('mongodb://localhost/restaurant_db', (err) => {
    if (err){console.log(err), {useNewUrlParser: true} }
    console.log('Connected to mongo')
});

const ReviewSchema = new mongoose.Schema ({
    reviewerName: {type: String, required: [true, "Name needed more then 3 characters."], minlength: 3},
    comment: {type: String, required: [true, "Comment should be at least 5 characters."], minlength: 5},
    stars: {type: Number, min: 1, max: 5}
}, {timestamps: true});

const RestaurantSchema = new mongoose.Schema ({
    name: {type: String, required: [true, "Name needed more then 3 characters."], minlength:3},
    cuisine: {type: String, required: [true, "Cuisine description required more then 5 characters."], minlength:5 },
    reviews: [ReviewSchema]
}, {timestamps: true});

module.exports = mongoose.model('Restaurant', RestaurantSchema);