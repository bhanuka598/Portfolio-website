function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`mb-6 border-b border-[var(--border)] pb-3 text-center text-2xl font-bold tracking-tight text-[var(--text)] md:text-3xl ${className}`}>
      {children}
    </h2>
  )
} 

export default SectionTitle
