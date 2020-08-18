const controller = require('../controllers/controller');
const path = require('path');

module.exports = (app) => {
    app.get('/api/belts', controller.getBelts);
    app.get('/api/students', controller.getAll);
    app.get('/api/students/:id', controller.getOneStudent);
    app.post('/api/students/createStudent', controller.createStudent);
    app.put('/api/students/:id/addBelt', controller.addBelt);
    app.put('/api/students/:id/rateStudent', controller.rateStudent);
    app.put('/api/students/:id/editStudent', controller.editStudent);
    app.delete('/api/students/:id/deleteStudent', controller.deleteStudent);
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
    });
}