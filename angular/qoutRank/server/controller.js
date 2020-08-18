const Restaurant = require('./models');

module.exports = {
    allRestaurant : (req,res) =>{
        Restaurant.find()
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    newRestaurant : (req,res) =>{
        Restaurant.create(req.body)
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    oneRestaurant: (req,res) =>{
        Restaurant.findById(req.params.id)
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    editRestaurant : (req,res) =>{
        Restaurant.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    destroyRestaurant : (req,res) =>{
        Restaurant.findOneAndDelete(req.params.id)
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
    reviewRestaurant : (req,res) =>{
        console.log('On this route###########');
        Restaurant.findOneAndUpdate(req.params.id, {$push: {reviews: req.body}}, {runValidators: true})
            .then(data =>res.json(data))
            .catch(err =>res.json(err));
    },
}