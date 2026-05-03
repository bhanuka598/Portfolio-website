import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Introduction from './sections/introduction/Introduction'
import Profile from './sections/profile/Profile'
import Projects from './sections/projects/Projects'
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact'

import './index.css'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Introduction />
      <Profile />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
