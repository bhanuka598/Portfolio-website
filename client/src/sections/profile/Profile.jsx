import { Brush, Code2, MonitorSmartphone, ServerCog } from "lucide-react"
import SectionTitle from "../../components/ui/SectionTitle"

function Profile() {
  const profileAreas = [
    {
      title: "Frontend Development",
      description: "Building responsive interfaces with React, Tailwind CSS, and modern component-driven UI patterns.",
      icon: Code2,
    },
    {
      title: "Backend Development",
      description: "Creating scalable APIs and server-side logic with Node.js, Express.js, and database integration.",
      icon: ServerCog,
    },
    {
      title: "Mobile Development",
      description: "Exploring mobile-first application design and cross-platform thinking for smooth user experiences.",
      icon: MonitorSmartphone,
    },
    {
      title: "UI/UX Design",
      description: "Designing clean, user-focused layouts with attention to usability, visual hierarchy, and interaction flow.",
      icon: Brush,
    },
  ]

  return (
    <section id="profile" className="py-12">
        <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(22,36,56,0.84),rgba(8,16,28,0.98))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
                <SectionTitle>My Profile</SectionTitle>
                <p className='mt-4 text-justify text-[var(--text-muted)]'>
                    I am an undergraduate student at Sri Lanka Institute of Information Technology, pursuing a degree in Computer Science. 
                    I have experience working with Node.js, Express.js, React, Tailwind CSS, MongoDB and Docker containerization. 
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {profileAreas.map((area) => (
                        <div
                            key={area.title}
                            className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(22,34,52,0.94),rgba(10,18,32,0.98))] p-6 ring-1 ring-cyan-300/18 shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_0_1px_rgba(34,211,238,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:ring-cyan-300/28 hover:shadow-[0_26px_60px_rgba(0,0,0,0.38),0_0_28px_rgba(34,211,238,0.08)]"
                        >
                            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-16 rounded-full bg-cyan-300/10 blur-2xl" />
                            <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-3 text-cyan-300">
                                <area.icon size={24} strokeWidth={1.8} />
                            </div>
                            <h3 className="relative mb-3 text-xl font-semibold text-[var(--text)]">{area.title}</h3>
                            <p className="relative text-justify text-sm leading-7 text-[var(--text-muted)]">{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile
