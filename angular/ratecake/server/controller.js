const Cake = require("./models");

module.exports={
    allCakes: (req,res) => {
        console.log("All Cakes ##########");
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newCake: (req,res) => {
        console.log("New Cake ##########");
        Cake.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getOneCake: (req,res) => {
        console.log("Show Cake ##########");
        Cake.find({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    rateCake: (req,res) => {
        console.log("Rate Cakes ##########");
        Cake.findByIdAndUpdate({_id: req.params.id},{$push:{comments: {comment:req.body.comment, rating:req.body.rating}}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
}