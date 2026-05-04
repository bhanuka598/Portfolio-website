function CertificateCard({ certificate }) {
    const { title, issuer, date, link, credentialId } = certificate;
    
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(22,34,52,0.94),rgba(10,18,32,0.98))] p-5 ring-1 ring-cyan-300/18 shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_0_1px_rgba(34,211,238,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:ring-cyan-300/28 hover:shadow-[0_26px_60px_rgba(0,0,0,0.38),0_0_28px_rgba(34,211,238,0.08)]">
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-16 rounded-full bg-cyan-300/10 blur-2xl" />
      <div className="relative">
        <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">{title}</h3>
        <p className="mb-1 text-justify text-[var(--text-muted)]">Issued by: {issuer}</p>
        <p className="mb-4 text-justify text-[var(--text-muted)]">Date: {date}</p>
        {credentialId && <p className="mb-4 text-justify text-[var(--text-muted)]">Credential ID: {credentialId}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-cyan-300">
            View Certificate
          </a>
        )}
      </div>
    </div>
  )
}

export default CertificateCard
