import React from 'react'
import Footer from '../../../components/todo/components/Footer'
import AddTodo from '../../../components/todo/containers/AddTodo'
import VisibleTodoList from '../../../components/todo/containers/VisibleTodoList'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp