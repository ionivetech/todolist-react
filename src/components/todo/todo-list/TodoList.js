const TodoList = (props) => {
  const dataTodos = props.dataTodos

  // Delete Todo
  const deleteTodo = (index) => {
    props.onDeleteTodo(index)
  }

  return (
    <ul>
      {(() => {
        if (dataTodos.length > 0) {
          return dataTodos.map((todo, index) => {
            return (
              <li
                key={todo.id}
                className='w-full relative p-3 border border-sky-600 rounded-md mb-3 last:mb-0'
              >
                {todo.name}

                {/* Delete */}
                <div
                  className="absolute top-3 right-3 font-semibold cursor-pointer text-rose-500"
                  onClick={() => deleteTodo(index)}
                >
                  X
                </div>
              </li>
            )
          })
        }
      })()}
    </ul>
  )
}

export default TodoList