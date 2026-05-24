"use client"

import { motion } from "framer-motion"
import {
    SiPython, SiDjango, SiReact, SiTypescript, SiNextdotjs,
    SiTailwindcss, SiShadcnui, SiMui, SiPostgresql, SiGit,
    SiDocker, SiLinux, SiNginx
} from "react-icons/si"
import { GraduationCap, Languages } from "lucide-react"

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

const formacao = [
    { icon: GraduationCap, titulo: "Engenharia da Computação", detalhe: "Cursando" },
    { icon: Languages, titulo: "Inglês", detalhe: "Intermediário" },
]

const SobreMim = () => {
    return (
        <div id="sobre-mim" className="min-h-screen flex flex-col px-4 font-semibold tracking-tight py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-4xl sm:text-5xl lg:text-6xl text-center"
            >
                Sobre Mim
            </motion.h2>

            {/* Parágrafo principal */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-3xl mx-auto text-lg sm:text-xl text-center text-muted-foreground font-normal leading-relaxed mb-6"
            >
                Sou desenvolvedor full stack com foco em backend. Comecei a estudar programação
                há pouco mais de um ano e, nesse período, desenvolvi e coloquei em produção
                aplicações web completas — do backend ao frontend.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-3xl mx-auto text-lg sm:text-xl text-center text-muted-foreground font-normal leading-relaxed mb-16"
            >
                Aprendo de forma autodidata e gosto de entender o porquê por trás de cada
                decisão técnica, não só o como. Busco escrever código limpo e construir
                soluções que realmente resolvam o problema de quem as usa.
            </motion.p>

            {/* Formação */}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl text-center mb-8"
            >
                Formação
            </motion.h3>

            <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto mb-16">
                {formacao.map((item) => (
                    <div
                        key={item.titulo}
                        className="flex items-center gap-3 border border-white/20 rounded-lg px-5 py-4
                                   hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                    >
                        <item.icon size={28} className="text-white/70" />
                        <div className="flex flex-col">
                            <span>{item.titulo}</span>
                            <span className="text-sm font-normal text-muted-foreground">{item.detalhe}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Skills */}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl text-center mb-8"
            >
                Skills
            </motion.h3>

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
    )
}

export default SobreMim