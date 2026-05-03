import ProjectCard from "./ProjectCard"
import { projectsData } from "../../data/projects"
import SectionTitle from "../../components/ui/SectionTitle"

function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(22,36,56,0.84),rgba(8,16,28,0.98))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
          <SectionTitle>Projects</SectionTitle>
          <p className='mt-4 text-justify text-[var(--text-muted)]'>
            Here are some of the projects I have worked on. Each project demonstrates my skills in full stack development and my ability to create scalable and efficient web applications.
          </p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
