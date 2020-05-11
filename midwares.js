const tokenService = require('./tokenService');

module.exports.verifyRequest = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    const verification = tokenService.verifyToken(token);
    if(verification)
        return next();
    else
        res.json({err: "invalid token"});
}