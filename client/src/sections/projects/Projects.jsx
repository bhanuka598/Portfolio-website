import ProjectCard from "./ProjectCard"
import { projectsData } from "../../data/projects"

function Projects() {
  return (
    <section id="projects" className="py-12 bg-slate-50">
      <div className="container mx-auto">
        <h1 className='text-3xl font-bold mb-8 text-slate-900'>Projects</h1>
        <p className='text-gray-700 mt-4'>
          Here are some of the projects I have worked on. Each project demonstrates my skills in full stack development and my ability to create scalable and efficient web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
