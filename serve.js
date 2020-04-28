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
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, true);

        switch (parsedUrl.pathname) {
            case "/users": {
                if (parsedUrl.query['search']) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.write(filterUserData(parsedUrl.query['search']));
                    res.end();
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

            case "/home":
                
                break;

            case "/about":

                break;

            case "/about":

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