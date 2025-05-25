import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-2xl font-bold text-center mb-8 mt-2 text-white'>Manage Your Todos</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App