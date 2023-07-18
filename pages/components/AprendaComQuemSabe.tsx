// @flow
import * as React from "react";

import IMAGE02 from "../assets/IMAGE02.png";
import Image from "next/image";

type Props = {};

const AprendaComQuemSabe = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 p-20">
        <div className="flex justify-end p-10">
          <Image src={IMAGE02} alt="" />
        </div>
        <div className="p-10 col-span-2">
          <h1 className="text-5xl font-bold text-black text-left">
            Aprenda com Quem Sabe...
          </h1>
          <div className="w-full h-1 bg-red-500 my-5" />
          <h2 className="text-black text-3xl font-semibold text-left">
            Larissa Costa
          </h2>
          <p className="text-black text-xl my-10 text-left">
            Esteta, Lash Designer, Escritora, Palestrante e Influenciadora,
            Larissa Costa é atualmente uma das maiores autoridades do Nicho de
            Beleza na internet do Brasil. <br /> <br />
            São anos de experiência e mais de 1000 clientes atendidas. <br />{" "}
            <br />
            CEO e Founder do Escola para Esteticistas, empresa líder em educação
            a distância para empresárias com foco no mercado da beleza. <br />{" "}
            <br />
            Já ajudou mais de 5.000 alunas a darem os primeiros passos na área
            da beleza, estética e extensão de cílios. <br /> <br />
            Tem mais de 6 MILHÕES de visualizações e canal de beleza que mais
            cresce no Brasil no momento. <br /> <br />
          </p>
        </div>
      </div>
    </div>
  );
};
export default AprendaComQuemSabe;
