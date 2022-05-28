import { useState } from 'react'
import TodoList from './todo-list/TodoList'
import TodoCreate from './todo-create/TodoCreate'

const Todo = () => {
  const [todos, setTodos] = useState([])

  // Create Todo
  const eventCreateTodo = (todo) => {
    setTodos(todos.concat(todo))
  }

  // Delete Todo
  const eventDeleteTodo = (index) => {
    const tempTodo = [...todos]
    tempTodo.splice(index, 1)
    setTodos(tempTodo)
  }

  return (
    <div className='min-w-[400px] max-w-[700px] p-5 bg-white rounded-2xl shadow-lg'>
      <p className='text-center font-bold text-lg mb-4'>
        Todo List :
      </p>

      {/* Add New Todo */}
      <TodoCreate
        lastDataId={todos[todos.length - 1] ? todos[todos.length - 1].id : 0}
        onCreateTodo={eventCreateTodo}
      />

      {/* Todo List */}
      <TodoList
        dataTodos={todos}
        onDeleteTodo={eventDeleteTodo}
      />
    </div>
  )
}

export default Todo