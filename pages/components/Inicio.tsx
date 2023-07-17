// @flow
import Image from "next/image";
import * as React from "react";

import image01 from "../assets/IMAGE 01.png";

export const Inicio = () => {
  return (
    <div id="parte1" className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-10">
        <div
          id="titulo"
          className="flex flex-wrap justify-center text-center md:mt-10"
        >
          <h1 className=" text-2xl md:text-4xl font-bold">
            Curso{" "}
            <span className="text-[#F6D21B]">
              15 Técnicas de Extensão de Cílios + Marketing Digital
            </span>{" "}
            para Iniciantes
          </h1>

          <h2 className="text-xl md:text-3xl font-bold text-black w-[450px] my-10 md:my-0">
            Aprenda todas as Técnicas de Extensão de Cílios e ganhe até{" "}
            <span className="text-[#F6D21B]"> R$ 10.000 por Mês</span>
          </h2>

          <h3 className="text-2xl w-[600px] mb-10 md:mb-0">
            MAIS DE{" "}
            <span className="text-[#F6D21B] font-bold">5000 ALUNAS</span> JÁ
            ADQUIRIRAM O CURSO E É SÓ O COMEÇO
          </h3>
        </div>

        <div>
          <Image src={image01} alt="curso" />
        </div>
      </div>

      <div className="flex justify-center p-5 md:p-10">
        <div className="p-5 text-xl md:text-4xl text-center font-bold text-white bg-green-500 shadow shadow-green-500 rounded-xl w-[800px] -mt-20">
          SIM QUERO COMPRAR COM DESCONTO
        </div>
      </div>
    </div>
  );
};
