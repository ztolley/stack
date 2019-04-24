const knex = require('../../db/knex')

module.exports = {
  id: obj => obj.id,
  title: obj => obj.title,
  todos: obj => knex('todo').where({ projectId: obj.id }),
}
