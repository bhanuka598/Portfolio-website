function CertificateCard({ certificate }) {
    const { title, issuer, date, link, credentialId } = certificate;
    
  return (
    <div className="overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(22,34,52,0.92),rgba(10,18,32,0.96))] p-5 ring-1 ring-white/6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1 hover:ring-cyan-300/12 hover:shadow-[0_28px_70px_rgba(0,0,0,0.36)]">
      <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">{title}</h3>
      <p className="mb-1 text-[var(--text-muted)]">Issued by: {issuer}</p>
      <p className="mb-4 text-[var(--text-muted)]">Date: {date}</p>
      {credentialId && <p className="mb-4 text-[var(--text-muted)]">Credential ID: {credentialId}</p>}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-cyan-300">
          View Certificate
        </a>
      )}
    </div>
  )
}

export default CertificateCard
