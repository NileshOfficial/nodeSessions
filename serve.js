const userData = [
    {
        "username": "hamilton",
        "firstname": "rocha",
        "lastname": "vinson",
        "password": "merrill_richards"
    },
    {
        "username": "doyle",
        "firstname": "holt",
        "lastname": "olsen",
        "password": "oneal_duke"
    },
    {
        "username": "carver",
        "firstname": "johnnie",
        "lastname": "cooley",
        "password": "mccarthy_clemons"
    },
    {
        "username": "kirkland",
        "firstname": "kelly",
        "lastname": "bryant",
        "password": "Espinoza_Trujillo"
    },
    {
        "username": "duncan",
        "firstname": "todd",
        "lastname": "cox",
        "password": "Mattie_Workman"
    },
    {
        "username": "kline",
        "firstname": "stacey",
        "lastname": "peck",
        "password": "Ina_Estrada"
    },
    {
        "username": "rosales",
        "firstname": "pansy",
        "lastname": "nunez",
        "password": "Alicia_Hewitt"
    },
    {
        "username": "koch",
        "firstname": "margery",
        "lastname": "marks",
        "password": "Warner_Castaneda"
    },
    {
        "username": "atkins",
        "firstname": "tasha",
        "lastname": "sears",
        "password": "Jenifer_Forbes"
    },
    {
        "username": "boone",
        "firstname": "wise",
        "lastname": "hunt",
        "password": "Brady_Gray"
    }
]

const studentData = [
    {
        "firstname": "Herring Burns",
        "branch": "law"
    },
    {
        "firstname": "Witt Buckner",
        "branch": "computer science"
    },
    {
        "firstname": "Mayo Hopper",
        "branch": "computer science"
    },
    {
        "firstname": "Nita Mcleod",
        "branch": "computer science"
    },
    {
        "firstname": "Evangeline Barton",
        "branch": "computer science"
    },
    {
        "firstname": "Bonner Riddle",
        "branch": "law"
    },
    {
        "firstname": "Doyle Montgomery",
        "branch": "law"
    },
    {
        "firstname": "Shauna Stark",
        "branch": "law"
    },
    {
        "firstname": "Abby Anthony",
        "branch": "computer science"
    },
    {
        "firstname": "Colon Fields",
        "branch": "computer science"
    },
    {
        "firstname": "Annmarie Butler",
        "branch": "mba"
    },
    {
        "firstname": "Stacie Holman",
        "branch": "computer science"
    },
    {
        "firstname": "Graves Combs",
        "branch": "mba"
    },
    {
        "firstname": "Hickman Schwartz",
        "branch": "mba"
    },
    {
        "firstname": "Sherrie Saunders",
        "branch": "computer science"
    }
];

function filterUserData(query) {
    return JSON.stringify(
        userData.filter(user => user.username.startsWith(query.toLowerCase()))
            .map(user => user.username)
    );
}

function filterStudentData(query) {
    return JSON.stringify(studentData.filter(student => student.branch.toLowerCase() === query.toLowerCase()));
}

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, true);

        switch (parsedUrl.pathname) {
            case "/users": {
                if (Object.keys(parsedUrl.query).length !== 0) {
                    if (parsedUrl.query['search'] === '') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify([]));
                        res.end();
                    }
                    else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(filterUserData(parsedUrl.query['search']));
                        res.end();
                    }
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.write(JSON.stringify(userData));
                    res.end();
                }
            }
                break;
            case "/students": {
                if (parsedUrl.query['search']) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.write(filterStudentData(parsedUrl.query['search']));
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.write(JSON.stringify(studentData));
                    res.end();
                }
            }
                break;

            case "/home": {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({
                    "session-name": "REST Apis",
                    "session-date": "Apr 28, 2020",
                    "training": "NodeJS"
                }));
                res.end();
            }
                break;

            case "/about": {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({
                    "name": "Nilesh Kumar",
                    "competency": "MEAN",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }));
                res.end();
            }
                break;

            case "/contactUs": {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({
                    "phone": "96-XXX-XXX30",
                    "email": "dummyMail@dummy.com"
                }));
                res.end();
            }
                break;

            default: {
                res.writeHead(404, {});
                res.end();
            }
                break;
        }
    } else {
        res.writeHead(404, {});
        res.end();
    }
});

server.listen(3001, () => {
    console.log("server listening on port 3000");
});