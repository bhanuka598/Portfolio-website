function SkillBadge({ skill, Icon, colorClass }) {
  return (
    <div className='inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full text-sm font-medium hover:shadow-sm transition-shadow'>
      {/* Icon with its official brand color */}
      {Icon && <Icon className={colorClass} size={18} />}
      <span className="text-slate-700">{skill}</span>
    </div>
  )
}

export default SkillBadge
