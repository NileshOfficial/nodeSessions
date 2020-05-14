const  itemsModel  = require("./model");

module.exports.create = async (data) => {
  for (let item of data) {
    await itemsModel.findOneAndUpdate(
      { item_name: item.item_name },
      {
        $set:item,
      },
      { upsert: true,
      }
    );
   
  }
  return {
    data
  };
};

module.exports.getAll = async () => {
  const items = await itemsModel.find();
  return items;
};

module.exports.updateById = async (id , updatedobj) => {
  const items = await itemsModel.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      $set: updatedobj,
    }
  );
  return items;
};

module.exports.delete = async ({ id }) => {
  const response = await itemsModel.deleteOne({
    _id: id,
  });
  return response;
};
