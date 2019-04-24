const uuid = require('uuid')
const knex = require('../../db/knex')

const addProject = async (_, args) => {
  const id = uuid()
  const project = { id, ...args }
  await knex('project').insert(project)
  return project
}

module.exports = addProject
