// @flow
import Image from "next/image";
import * as React from "react";

import garantia7 from "../assets/7dias.png";
import comprasegura from "../assets/comprasegura.png";
import acessoimediado from "../assets/acessoimediado.png";

type Props = {};
const Garantias = (props: Props) => {
  return (
    <div id="parte6" className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-wrap justify-center items-center p-10">
          <div className="flex justify-center w-full">
            <Image src={garantia7} alt="wpp" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-5 text-center">
            7 DIAS DE GARANTIA
          </h1>
          <p className="text-xl font-semibold text-center">
            Satisfação garantida ou o seu dinheiro de volta, sem te questionar
            nada.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center p-10">
          <div className="flex justify-center w-full">
            <Image src={comprasegura} alt="wpp" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-5 text-center">
            COMPRA SEGURA
          </h1>
          <p className="text-xl font-semibold text-center">
            Seus dados estão 100% protegidos e sua compra é 100% segura.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center p-10">
          <div className="flex justify-center w-full">
            <Image src={acessoimediado} alt="wpp" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-5 text-center">
            ACESSO IMEDIATO
          </h1>
          <p className="text-xl font-semibold text-center">
            Acesso liberado imediatamente após a confirmação da sua inscrição
            você recebe os dados de acesso em seu e-mail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garantias;
