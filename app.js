require('dotenv').config();

const { getNameBussines } = require('./controllers/01-practica1');
const { getNameBussines2 } = require('./controllers/02-practica2');
const { getNameBussines3 } = require('./controllers/03-practica3');
const Server = require('./models/server');

const server = new Server();

getNameBussines3();

server.listen();
