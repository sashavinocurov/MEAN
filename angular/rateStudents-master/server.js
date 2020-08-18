const express = require('express');
const app = express();

app.use(express.static(__dirname+"/angular/dist/angular"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./server/routes/routes")(app);

app.listen(8000, ()=> {
    console.log("listening on port 8000")
})