const goose = require("mongoose");

const item = new goose.Schema({
    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },
    
    isSanitized: Boolean,
    
    unit: {
        type: String,
        required: true
    },

    expiryDate: {
        type: Date
    },

    createdDate: {
        type: Date,
        default: Date.now,
    },

    updatedDate: {
        type: Date,
        default: Date.now
    },

    category: {
        type: String,
        enum: ["Grocery", "Medical", "Fruits&Veg", "Berverages", "Babycare", "Cleaning"],
        default: "Grocery"
    },
    
    location: {
        type: String,
        enum: ["Store", "Kitchen"],
        default: "Store"
    }
});

item.pre('findOneAndUpdate', function() {
    console.log("midware")
    this.set({ updatedDate: Date.now() });
});

const itemModel = goose.model('Item', item);
module.exports = itemModel;