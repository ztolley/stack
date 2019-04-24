const Mutation = require('./Mutation')
const Query = require('./Query')
const Project = require('./resolvers/Project')
const Todo = require('./resolvers/Todo')

const resolvers = {
  Mutation,
  Project,
  Query,
  Todo,
}

module.exports = { resolvers }
