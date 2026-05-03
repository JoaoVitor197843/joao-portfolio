import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { Globe } from "lucide-react";
import { Button } from "../ui/button";

const Projetos = () => {
    return (
        <div id='projetos' className="min-h-screen">
            <div className="w-full flex items-center justify-center mt-24 mb-7">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Projetos</h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="relative w-[70%] aspect-video mx-auto">
                    <Image className='rounded-lg object-cover' sizes="lg" src={'/WhyleFinance.png'} fill alt="WhyleFinance"/>
                </div>
                <div className="flex justify-center xl:justify-start mt-8 xl:mt-0 flex-col gap-4">
                    <h1 className="text-2xl font-semibold self-center xl:self-start">WhyleFinance</h1>
                    <p className="text-lg text-justify max-[540]:max-w-70 max-w-120 sm:max-w-150 self-center xl:self-start md:max-w-180 lg:max-w-220">O WhyleFinance é uma plataforma web de gestão financeira pessoal. Com ele você pode registrar suas receitas e despesas, visualizar seus gastos por categoria em gráficos interativos, acompanhar sua evolução financeira ao longo do tempo e manter tudo seguro com autenticação moderna.</p>
                    <div className="flex-1 flex mt-4 justify-center gap-7">
                        
                        <Button asChild className="p-6">
                            <div className="flex items-center gap-2">
                            <Globe/>
                            <a href="https://app.whylefinance.dev/">Ver Site</a>
                            </div>
                        </Button>
                        <Button asChild className="p-6" variant={'outline'}>
                            <div className="flex items-center gap-2">
                            <SiGithub/>
                            <a href="https://github.com/JoaoVitor197843/whyle-finance">Ver no Github</a>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Projetos