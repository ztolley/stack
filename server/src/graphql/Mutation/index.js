const addProject = require('./addProject')
const addTodo = require('./addTodo')
const updateProject = require('./updateProject')
const updateTodo = require('./updateTodo')

const Mutation = {
  addProject,
  addTodo,
  updateProject,
  updateTodo,
}

module.exports = Mutation
