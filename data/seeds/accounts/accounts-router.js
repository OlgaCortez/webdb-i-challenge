const express = require('express');

const knex = require('../../../data/dbConfig.js');

const router = express.Router();


router.get('/', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to get accounts from database' });
    });  
});

router.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .where('id', '=', req.params.id)
    .first()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to get account from database' });
    });
});

router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('accounts')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to insert account' });
    });
});

router.put('/:id', (req, res) => {
const changes = req.body;

    knex('accounts')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      // count: how many records/rows were updated
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update account' });
    });
});

router.delete('/:id', (req, res) => {
    knex('accounts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      // count: how many records/rows were delete
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete account' });
    });
});

module.exports = router;