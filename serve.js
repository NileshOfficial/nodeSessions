const express = require('express');
const server = express();
const port = 3000;
const routes = require('./routes').router;

server.use(express.json());

routes(server);

server.listen(port, () => console.log(`server listening on port ${3000}`));