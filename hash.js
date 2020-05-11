const bcrypt = require('bcrypt');

module.exports.createHash = async (plaintext) => await bcrypt.hash(plaintext, 5);

module.exports.compareHash = async (plaintext, hash) => await bcrypt.compare(plaintext, hash);