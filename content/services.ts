import { images, type SiteImage } from "@/content/images";
import { contactHref } from "@/content/site";

export type Offering = {
  title: string;
  text: string;
};

export type ServiceContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: SiteImage;
  imagePosition?: string;
  intro: string[];
  offeringsTitle: string;
  offerings: Offering[];
  note?: string;
  action: { label: string; href: string };
  related: { href: string; title: string; text: string }[];
  cta: { title: string; text: string; label: string; href: string };
};

export const serviceIndex = [
  {
    id: "engenharia-industrial",
    name: "Engenharia industrial",
    path: "/engenharia-industrial",
    description:
      "Apoio técnico no desenvolvimento, adaptação e melhoria de instalações industriais.",
  },
  {
    id: "engenharia-eletrica",
    name: "Engenharia elétrica",
    path: "/engenharia-eletrica",
    description:
      "Soluções elétricas para ambientes industriais, da análise da instalação à implementação.",
  },
  {
    id: "instalacoes",
    name: "Instalação e montagem",
    path: "/instalacoes",
    description:
      "Montagem e integração de equipamentos e instalações, até à entrada em funcionamento.",
  },
  {
    id: "manutencao",
    name: "Manutenção industrial",
    path: "/manutencao",
    description:
      "Diagnóstico, intervenção e apoio técnico para manter os sistemas operacionais.",
  },
  {
    id: "equipamentos",
    name: "Equipamentos",
    path: "/equipamentos",
    description:
      "Fornecimento e integração de equipamentos adequados a cada instalação.",
  },
] as const;

export const services = {
  industrial: {
    path: "/engenharia-industrial",
    metaTitle: "Engenharia industrial",
    metaDescription:
      "Apoio técnico no desenvolvimento, adaptação e melhoria de instalações industriais, com acompanhamento próximo da operação.",
    eyebrow: "Engenharia industrial",
    title: "Apoio técnico à instalação real",
    lead: "Apoio técnico no desenvolvimento, adaptação e melhoria de instalações industriais, procurando soluções adequadas às necessidades reais de cada operação.",
    image: images.naveIndustrial,
    intro: [
      "Uma instalação industrial raramente cabe num desenho fechado. Há condicionantes de espaço, de produção, de acesso e de equipamentos que só se percebem no local.",
      "O trabalho de engenharia industrial da Flexiparabola II é de análise, acompanhamento e adaptação. O objetivo é encontrar uma solução que a operação consiga executar e manter.",
    ],
    offeringsTitle: "O que este acompanhamento pode incluir",
    offerings: [
      {
        title: "Análise técnica",
        text: "Leitura das condições da instalação e do problema ou objetivo descrito pelo cliente.",
      },
      {
        title: "Acompanhamento de projetos",
        text: "Presença técnica ao longo do trabalho, para o projeto se manter alinhado com a operação.",
      },
      {
        title: "Integração de equipamentos",
        text: "Encaixe de equipamentos novos ou já existentes no contexto real da instalação.",
      },
      {
        title: "Alterações de instalações",
        text: "Adaptação da infraestrutura quando a operação muda, cresce ou precisa de ser corrigida.",
      },
      {
        title: "Apoio à implementação",
        text: "Acompanhamento da passagem da solução definida para a obra.",
      },
      {
        title: "Melhorias em infraestrutura",
        text: "Ajustes práticos para a instalação funcionar melhor nas condições em que opera.",
      },
    ],
    note: "O âmbito é definido depois de compreender a instalação. Não descrevemos aqui especialidades de engenharia mecânica pesada que não estejam confirmadas.",
    action: {
      label: "Apresentar um projeto",
      href: contactHref("Apoio de engenharia industrial"),
    },
    related: [
      {
        href: "/engenharia-eletrica",
        title: "Engenharia elétrica",
        text: "Quando a alteração da instalação depende da infraestrutura elétrica.",
      },
      {
        href: "/instalacoes",
        title: "Instalações e montagem",
        text: "Quando a solução tem de passar à montagem e à integração.",
      },
    ],
    cta: {
      title: "Tem um projeto para encaixar numa instalação existente?",
      text: "Descreva o objetivo e as condicionantes que já conhece. A análise começa por aí.",
      label: "Pedir análise",
      href: contactHref("Pedido de análise de engenharia industrial"),
    },
  },
  eletrica: {
    path: "/engenharia-eletrica",
    metaTitle: "Engenharia elétrica industrial",
    metaDescription:
      "Soluções elétricas para ambientes industriais: distribuição, quadros, alimentação de equipamentos e alterações de infraestrutura.",
    eyebrow: "Engenharia elétrica",
    title: "Infraestrutura elétrica ao serviço da operação",
    lead: "Desenvolvimento e acompanhamento de soluções elétricas para ambientes industriais, desde a análise da instalação até à implementação.",
    image: images.quadroCablagem,
    intro: [
      "Numa fábrica, a parte elétrica não é um desenho isolado. Alimenta equipamentos, condiciona ampliações e aparece quase sempre que a instalação muda.",
      "A Flexiparabola II acompanha esse trabalho de forma direta: perceber o que existe, o que a operação precisa e como a alteração pode ser feita na instalação real.",
    ],
    offeringsTitle: "Âmbito elétrico",
    offerings: [
      {
        title: "Instalações elétricas industriais",
        text: "Infraestrutura elétrica ao serviço dos equipamentos e da continuidade da operação.",
      },
      {
        title: "Análise e adaptação de infraestrutura",
        text: "Avaliação do que já está instalado antes de alterar, ampliar ou criar novos pontos de alimentação.",
      },
      {
        title: "Distribuição elétrica",
        text: "Organização da distribuição em baixa tensão e, quando a instalação já o exige, articulação com a média tensão existente.",
      },
      {
        title: "Alimentação de equipamentos",
        text: "Preparação da alimentação de máquinas e de outros equipamentos a integrar.",
      },
      {
        title: "Quadros",
        text: "Acompanhamento de quadros e da sua adequação à instalação.",
      },
      {
        title: "Alterações e ampliações",
        text: "Modificações em instalações existentes, com o âmbito fechado depois de ver o local.",
      },
      {
        title: "Acompanhamento técnico",
        text: "Seguimento do trabalho elétrico desde a análise até à implementação.",
      },
    ],
    note: "Qualquer intervenção em média tensão, e o restante âmbito elétrico, define-se após análise da instalação. A empresa não substitui entidades inspetoras nem apresenta certificações que não estejam confirmadas.",
    action: {
      label: "Falar com um técnico",
      href: contactHref("Problema ou projeto elétrico"),
    },
    related: [
      {
        href: "/instalacoes",
        title: "Instalações e montagem",
        text: "Quando a solução elétrica faz parte de uma montagem mais ampla.",
      },
      {
        href: "/manutencao",
        title: "Manutenção e suporte",
        text: "Quando o ponto de partida é uma avaria, uma anomalia ou uma intervenção.",
      },
    ],
    cta: {
      title: "Há um problema elétrico ou uma ampliação para estudar?",
      text: "Indique a instalação, o equipamento e o que deixou de funcionar ou o que precisa de mudar.",
      label: "Pedir análise",
      href: contactHref("Pedido de análise elétrica"),
    },
  },
  instalacoes: {
    path: "/instalacoes",
    metaTitle: "Instalações e montagem industrial",
    metaDescription:
      "Montagem e integração de equipamentos e instalações industriais, da preparação à entrada em funcionamento.",
    eyebrow: "Instalações e montagem",
    title: "Da preparação à entrada em funcionamento",
    lead: "Montagem e integração de equipamentos e instalações industriais, acompanhando o processo desde a preparação até à entrada em funcionamento.",
    image: images.instalacaoIndustrial,
    intro: [
      "Montar numa instalação que já produz é diferente de montar num espaço vazio. Há acessos, paragens, ligações existentes e um funcionamento que não pode ser ignorado.",
      "A Flexiparabola II acompanha a montagem e a integração com essa leitura: preparar a infraestrutura, instalar e ficar presente até a colocação em funcionamento, no âmbito do trabalho contratado.",
    ],
    offeringsTitle: "O que a montagem pode incluir",
    offerings: [
      {
        title: "Montagem técnica",
        text: "Execução da montagem de instalações e dos elementos associados ao trabalho definido.",
      },
      {
        title: "Instalação de equipamentos",
        text: "Colocação de equipamentos no ponto da instalação onde vão operar.",
      },
      {
        title: "Integração em instalações existentes",
        text: "Ligação do que é novo ao que já está em funcionamento.",
      },
      {
        title: "Preparação de infraestrutura",
        text: "Adaptação prévia do espaço e das ligações necessárias à montagem.",
      },
      {
        title: "Alterações de infraestrutura",
        text: "Modificações exigidas pela nova instalação ou pelo equipamento a integrar.",
      },
      {
        title: "Colocação em funcionamento",
        text: "Acompanhamento da entrada em serviço, dentro do âmbito acordado.",
      },
    ],
    note: "O alcance da montagem é fechado com o cliente depois de ver a instalação. Não se apresenta aqui um modelo único de empreitada.",
    action: {
      label: "Falar com um técnico",
      href: contactHref("Montagem ou integração de instalação"),
    },
    related: [
      {
        href: "/engenharia-industrial",
        title: "Engenharia industrial",
        text: "Quando a montagem ainda precisa de uma leitura técnica da instalação.",
      },
      {
        href: "/equipamentos",
        title: "Equipamentos",
        text: "Quando falta definir o equipamento antes de o instalar.",
      },
    ],
    cta: {
      title: "Vai instalar ou alterar alguma coisa na fábrica?",
      text: "Descreva o equipamento, o espaço e o que tem de continuar a funcionar durante o trabalho.",
      label: "Apresentar a instalação",
      href: contactHref("Apresentar uma instalação para montagem"),
    },
  },
  manutencao: {
    path: "/manutencao",
    metaTitle: "Manutenção e suporte industrial",
    metaDescription:
      "Diagnóstico, intervenção e apoio técnico a instalações industriais, para identificar problemas e manter os sistemas operacionais.",
    eyebrow: "Manutenção e suporte",
    title: "Intervenção quando a instalação precisa",
    lead: "Acompanhamento técnico e intervenção em instalações industriais, ajudando a identificar problemas, realizar melhorias e manter os sistemas operacionais.",
    image: images.quadroEletrico,
    imagePosition: "object-[center_20%]",
    intro: [
      "Uma intervenção útil começa por perceber o sintoma no contexto da instalação, não por aplicar uma resposta genérica.",
      "A Flexiparabola II faz diagnóstico, intervenção e acompanhamento técnico. O modelo de manutenção — pontual ou continuado — define-se com o cliente, caso a caso.",
    ],
    offeringsTitle: "Formas de apoio",
    offerings: [
      {
        title: "Diagnóstico",
        text: "Identificação do problema a partir do que a instalação está a fazer.",
      },
      {
        title: "Manutenção técnica",
        text: "Intervenção para repor ou preservar o funcionamento dos sistemas acompanhados.",
      },
      {
        title: "Identificação de problemas",
        text: "Leitura de anomalias, desvios e pontos que estão a condicionar a operação.",
      },
      {
        title: "Intervenção",
        text: "Trabalho técnico no local, no âmbito acordado depois da análise.",
      },
      {
        title: "Melhorias",
        text: "Ajustes para reduzir uma limitação já conhecida da instalação.",
      },
      {
        title: "Alterações técnicas",
        text: "Modificações necessárias para a instalação continuar a servir a operação.",
      },
    ],
    note: "Não está publicado um plano de manutenção padrão nem um horário de permanência. A periodicidade e o tipo de acompanhamento confirmam-se diretamente.",
    action: {
      label: "Descrever a intervenção",
      href: contactHref("Pedido de manutenção ou intervenção"),
    },
    related: [
      {
        href: "/engenharia-eletrica",
        title: "Engenharia elétrica",
        text: "Quando o problema está na alimentação, no quadro ou na distribuição.",
      },
      {
        href: "/instalacoes",
        title: "Instalações e montagem",
        text: "Quando a correção implica alterar ou voltar a montar parte da instalação.",
      },
    ],
    cta: {
      title: "A instalação precisa de uma intervenção?",
      text: "Diga o que aconteceu, onde, e o que a produção não pode parar. Isso chega para começar a análise.",
      label: "Contactar",
      href: contactHref("Intervenção técnica"),
    },
  },
  equipamentos: {
    path: "/equipamentos",
    metaTitle: "Equipamentos industriais",
    metaDescription:
      "Fornecimento e integração de equipamentos adequados a cada instalação industrial. O ponto de partida é a necessidade, não um catálogo genérico.",
    eyebrow: "Equipamentos",
    title: "O equipamento certo para aquela instalação",
    lead: "Fornecimento e integração de equipamentos adequados às necessidades específicas de cada instalação.",
    image: images.instalacaoIndustrial,
    intro: [
      "O comércio de equipamentos faz parte da atividade da empresa. Não substitui a leitura da instalação: um equipamento só é útil se puder ser alimentado, montado e usado naquele contexto.",
      "Por isso não há aqui um catálogo fechado. O pedido começa pela necessidade — o que a instalação tem de fazer — e segue para a procura e a integração.",
    ],
    offeringsTitle: "Como o fornecimento é tratado",
    offerings: [
      {
        title: "Leitura da necessidade",
        text: "Perceber a função, as condicionantes e o ponto da instalação onde o equipamento vai trabalhar.",
      },
      {
        title: "Procura orientada",
        text: "Identificar equipamento compatível com o que a instalação exige, sem lista pública de marcas.",
      },
      {
        title: "Integração",
        text: "Ligar o fornecimento à montagem, à alimentação e ao que já existe no local.",
      },
      {
        title: "Apoio à colocação em funcionamento",
        text: "Acompanhar a entrada em serviço no âmbito do trabalho acordado.",
      },
    ],
    note: "Marcas, prazos e condições de fornecimento confirmam-se pedido a pedido. Não estão publicados parceiros nem um catálogo.",
    action: {
      label: "Pedir um equipamento",
      href: contactHref("Procura de equipamento específico"),
    },
    related: [
      {
        href: "/instalacoes",
        title: "Instalações e montagem",
        text: "Quando o equipamento tem de ser montado numa instalação existente.",
      },
      {
        href: "/engenharia-eletrica",
        title: "Engenharia elétrica",
        text: "Quando a escolha depende da alimentação e da infraestrutura elétrica.",
      },
    ],
    cta: {
      title: "Procura um equipamento específico?",
      text: "Descreva a função, a instalação e, se já existirem, as referências que está a considerar.",
      label: "Fale connosco",
      href: contactHref("Procura de equipamento específico"),
    },
  },
} satisfies Record<string, ServiceContent>;

export const serviceOverview = {
  metaTitle: "Serviços técnicos industriais",
  metaDescription:
    "Engenharia industrial, engenharia elétrica, instalação e montagem, manutenção e fornecimento de equipamentos. Flexiparabola II, Tondela.",
  title: "Serviços para instalações industriais",
  lead: "Cinco frentes de trabalho, tratadas de forma direta com quem tem a instalação à sua responsabilidade. Os serviços estendem-se a todo o Portugal continental e ilhas, e ao mercado europeu: Espanha, Reino Unido, Alemanha e França.",
  groups: [
    {
      id: "engenharia",
      title: "Engenharia",
      text: "As duas áreas de engenharia partem da mesma regra: perceber a instalação antes de fechar a solução.",
    },
    {
      id: "engenharia-industrial",
      ...mapOverview(services.industrial, [
        "Análise de necessidades",
        "Apoio técnico",
        "Integração de equipamentos",
        "Adaptação de instalações",
        "Acompanhamento técnico",
        "Melhorias em infraestrutura",
      ]),
    },
    {
      id: "engenharia-eletrica",
      ...mapOverview(services.eletrica, [
        "Instalações elétricas industriais",
        "Análise e adaptação de infraestrutura",
        "Distribuição elétrica",
        "Alimentação de equipamentos",
        "Alterações e ampliações",
        "Acompanhamento técnico",
      ]),
    },
    {
      id: "instalacoes",
      ...mapOverview(services.instalacoes, [
        "Montagem técnica",
        "Instalação de equipamentos",
        "Integração em instalações existentes",
        "Preparação de infraestrutura",
        "Acompanhamento de colocação em funcionamento",
      ]),
    },
    {
      id: "manutencao",
      ...mapOverview(services.manutencao, [
        "Diagnóstico",
        "Manutenção técnica",
        "Identificação de problemas",
        "Intervenção",
        "Melhorias",
        "Alterações técnicas",
      ]),
    },
    {
      id: "equipamentos",
      ...mapOverview(services.equipamentos, [
        "Fornecimento orientado à instalação",
        "Integração de equipamentos",
        "Apoio à colocação em funcionamento",
      ]),
    },
  ],
};

export const overviewParents = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
];

function mapOverview(
  service: ServiceContent,
  items: string[],
): {
  title: string;
  text: string;
  href: string;
  items: string[];
} {
  return {
    title: service.eyebrow,
    text: service.lead,
    href: service.path,
    items,
  };
}
