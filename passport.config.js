const localStrategy = require('passport-local').Strategy;

const service = require("./service");

module.exports.config = (passport) => {
    passport.use(new localStrategy(service.authenticateLogin));
}