function SkillBadge({ skill }) {
    const { name, icon: Icon, color } = skill
  return (
    <div className='relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(22,34,52,0.9),rgba(10,18,32,0.96))] px-4 py-2 text-sm font-medium text-[var(--text)] shadow-[0_14px_30px_rgba(0,0,0,0.24),0_0_0_1px_rgba(34,211,238,0.04)] transition-shadow hover:shadow-[0_18px_38px_rgba(0,0,0,0.28),0_0_20px_rgba(34,211,238,0.06)]'>
        <div className="pointer-events-none absolute inset-x-4 bottom-0 h-8 rounded-full bg-cyan-300/10 blur-xl" />
        {Icon && <Icon className={color} size={38} />}
        <span className="relative text-[var(--text)]">{name}</span>
    </div>
  )
}

export default SkillBadge
