const Pet = require('./modules');
const path = require('path');

module.exports ={
    allPets: (req,res) => {
        console.log("all pets rout ########");
        Pet.find().sort({petType: 1})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getOnePet:(req,res) => {
        console.log("getOne rout ###########");
        console.log(request.params.id);
        Pet.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newPet: (req,res) => {
        console.log("addNew route #########");
        Pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    editPet: (req,res) => {
        console.log("edit rout ############");
        console.log(req.params.id);
        Pet.updateOne({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    addLike: (req,res) => {
        console.log("like route ##########");
        console.log(req.params.id);
        Pet.update({_id:req.params.id}, {$inc: {likes:1}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deletePet: (req,res) => {
        console.log("delete rout #############", req.params.id);
        Pet.findByIdAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
        
    },
    reRout: (req,res) => {
        console.log("re route ##########");
        res.sendFile(pat.resolve("./public/dist/public/index.html"));
    }
};