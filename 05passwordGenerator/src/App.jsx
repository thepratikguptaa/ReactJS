import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "!@#$%^&*()_+"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
    return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center text-3xl font-bold mb-6 my-3'>Password Generator</h1>
        <div className= 'flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className="outline-none w-full px-3 py-2 bg-white"
            placeholder="Generated Password"
            readOnly
          />
          <button className="outline-none bg-blue-900 text-white px-4 py-2 shrink-0" onClick={passwordGenerator}
          >copy</button>
        </div>
        <div className ='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
    );
  }


export default App
