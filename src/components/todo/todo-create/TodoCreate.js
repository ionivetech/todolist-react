import { useState } from 'react'

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: props.lastDataId + 1,
      name: getInputTodo
    }
    props.onCreateTodo(newTodo)
    setInputTodo('')
  }

  return (
    <form
      className="flex flex-col items-end border border-slate-300 mb-5 p-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col">
        <label className="font-semibold text-sm mb-2">Add New Todo</label>
        <input
          type='text'
          placeholder="Input todo..."
          value={getInputTodo}
          onChange={e => setInputTodo(e.target.value)}
          className="w-full py-1 px-3 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-slate-200 transition ease-in duration-300 mb-3"
        />
      </div>
      <button type="submit" className="px-4 h-10 bg-sky-600 text-white flex items-center justify-center text-center text-sm font-semibold focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer disabled:cursor-not-allowed whitespace-nowrap">
        Add
      </button>
    </form>
  )
}

export default TodoCreate