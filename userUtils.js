class userUtils {
    constructor() {
        this.userData =  [
            {
                "username": "hamilton",
                "firstname": "rocha",
                "lastname": "vinson",
                "createdOn": "2020-4-28"
            },
            {
                "username": "doyle",
                "firstname": "holt",
                "lastname": "olsen",
                "createdOn": "2020-4-28"
            },
            {
                "username": "carver",
                "firstname": "johnnie",
                "lastname": "cooley",
                "createdOn": "2020-4-28"
            },
            {
                "username": "kirkland",
                "firstname": "kelly",
                "lastname": "bryant",
                "createdOn": "2020-4-28"
            },
            {
                "username": "duncan",
                "firstname": "todd",
                "lastname": "cox",
                "createdOn": "2020-4-28"
            },
            {
                "username": "kline",
                "firstname": "stacey",
                "lastname": "peck",
                "createdOn": "2020-4-28"
            },
            {
                "username": "rosales",
                "firstname": "pansy",
                "lastname": "nunez",
                "createdOn": "2020-4-28"
            },
            {
                "username": "koch",
                "firstname": "margery",
                "lastname": "marks",
                "createdOn": "2020-4-28"
            },
            {
                "username": "atkins",
                "firstname": "tasha",
                "lastname": "sears",
                "createdOn": "2020-4-28"
            },
            {
                "username": "boone",
                "firstname": "wise",
                "lastname": "hunt",
                "createdOn": "2020-4-28"
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