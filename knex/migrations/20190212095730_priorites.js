
exports.up = function (knex, Promise) {
  return knex.schema.createTable('priorites', function (table) {
    table.increments().primary().unique();
    table.string('name', 255).notNullable();
    table.integer('rank').notNullable();
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('priorites');
};
