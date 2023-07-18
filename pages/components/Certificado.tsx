// @flow
import Image from "next/image";
import * as React from "react";

import certificado from "../assets/certificado.png";
type Props = {};
const Certificado = (props: Props) => {
  return (
    <div id="parte5" className="container mx-auto">
      <h1 className="text-5xl font-bold text-black text-center p-10 mt-10">
        CERTIFICADO
      </h1>
      <h1 className="text-3xl md:text-5xl font-light text-black text-center p-10 italic ">
        GARANTA SUA CERTIFICAÇÃO ASSIM QUE <br className="hidden md:block" />{" "}
        CONCLUIR O CURSO
      </h1>

      <div className="w-full flex justify-center p-5">
        <Image src={certificado} alt="certificado" />
      </div>

      <p className="text-xl text-black font-light text-center mt-10">
        Essa vai ser a lembrança e o prêmio por concluir essa fase e iniciar sua
        jornada de sucesso na profissão. <br className="hidden md:block" /> Você
        poderá gerar seu certificado após concluir o curso, mas já vá pensando
        em qual parede você vai expor <br className="hidden md:block" /> esse
        troféu.
      </p>

      <div className="flex justify-center p-5 md:p-10">
        <div className="p-5 text-xl md:text-4xl text-center font-bold text-white bg-green-600 shadow shadow-green-500 rounded-xl w-[800px] ">
          SIM QUERO COMPRAR COM DESCONTO
        </div>
      </div>
    </div>
  );
};
export default Certificado;
