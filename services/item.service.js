const itemModel = require('../schemas/item.schema');

module.exports.getItems = async () => {
    return await itemModel.find();
}

module.exports.addItem = async (data) => {
    for(let item of data) {
        await itemModel.findOneAndUpdate({name: item.name}, {$set: item}, {upsert: true});
    }
    return {success: true};
}

module.exports.updateExistingItem = async (id, updatedData) => {
    return await itemModel.findByIdAndUpdate(id, { $set: updatedData });;
}

module.exports.deleteItem = async (id) => {  
    return await itemModel.deleteMany({
        _id: id
    })
}