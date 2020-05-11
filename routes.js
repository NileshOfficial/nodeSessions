const router = require('express').Router();
const controller = require('./controller');
const midwares = require('./midwares');

router.get("/home", midwares.verifyRequest, controller.home);
router.post("/signup", controller.signup);
router.post("/login", controller.login);

module.exports = router;