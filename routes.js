const router = require("express").Router();
const itemOpsHandlers = require('./controllers/item.controller');
router.get("/items", itemOpsHandlers.getItems);
router.post("/items", itemOpsHandlers.addItem);
router.patch("/item/:id", itemOpsHandlers.updateExistingItem);
router.delete("/item/:id", itemOpsHandlers.deleteItem);

module.exports = router;