import './App.css'
import React, { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prevTodos) => 
      prevTodos.map((item) => (item.id === id ? todo : item)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((item) =>
      item.id === id ? {...item, completed: !item.completed} : item))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) //function to get todos from local storage
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) //function to save todos in local storage
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updatedTodo, toggleComplete}}>
      <div className="bg-[#15243a] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-1 bg-[#18417f] text-white">
                    <h1 className="text-2xl font-bold text-center mb-2 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3 p-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo} /> 
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App