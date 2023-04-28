require('dotenv').config();

const { getNameBussines } = require('./controllers/LlmsTests/01-practica1');
const { getNameBussines2 } = require('./controllers/LlmsTests/02-practica2');
const { getNameBussines3 } = require('./controllers/LlmsTests/03-practica3');
const { getNameBussines4 } = require('./controllers/LlmsTests/04-practica4');
const { chatTest1 } = require('./controllers/ChatTests/01-practica1');
const { chatTest2 } = require('./controllers/ChatTests/02-practica2');
const { chatTest3 } = require('./controllers/ChatTests/03-practica3');
const { chatTest4 } = require('./controllers/ChatTests/04-practica4');
const { chatTest5 } = require('./controllers/ChatTests/05-practica5');

const Server = require('./models/server');

const server = new Server();

server.listen();
