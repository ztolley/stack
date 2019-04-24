require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const { resolvers } = require('./graphql')

const typeDefs = importSchema('./src/graphql/schema.graphql')
const port = process.env.SERVER_PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const app = express()

app.use('/', express.static('public'))
server.applyMiddleware({ app })
app.listen(port, () => console.log(`App listening on port ${port}!`))
