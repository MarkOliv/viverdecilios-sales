import Head from "next/head";
import Inicio from "./components/Inicio";
import ParaQuem from "./components/ParaQuem";
import OqueVaiAprender from "./components/OqueVaiAprender";
import ProvasSociais from "./components/ProvasSociais";
import Certificado from "./components/Certificado";
import SuporteWpp from "./components/SuporteWpp";
import RecupereODinheiro from "./components/RecupereODinheiro";
import Garantias from "./components/Garantias";
import AprendaComQuemSabe from "./components/AprendaComQuemSabe";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="author" content="Marcos Oliveira" />
        <meta name="description" content="Treinamento Viver de Cilios" />
        <title>Curso Extensão de Cílios Larissa Costa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-black text-xl md:text-3xl font-bold text-center p-5">
        PROMOÇÃO 50% DE DESCONTO DE{" "}
        <del className="text-red-500">R$ 599,00</del> POR APENAS{" "}
        <span className="text-green-500"> R$ 297,00</span>
      </div>

      <div className="bg-[#C65895]">
        <Inicio />
      </div>
      <ParaQuem />
      <div className="bg-[#252525]">
        <OqueVaiAprender />
      </div>
      <div className="bg-[#C65895]">
        <ProvasSociais />
      </div>
      <Certificado />

      <div className="bg-black">
        <SuporteWpp />
      </div>
      <RecupereODinheiro />
      <div className="bg-black">
        <Garantias />
      </div>
      <AprendaComQuemSabe />
      <div className="bg-[#C65895] p-10">
        <p className="text-center font-semibold">
          Esse produto é comercializado com apoio da Hotmart. A plataforma não
          faz controle editorial prévio dos produtos comercializados, nem avalia
          a tecnicidade e experiência daqueles que os produzem. A existência de
          um produto e sua aquisição, por meio da plataforma, não podem ser
          consideradas como garantia de qualidade de conteúdo e resultado, em
          qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente
          dessas informações. Os termos e políticas da Hotmart podem ser
          acessados aqui, antes mesmo da conclusão da compra.
        </p>

        <p className="text-center mt-10 font-semibold">
          <br /> © Copyright – Escola para Esteticistas – Todos os direitos
          reservados <br /> CNPJ: 38.054.473/0001-44
        </p>
      </div>
    </div>
  );
}
