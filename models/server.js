const express = require('express');
const cors = require('cors');

class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();

    this.routes();
  }

  middlewares() {
    //cors
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/chat', require('../routes/chat'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = server;
