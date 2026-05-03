import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/layout/Navbar'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-50 min-h-screen text-slate-900'>
      <Navbar />
      <h1 className='text-3xl font-bold underline text-center text-blue-500'>Hello world!</h1>
    </div>
  )
}

export default App
