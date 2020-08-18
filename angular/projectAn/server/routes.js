const controller = require('./controller');
const path = require ('path');

module.exports = (app) => {
    console.log("Show routes.js");
    app.get('/register', controller.register);
    app.get('/authenticate', controller.authenticate);
    app.get('/profile', controller.profile);
    app.get('/validate', controller.validate);
}