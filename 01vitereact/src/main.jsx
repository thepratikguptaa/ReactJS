import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// const anotherElement = (
//   <a href="http://www.google.com" target="_blank">Click me to visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'http://www.google.com', target: '_blank'
//   },
//   'Click me to visit Google'
// )
createRoot(document.getElementById('root')).render(
  <App />
)
