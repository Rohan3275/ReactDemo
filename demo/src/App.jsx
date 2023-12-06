import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/navbar'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)
  const total = 1 + 2
  return (
    <>
      <Home/>
      <Navbar/>
      <Footer/>
    </>
    
  )
}

export default App
