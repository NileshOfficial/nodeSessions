class userUtils {
    constructor() {
        this.userData = [];
    }

    getUserData() {
        return this.userData;
    }

    deleteUser(username) {
        const idx = this.userData.findIndex(user => user.username === username);
        if(idx >= 0)
            this.userData.splice(idx, 1);
    }

    addUser(userdetails) {
        this.userData.push(userdetails);
    }
}

const _inst = new userUtils();
exports.userUtils = _inst;