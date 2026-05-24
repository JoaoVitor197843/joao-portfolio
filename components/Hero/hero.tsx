"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import DialogContatos from "../Contatos/contatosDialog"

const Hero = () => {
    return (
        <div id='home' className="w-full flex flex-col justify-center items-center gap-4 min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="font-semibold tracking-tight text-4xl sm:text-7xl lg:text-9xl"
            >
                João Vitor
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-semibold tracking-tight text-2xl sm:text-5xl lg:text-6xl"
            >
                Desenvolvedor Full Stack
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-semibold text-xl sm:text-2xl lg:text-3xl max-w-90 sm:max-w-200 text-center"
            >
                Construo aplicações web completas, do backend ao frontend, com foco em código limpo e experiência do usuário.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full flex justify-center gap-10 mt-4"
            >
                <Button size={'lg'} className="sm:px-8 sm:py-6" asChild>
                    <a href="#projetos">Projetos</a>
                </Button>
                <DialogContatos>
                    <Button size={'lg'} variant={'outline'} className="sm:px-8 sm:py-6">
                        Entre em Contato
                    </Button>
                </DialogContatos>
            </motion.div>
        </div>
    )
}

export default Hero