const router = require("express").Router();

router.get("/items", (req, res) => {res.send("sdf")});
router.post("/items", (req, res) => {res.send("sdf")});
router.patch("/item/:id", (req, res) => {res.send("sdf")});
router.delete("/item/:id", (req, res) => {res.send("sdf")});

module.exports = router;