"use server";

import { contactDetails } from "@/content/site";
import { mailIsConfigured, sendContactMessage } from "@/lib/mail";
import {
  readContactPayload,
  validateContact,
  type ContactState,
} from "@/lib/validate-contact";

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = formData.get("fax");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return {
      status: "success",
      message: "Pedido recebido.",
    };
  }

  const payload = readContactPayload(formData);
  const fieldErrors = validateContact(payload);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Verifique os campos assinalados.",
      fieldErrors,
    };
  }

  if (!mailIsConfigured()) {
    return {
      status: "unconfigured",
      message: `O pedido não foi enviado. O formulário ainda não está ligado a um serviço de email. Escreva diretamente para ${contactDetails.email}.`,
    };
  }

  try {
    await sendContactMessage(payload);
  } catch (error) {
    const detail = error instanceof Error ? error.message : "erro desconhecido";
    console.error("Falha ao enviar o pedido de contacto:", detail);
    return {
      status: "error",
      message: `Não foi possível enviar o pedido. Escreva diretamente para ${contactDetails.email}.`,
    };
  }

  return {
    status: "success",
    message: "Pedido enviado. A resposta segue para o email que indicou.",
  };
}
