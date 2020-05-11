const goose = require('mongoose');

const userSchema = new goose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 5,
        required: true 
    }
});

const userModel = goose.model("users", userSchema);
module.exports = userModel;