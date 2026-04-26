"use client"

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {href: '#sobre-mim', label: 'Sobre Mim'},
  {href: '#projetos', label: 'Projetos'},
  {href: '#servicos', label: 'Serviços'},
]
const NavBar = () => {
  const [active, setActive] = useState<string>(items[0].href);
    return (
    <nav className="flex justify-between bg-secondary/80 backdrop-blur border-b border-border px-8 h-16">
      <div className="flex items-center text-xl w-[8ch]">
        <p className="font-mono font-semibold tracking-tight typing">Joao.dev</p>
      </div>
      <div className="flex items-center justify-center gap-8 text-muted-foreground">
        {items.map((item) => (
          <div key={item.href} className="relative" onClick={() => setActive(item.href)}>
            <Button asChild variant={'ghost'}>
              <a href='#'>{item.label}</a>
            </Button>
            {active === item.href && (
                <motion.span layoutId="underline" className="absolute left-0 -bottom-1 h-0.5 w-full bg-foreground rounded-full" />
              )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <Button asChild  size={'sm'} className="hover:border-border">
          <a href="#">Contatos</a>
          </Button>
      </div>
    </nav>
    )
}

export default NavBar