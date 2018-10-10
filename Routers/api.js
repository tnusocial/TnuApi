const api = require('../Controllers/api');

module.exports = {
    apply: function (app, socketio) {
        app.post("/api/login", api.login);
    }
};
