const bodyParser = require('body-parser');

const api = require('./Controllers/api');

function registerDataProcess(app) {
    app.use(bodyParser.json());
}

function apply(app) {
    app.get("/", function(req, res) {
        res.send("Hello world!! I'm TnuApi on nodejs " + process.version);
    });

    app.get("/Hello_world", function(req, res) {
        res.send("Hello_world!");
    });

    app.post("/login", api.login);
}

module.exports = {
    registerDataProcess: registerDataProcess,
    apply: apply
};
