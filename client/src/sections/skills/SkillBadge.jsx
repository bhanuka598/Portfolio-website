function SkillBadge({ skill }) {
    const { name, icon: Icon, color } = skill
  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-[var(--text)] backdrop-blur-sm transition-shadow hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]'>
        {Icon && <Icon className={color} size={38} />}
        <span className="text-[var(--text)]">{name}</span>
    </div>
  )
}

export default SkillBadge
