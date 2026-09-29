/**
 * Dados confirmados da Flexiparabola II e pontos ainda por preencher.
 * Idioma atual: português de Portugal.
 * Para inglês no futuro: duplicar os módulos de conteúdo e introduzir o prefixo /en.
 */

export const locale = "pt-PT" as const;

export const site = {
  name: "Flexiparabola II",
  legalName: "Flexiparabola II – Industrial Services, Lda",
  activity:
    "Prestação de serviços à indústria. Comércio de equipamentos, montagem de instalações.",
  cae: "71120",
  caeLabel: "Atividades de engenharia e técnicas afins",
  locality: "Tondela",
  country: "Portugal",
  countryCode: "PT",
  coverage:
    "Os serviços estendem-se a todo o Portugal continental e ilhas, e ao mercado europeu: Espanha, Reino Unido, Alemanha e França.",
  areaServed: ["Portugal", "Espanha", "Reino Unido", "Alemanha", "França"],
  /**
   * TODO: confirmar o domínio oficial e definir NEXT_PUBLIC_SITE_URL.
   * Sem domínio confirmado, o valor local evita publicar um endereço inventado.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contentUpdated: "2026-09-28",
} as const;

export const contactDetails = {
  email: "flexiparabola2@gmail.com",
  locality: `${site.locality}, ${site.country}`,
};

export function contactHref(subject?: string) {
  if (!subject) return "/contactos";
  return `/contactos?assunto=${encodeURIComponent(subject)}`;
}

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  { label: "Serviços", href: "/servicos" },
  {
    label: "Engenharia",
    href: "/servicos#engenharia",
    children: [
      { label: "Engenharia Industrial", href: "/engenharia-industrial" },
      { label: "Engenharia Elétrica", href: "/engenharia-eletrica" },
    ],
  },
  {
    label: "Instalações",
    href: "/instalacoes",
    children: [
      { label: "Instalações e Montagem", href: "/instalacoes" },
      { label: "Manutenção e Suporte", href: "/manutencao" },
    ],
  },
  { label: "Equipamentos", href: "/equipamentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contactos", href: "/contactos" },
];

export const footerColumns = [
  {
    title: "Serviços",
    links: [
      { label: "Serviços", href: "/servicos" },
      { label: "Engenharia industrial", href: "/engenharia-industrial" },
      { label: "Engenharia elétrica", href: "/engenharia-eletrica" },
      { label: "Instalações", href: "/instalacoes" },
      { label: "Manutenção", href: "/manutencao" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Equipamentos", href: "/equipamentos" },
      { label: "Experiência", href: "/projetos" },
      { label: "Sobre", href: "/sobre" },
      { label: "Contactos", href: "/contactos" },
    ],
  },
] as const;

export const legalNav = [
  { label: "Privacidade", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
] as const;

export const sitemapRoutes = [
  { path: "/", priority: 1 },
  { path: "/servicos", priority: 0.9 },
  { path: "/engenharia-industrial", priority: 0.8 },
  { path: "/engenharia-eletrica", priority: 0.8 },
  { path: "/instalacoes", priority: 0.8 },
  { path: "/manutencao", priority: 0.8 },
  { path: "/equipamentos", priority: 0.8 },
  { path: "/sobre", priority: 0.7 },
  { path: "/projetos", priority: 0.5 },
  { path: "/contactos", priority: 0.9 },
  { path: "/privacy", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
] as const;
