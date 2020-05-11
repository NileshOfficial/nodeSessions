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

module.exports.authenticateLogin = async (credentials) => {
    const userData = await userModel.findOne({ email: credentials.email });

    if (!userData)
        return { err: "invalid username or password" };
    else {
        const match = await hash.compareHash(credentials.password, userData.password);
        
        if (match)
            return { success: true };
        else
            return { err: "invalid username or password" }
    }
}