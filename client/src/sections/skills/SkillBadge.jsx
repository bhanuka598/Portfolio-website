function SkillBadge({ skill }) {
    const { name, icon: Icon, color } = skill
  return (
    <div className='inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full text-sm font-medium hover:shadow-sm transition-shadow'>
        {Icon && <Icon className={color} size={38} />}
        <span className="text-slate-700">{name}</span>
    </div>
  )
}

export default SkillBadge
