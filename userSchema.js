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
        required: true 
    }
});

const userModel = goose.model("users", userSchema);
module.exports = userModel;