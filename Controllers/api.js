module.exports = {
    login: function (req, res) {
        console.log(req.body);
        res.send("OK!");
    }
};
