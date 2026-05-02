import { Button } from "../ui/button"

const Hero = () => {
    return (
        <div id='home' className="w-full flex flex-col justify-center items-center gap-4 min-h-screen">
            <h1 className="font-semibold tracking-tight text-4xl sm:text-7xl lg:text-9xl">João Vitor</h1>
            <h2 className="font-semibold tracking-tight text-2xl sm:text-5xl lg:text-6xl">Desenvolvedor Full Stack</h2>
            <p className="font-semibold text-1xl sm:text-2xl lg:text-3xl max-w-90 sm:max-w-200 text-center">Construo aplicações web completas, do backend ao frontend, com foco em código limpo e experiência do usuário.</p>
            <div className=" w-full flex justify-center gap-10">
                <Button size={'lg'} className="sm:px-8 sm:py-6" asChild>
                    <a href="#">Projetos</a>
                </Button>
                <Button size={'lg'} variant={'outline'} className="sm:px-8 sm:py-6" asChild>
                    <a href="#">Entre em Contato</a>
                    </Button>
            </div>
        </div>
    )
}

export default Hero