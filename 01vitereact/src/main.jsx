import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = {
  <a href="http://www.google.com" target="_blank">Click me to visit Google</a>
}
ReactDOMcreateRoot(document.getElementById('root')).render(
  
  // <App />
  anotherElement
)
