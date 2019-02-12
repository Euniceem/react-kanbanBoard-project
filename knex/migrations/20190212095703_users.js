
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments().primary().unique();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.string('firstname', 255).notNullable();
    table.string('lastname', 255).notNullable();
    table.string('email', 500).notNullable();
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
