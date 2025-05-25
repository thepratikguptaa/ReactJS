import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

// This component handles the form to add a new todo
function AddTodo() {

    const [input, setInput] = useState('') // State for input field
    const dispatch = useDispatch() // Get Redux dispatch function

    // Handle form submit to add a todo
    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return // Prevent adding empty or whitespace-only todos
        dispatch(addTodo({ text: input })) // pass as object with text property
        setInput('') // clear the input field after adding a todo
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input state on change
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo