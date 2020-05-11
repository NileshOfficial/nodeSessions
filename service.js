const userModel = require('./userSchema');
const hash = require('./hash');
const tokenService = require('./tokenService');

module.exports.addUser = async (userDetails) => {
    try {
        const existingUser = await userModel.findOne({ email: userDetails.email });

        if (existingUser)
            return { err: "email already taken" };
        else {
            const hashedPassword = await hash.createHash(userDetails.password);
            userDetails['password'] = hashedPassword;

            try {
                await userModel.insertMany([userDetails]);
            } catch (err) {
                return { err: "db operation failed" };
            }

            const payload = {
                name: userDetails.name,
                email: userDetails.email
            }
            const token = tokenService.generateToken(payload);
            return { success: true, token };
        }
    } catch (error) {
        return { err: "db operation failed" };
    }
}

module.exports.authenticateLogin = async (username, password, done) => {
    try {
        const userData = await userModel.findOne({ email: username });

        if (!userData) return done(null, false, { err: "invalid username or password" });
        else {
            const match = await hash.compareHash(password, userData.password);
            
            if (!match) return done(null, false, { err: "invalid username or password" });
            else return done(null, userData);
        }
    } catch (error) {
        return done(null, false, { err: "db operation failed" });
    }
} 