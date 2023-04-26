const express = require('express');

class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.routes();
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'get API',
      });
    });
    this.app.post('/api', (req, res) => {
      res.status(201).json({
        ok: true,
        msg: 'post API',
      });
    });
    this.app.put('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'put API',
      });
    });
    this.app.delete('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'delete API',
      });
    });
    this.app.patch('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'patch API',
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = server;
