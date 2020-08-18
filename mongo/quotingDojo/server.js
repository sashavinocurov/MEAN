const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const flash = require('express-flash');

mongoose.connect('mongodb://localhost/quotDojo', {useNewUrlParser: true});

const QuotSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    quot: { type: String, required: true, minlength: 5}
}, {timestamps: true});
const Quot = mongoose.model('Quot', QuotSchema);

app.use(express.urlencoded({extended: true}))

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.use(session({
    secret: "quot",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000}
}));

app.get('/', (req,res) => {
    res.render('quot');
});

app.post('/quotes', (res,req) => {
    var toSubmit = new Quot();
    toSubmit.name = req.body.name;
    toSubmit.quot = req.body.quot;
    Quot.create(toSubmit)
        .then(data =>{
            console.log(data);
            res.redirect(`/quotes`);
        });
});


app.listen(8000, () => console.log ("listening on port 8000"));