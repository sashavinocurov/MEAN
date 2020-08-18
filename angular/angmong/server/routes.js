const controller = require('./controller');
const path = require('path');

module.exports = (app) => {
    app.get('/api/pets', controller.allPets);
    app.get('/api/pet/:id', controller.getOnePet);
    app.post('api/pet', controller.newPet);
    app.patch('api/pet/:id', controller.editPet);
    app.patch('api/pet/like/:id', controller.addLike);
    app.delete('api/pet/:id', controller.deletePet);
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}