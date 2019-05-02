exports.seed = function(knex, Promise) {
      return knex('recipe').insert([
        {name: 'scrambled', dish_id: 2},
        {name: 'chicken alfredo', dish_id: 3},
        {name: 'Honey Nut Cheerios', dish_id: 1}
      ]);
};
