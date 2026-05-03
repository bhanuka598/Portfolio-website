import SkillBadge from "./SkillBadge"
import { skillsData } from '../../data/skills'
import SectionTitle from "../../components/ui/SectionTitle"

function Skills() {
    const marqueeSkills = [...skillsData, ...skillsData, ...skillsData] // Repeat skills to create a longer marquee
    
  return (
    <section id="skills" className="py-12">
        <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(26,44,69,0.88),rgba(15,27,45,0.94))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
                <SectionTitle>Skills</SectionTitle>

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
        </div>
    </section>
    )
}

export default Skills
