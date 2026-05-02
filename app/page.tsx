import NavBar from "@/components/navbar/navbar";
import Hero from "@/components/Hero/hero";
const items = [
  {href: '#sobre-mim', label: 'Sobre Mim'},
  {href: '#projetos', label: 'Projetos'},
  {href: '#servicos', label: 'Serviços'},
]
export default function Home() {
  return (
    <>
      <NavBar items={items}/>
      <Hero />
    </>
  );
}
