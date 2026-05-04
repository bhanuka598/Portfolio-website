import { useEffect, useState } from "react"
import heroImage from "../../assets/hero.png"
import SectionTitle from "../../components/ui/SectionTitle"

function Introduction() {
  const name = "Bhanuka Athukorala"
  const heroImageUrl = "https://drive.google.com/file/d/1auZW3VbZiAO0hGTnon5PAzSkkc3f5AQq/preview"
  const roles = [
    "Backend Developer",
    "Frontend Developer",
    "Cloud Enthusiast",
  ]
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, 2200)

    return () => window.clearInterval(intervalId)
  }, [roles.length])

  return (
    <section id="introduction" className="py-12">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(22,36,56,0.84),rgba(8,16,28,0.98))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
            <div className="flex flex-col items-start">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--primary)]">
                Hello, I'm
              </p>
              <h1 className="animated-name mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
                {name}
              </h1>
              <div className="role-flip-wrap mb-4" aria-live="polite">
                <p
                  key={roles[activeRoleIndex]}
                  className="animated-role role-flip text-sm font-semibold uppercase tracking-[0.24em]"
                >
                  {roles[activeRoleIndex]}
                </p>
              </div>
              <SectionTitle className="text-right">Introduction</SectionTitle>
              <p className="text-justify text-lg leading-8 text-[var(--text-muted)]">
                Welcome to my portfolio. I am a passionate full stack developer with experience across backend and frontend technologies.
                I enjoy building scalable, efficient web applications that deliver thoughtful user experiences, and I am always eager to
                learn new tools, explore challenging ideas, and contribute to meaningful projects. This space is where I share the work, skills, and growth. 
                I am building as I continue working toward internship opportunities and real-world software engineering impact.
              </p>
            </div>

            <div className="mx-auto flex w-full justify-center lg:justify-end">
              <div className="relative w-[290px] sm:w-[330px] md:w-[360px] rounded-[2rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.34)] backdrop-blur-md">
                <div className="pointer-events-none absolute inset-x-8 bottom-2 h-20 rounded-full bg-cyan-300/12 blur-3xl" />
                <div className="relative h-[320px] sm:h-[370px] md:h-[410px] w-full overflow-hidden rounded-[1.6rem] border border-white/8 bg-[rgba(7,17,31,0.94)]">
                  <iframe
                    src={heroImageUrl}
                    title="Portfolio hero"
                    className="h-full w-full border-0"
                    allow="autoplay"
                  />
                  <img
                    src={heroImage}
                    alt="Portfolio hero fallback"
                    className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Introduction
