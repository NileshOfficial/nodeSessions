const userUtils = require('./userUtils').userUtils;

exports.routeConfig = function (server) {
    server.get('/getUsers', (req, res) => {
        res.status(200).json(userUtils.getUserData());
    });

    server.post('/addUser', (req, res) => {
        userUtils.addUser(req.body);
        res.status(200).send("success");
    });

    server.delete('/deleteUser', (req, res) => {
        userUtils.deleteUser(req.body.username);
        res.status(200).send("success");
    });
}