const Author = require('./models');

module.exports = {
    register : (req,res) =>{
        User.find()
            .then(data =>res.json(data))
            .catch(err =>res.json(err))
    },
}