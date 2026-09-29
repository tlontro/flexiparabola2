import { images } from "@/content/images";

export const about = {
  metaTitle: "Sobre a Flexiparabola II",
  metaDescription:
    "A Flexiparabola II – Industrial Services é uma empresa portuguesa, em Tondela, dedicada a serviços técnicos para a indústria.",
  title: "Uma empresa técnica, próxima da instalação",
  lead: "A Flexiparabola II – Industrial Services é uma empresa portuguesa dedicada à prestação de serviços técnicos à indústria.",
  image: images.naveIndustrial,
  paragraphs: [
    "A nossa abordagem combina conhecimento técnico, experiência prática e proximidade com o cliente.",
    "Cada instalação industrial possui características próprias. Por isso, procuramos compreender primeiro o problema antes de definir a solução.",
    "A atividade oficial é a prestação de serviços à indústria, o comércio de equipamentos e a montagem de instalações. O CAE principal é 71120 — atividades de engenharia e técnicas afins.",
    "A empresa está em Tondela. Os serviços estendem-se a todo o Portugal continental e ilhas, e ao mercado europeu: Espanha, Reino Unido, Alemanha e França. O acompanhamento faz-se diretamente com quem tem a instalação, a manutenção ou o projeto do lado do cliente.",
  ],
  factsTitle: "Dados confirmados",
  experience: {
    title: "Experiência aplicada ao contexto",
    text: "Serviços realizados em indústrias como a embalagem flexível, a cerâmica e outros contextos industriais, incluindo instalações elétricas e automação.",
    href: "/projetos",
    label: "Ver as indústrias",
  },
};

export const experience = {
  metaTitle: "Experiência",
  metaDescription:
    "Serviços realizados em indústrias como a embalagem flexível, a cerâmica e instalações elétricas industriais, incluindo média tensão e automação.",
  title: "Experiência em contexto industrial",
  lead: "Serviços realizados em indústrias como a embalagem flexível, a cerâmica e outros contextos industriais, com trabalho técnico em instalações elétricas, média tensão e automação.",
  scope: {
    title: "Instalações elétricas e automação",
    text: "Desde 2005, em Portugal, o trabalho na Flexiparabola inclui projeto e acompanhamento nestas áreas:",
    items: [
      "Instalações elétricas industriais",
      "Força motriz",
      "Postos de transformação",
      "Linhas de média tensão",
      "Instalações subterrâneas de média tensão",
      "Automação industrial",
      "Autómatos programáveis (PLC)",
    ],
  },
  industriesTitle: "Indústrias",
  industriesLead:
    "Serviços realizados em indústrias e organizações como as seguintes. A atuação cobre todo o Portugal continental e ilhas, e o mercado europeu: Espanha, Reino Unido, Alemanha e França.",
  industries: [
    { name: "Multisac", detail: "Embalagem flexível", logo: "/images/logos/multisac.png" },
    { name: "Uralita/Lusoceram", detail: "Cerâmica, Lisboa", logo: "/images/logos/uralita.gif" },
    { name: "SONAE Indústria — Agloma/Casca", detail: "Portugal", logo: "/images/logos/sonae-industria.svg" },
    { name: "MOVECHO", detail: "Portugal", logo: "/images/logos/movecho.svg" },
    { name: "Laminar Group", detail: "Grupo SONAE, Porto", logo: "/images/logos/laminar.jpg" },
    { name: "Inversistor", detail: "Consultoria empresarial, Porto", logo: null },
  ],
  contexts: [
    {
      title: "Instalação de equipamento",
      text: "Quando uma operação precisa de colocar um equipamento a trabalhar dentro de uma instalação que já existe.",
    },
    {
      title: "Alteração ou ampliação",
      text: "Quando a infraestrutura tem de mudar para acompanhar a produção, um novo layout ou uma limitação técnica.",
    },
    {
      title: "Infraestrutura elétrica",
      text: "Quando o problema ou o projeto passa por distribuição, quadros, alimentação ou uma alteração elétrica.",
    },
    {
      title: "Intervenção e melhoria",
      text: "Quando algo deixou de funcionar como a operação precisa e é necessário diagnosticar antes de intervir.",
    },
  ],
};
