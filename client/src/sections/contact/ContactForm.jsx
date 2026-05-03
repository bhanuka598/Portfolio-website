function ContactForm() {
    return (
        <form className="relative w-full max-w-2xl space-y-6 overflow-hidden rounded-3xl border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(22,34,52,0.94),rgba(10,18,32,0.98))] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_0_1px_rgba(34,211,238,0.05)]">
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-16 rounded-full bg-cyan-300/10 blur-2xl" />
            <div>
                <label htmlFor="name" className="relative block text-sm font-medium text-[var(--text)]">Name</label>
                <input type="text" id="name" name="name" required className="relative mt-1 block w-full rounded-xl border border-white/10 bg-white/6 p-3 text-[var(--text)] shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/60" /> 
            </div>
            <div>
                <label htmlFor="email" className="relative block text-sm font-medium text-[var(--text)]">Email</label>
                <input type="email" id="email" name="email" required className="relative mt-1 block w-full rounded-xl border border-white/10 bg-white/6 p-3 text-[var(--text)] shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/60" />
            </div>
            <div>
                <label htmlFor="message" className="relative block text-sm font-medium text-[var(--text)]">Message</label>
                <textarea id="message" name="message" rows={4} required className="relative mt-1 block w-full rounded-xl border border-white/10 bg-white/6 p-3 text-[var(--text)] shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/60" />
            </div>
            <button type="submit" className="relative rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
                Send Message
            </button>
        </form>
    )
}

export default ContactForm
