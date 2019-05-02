const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const router = express.Router();

router.post('/instructions', (req, res) => {
    const instructions = req.body
    db
    .insert(instructions)
    .into('recipe_ingredients')
    .then(instructions => {
        res.status(201).json(instructions)
    })
})

module.exports = router