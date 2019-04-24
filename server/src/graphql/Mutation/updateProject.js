const knex = require('../../db/knex')

const updateProject = async (_, args) => {
  await knex('project')
    .where({ id })
    .update({ ...args })

  return knex('project')
    .where({ id: args.id })
    .first()
}

module.exports = updateProject
