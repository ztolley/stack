const knex = require('../../db/knex')

const todo = (_, { id }) =>
  knex('todo')
    .where({ id })
    .first()

module.exports = todo
