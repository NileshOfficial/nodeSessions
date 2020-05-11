const bcrypt = require('bcrypt');

module.exports.createHash = async (plaintext) => {
    return await bcrypt.hash(plaintext, 5);
}

module.exports.compareHash = async () => {}