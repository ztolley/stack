const knex = require('../../db/knex')

const projects = () => knex('project')

module.exports = projects
