import SectionTitle from "../../components/ui/SectionTitle"

function Introduction() {
  return (
    <section id="introduction" className="py-12">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(26,44,69,0.88),rgba(15,27,45,0.94))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            Full Stack Developer
          </p>
          <SectionTitle>Introduction</SectionTitle>
          <p className="max-w-4xl text-lg leading-8 text-[var(--text-muted)]">
            Welcome to my portfolio. I am a passionate full stack developer with experience across backend and frontend technologies.
            I enjoy building scalable, efficient web applications that deliver thoughtful user experiences, and I am always eager to
            learn new tools, explore challenging ideas, and contribute to meaningful projects. This space is where I share the work,
            skills, and growth I am building as I continue working toward internship opportunities and real-world software engineering impact.
          </p>
        </div>
      </div>
    </section> 
  )
}

export default Introduction
