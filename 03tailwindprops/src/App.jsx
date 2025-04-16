import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' text-blue-400 p-4 rounded-xl mb-4'>TailwindCSS</h1>
      <Card/>
    </>
  )
}

export default App
