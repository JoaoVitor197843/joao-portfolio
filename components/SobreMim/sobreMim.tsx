import Image from "next/image"
import { SiPython, SiDjango, SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiShadcnui, SiMui, SiPostgresql, SiGit, SiDocker, SiLinux, SiNginx } from "react-icons/si"

const SobreMim = () => {
    return (
        <div id="sobre-mim" className="min-h-screen flex flex-col px-4 font-semibold tracking-tight">
            <h2 className="mb-5 text-4xl sm:text-5xl lg:text-6xl mt-24 text-center">Sobre Mim</h2>
            <p className="max-w-4xl mx-auto sm:text-2xl mb-10 text-center">Estudante de Engenharia da Computação,
            desenvolvedor full stack com foco em backend,
            1 ano de experiência, com projetos deployados em produção.</p>
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 px-10 gap-10 items-center">
                <div className="flex items-center justify-center h-full">
                    <Image src={'/perfil.jpeg'} width={400} height={400} alt="João Vitor" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex items-start justify-center mb-10 text-3xl">
                        <h1>Skills</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center items-center">
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                            <SiPython size={20}/>
                            <p> Python</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiDjango size={20}/> 
                        <p>Django</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiReact size={20}/> 
                        <p>React</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiTypescript size={20}/> 
                        <p>Typescript</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiNextdotjs size={20}/> 
                        <p>Next.js</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2 text-xs sm:text-base">
                        <SiTailwindcss size={20}/> 
                        <p>Tailwind Css</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2 text-xs sm:text-base">
                        <SiShadcnui size={20}/> 
                        <p>Shadcn UI</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiMui size={20}/> 
                        <p>MUI</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiPostgresql size={20}/> 
                        <p>Postgresql</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiGit size={20}/> 
                        <p>Git</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiDocker size={20}/> 
                        <p>Docker</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiLinux size={20}/> 
                        <p>Linux</p>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                        <SiNginx size={20}/> 
                        <p>Nginx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMim