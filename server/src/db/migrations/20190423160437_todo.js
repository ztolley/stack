require('dotenv').config()

exports.up = function(knex) {
  return knex.schema.createTable('todo', todo => {
    todo
      .uuid('id')
      .notNullable()
      .primary()
    todo.string('title').notNullable()
    todo.boolean('complete')
  })
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('todo')])
}
