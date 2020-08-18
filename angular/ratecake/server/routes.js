const controller = require('./controller');

module.exports = (app) => {
    app.get("/cake", controller.allCakes);
    app.post("/cake", controller.newCake);
    app.get("/cake/:id", controller.getOneCake);
    app.put("/cake/:id", controller.rateCake);
    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("./public/dist/public/index.html"));
    // });
};