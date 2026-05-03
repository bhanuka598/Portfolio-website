function ContactForm() {
    return (
        <form className="w-full max-w-xl space-y-6 rounded-3xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(26,44,69,0.94),rgba(15,27,45,0.92))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text)]">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-xl border border-white/10 bg-white/6 p-3 text-[var(--text)] shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/60" /> 
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)]">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-xl border border-white/10 bg-white/6 p-3 text-[var(--text)] shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/60" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text)]">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-xl border border-white/10 bg-white/6 p-3 text-[var(--text)] shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/60" />
            </div>
            <button type="submit" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
                Send Message
            </button>
        </form>
    )
}

export default ContactForm
