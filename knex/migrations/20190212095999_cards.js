
exports.up = function (knex, Promise) {
  return knex.schema.createTable('cards', function (table) {
    table.increments().notNullable().unique();
    table.string('title', 255).notNullable();
    table.string('body', 1024).notNullable();
    table.integer('priority_id').references('id').inTable('priorites').notNullable();
    table.integer('status_id').references('id').inTable('statuses').notNullable();
    table.integer('created_by').references('id').inTable('users').notNullable();
    table.integer('assigned_to').references('id').inTable('users').nullable();
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cards');
};
