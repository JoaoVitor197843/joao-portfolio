"use client"

import useScrollObserver from "@/hooks/ScrollObserver";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState, useRef } from "react";


interface items {
    href: string;
    label: string;
}
interface props {
    items: items[]
}
const NavBarMenu = ( { items }: props) =>  {
    const [active, setActive] = useState<string>(items[0].href);
    const isScrolling = useRef<boolean>(false);
    const onScrollEnd = () => {
      isScrolling.current = false
    }
    const handleNavClick = (href: string) => {
      isScrolling.current = true;
      setActive(href);
      window.removeEventListener('scrollend', onScrollEnd)
      window.addEventListener('scrollend', onScrollEnd, {once: true})
    }
    useScrollObserver(setActive, isScrolling);
    return (
    <div className="hidden md:flex items-center justify-center gap-8 text-muted-foreground">
        {items.map((item) => (
          <div key={item.href} className="relative" onClick={() => handleNavClick(item.href)}>
            <Button asChild variant={'ghost'}>
              <a href={'#' + item.href}>{item.label}</a>
            </Button>
            {active === item.href && (
                <motion.span layoutId="underline" className="absolute left-0 -bottom-1 h-0.5 w-full bg-foreground rounded-full" />
              )}
          </div>
        ))}
      </div>
      )
}

export default NavBarMenu