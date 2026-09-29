export type ContactPayload = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

export type ContactField = keyof ContactPayload;

export type ContactState = {
  status: "idle" | "success" | "error" | "unconfigured";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

const limits: Record<ContactField, number> = {
  nome: 120,
  empresa: 160,
  email: 160,
  telefone: 40,
  assunto: 160,
  mensagem: 4000,
};

export function readContactPayload(formData: FormData): ContactPayload {
  return {
    nome: readField(formData, "nome"),
    empresa: readField(formData, "empresa"),
    email: readField(formData, "email"),
    telefone: readField(formData, "telefone"),
    assunto: readField(formData, "assunto"),
    mensagem: readField(formData, "mensagem"),
  };
}

function readField(formData: FormData, key: ContactField) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function validateContact(input: ContactPayload) {
  const errors: Partial<Record<ContactField, string>> = {};

  if (input.nome.length < 2) {
    errors.nome = "Indique o nome.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "Indique um email válido.";
  }

  if (input.telefone && !/^[0-9+()\s.-]{6,}$/.test(input.telefone)) {
    errors.telefone = "Indique um telefone válido.";
  }

  if (input.mensagem.length < 12) {
    errors.mensagem = "Descreva brevemente a instalação ou o problema.";
  }

  for (const field of Object.keys(limits) as ContactField[]) {
    if (input[field].length > limits[field]) {
      errors[field] = "Este campo é demasiado longo.";
    }
  }

  return errors;
}
