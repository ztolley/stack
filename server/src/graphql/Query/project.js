const knex = require('../../db/knex')

const project = (_, { id }) =>
  knex('project')
    .where({ id })
    .first()

module.exports = project
