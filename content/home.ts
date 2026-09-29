import { images } from "@/content/images";
import { contactHref } from "@/content/site";

export const home = {
  hero: {
    eyebrow: "Tondela, Portugal",
    title: "Engenharia e Serviços Técnicos para a Indústria",
    lead: "Apoiamos empresas industriais no desenvolvimento, instalação, manutenção e melhoria das suas infraestruturas e equipamentos.",
    primary: { label: "Falar connosco", href: "/contactos" },
    secondary: { label: "Conhecer os serviços", href: "/servicos" },
    image: images.quadroEletrico,
  },
  facts: [
    { label: "Localização", value: "Tondela, Portugal" },
    { label: "Atividade", value: "Serviços à indústria" },
    { label: "CAE", value: "71120" },
  ],
  areas: {
    eyebrow: "O que fazemos",
    title: "Quatro áreas de trabalho técnico",
    lead: "Da análise da instalação à entrada em funcionamento, com acompanhamento direto.",
    items: [
      {
        index: "01",
        title: "Engenharia Industrial",
        text: "Apoio técnico no desenvolvimento, adaptação e melhoria de instalações industriais, procurando soluções adequadas às necessidades reais de cada operação.",
        href: "/engenharia-industrial",
      },
      {
        index: "02",
        title: "Engenharia Elétrica",
        text: "Desenvolvimento e acompanhamento de soluções elétricas para ambientes industriais, desde a análise da instalação até à implementação.",
        href: "/engenharia-eletrica",
      },
      {
        index: "03",
        title: "Instalações e Montagem",
        text: "Montagem e integração de equipamentos e instalações industriais, acompanhando o processo desde a preparação até à entrada em funcionamento.",
        href: "/instalacoes",
      },
      {
        index: "04",
        title: "Manutenção e Suporte",
        text: "Acompanhamento técnico e intervenção em instalações industriais, ajudando a identificar problemas, realizar melhorias e manter os sistemas operacionais.",
        href: "/manutencao",
      },
    ],
  },
  process: {
    eyebrow: "Como trabalhamos",
    title: "Do problema à instalação em funcionamento",
    lead: "Um percurso curto, para perceber o caso antes de definir a intervenção.",
    steps: [
      {
        title: "Necessidade",
        text: "Compreendemos o problema, instalação ou objetivo do cliente.",
      },
      {
        title: "Análise",
        text: "Avaliamos as condições técnicas e identificamos possíveis soluções.",
      },
      {
        title: "Solução",
        text: "Definimos uma abordagem adequada ao contexto industrial.",
      },
      {
        title: "Implementação",
        text: "Executamos ou acompanhamos a instalação e integração.",
      },
      {
        title: "Suporte",
        text: "Continuamos disponíveis para alterações, manutenção e apoio técnico.",
      },
    ],
  },
  situations: {
    eyebrow: "Quando contactar",
    title: "Tem um problema técnico? Comecemos por analisá-lo.",
    lead: "Se a instalação, o equipamento ou o projeto já têm um constrangimento concreto, esse é o ponto de partida.",
    items: [
      {
        title: "Precisamos instalar um novo equipamento.",
        href: contactHref("Instalar um novo equipamento"),
      },
      {
        title: "Vamos alterar ou expandir uma instalação industrial.",
        href: contactHref("Alterar ou expandir uma instalação industrial"),
      },
      {
        title: "Precisamos resolver um problema elétrico numa fábrica.",
        href: contactHref("Problema elétrico numa instalação industrial"),
      },
      {
        title: "Precisamos adaptar infraestrutura existente.",
        href: contactHref("Adaptar infraestrutura existente"),
      },
      {
        title: "Precisamos de apoio técnico num projeto.",
        href: contactHref("Apoio técnico num projeto"),
      },
      {
        title: "Precisamos de manutenção ou intervenção.",
        href: contactHref("Manutenção ou intervenção técnica"),
      },
      {
        title: "Precisamos encontrar ou integrar determinado equipamento.",
        href: contactHref("Encontrar ou integrar um equipamento"),
      },
    ],
  },
  equipment: {
    eyebrow: "Equipamentos",
    title: "Fornecimento ligado à instalação",
    text: "A atividade da empresa inclui o comércio de equipamentos. O fornecimento parte da necessidade da instalação e da forma como o equipamento vai ser integrado.",
    link: { label: "Falar sobre um equipamento", href: "/equipamentos" },
  },
  cta: {
    title: "Descreva a instalação ou o problema.",
    text: "Envie um pedido com o contexto técnico. A análise começa por perceber o que a operação precisa.",
    primary: { label: "Pedir análise", href: contactHref("Pedido de análise") },
    secondary: { label: "Apresentar um projeto", href: contactHref("Apresentar um projeto") },
  },
} as const;
