import { SiGithub } from 'react-icons/si'
import { PiLinkedinLogo, PiMicrosoftOutlookLogo } from 'react-icons/pi'
import ContactForm from './ContactForm'

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
    <section id="contact" className="py-12 bg-slate-50">
        <div className="container mx-auto">
            <h1 className='text-3xl font-bold mb-8 text-slate-900'>Contact</h1>

            <div className="flex flex-col items-start gap-8 text-left md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col items-start text-left">
                    <p className='mb-4 text-lg text-gray-700'>Feel free to reach out to me via email or through my social media channels.</p>
                    <ul className='space-y-3 text-lg text-gray-700'>
                        {contactData.map((contact) => {
                            const Icon = contact.icon

                            return (
                            <li key={contact.type} className="flex items-start justify-start gap-3 text-left">
                                <Icon className="text-slate-700" size={20} />
                                <span className="font-medium text-slate-900">{contact.type}:</span>
                                <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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
    </section>
  )
}

export default Contact
