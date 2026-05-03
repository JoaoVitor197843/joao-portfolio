"use client"

import { useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "../ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import useScrollObserver from "@/hooks/ScrollObserver";

interface items {
    href: string;
    label: string;
}
interface props {
    items: items[]
}

const NavBarSheet = ( { items }: props) => {
    const [active, setActive] = useState<string>(items[0].href)
    const isScrolling = useRef<boolean>(false)
    const onScrollEnd = () => {
      isScrolling.current = false
    }
    const handleNavClick = (href: string) => {
      isScrolling.current = true;
      setActive(href);
      window.removeEventListener('scrollend', onScrollEnd)
      window.addEventListener('scrollend', onScrollEnd, {once: true})
    }
    useScrollObserver(setActive, isScrolling)
    return (
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu size={32}/>
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Navegação</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-6 mt-8 items-start ml-6">
              {items.map((item) => (
                <div key={item.href} className="relative" onClick={() => handleNavClick(item.href)}>
                  {active === item.href && (
                      <motion.span layoutId="sideline" className="absolute -left-1 w-0.5 h-full bg-foreground rounded-full" />
                  )}
                  <a className='ml-1' href={'#' + item.href}>{item.label}</a>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
    )
}

export default NavBarSheet