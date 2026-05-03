function Navbar() {
  return (
    <nav className="bg-slate-900 text-cyan-400 p-2">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">My Portfolio</div>
            <ul className="flex space-x-5">
                <li><a href="#introduction" className="hover:text-blue-400">Introduction</a></li>
                <li><a href="#profile" className="hover:text-blue-400">Profile</a></li>
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#certificates" className="hover:text-blue-400">Certificates</a></li>
                <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>  
        </div>
    </nav>
  )
}

export default Navbar