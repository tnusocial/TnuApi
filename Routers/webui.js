module.exports = {
    apply: function (app, socketio) {
        app.get("/", function(req, res) {
            res.send("<script src=\"./socket.io/socket.io.js\"></script>Hello world!! I'm TnuApi on nodejs " + process.version);
        });
    }
};
