const itemDbService = require('../services/item.service');

module.exports.getItems = async (req, res) => {
    try {
        res.json(await itemDbService.getItems());
    } catch(err) {
        res.status(500);
        res.send("server error");
    }
}

module.exports.addItem = async (req, res) => {
    try {
        res.json(await itemDbService.addItem(req.body));
    } catch(err) {
        res.status(500);
        res.send("server error");
    }
}

module.exports.updateExistingItem = async (req, res) => {
    try {
        res.json(await itemDbService.updateExistingItem(req.params.id, req.body));
    } catch(err) {
        res.status(500);
        res.send("server error");
    }
}

module.exports.deleteItem = async (req, res) => {
    try {
        res.json(await itemDbService.deleteItem(req.params.id));
    } catch(err) {
        res.status(500);
        res.send("server error");
    }
}