
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments();
    table.string("title");
    table.string("author").notNullable();
    table.string("genre");
    table.string("image_url");
    table.integer("page_count");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};
