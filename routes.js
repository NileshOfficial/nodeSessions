const axios = require('axios');

exports.router = function (server) {
    server.get('/login', (req, res) => { });
    server.get('/AuthenticRoute', (req, res) => { });
    server.get('/gitProfile', async (req, res) => {
        axios.get(`https://api.github.com/users/${req.query.username}`)
            .then(gitRes => {
                res.json(gitRes.data);
            })
            .catch(() => {
                res.json({error: true});
            });
    });
}