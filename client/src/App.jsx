import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Introduction from './sections/introduction/Introduction'
import Profile from './sections/profile/Profile'
import Skills from './sections/skills/Skills'
import SkillBadge from './sections/skills/SkillBadge'
import './index.css'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Introduction />
      <Profile />
      <Skills />
      
      <Footer />
    </div>
  )
}

export default App
