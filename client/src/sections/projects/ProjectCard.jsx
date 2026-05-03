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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {category && <p className="mb-2 text-sm font-medium text-slate-500">{category}</p>}
            <p className="text-gray-700 mb-4">{description}</p>

            {techIcons.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-3 text-slate-700">
                    {techIcons.map((Icon, index) => (
                        <Icon key={index} size={18} />
                    ))}
                </div>
            )}

            {tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex gap-4">
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Live Demo
                    </a>
                )}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:underline">
                        GitHub
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
