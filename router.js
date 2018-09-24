function apply(app) {
    app.get("/", function (req, res) {
        res.send("Home!");
    });

    app.get("/Hello_world", function (req, res) {
        res.send("Hello_world!");
    });

    app.get("/Hello", function (req, res) {
        res.send("Hello!");
    });
}

module.exports = {
    apply: apply
};
