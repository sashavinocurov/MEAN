const mongoose = require('mongoose');
//ONLY USE IF YOU HAVE THE CONNECTION FILE
// const config = require("../mongoose/connection");

// USE THIS IF YOU DON'T HAVE THE CONNECTION FILE
// Connection file just contains what's in one below
mongoose.connect("mongodb://localhost/rateStudentsExamPrep", {useNewURLParser: true})

// // WITH CONNECTION FILE
// mongoose.connect(config.connectionString, config.params);

const BeltSchema = new mongoose.Schema({
    stack: {type: String, required: true},
    belt: {type: String, required: true}
}, {timestamps: true})

const StudentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true, min: 18},
    rating: {type: Number, default: 3, min: 0, max: 5},
    beltsReceived: [BeltSchema]
}, {timestamps: true})

const Student = mongoose.model('students', StudentSchema);
const Belt = mongoose.model('belts', BeltSchema);

module.exports = {
    Student,
    Belt
}