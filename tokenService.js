const jwt = require('jsonwebtoken');
const tokenKey = "NOT_SO_SECRET_KEY";

module.exports.generateToken = (payload) => jwt.sign(payload, tokenKey, { expiresIn: "30m" });
module.exports.verifyToken = () => {};