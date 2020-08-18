const express = require('express');
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
const flash = require ('express-flash');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
// app.set('views', path.join(__dirname, './views'));

require('./server/routes')(app);


app.listen(8000, (err) => {
    if(err){console.log(err);}
    console.log('Listening on port 8000');
});