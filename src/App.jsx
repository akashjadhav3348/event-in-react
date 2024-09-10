import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function showAlert(name) {
      alert("Hello " + name + " Welcome to TechRel")
  }

  return (
    <>
    <button style={{'backgroundColor':'orange'}} onClick={()=>showAlert('')}>Welcome</button>
    <button style={{'backgroundColor':'orange'}} onClick={()=>showAlert('Akash')}>Welcome</button>
    <button style={{'backgroundColor':'orange'}} onClick={()=>showAlert('srusti')}>Welcome</button>
    <button style={{'backgroundColor':'orange'}} onClick={()=> showAlert ('Sachin')}>Welcome</button>
    </>
  )
}

export default App
