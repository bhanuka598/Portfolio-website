import heroImage from "../../assets/hero.png"
import SectionTitle from "../../components/ui/SectionTitle"

function Introduction() {
  return (
    <section id="introduction" className="py-12">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(22,36,56,0.84),rgba(8,16,28,0.98))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
            <div>
              <p className="animated-role mb-3 text-center text-sm font-semibold uppercase tracking-[0.24em] lg:text-left">
                Full Stack Developer
              </p>
              <SectionTitle className="text-right">Introduction</SectionTitle>
              <p className="text-justify text-lg leading-8 text-[var(--text-muted)]">
                Welcome to my portfolio. I am a passionate full stack developer with experience across backend and frontend technologies.
                I enjoy building scalable, efficient web applications that deliver thoughtful user experiences, and I am always eager to
                learn new tools, explore challenging ideas, and contribute to meaningful projects. This space is where I share the work,
                skills, and growth I am building as I continue working toward internship opportunities and real-world software engineering impact.
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-sm justify-center lg:justify-end">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="Portfolio hero"
                  className="h-full w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Introduction
