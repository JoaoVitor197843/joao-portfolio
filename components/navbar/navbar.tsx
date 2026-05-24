import { Button } from "../ui/button";
import NavBarMenu from "./navbarMenu";
import NavBarSheet from "./navbarMobileSheet";
import DialogContatos from "../Contatos/contatosDialog";

interface items {
    href: string;
    label: string;
}
interface props {
    items: items[]
}

const NavBar = ( { items }: props) => {
    return (
    <nav className="grid grid-cols-1 md:grid-cols-3 bg-secondary/80 backdrop-blur border-b border-border px-8 h-16 fixed w-dvw">
      <div className="flex items-center gap-10 justify-between md:justify-start">
        <NavBarSheet items={items}/>
        <div className="flex items-center text-xl w-[8ch]">
          <p className="font-mono font-semibold tracking-tight typing">Joao.dev</p>
        </div>
      </div>
      <NavBarMenu items={items}/>
      <div className="hidden md:flex items-center justify-end">
        <DialogContatos>
          <Button  size={'sm'} className="hover:border-border">
            Contatos
          </Button>
        </DialogContatos>
      </div>
    </nav>
    )
}

export default NavBar