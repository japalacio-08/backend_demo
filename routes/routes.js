const appRouter = function (app) {
    app.get("/api", function (req, res) {
        res.status(200).send({success: true, message: "Health Check Api"});
    });

    app.get("/api/:name", function (req, res) {
        const name = req.params.name;
        respondHandler(name, res)
    });

    app.post('/api', function (req, res) {
        const name = req.body.name;
        respondHandler(name, res);
    });    
}

function respondHandler(name, res) {
    (name !== undefined) ? res.status(200).send({success: true, message: `Hello => ${name}`}) : res.status(400);
};

module.exports = appRouter;