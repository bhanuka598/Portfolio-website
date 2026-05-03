import {
    SiDocker,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si'
import SkillBadge from "./SkillBadge"

function Skills() {
    const skillsData = [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express.js", icon: SiExpress, color: "text-[#000000]" },
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    ];

  return (
    <section id="skills" className="py-12 bg-slate-50">
        <div className="container mx-auto">
            <h1 className='text-3xl font-bold mb-8 text-slate-900'>Skills</h1>

            <div className="flex flex-wrap gap-3">
                {skillsData.map((skill) => (
                    <SkillBadge
                        key={skill.name}
                        skill={skill.name}
                        Icon={skill.icon}
                        colorClass={skill.color}
                    />
                ))}
            </div>
        </div>
    </section>
    )
}

export default Skills
