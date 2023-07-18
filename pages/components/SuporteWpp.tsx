// @flow
import Image from "next/image";
import * as React from "react";

import wpp from "../assets/wpp.png";
type Props = {};
const SuporteWpp = (props: Props) => {
  return (
    <div id="parte6" className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center md:justify-end items-center p-10">
          <Image src={wpp} alt="wpp" />
        </div>
        <div className="flex items-center p-10">
          <div>
            <h1 className="text-[#3DE036] text-5xl font-bold mb-5">
              SUPORTE VIP
            </h1>
            <p className="text-xl font-semibold">
              Durante o aprendizado é normal surgir algumas dúvidas e por isso
              disponibilizo o meu WhatsApp e Instagram para você me chamar
              sempre que surgir qualquer dúvida. Além disso temos uma comunidade
              com todas as Alunas no Facebook, onde compartilhamos os
              resultados, trabalhos, dicas, dúvidas.
            </p>
            <p className="text-xl font-semibold">
              Uma coisa eu te garanto, do meu curso você não vai sair dele com
              dúvidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuporteWpp;
