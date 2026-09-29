import nodemailer from "nodemailer";
import { contactDetails } from "@/content/site";
import type { ContactPayload } from "@/lib/validate-contact";

function smtpPassword() {
  return process.env.SMTP_PASS?.replace(/\s+/g, "") ?? "";
}

export function mailIsConfigured() {
  return Boolean(process.env.SMTP_HOST?.trim() && process.env.SMTP_USER?.trim() && smtpPassword());
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function sendContactMessage(payload: ContactPayload) {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = smtpPassword();

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured");
  }

  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const topic = singleLine(payload.assunto) || `Pedido de ${singleLine(payload.nome)}`;
  const lines = [
    `Nome: ${payload.nome}`,
    `Empresa: ${payload.empresa || "—"}`,
    `Email: ${payload.email}`,
    `Telefone: ${payload.telefone || "—"}`,
    `Assunto: ${payload.assunto || "—"}`,
    "",
    "Mensagem:",
    payload.mensagem,
  ];

  await transporter.sendMail({
    from: process.env.SMTP_FROM?.trim() || user,
    to: process.env.CONTACT_EMAIL?.trim() || contactDetails.email,
    replyTo: {
      name: singleLine(payload.nome),
      address: payload.email,
    },
    subject: `Pedido do site: ${topic}`.slice(0, 180),
    text: lines.join("\n"),
  });
}
