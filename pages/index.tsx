import Head from "next/head";
import { Inicio } from "./components/Inicio";
import ParaQuem from "./components/ParaQuem";
import OqueVaiAprender from "./components/OqueVaiAprender";
import ProvasSociais from "./components/ProvasSociais";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="author" content="Marcos Oliveira" />
        <meta name="description" content="Treinamento Viver de Cilios" />
        <title>Treinamento Viver de Cilios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-black text-xl md:text-3xl font-bold text-center p-5">
        PROMOÇÃO 50% DE DESCONTO DE{" "}
        <del className="text-red-500">R$ 599,00</del> POR APENAS{" "}
        <span className="text-green-500"> R$ 297,00</span>
      </div>

      <div className="bg-[#ED1566]">
        <Inicio />
      </div>
      <ParaQuem />
      <div className="bg-[#252525]">
        <OqueVaiAprender />
      </div>
      <div className="bg-[#ED1566]">
        <ProvasSociais />
      </div>
    </div>
  );
}
