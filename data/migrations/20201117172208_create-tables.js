
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl =>{
      tbl.increments()
      tbl.string('username', 128)
        .notNullable()
        .unique();
      tbl.string('password', 255)
        .notNullable();
  })

  .createTable('articles', tbl =>{
      tbl.increments()
      tbl.string('title', 128)
        .notNullable()
        .unique();
      tbl.string('author', 128)
        .notNullable()
      tbl.string('summary', 128)
        .notNullable()
      tbl.string('image', 128)
      tbl.string('category',128)
      tbl.integer('rank')
  })
  .createTable('users_articles', tbl =>{
      tbl.increments()
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.string('article_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('articles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('articles')
        .dropTableIfExists('users_articles')
  
};
