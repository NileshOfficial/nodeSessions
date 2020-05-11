const router = require('express').Router();
const controller = require('./controller');

router.get("/home", controller.home);
router.post("/signup", controller.signup);
router.post("/login", controller.login);

module.exports = router;