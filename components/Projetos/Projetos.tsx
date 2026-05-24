import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { Globe } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const Projetos = () => {
    const tags = ["React", "TypeScript", "Django", "DRF", "PostgreSQL", "JWT"];

    return (
        <div id="projetos" className="min-h-screen">
            <div className="w-full flex items-center justify-center mt-24 mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Projetos</h1>
            </div>

            <Card className="w-full max-w-md sm:max-w-2xl mx-auto overflow-hidden border-white/20 bg-white/5
                             hover:border-white/40 hover:-translate-y-1 transition-all duration-200">
                <div className="relative w-full aspect-video">
                    <Image
                        className="object-cover rounded-xl"
                        src="/WhyleFinance.png"
                        fill
                        sizes="(max-width: 768px) 100vw, 672px"
                        alt="WhyleFinance"
                    />
                </div>

                <CardHeader>
                    <CardTitle className="text-2xl">WhyleFinance</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <p className="text-muted-foreground">
                        Plataforma web de gestão financeira pessoal. Registre receitas e despesas,
                        visualize seus gastos por categoria em gráficos interativos, acompanhe sua
                        evolução financeira e mantenha tudo seguro com autenticação moderna.
                    </p>
                </CardContent>

                <CardFooter className="flex gap-4">
                    <Button asChild>
                        <a href="https://app.whylefinance.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Globe size={18} />
                            Ver Site
                        </a>
                    </Button>
                    <Button asChild variant="outline">
                        <a href="https://github.com/JoaoVitor197843/whyle-finance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <SiGithub size={18} />
                            Ver no GitHub
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Projetos