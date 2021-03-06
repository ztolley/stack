import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import {
  Todo,
  UpdateTodoMutationVariables,
  useToDoQuery,
  useUpdateTodoMutation,
} from '../../graphql'
import TodoForm from '../../forms/Todo'

interface TodoParams {
  id: string
}

const TodoEdit = (props: RouteComponentProps<TodoParams>): JSX.Element => {
  const {
    history,
    match: {
      params: { id },
    },
  } = props

  const updateTodoMutation = useUpdateTodoMutation()
  const { data, error, loading } = useToDoQuery({ variables: { id } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  const { todo } = data

  const onSubmit = async (formData: Todo): Promise<void> => {
    const variables: UpdateTodoMutationVariables = {
      id: formData.id,
      title: formData.title,
      complete: formData.complete,
      projectId: formData.project.id,
    }

    await updateTodoMutation({ variables })
    history.push('/')
  }

  const onCancel = () => {
    history.push('/')
  }

  return (
    <div className="container">
      <h1>Edit Todo</h1>
      <TodoForm todo={todo} onSubmit={onSubmit} onCancel={onCancel} />
    </div>
  )
}

export default TodoEdit
