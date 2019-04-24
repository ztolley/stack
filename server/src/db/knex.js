const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')

module.exports = require('knex')(config)
