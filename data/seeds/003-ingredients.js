exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
        {name: 'eggs'},
        {name: 'milk'},
        {name: 'grilled chicken'},
        {name: 'salt'},
        {name: 'pepper'},
        {name: 'penne'}
      ]);
};
