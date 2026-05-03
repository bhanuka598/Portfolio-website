import { SiGithub } from 'react-icons/si'
import { PiLinkedinLogo, PiMicrosoftOutlookLogo } from 'react-icons/pi'
import ContactForm from './ContactForm'
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
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(26,44,69,0.88),rgba(15,27,45,0.94))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
                <SectionTitle>Contact</SectionTitle>

                <div className="flex flex-col items-start gap-8 text-left md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col items-start text-left">
                        <p className='mb-4 max-w-xl text-lg text-[var(--text-muted)]'>Feel free to reach out to me via email or through my social media channels.</p>
                        <ul className='space-y-3 text-lg text-[var(--text-muted)]'>
                            {contactData.map((contact) => {
                                const Icon = contact.icon

                                return (
                                <li key={contact.type} className="flex items-start justify-start gap-3 text-left">
                                    <Icon className="text-cyan-300" size={20} />
                                    <span className="font-medium text-[var(--text)]">{contact.type}:</span>
                                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-cyan-300">
                                        {contact.value}
                                    </a>
                                </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="flex w-full flex-col items-start text-left md:w-auto">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
