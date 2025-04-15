import Chai from './chai'
function App() {
  const username = "Pratik"
  return (
    <>
    <Chai/>
    <h1>Hello {username}</h1> //{/* evaluated expression */}
    <h3>abhi ek se jyada element return kar sakte hai</h3>
    <p>fragment use karke</p>
    </>
  )
}
export default App