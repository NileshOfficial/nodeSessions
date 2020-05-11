const userModel = require('./userSchema');
const hash = require('./hash');
const tokenService = require('./tokenService');

module.exports.addUser = async (userDetails) => {

    const existingUser = await userModel.findOne({ email: userDetails.email });

    if (existingUser)
        return { err: "email already taken" };
    else {
        const hashedPassword = await hash.createHash(userDetails.password);
        userDetails['password'] = hashedPassword;
        
        try {
            await userModel.insertMany([userDetails]);
        } catch(err) {
            return { err: "db operation failed" };
        }
        
        const payload = {
            name: userDetails.name,
            email: userDetails.email
        }
        const token = tokenService.generateToken(payload);
        return { success: true, token };
    }
}

module.exports.authenticateLogin = async (credentials) => {
    const userData = await userModel.findOne({ email: credentials.email });

    if (!userData)
        return { err: "invalid username or password" };
    else {
        const match = await hash.compareHash(credentials.password, userData.password);

        if (match) {
            const payload = {
                name: credentials.name,
                email: credentials.email
            }
            const token = tokenService.generateToken(payload);
            return { success: true, token };
        }
        else
            return { err: "invalid username or password" }
    }
}