const itemDbService = require('../services/item.service');

module.exports.getItems = async (req, res) => {
    res.json(await itemDbService.getItems());
}

module.exports.addItem = async (req, res) => {
    res.json(await itemDbService.addItem(req.body));
}

module.exports.updateExistingItem = async (req, res) => {
    res.json(await itemDbService.updateExistingItem(req.params.id, req.body));
}

module.exports.deleteItem = async (req, res) => {
    res.json(await itemDbService.deleteItem(req.params.id));
}