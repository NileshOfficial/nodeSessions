const http = require('http');

const server = http.createServer((req, res) => {
});

server.listen(3001, () => {
    console.log("server listening on port 3000");
});