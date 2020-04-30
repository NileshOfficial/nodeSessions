const router = require('express').Router();
exports.router = function() {
    router.get('/login', (req, res) => {});
    router.get('/AuthenticRoute', (req, res) => {});
    router.get('/gitProfile', (req, res)=>{console.log(req.query)});
}