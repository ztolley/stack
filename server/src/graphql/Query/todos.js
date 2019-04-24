const knex = require('../../db/knex')

const todos = () => knex('todo')

module.exports = todos
