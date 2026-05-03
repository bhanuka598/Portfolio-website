import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Introduction from './sections/introduction/Introduction'
import Profile from './sections/profile/Profile'
import Projects from './sections/projects/Projects'
import Certificates from './sections/certificates/Certificates'
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact'

import './index.css'

function App() {
  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_28%),linear-gradient(180deg,_rgba(15,27,45,0.55)_0%,_rgba(7,17,31,0.88)_45%,_rgba(4,11,20,1)_100%)] text-[var(--text)]'>
      <Navbar />
      <ScrollToTop />
      <Introduction />
      <Profile />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
