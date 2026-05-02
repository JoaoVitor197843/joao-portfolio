"use client"

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";


interface items {
    href: string;
    label: string;
}
interface props {
    items: items[]
}
const NavBarMenu = ( { items }: props) =>  {
    const [active, setActive] = useState<string>(items[0].href);
    return (
    <div className="hidden md:flex items-center justify-center gap-8 text-muted-foreground">
        {items.map((item) => (
          <div key={item.href} className="relative" onClick={() => setActive(item.href)}>
            <Button asChild variant={'ghost'}>
              <a href={item.href}>{item.label}</a>
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