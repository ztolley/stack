import React, { Fragment } from 'react'
import { useTodoListQuery } from '../../graphql'

const Home = (): JSX.Element => {
  const { data, error, loading } = useTodoListQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data || !data.todos) return <p>No data</p>

  const { todos } = data

  return (
    <Fragment>
      <h1>Todos</h1>
      <ul>
        {todos.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Home
