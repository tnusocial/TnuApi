const api = require('./Controllers/api');

function registerDataProcess(app) {
    app.use(function(req, res, next) {
        req.rawBody = '';
        req.setEncoding('utf8');

        req.on('data', function(chunk) {
            req.rawBody += chunk;
        });

        req.on('end', function() {
            req.body = JSON.parse(req.rawBody);
            next();
        });
    });
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
