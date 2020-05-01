const axios = require('axios');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const tokenKey = "NOT_SO_SECRET_KEY";

function verifyToken(req, res, next) {
    jwt.verify(req.body.token, tokenKey, (err, payload) => {
        if (err) {
            res.status(401);
            return res.send("Invalid Token");
        }
        return next();
    });
}



router.post('/login', (req, res) => {
    const token = jwt.sign(req.body, tokenKey, { expiresIn: "1m" });
    res.json({ token });
});

router.post('/ProtectedRoute', verifyToken, (req, res) => {
    res.send("Auth Successful, You Can Access Authenticated Data");
});

router.get('/gitProfile', async (req, res) => {
    axios.get(`https://api.github.com/users/${req.query.username}`)
        .then(gitRes => {
            res.json(gitRes.data);
        })
        .catch(() => {
            res.json({ error: true });
        });
});

exports.router = router;