// Main App component
// Shows the title, AddTodo form, and Todos list
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  // App just renders the UI, logic is handled in components and Redux
  return (
    <>
      {/* App title */}
      <h1 className='text-2xl font-bold text-center mb-8 mt-2 text-white'>Manage Your Todos</h1>
      {/* Form to add a new todo */}
      <AddTodo />
      {/* List of todos */}
      <Todos />
    </>
  )
}

export default App