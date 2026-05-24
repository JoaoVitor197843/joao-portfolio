import {
    SiPython, SiDjango, SiReact, SiTypescript, SiNextdotjs,
    SiTailwindcss, SiShadcnui, SiMui, SiPostgresql, SiGit,
    SiDocker, SiLinux, SiNginx
} from "react-icons/si"

const skills = [
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#0C9D58" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
    { icon: SiShadcnui, name: "shadcn/ui", color: "#FFFFFF" },
    { icon: SiMui, name: "MUI", color: "#007FFF" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiLinux, name: "Linux", color: "#FCC624" },
    { icon: SiNginx, name: "Nginx", color: "#009639" },
]

const SobreMim = () => {
    return (
        <div id="sobre-mim" className="min-h-screen flex flex-col px-4 font-semibold tracking-tight">
            <h2 className="mb-5 text-4xl sm:text-5xl lg:text-6xl mt-24 text-center">Sobre Mim</h2>
            <p className="max-w-4xl mx-auto sm:text-2xl mb-10 text-center">
                Estudante de Engenharia da Computação, desenvolvedor full stack com foco em backend,
                1 ano de experiência, com projetos deployados em produção.
            </p>
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl text-center mb-10">Skills</h3>
                <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-2 border border-white/20 rounded-lg px-4 py-2
                                       hover:border-white/50 hover:bg-white/5 hover:-translate-y-1
                                       transition-all duration-200 cursor-default"
                        >
                            <skill.icon size={20} color={skill.color} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SobreMim
