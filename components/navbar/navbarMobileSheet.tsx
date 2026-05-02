"use client"

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "../ui/sheet";
import { Menu } from "lucide-react";

interface items {
    href: string;
    label: string;
}
interface props {
    items: items[]
}

const NavBarSheet = ( { items }: props) => {
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
                <a href={item.href} key={item.href}>{item.label}</a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
    )
}

export default NavBarSheet