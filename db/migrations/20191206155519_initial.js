exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('messages', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.string('company');
      table.string('message');

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('messages')
  ]);
};
