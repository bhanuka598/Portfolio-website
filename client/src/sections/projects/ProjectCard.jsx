function ProjectCard({ project }) {
  const {
    title,
    description,
    image,
    tags = [],
    techIcons = [],
    githubLink,
    liveLink,
    category,
  } = project

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(22,34,52,0.94),rgba(10,18,32,0.98))] ring-1 ring-cyan-300/18 shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_0_1px_rgba(34,211,238,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:ring-cyan-300/28 hover:shadow-[0_26px_60px_rgba(0,0,0,0.38),0_0_28px_rgba(34,211,238,0.08)]">
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-16 rounded-full bg-cyan-300/10 blur-2xl" />
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="relative p-5">
            <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">{title}</h3>
            {category && <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">{category}</p>}
            <p className="mb-4 text-justify text-[var(--text-muted)]">{description}</p>

            {techIcons.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-3 text-cyan-200">
                    {techIcons.map((Icon, index) => (
                        <Icon key={index} size={18} />
                    ))}
                </div>
            )}

            {tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm text-slate-200 backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex gap-4">
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-cyan-300">
                        Live Demo
                    </a>
                )}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-300 hover:text-white">
                        GitHub
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
