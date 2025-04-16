import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='text-blue-400 p-4 rounded-xl mb-4'>TailwindCSS</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Card 
          username="TailwindCSS" 
          imgSrc="https://images.pexels.com/photos/29445974/pexels-photo-29445974/free-photo-of-close-up-of-colorful-javascript-code-on-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          intro="Rapidly build modern websites without ever leaving your HTML." 
          btnText="Learn more" 
          btnLink="https://tailwindcss.com/" 
        />
        <Card 
          username="Pratik Gupta" 
          imgSrc="https://images.pexels.com/photos/28991288/pexels-photo-28991288.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          intro="Hey there!" 
          btnText="Visit Profile" 
          btnLink="https://github.com/thepratikguptaa" 
        />
      </div>
    </>
  )
}

export default App
