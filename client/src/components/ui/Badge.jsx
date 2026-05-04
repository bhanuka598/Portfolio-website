function Badge({ children, color }) {
  const colorClasses = {
    red: 'border border-rose-400/25 bg-rose-400/12 text-rose-200',
    green: 'border border-emerald-400/25 bg-emerald-400/12 text-emerald-200',
    blue: 'border border-sky-400/25 bg-sky-400/12 text-sky-200',
    yellow: 'border border-amber-300/25 bg-amber-300/14 text-amber-100',
    gray: 'border border-white/10 bg-white/6 text-slate-200',
  }

  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm ${colorClasses[color] || colorClasses.gray}`}>
      {children}
    </span>
  )
}

export default Badge
