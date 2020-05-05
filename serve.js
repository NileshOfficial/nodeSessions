const express = require("express");
const goose = require('mongoose');

const routes = require("./routes");

const server = express();
const PORT = 3000;

server.use(express.json());
server.use("/", routes);

goose.connect("mongodb://localhost:2000/GroceriesInventory", {
    useNewUrlParser: "true",
    useFindAndModify: false
});

goose.connection.on("error", err => {
    console.log("err", err)
});

goose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
    
    server.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`)
    });
});