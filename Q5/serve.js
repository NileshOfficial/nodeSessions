var http = require("http");

var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("server is up and running");
    res.end();
});

server.listen(3001);
console.log("server running on port 3001");