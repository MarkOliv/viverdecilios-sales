// @flow
import * as React from "react";
type Props = {};
const RecupereODinheiro = (props: Props) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-black text-center p-10 mt-10">
        RECUPERE O <span className="text-[#3DE036]">DINHEIRO</span> DE VOLTA JÁ
        NAS SUAS PRIMEIRAS CLIENTES
      </h1>

      <p className="text-light text-md my-5 md:text-xl text-black text-center">
        Assim que comprar o Curso e se formar, já nas suas primeiras clientes
        você já recupera o valor investido no Curso. A técnica mais barata,
        Acoplagem + Manutenção, já vão te retornar o valor investido no Curso,
        ou seja, você só tem a ganhar adquirindo nosso Curso e colocando os
        ensinamentos em prática.
      </p>

      <p className="text-light text-md my-5 md:text-xl text-black text-center">
        100% das meninas que colocam os ensinamentos do Curso em prática
        recuperam o investimento nos primeiros dias após receber o certificado.
      </p>

      <div className="flex justify-center p-5 md:p-10">
        <div className="p-5 text-xl md:text-4xl text-center font-bold text-white bg-green-600 shadow shadow-green-500 rounded-xl w-[800px] ">
          SIM QUERO COMPRAR COM DESCONTO
        </div>
      </div>
    </div>
  );
};

export default RecupereODinheiro;
