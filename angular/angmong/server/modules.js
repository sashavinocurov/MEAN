const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pshellDB', (err) => {
    if (err){console.log(err), {useNewUrlParser: true}}
    console.log('MONGO');
});

const PetSchema = new mongoose.Schema({
    petName: {type: String, required:true, unique: true, minlength: 3},
    petType: {type: String, required:true, minlength: 3},
    skill1: {type: String, required:true, minlength: 3},
    skill2: {type: String, required:true, minlength: 3},
    skill3: {type: String, required:true, minlength: 3},
    likes: {type: Number, default: 0}
}, {timestamps: true});

const Pet = mongoose.model ('Pet', PetSchema);
module.exports = Pet;