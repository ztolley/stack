exports.up = function(knex) {
  return knex.schema
    .createTable('project', project => {
      project
        .uuid('id')
        .notNullable()
        .primary()
      project.string('title').notNullable()
    })
    .table('todo', todo => {
      todo
        .uuid('projectId')
        .references('id')
        .inTable('project')
    })
}

exports.down = function(knex) {
  return knex.schema
    .table('todo', todo => {
      todo.dropColumn('projectId')
    })
    .dropTable('project')
}
