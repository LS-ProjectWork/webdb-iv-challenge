const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

function getDishes(){
    return db('dish')
};

function addDish(dish){
    return db.insert(dish).into('dish')
};

function getDishById(id){
    const {id} = req.params
   return db.select().from('dish').where({id})
};

function getRecipes(){
    return db('recipe')
};

function addRecipes(recipe){
    return db.insert(recipe).into('recipe')
};

module.exports = {
    getDishes,
    addDish,
    getDishById,
    getRecipes,
    addRecipes
};