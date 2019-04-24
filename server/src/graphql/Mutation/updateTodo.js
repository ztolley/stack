const knex = require('../../db/knex')

const updateTodo = async (_, args) => {
  await knex('todo')
    .where({ id })
    .update({ ...args })

  return knex('todo')
    .where({ id: args.id })
    .first()
}

module.exports = updateTodo
