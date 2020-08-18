const express = require("express");
const app = express();
const session = require("express-session");

app.set('view engine' ,'ejs');
app.set('views', __dirname+'/views');
app.use(session({
    secret: "counter",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000}
}))

app.get('/', (req,res) =>{
    if(req.session.views){
        req.session.views +=1;
    }
    else{
        req.session.views = 1;
    }
    var num =req.session.views;
    res.render("index", {num});
});

app.post('/add2', (req,res) =>{
    req.session.views += 1;
    res.redirect('/');
});

app.post('/reset', (req,res) =>{
    req.session.destroy();
    res.redirect('/');
});

app.listen(8000, () => console.log("listening on port 8000"));