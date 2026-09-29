export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Fotografias temporárias de arquivo. Não são obras da Flexiparabola.
 * Para as substituir por fotografias reais: trocar o ficheiro em public/images
 * mantendo o nome, ou atualizar src, alt, width e height neste mapa.
 *
 * Origem atual, para arquivo interno:
 * - quadroEletrico: Unsplash / Eric Stoynov
 * - quadroCablagem: Pexels
 * - instalacaoIndustrial: Unsplash
 * - naveIndustrial: Pexels
 */
export const images = {
  quadroEletrico: {
    src: "/images/quadro-eletrico.jpg",
    alt: "Quadro de comando industrial com instrumentos de medida, botoneira e bloqueio de segurança",
    width: 1066,
    height: 1600,
  },
  quadroCablagem: {
    src: "/images/quadro-cablagem.jpg",
    alt: "Quadro elétrico aberto, com disjuntores e cablagem de várias secções",
    width: 1600,
    height: 1065,
  },
  instalacaoIndustrial: {
    src: "/images/instalacao-industrial.jpg",
    alt: "Instalação industrial com motores, tubagem e equipamento de processo",
    width: 1600,
    height: 1067,
  },
  naveIndustrial: {
    src: "/images/nave-industrial.jpg",
    alt: "Nave industrial com estrutura metálica, pontes rolantes e infraestrutura técnica",
    width: 1600,
    height: 1090,
  },
} as const satisfies Record<string, SiteImage>;
