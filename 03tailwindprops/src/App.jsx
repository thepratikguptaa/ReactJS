import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Testing TailwindCSS</h1>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/29445974/pexels-photo-29445974/free-photo-of-close-up-of-colorful-javascript-code-on-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Learning TailwindCSS Basics</span>
    <span class="font-medium text-sky-500">It makes everything easier</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>Loving it</span>
    </span>
  </div>
</div>
    </>
  )
}

export default App
