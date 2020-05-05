const goose = require('mongoose');
const item = require('../schemas/item.schema');

module.exports.getItems = async () => {
    return await item.find();
}

module.exports.addItem = async (data) => {
    return await item.create(data);
}

module.exports.updateExistingItem = async (id, updatedData) => {
    return await item.findByIdAndUpdate(id, { $set: updatedData });;
}

module.exports.deleteItem = async (id) => {  
    return await item.deleteMany({
        _id: id
    })
}