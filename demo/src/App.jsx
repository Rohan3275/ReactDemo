import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RForm from './RegistrationForm/RForm'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <RForm/>
    </>
    
  )
}

export default App
