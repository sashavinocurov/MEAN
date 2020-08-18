const mongoose = require('mongoose');
mongoose.connect ('mongod://localhost/meanuser', (err) => {
    if (err){console.log(err), {useNewUrlParser: true} }
    console.log('Connected to mongo');
});

module.exports = mongoose.module('User', UserSchema);