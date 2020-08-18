const controller = require('./controller');
const path = require('path');
module.exports = (app) => {
    app.get('/api/restaurants', controller.allRestaurants);
    app.post('/api/restaurants/new', controller.newRestaurant);
    app.get('/api/restaurants/:id', controller.viewRestaurant);
    app.put('/api/restaurants/edit/:id', controller.editRestaurant);
    app.put('/api/review/:id', controller.wrightReview);
    app.delete('/api/restaurants/:id', controller.deleteRestaurant);
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}