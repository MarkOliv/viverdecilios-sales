// @flow
import * as React from "react";
import Image from "next/image";

import dep01 from "../assets/dep01.png";
import dep02 from "../assets/dep02.png";
import dep03 from "../assets/dep03.png";
import dep04 from "../assets/dep04.png";
import dep05 from "../assets/dep05.png";
import dep06 from "../assets/dep06.png";
import dep07 from "../assets/dep07.png";
import dep08 from "../assets/dep08.png";
import dep09 from "../assets/dep09.png";

import trab01 from "../assets/trab01.png";
import trab02 from "../assets/trab02.png";
import trab03 from "../assets/trab03.png";
import trab04 from "../assets/trab04.png";
import trab05 from "../assets/trab05.png";
import trab06 from "../assets/trab06.png";
import trab07 from "../assets/trab07.png";
import trab08 from "../assets/trab08.png";
import trab09 from "../assets/trab09.png";
import trab10 from "../assets/trab10.png";
import trab11 from "../assets/trab11.png";
import trab12 from "../assets/trab12.png";

type Props = {};
const ProvasSociais = (props: Props) => {
  return (
    <div id="parte4" className="container mx-auto">
      <h1 className="text-5xl font-bold text-white text-center p-10">
        Confira alguns depoimentos de quem já fez o Curso:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex justify-center items-center">
          <Image src={dep01} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={dep02} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={dep03} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={dep04} alt="depoimento" />
        </div>

        <div className="flex justify-center items-center">
          <Image src={dep07} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={dep08} alt="depoimento" />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-white text-center p-10 mt-10">
        Veja também alguns dos trabalhos das nossas alunas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="flex justify-center items-center">
          <Image src={trab01} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab02} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab03} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab04} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab05} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab06} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab07} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab08} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab09} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab10} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab11} alt="depoimento" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={trab12} alt="depoimento" />
        </div>
      </div>
      <div className="flex justify-center p-5 md:p-10">
        <div className="p-5 text-xl md:text-4xl text-center font-bold text-white bg-green-600 shadow shadow-green-500 rounded-xl w-[800px] ">
          SIM QUERO COMPRAR COM DESCONTO
        </div>
      </div>
    </div>
  );
};
export default ProvasSociais;
