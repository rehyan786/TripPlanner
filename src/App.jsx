import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/custom/Hero'
import Background from './Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background />
      {/* <Hero/> */}
    </>
  )
}

export default App
