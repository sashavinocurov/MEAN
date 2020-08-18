const express = require("express");
const app = express();
const session = require("express-session");

app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.use(session({
    secret: "carandcat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000}
}))

app.get('/form', (req, res) =>{
    res.render("form");
});

app.post('/car', (req,res) =>{
    var make = req.body.make;
    var model = req.body.model;
    var year = req.body.year;
    var color = req.body.color;
    req.session['make'] = make;
    req.session['model'] = model;
    req.session['year'] = year;
    req.session['color'] = color;
    res.redirect(`/car/${model}`);
});

app.get('/car/:model', (req,res) =>{
    var model = req.params.model;
    var make = req.session['make'];
    var year = req.session['year'];
    var color = req.session['color'];
    res.render("car", {model, make, year, color});
});

app.get('/cats', (req, res) =>{
    res.render("cats");
});

app.get('/cars', (req, res) =>{
    res.render("cars");
});

app.get('/cat/kotyara', (req,res) =>{
    var cat_array = [
        {name: "Kotyara", age: 3, spot: "On the window", spot1:"Under the bed" },
    ];
    res.render('kotyara', {cats: cat_array});
});
app.get('/cat/venya', (req,res) =>{
    var cat_array = [
        {name: "Venya", age: 12, spot: "On the balcony", spot1:"In the bathroom" },
    ];
    res.render('venya', {cats: cat_array});
});
app.get('/cat/russkiy', (req,res) =>{
    var cat_array = [
        {name: "Russkiy", age: 1, spot: "In the Kitchen Sink", spot1:"In the bed" },
    ];
    res.render('russkiy', {cats: cat_array});
});

app.listen(8000, () => console.log ("listening on port 8000"));