const router = require('express').Router();
const controller = require('./controller');
const midwares = require('./midwares');
const passport = require('passport');

router.get("/home", midwares.verifyRequest, controller.home);
router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.get('/auth/google',
  passport.authenticate('google', { scope: 
      [ 'https://www.googleapis.com/auth/plus.login'] }
));

router.get( '/auth/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

router.get('/auth/google/success', (req, res) => {
    res.send("done");
});

router.get('/auth/google/success', (req, res) => {
    res.send("not done");
});

module.exports = router;