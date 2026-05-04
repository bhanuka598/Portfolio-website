import { SiGithub } from 'react-icons/si'
import { PiLinkedinLogo, PiMicrosoftOutlookLogo } from 'react-icons/pi'
import SectionTitle from '../../components/ui/SectionTitle'

function Contact() {
    const contactData = [
        {
            type: "Email",
            value: "bhanukaict1@outlook.com",
            href: "mailto:bhanukaict1@outlook.com",
            icon: PiMicrosoftOutlookLogo,
        },
        {
            type: "LinkedIn",
            value: "linkedin.com",
            href: "https://www.linkedin.com/in/bhanuka-a-75b79b299",
            icon: PiLinkedinLogo,
        },
        {
            type: "GitHub",
            value: "github.com",
            href: "https://github.com/bhanuka598",
            icon: SiGithub,
        }
    ]

  return (
    <section id="contact" className="py-12">
        <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(22,36,56,0.84),rgba(8,16,28,0.98))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
                <SectionTitle>Contact</SectionTitle>
                <p className='mt-4 max-w-none text-justify text-lg leading-8 text-[var(--text-muted)]'>
                    Feel free to reach out to me through any of these channels. I am always happy to connect, collaborate, and talk about development opportunities, internships, freelance work, or interesting ideas in frontend, backend, mobile, and cloud development.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {contactData.map((contact) => {
                        const Icon = contact.icon

                        return (
                            <a
                                key={contact.type}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(22,34,52,0.94),rgba(10,18,32,0.98))] p-6 text-left ring-1 ring-cyan-300/18 shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_0_1px_rgba(34,211,238,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:ring-cyan-300/28 hover:shadow-[0_26px_60px_rgba(0,0,0,0.38),0_0_28px_rgba(34,211,238,0.08)]"
                            >
                                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-16 rounded-full bg-cyan-300/10 blur-2xl" />
                                <div className="relative mb-4 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-3 text-cyan-300">
                                    <Icon size={24} />
                                </div>
                                <p className="relative mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                                    {contact.type}
                                </p>
                                <p className="relative text-lg font-medium text-[var(--text)] transition-colors duration-200 group-hover:text-cyan-200">
                                    {contact.value}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
