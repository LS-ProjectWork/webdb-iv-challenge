exports.seed = function(knex, Promise) {
      return knex('dish').insert([
        {name: 'cereal'},
        {name: 'breakfast eggs'},
        {name: 'pasta'}
      ]);
};
