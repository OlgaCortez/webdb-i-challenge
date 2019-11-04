const express = require('express');

const db = require('./data/dbConfig.js');

const AccountRouter = require('./data/seeds/accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

server.get('/', (req, res) => {
    res.send('<h3>DB Helpers with knex</h3>');
  });

module.exports = server;