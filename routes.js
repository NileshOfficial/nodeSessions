const router = require('express').Router();
const controller = require('./controller');

router.get("/home", controller.home);
// router.post("/login");

module.exports = router;