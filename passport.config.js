const localStrategy = require('passport-local').Strategy;
const googleStrategy = require('passport-google-oauth2').Strategy;

const service = require("./service");

module.exports.config = (passport) => {
    passport.use(new localStrategy(service.authenticateLogin));
    passport.use(new googleStrategy({
        clientID: "431128297014-66fqj0488jptf5n24ce0vvoo89c3166l.apps.googleusercontent.com",
        clientSecret: "LZXzLMO6o32WprPIGcAZVF9J",
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true
    }, function (request, accessToken, refreshToken, profile, done) {
        return done(null, request);
    }));
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}