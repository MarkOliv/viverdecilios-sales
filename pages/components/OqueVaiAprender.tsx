// @flow
import Image from "next/image";
import * as React from "react";

import video1 from "../assets/1video.png";
import video2 from "../assets/2video.png";
import video3 from "../assets/3video.png";
import video4 from "../assets/4video.png";
import check from "../assets/check.png";

const OqueVaiAprender = () => {
  const grade1: Array<string> = [
    "Apresentação e Boas Vindas",
    "Conhecendo os Materiais de Trabalho",
    "Doenças Oculares",
    "Umidade x Temperatura",
    "Tipos de Fios",
    "Como fazer a Loção Higienizante",
    "Como montar os Fans",
    "Como fazer o Mapping",
    "Técnica: Volume Russo",
    "Técnica: Volume Indiano",
    "Técnica para Cílios em 40 minutos",
    "Técnica Volume Color",
    "Cuidados após Procedimento",
    "Remoção dos Cílios (Mecânica)",
    "Suporte Via WhatsApp",
    "O que é e Como preencher a Ficha Anamnese",
    "Tudo sobre as Colas de Extensão de Cílios",
    "Fatores que podem prejudicar os Fios Naturais",
    "Como Manusear as Pinças",
    "Treinamento de Precisão",
    "Como Treinar na Boneca",
    "Como fazer a Higienização antes do procedimento",
    "Técnica: Volume Híbrido",
    "Técnica: Volume Egípcio",
    "Técnica Efeito Molhado",
    "Técnica Kim Kardashian",
    "Manutenção dos Cílios",
    "Precificação",
    "Apostila em PDF",
    "Biossegurança",
    "Como usar o Higrômetro e saber qual a cola perfeita para você",
    "Tamanhos e Curvaturas",
    "Como molhar o Fio na Cola",
    "Treinamento  na Linha",
    "Como Isolar os fios inferiores da Cliente",
    "Técnica: Fio a Fio",
    "Técnica: Volume Brasileiro",
    "Técnica: Mega Volume",
    "Técnica Cílios em Camadas",
    "Remoção dos Cílios (Química)",
  ];

  const grade2: Array<string> = [
    "Como ter um Perfil atrativo no Instagram    ",
    "Como tirar as melhores Fotos    ",
    "Como fidelizar as Clientes    ",
    "Como ganhar seguidores do Jeito Certo    ",
    "Quais Apps e Editor usar    ",
    "Como gerenciar seus Ganhos    ",
    "Como transformar seguidores em Clientes    ",
    "Como conseguir clientes todo dia    ",
    "Como conseguir clientes todo dia    ",
  ];
  return (
    <div id="parte3" className="container mx-auto">
      <div className="p-5 md:p-20">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold mb-10">
          Eu vou te ensinar tudo que você precisa para ser uma profissional
          gabaritada!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:hidden block md:my-10">
            <Image src={video1} alt="print video" />
          </div>
          <div className="my-10">
            <h1 className="text-3xl font-bold text-[#ED1566]">
              Você vai aprender toda a parte teórica:
            </h1>
            <p className="text-xl mt-14 font-light">
              Antes de colocar a mão na "massa" é necessário saber como tudo
              funciona, então começamos pelas aulas teóricas para entender todo
              o procedimento e tudo que envolve as Extensões de Cílios.
            </p>
          </div>
          <div className="md:block hidden my-10">
            <Image src={video1} alt="print video" />
          </div>
          <div className="md:my-10">
            <Image src={video2} alt="print video" />
          </div>
          <div className="my-10">
            <h1 className="text-3xl font-bold text-[#ED1566]">
              Você vai aprender toda a parte de treinamento:
            </h1>
            <p className="text-xl mt-14 font-light">
              Aqui é onde vamos iniciar os trabalhos, nessa etapa vamos começar
              os treinos antes de partir para a modelo/cliente, você vai
              aprender desde como segurar a pinça até a parte de acoplar (colar)
              um fio do jeito certo.
            </p>
          </div>
          <div className="block md:hidden md:my-10">
            <Image src={video3} alt="print video" />
          </div>
          <div className="my-10">
            <h1 className="text-3xl font-bold text-[#ED1566]">
              Você vai aprender toda a parte de prática:
            </h1>
            <p className="text-xl mt-14 font-light">
              A etapa tão esperada de como fazer o procedimento na
              modelo/cliente. Aqui você vai aprender o procedimento completo com
              videoaulas gravadas em alta definição e bem de pertinho para você
              ver todos os detalhes e colocar em prática a suas extensões.
            </p>
          </div>
          <div className="hidden md:block my-10">
            <Image src={video3} alt="print video" />
          </div>
          <div className="my-10">
            <Image src={video4} alt="print video" />
          </div>
          <div className="my-10">
            <h1 className="text-3xl font-bold text-[#ED1566]">
              BÔNUS: Material de Apoio Personalizado
            </h1>
            <p className="text-xl mt-14 font-light">
              Para um suporte melhor ao aprendizado você ainda tem uma apostila
              completa, com referencias internacionais, que contém fichas de
              treino e fichas bonus para atendimento. Tudo incluso ao curso.
            </p>
          </div>
        </div>

        <h1 className="text-center text-white text-3xl md:text-5xl font-bold mb-10">
          GRADE1 COMPLETA DO CURSO
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {grade1.map((item, index) => (
            <div
              className="flex items-center text-md md:text-xl font-bold m-5 md:m-10"
              key={index}
            >
              <Image
                className="w-7 md:w-14 mr-5"
                src={check}
                alt="check emoji"
              />{" "}
              {item}
            </div>
          ))}
        </div>

        <h1 className="text-center text-[#ED1566] text-3xl md:text-5xl font-bold mb-10">
          Aulas Bônus de Marketing Digital
        </h1>
        <h2 className="text-center text-white text-2xl md:text-4xl font-semibold mb-10">
          ALÉM DA TÉCNICA É NECESSÁRIO APRENDER SOBRE VENDAS E MARKETING PARA
          IMPULSIONAR SEU PERFIL E TER MAIS CLIENTES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {grade2.map((item, index) => (
            <div
              className="flex items-center text-md md:text-xl font-bold m-5 md:m-10"
              key={index}
            >
              <Image
                className="w-7 md:w-14 mr-5"
                src={check}
                alt="check emoji"
              />{" "}
              {item}
            </div>
          ))}
        </div>
        <h2 className="text-center text-white text-xl md:text-3xl font-semibold mb-10">
          Muitas meninas compram cursos técnicos, mas se esquecem que é{" "}
          <span className="text-[#ED1566]">
            necessário saber estratégias de Vendas e Marketing{" "}
          </span>
          para conseguir dar certo na profissão. Logo acabam desistindo da
          carreira após não conseguirem nenhuma cliente.
        </h2>
        <h2 className="text-center text-white text-xl md:text-3xl font-semibold mb-10">
          Nesse combo você leva os dois cursos e terá muito mais chances de ter
          uma carreira de <span className="text-green-500">sucesso</span> e{" "}
          <span className="text-green-500">ganhar muito dinheiro!</span>
        </h2>

        <div className="flex justify-center p-5 md:p-10">
          <a
            href="https://go.hotmart.com/D84890007K?ap=f4a1"
            target="_blank"
            className="p-5 text-xl md:text-4xl text-center font-bold text-white bg-green-600 shadow shadow-green-500 rounded-xl w-[800px] "
          >
            SIM QUERO COMPRAR COM DESCONTO
          </a>
        </div>
      </div>
    </div>
  );
};

export default OqueVaiAprender;
