import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Introduction from './sections/introduction/Introduction'
import Profile from './sections/profile/Profile'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Introduction />
      <Profile />
      <Footer />
    </div>
  )
}

export default App
