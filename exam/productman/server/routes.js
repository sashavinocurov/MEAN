const controller = require('./controller');
const path = require ('path');

module.exports = (app) => {
    console.log("Show routes.js");
    app.get('/api/products', controller.allProduct);
    app.post('/api/products', controller.newProduct);
    app.get('/api/products/:id', controller.oneProduct);
    app.put('/api/products/:id', controller.editProduct);
    app.delete('/api/products/:id', controller.destroyProduct);
    app.all('*', (req,res,next) =>{
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
};