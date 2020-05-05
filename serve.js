const express = require("express");
const routes = require("./routes");
const server = express();
const PORT = 3000;

server.use(express.json());
server.use("/", routes);

server.listen(PORT, () => { 
    console.log(`server running on port: ${PORT}`) 
});