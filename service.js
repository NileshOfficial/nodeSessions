const userModel = require('./userSchema');

module.exports.addUser = async (userDetails) => {
    const existingUser = await userModel.find({ email: userDetails.email });

    if (existingUser.email)
        return { err: "email already taken" };
    else return await userModel.insertMany([userDetails]);
}