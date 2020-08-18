const MongModels = require('../models/models');
const Student = MongModels.Student;
const path = require('path');

module.exports = {

    // OPTIONAL PASSING OF NEXT
    // will add a big angry error to your front end
    // getAll: (req, res, next) => {
    //     Student.find()
    //         .then(data => res.json({message: "success", results: results.data}))
    //         .catch(err => next(err));
    // },

    getAll: (req,res) => {
        Student.find()
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    getBelts: (req, res) => {
        Belt.find()
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    getOneStudent: (req, res) => {
        Student.findOne({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    createStudent: (req, res) => {
        Student.create(req.body)
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}))
    },
    rateStudent: (req, res) => {
        Student.findOneAndUpdate({_id: req.params.id}, {$set: {rating: req.body.rating}})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    addBelt: (req, res) => {
        Student.findOneAndUpdate({_id: req.params.id}, {$addToSet: {beltsReceived: req.body}})
            .then(data => {
                req.json({message: "success", results: data});
            })
            .catch(err => res.json({message: "error", results: err}));
    },
    editStudent: (req, res) => {
        Student.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
    deleteStudent: (req, res) => {
        Student.deleteOne({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    }
}