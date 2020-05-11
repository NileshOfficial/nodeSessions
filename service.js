const userModel = require('./userSchema');
const hash = require('./hash');

module.exports.addUser = async (userDetails) => {
    const existingUser = await userModel.find({ email: userDetails.email });
    if (existingUser.email)
        return { err: "email already taken" };
    else {
        const hashedPassword = hash.createHash(userDetails.password);
        userDetails['password'] = hashedPassword;
        return await userModel.insertMany([userDetails]);
    }
}