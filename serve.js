const goose = require("mongoose");
const express = require("express");
const passport = require('passport');
const cors = require('cors');

const passportconfig = require('./passport.config').config;

const server = express();

const routes = require("./routes");

const PORT = 3000;

server.use(cors());
server.use(express.json());
server.use(passport.initialize());

passportconfig(passport);
server.use("/", routes);

goose.connect(`mongodb+srv://nilesh:${encodeURI('nilesh')}@cluster0-4f2ih.mongodb.net/test?retryWrites=true&w=majority`,
    {
        useNewUrlParser: "true",
        useFindAndModify: false
    }
);

goose.connection.on("error", err => {
    console.log("err", err);
});

goose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
    
    server.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`)
    });
});