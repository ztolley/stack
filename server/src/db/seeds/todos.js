require('dotenv').config()
const uuid = require('uuid')

async function clear(knex) {
  await knex('todo').del()
}

async function seed(knex) {
  await knex('todo').insert({
    id: uuid(),
    title: 'Test action one',
    complete: false,
  })

  await knex('todo').insert({
    id: uuid(),
    title: 'Test action two',
    complete: false,
  })
}

module.exports = { clear, seed }
