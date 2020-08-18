const Restaurant = require("./models");

module.exports={
    allRestaurants: (req,res) => {
        console.log("Display All ##########");
        Restaurant.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newRestaurant: (req,res) => {
        console.log("New Rest #########");
        Restaurant.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    viewRestaurant: (req,res) => {
        console.log("Show Rest #########");
        Restaurant.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    editRestaurant: (req,res) => {
        console.log("Edit Rest ###########");
        Restaurant.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    wrightReview: (req,res) => {
      console.log(req.body);
        console.log("Review Added #########");
        Restaurant.updateOne({_id:req.params.id}, {$push: {reviews: req.body}}, {runValidators: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deleteRestaurant: (req,res) => {
        console.log("Delete Rest ########");
        Restaurant.findByIdAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}