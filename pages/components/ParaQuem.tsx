// @flow
import * as React from "react";
import arrowcircle from "../assets/arrow-circle.png";
import Image from "next/image";

type Props = {};

const ParaQuem = (props: Props) => {
  return (
    <div id="parte2" className="container mx-auto">
      <div className="md:p-20 p-5">
        <h1 className="text-center text-black text-5xl font-bold mb-10">
          PARA QUEM É
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex text-black items-center my-7">
            <Image className="w-20 " src={arrowcircle} alt="arrow" />

            <p className="text-2xl w-[500px] ml-5">
              É <strong> iniciante</strong> e nunca teve contato com a
              profissão. No curso ensino tudo do{" "}
              <strong>básico ao avançado.</strong>
            </p>
          </div>

          <div className="flex text-black items-center my-7">
            <Image className="w-20 " src={arrowcircle} alt="arrow" />
            <p className="text-2xl w-[500px] ml-5">
              Deseja se livrar de patrão e{" "}
              <strong>trabalhar por conta própria</strong> para ter sua{" "}
              <strong>independência financeira</strong> e fazer seus horários.
            </p>
          </div>
          <div className="flex text-black items-center my-7">
            <Image className="w-20 " src={arrowcircle} alt="arrow" />
            <p className="text-2xl w-[500px] ml-5">
              Já trabalha ou fez curso na área e não está tendo resultado. Nesse
              curso ensino{" "}
              <strong>técnicas de vendas e marketing digital</strong> para você
              conseguir mais cdiventes.
            </p>
          </div>
          <div className="flex text-black items-center my-7">
            <Image className="w-20" src={arrowcircle} alt="arrow" />
            <p className="text-2xl w-[500px] ml-5">
              Deseja fazer um trabalho{" "}
              <strong>mais rápido e mais bonito.</strong> No curso ensino
              técnicas para conseguir alcançar essas metas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaQuem;
