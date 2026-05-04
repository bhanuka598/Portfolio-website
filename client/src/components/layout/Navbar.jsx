function Navbar() {
  const navItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#profile", label: "Profile" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(7,17,31,0.78)] text-[var(--text)] backdrop-blur-xl">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
            <a href="#introduction" className="text-2xl font-bold tracking-tight text-[var(--text)] transition-colors hover:text-cyan-300">
              Bhanuka Athukorala
            </a>
            <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--text-muted)] md:gap-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex rounded-full border border-transparent px-4 py-2 transition-all duration-200 hover:border-cyan-300/18 hover:bg-cyan-300/10 hover:text-cyan-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
