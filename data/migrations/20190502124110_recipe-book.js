exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('dish', table => {
      table.increments()

      table
            .string('name')
            .notNullable()
            .unique();
    })
  .createTable('recipe', table => {
      table.increments()

      table
            .string('name')
            .notNullable()
      table
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dish')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table
            .decimal('quantity')

    })
  .createTable('ingredients', table => {
        table.increments()

        table
            .string('name')
            .notNullable()
            .unique()
    })
  .createTable('recipe_ingredients', table => {
        table
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        table
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('dish')
};
