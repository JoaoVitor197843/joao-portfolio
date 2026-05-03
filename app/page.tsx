import NavBar from "@/components/navbar/navbar";
import Hero from "@/components/Hero/hero";
import SobreMim from "@/components/SobreMim/sobreMim";
import Projetos from "@/components/Projetos/Projetos";
const items = [
  {href: 'home', label: 'Home'},
  {href: 'sobre-mim', label: 'Sobre Mim'},
  {href: 'projetos', label: 'Projetos'},
  {href: 'servicos', label: 'Serviços'},
]
export default function Home() {
  return (
    <>
      <NavBar items={items}/>
      <Hero />
      <SobreMim />
      <Projetos />
    </>
  );
}
