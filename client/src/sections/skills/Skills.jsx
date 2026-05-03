import SkillBadge from "./SkillBadge"
import { skillsData } from '../../data/skills'

function Skills() {
    const marqueeSkills = [...skillsData, ...skillsData, ...skillsData] // Repeat skills to create a longer marquee
    
  return (
    <section id="skills" className="py-12 bg-slate-50">
        <div className="container mx-auto">
            <h1 className='text-3xl font-bold mb-8 text-slate-900'>Skills</h1>

            <div className="overflow-hidden">
                <div className="flex w-max gap-3 animate-marquee">
                    {marqueeSkills.map((skill, index) => (
                    <div key={`${skill.id}-${index}`} className="shrink-0">
                        <SkillBadge skill={skill} />
                    </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
    )
}

export default Skills
