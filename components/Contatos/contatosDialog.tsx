"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { BsWhatsapp, BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

interface Props {
    children: React.ReactNode
}

const DialogContatos = ({ children }: Props) => {
    return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>
                Vamos conversar!
              </DialogTitle>
            </DialogHeader>
            <Button asChild variant={"outline"}>
              <a href="mailto:joaovitor7souzaconceicao@gmail.com" target="_blank" rel="noopener noreferrer">
                <BsEnvelope /> Email
              </a>
            </Button>
            <Button asChild variant={"outline"}>
              <a href="https://github.com/JoaoVitor197843" target="_blank" rel="noopener noreferrer">
              <BsGithub /> Github</a>
            </Button>
            <Button asChild variant={"outline"}>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-concei%C3%A7%C3%A3o-de-souza-724a6b387/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin/> LinkedIn</a>
            </Button>
            <Button asChild variant={"outline"}>
              <a href="https://wa.me/5571996853119" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp /> WhatsApp</a>
            </Button>
          </DialogContent>
    </Dialog>
    )
}

export default DialogContatos