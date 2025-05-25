import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

// This component displays the list of todos
// Handles editing and deleting todos
function Todos() {
    const todos = useSelector(state => state.todo.todos) // Get todos from Redux store
    const dispatch = useDispatch()
    const [editId, setEditId] = useState(null) // Track which todo is being edited
    const [editValue, setEditValue] = useState("") // Store the value while editing

  // Start editing a todo
  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditValue(todo.text)
  }

  // Save the edited todo
  const handleSave = (id) => {
    if (editValue.trim()) {
      dispatch({ type: 'todo/updateTodo', payload: { id, text: editValue } })
      setEditId(null)
      setEditValue("")
    }
  }

  return (
    <>
    <div className='text-2xl font-bold text-center mb-4 mt-6 text-white'>Your Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white flex-1'>
              {editId === todo.id ? (
                <input
                  className="bg-gray-700 text-white px-2 py-1 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 animate-pulse"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  autoFocus
                  placeholder="Edit your todo..."
                  title="Edit todo text"
                />
              ) : (
                todo.text
              )}
            </div>
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md transition-colors duration-150"
                  title="Save changes"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="flex items-center gap-1 text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md transition-colors duration-150"
                  title="Update this todo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.213l-4.182.545.545-4.182 12.999-12.089z" />
                  </svg>
                </button>
              )}
              <button
               onClick={() => dispatch(removeTodo({id: todo.id}))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                title="Delete this todo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos