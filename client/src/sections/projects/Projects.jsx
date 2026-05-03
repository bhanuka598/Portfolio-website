import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects" className="py-12 bg-slate-50">
      <div className="container mx-auto">
        <h1 className='text-3xl font-bold mb-8 text-slate-900'>Projects</h1>
        <p className='text-gray-700 mt-4'>
          Here are some of the projects I have worked on. Each project demonstrates my skills in full stack development and my ability to create scalable and efficient web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ProjectCard
            title="Project 1"
            description="A brief description of the first project."
            imageUrl="/path/to/project1.jpg"
            projectUrl="https://example.com/project1"
          />
          <ProjectCard
            title="Project 2"
            description="A brief description of the second project."
            imageUrl="/path/to/project2.jpg"
            projectUrl="https://example.com/project2"
          />
          <ProjectCard
            title="Project 3"
            description="A brief description of the third project."
            imageUrl="/path/to/project3.jpg"
            projectUrl="https://example.com/project3"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects