const controller = require('./controller');
const path = require ('path');

module.exports = (app) => {
    console.log("Show routes.js");
    app.get('/api/restaurants', controller.allRestaurant);
    app.post('/api/restaurants', controller.newRestaurant);
    app.get('/api/restaurants/:id', controller.oneRestaurant);
    app.put('/api/restaurants/:id', controller.editRestaurant);
    app.delete('/api/restaurants/:id', controller.destroyRestaurant);
    app.put('/api/newreview/:id', controller.reviewRestaurant);
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });

}