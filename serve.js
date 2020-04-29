const express = require('express');
const server = express();
const cors = require('cors');
const port = 3001;
const routes = require('./routes');

server.use(cors());
server.use(express.json());

routes.routeConfig(server);

server.listen(port, () => console.log(`server running on port ${port}`));