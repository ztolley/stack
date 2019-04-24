const knex = require('../../db/knex')

module.exports = {
  id: obj => obj.id,
  title: obj => obj.title,
  complete: obj => obj.complete,
  project: obj =>
    knex('project')
      .where({ id: obj.projectId })
      .first(),
}
