export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "todo"; text: string };

export const privacy = {
  metaTitle: "Política de privacidade",
  metaDescription:
    "Informação sobre o tratamento de dados pessoais no website da Flexiparabola II – Industrial Services, Lda.",
  title: "Política de privacidade",
  lead: "Esta página descreve como a Flexiparabola II trata os dados pessoais recolhidos através deste website.",
  blocks: [
    { type: "h2", text: "Responsável pelo tratamento" },
    {
      type: "p",
      text: "O website é da Flexiparabola II – Industrial Services, Lda, com atividade em Tondela, Portugal.",
    },
    {
      type: "todo",
      text: "confirmar a identificação completa do responsável pelo tratamento: denominação, NIF, morada e email para assuntos de privacidade.",
    },
    { type: "h2", text: "Dados recolhidos" },
    {
      type: "p",
      text: "O formulário de contacto pede apenas o que é necessário para responder a um pedido profissional:",
    },
    {
      type: "ul",
      items: [
        "Nome",
        "Empresa",
        "Email",
        "Telefone",
        "Assunto",
        "Mensagem, incluindo a descrição da instalação ou do problema",
      ],
    },
    {
      type: "p",
      text: "Não peça dados sensíveis na mensagem. Não são necessários para uma primeira análise.",
    },
    { type: "h2", text: "Finalidade" },
    {
      type: "p",
      text: "Os dados servem para ler o pedido, responder e, se o contacto avançar, preparar uma análise ou uma proposta. Não são usados para marketing genérico nem cedidos para fichas comerciais de terceiros.",
    },
    { type: "h2", text: "Base de licitude" },
    {
      type: "p",
      text: "A resposta a um pedido enviado pelo próprio titular enquadra-se em diligências pré-contratuais. Se o formulário vier a recolher dados para outra finalidade, a base será revista.",
    },
    { type: "h2", text: "Conservação" },
    {
      type: "todo",
      text: "definir o prazo de conservação dos pedidos de contacto e de que forma são apagados.",
    },
    { type: "h2", text: "Destinatários" },
    {
      type: "todo",
      text: "indicar se os dados ficam apenas na empresa ou se passam por um serviço de email e pelo alojamento do website, com o nome desses prestadores.",
    },
    { type: "h2", text: "Estado atual do formulário" },
    {
      type: "p",
      text: "O formulário valida o pedido no browser e no servidor. Com o correio SMTP configurado no servidor, a mensagem é enviada para a caixa da empresa e não fica guardada no website. O serviço de correio dessa conta trata a entrega. Sem essa configuração, os dados escritos no formulário não são transmitidos nem guardados.",
    },
    { type: "h2", text: "Direitos" },
    {
      type: "p",
      text: "Nos termos do Regulamento Geral sobre a Proteção de Dados, pode pedir acesso, retificação, apagamento, limitação do tratamento, oposição e, quando aplicável, portabilidade. Pode também apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).",
    },
    {
      type: "todo",
      text: "publicar o email para o qual esses pedidos devem ser enviados, depois de confirmado.",
    },
  ] satisfies LegalBlock[],
};

export const cookies = {
  metaTitle: "Política de cookies",
  metaDescription:
    "Utilização de cookies no website da Flexiparabola II. Nesta versão não há cookies de análise nem de publicidade.",
  title: "Política de cookies",
  lead: "Nesta versão, o website não utiliza cookies de análise, publicidade ou redes sociais.",
  blocks: [
    { type: "h2", text: "O que está em uso" },
    {
      type: "p",
      text: "O site não carrega ferramentas de estatística, pixels de redes sociais nem cookies de marketing. Por isso não é apresentado um banner de consentimento: não há cookies não essenciais para aceitar ou recusar.",
    },
    { type: "h2", text: "Cookies técnicos" },
    {
      type: "p",
      text: "A plataforma que vier a alojar o website pode definir cookies estritamente necessários ao funcionamento e à segurança. Esses cookies, se existirem, não servem para identificar preferências comerciais.",
    },
    {
      type: "todo",
      text: "confirmar com o alojamento a lista de cookies técnicos efetivamente utilizados e o respetivo prazo.",
    },
    { type: "h2", text: "Se isto mudar" },
    {
      type: "p",
      text: "Se no futuro forem adicionados cookies de análise ou outros cookies não essenciais, esta página será atualizada e o consentimento será pedido antes desses cookies serem usados.",
    },
  ] satisfies LegalBlock[],
};
