function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Project
            </a>
        </div>
    </div>
  )
}

export default ProjectCard