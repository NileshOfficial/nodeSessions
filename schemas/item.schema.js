const goose = require("mongoose");

const item = new goose.Schema({
    name: {
        type: Date,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },
    
    isSanitized: Boolean,
    
    unit: {
        type: String,
    },

    expiryDate: {
        type: Date
    },

    createdDate: {
        type: Date,
        default: Date.now,
        enum: ["Grocery", "Medical", "Fruits&Veg", "Berverages", "Babycare", "Cleaning"]
    },

    updatedDate: {
        type: Date,
        default: Date.now
    },

    category: {
        type: String
    },
    
    location: {
        type: String,
        enum: ["Store", "Kitchen"]
    }
});

item.pre('update', function() {
    this.set({ updatedDate: Date.now() });
});

const itemModel = goose.model('Item', item);
module.exports = itemModel;