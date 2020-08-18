const express = require("express");
const  app = express();
const session = require ("express-session");
const mongoose = require("mongoose");
const ejs = require("ejs");
mongoose.connect('mongodb://localhost/practiceMA', {useNewUrlParser: true});

const PracticeSchema = new  mongoose.Schema({
    name: String,
    age: Number,
    hobbies: [String],
    isSasha: Boolean,
}, {collection: 'sashas', timestamps: true});

const Practice = mongoose.model('Practice', PracticeSchema);
app.use(express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname +"/views");

app.get('/', (req,res) =>{
    Practice.find()
            .then(data =>{
                res.render('index', {data:data});
            })

});

app.get('/addthing', (req,res) => {
    res.render('newthing');
});

app.

app.post('/addthing', (req,res) =>{
    var toSubmit = new Practice();
    if(req.body.name != "Sasha"){
        toSubmit.isSasha = false;
    }
    else{
        toSubmit.isSasha = true;
    }
    toSubmit.name = req.body.name;
    toSubmit.age = req.body.age;
    toSubmit.hobbies = [req.body.hobby1, req.body.hobby2];
    Practice.create(toSubmit)
            .then(data =>{
                console.log(data);
                res.redirect(`/onename/${data._id}`);
            })
});

app.get('/onename/:id', (req,res) => {
    Practice.find({_id: req.params.id})
            .then (data => {
                console.log(data);
                res.render('otherthing', {data: data[0]})
            })
})

app.listen(8000, () => {
    console.log("listening in port 8000");
});