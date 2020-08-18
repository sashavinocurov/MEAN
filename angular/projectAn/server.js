const express = require('express');
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');
const passport = require('passport')

app.use(cors());

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
// app.set('views', path.join(__dirname, './views'));

require('./server/routes')(app);

app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

const port = 8000;

app.listen(8000, (err) => {
    if(err){console.log(err)}
    console.log('Listening on port 8000');
});