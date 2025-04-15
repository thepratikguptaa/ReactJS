import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(0)
  // let counter = 5
  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1) //setCounter(counter)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App