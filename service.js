const userModel = require('./userSchema');
const hash = require('./hash');

module.exports.addUser = async (userDetails) => {

    const existingUser = await userModel.findOne({ email: userDetails.email });

    if (existingUser)
        return { err: "email already taken" };
    else {
        const hashedPassword = await hash.createHash(userDetails.password);
        userDetails['password'] = hashedPassword;
        return await userModel.insertMany([userDetails]);
    }
}