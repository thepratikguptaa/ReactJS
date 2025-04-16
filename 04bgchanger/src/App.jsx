import { useState } from "react"
function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex fixed flex-wrap flex-col md:flex-row justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-warp flex-col md:flex-row justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick={() => setColor("red")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-400">Red</button>
          <button onClick={() => setColor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-400">Green</button>
          <button onClick={() => setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-400">Blue</button>
          <button onClick={() => setColor("black")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">Black</button>
          <button onClick={() => setColor("grey")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-400">Grey</button>
          <button onClick={() => setColor("purple")}className="text-white outline-none px-4 py-1 rounded-full shadow-lg bg-purple-400">Purple</button>
          <button onClick={() => setColor("white")}className="text-black outline-none px-4 py-1 rounded-full shadow-lg bg-white">White</button>
        </div>
      </div>
    </div>
  )
}

export default App
