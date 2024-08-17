import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Example from './Components/Example'
import Section from './Components/Section'
import Columns from './Components/Columns'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='header'><img src="../public/formisfakelogo.png" alt="" /></div>
    <div>
      <Section />
      <Section />
      <Section />
      <Columns />
    </div>
    </>
  )
}

export default App
