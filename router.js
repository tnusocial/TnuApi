function apply(app, socketio) {
    require('./Routers/core').apply(app, socketio);
    require('./Routers/webui').apply(app, socketio);
    require('./Routers/api').apply(app, socketio);
    require('./Routers/socket.io').apply(app, socketio);
}

module.exports = {
    apply: apply
};
