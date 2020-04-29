class userUtils {
    constructor() {
        this.userData =  [
            {
                "username": "hamilton",
                "firstname": "rocha",
                "lastname": "vinson"
            },
            {
                "username": "doyle",
                "firstname": "holt",
                "lastname": "olsen"
            },
            {
                "username": "carver",
                "firstname": "johnnie",
                "lastname": "cooley"
            },
            {
                "username": "kirkland",
                "firstname": "kelly",
                "lastname": "bryant"
            },
            {
                "username": "duncan",
                "firstname": "todd",
                "lastname": "cox"
            },
            {
                "username": "kline",
                "firstname": "stacey",
                "lastname": "peck"
            },
            {
                "username": "rosales",
                "firstname": "pansy",
                "lastname": "nunez"
            },
            {
                "username": "koch",
                "firstname": "margery",
                "lastname": "marks"
            },
            {
                "username": "atkins",
                "firstname": "tasha",
                "lastname": "sears"
            },
            {
                "username": "boone",
                "firstname": "wise",
                "lastname": "hunt"
            }
        ]
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