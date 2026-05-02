import { Button } from "../ui/button"

const Hero = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center my-25 gap-4">
            <h1 className="font-semibold tracking-tight text-4xl md:text-6xl">João Vitor</h1>
            <h2 className="font-semibold tracking-tight text-2xl md:text-3xl">Desenvolvedor Full Stack</h2>
            <p className="font-semibold text-1xl md:text-1.5xl max-w-90 md:max-w-120 text-center">Construo aplicações web completas, do backend ao frontend, com foco em código limpo e experiência do usuário.</p>
            <div className=" w-full flex justify-center gap-10">
                <Button size={'lg'} asChild>
                    <a href="#">Projetos</a>
                </Button>
                <Button size={'lg'} variant={'outline'} asChild>
                    <a href="#">Entre em Contato</a>
                    </Button>
            </div>
        </div>
    )
}

export default Hero