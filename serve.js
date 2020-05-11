const express = require("express");
const server = express();

const routes = require("./routes");

const PORT = 3000;
server.use("/", routes);

server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
});