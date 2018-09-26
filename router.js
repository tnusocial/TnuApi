const api = require('./Controllers/api');

function apply(app) {
    app.get("/", function (req, res) {
        res.send("Home!");
    });

    app.get("/Hello_world", function (req, res) {
        res.send("Hello_world!");
    });

    app.post("/login", api.login);
}

module.exports = {
    apply: apply
};
