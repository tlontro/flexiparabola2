"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/actions/contact";
import type { ContactField, ContactState } from "@/lib/validate-contact";

const initialState: ContactState = { status: "idle" };

const fields: {
  name: ContactField;
  label: string;
  type?: string;
  autoComplete: string;
  required?: boolean;
}[] = [
  { name: "nome", label: "Nome", autoComplete: "name", required: true },
  { name: "empresa", label: "Empresa", autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "telefone", label: "Telefone", type: "tel", autoComplete: "tel" },
  { name: "assunto", label: "Assunto", autoComplete: "off" },
];

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        formAction(new FormData(event.currentTarget));
      }}
    >
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Fax
          <input name="fax" type="text" tabIndex={-1} autoComplete="off" defaultValue="" suppressHydrationWarning />
        </label>
      </div>

      {fields.map((field) => (
        <Field
          key={field.name}
          {...field}
          defaultValue={field.name === "assunto" ? defaultSubject : undefined}
          error={state.fieldErrors?.[field.name]}
        />
      ))}

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-ink">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          minLength={12}
          rows={6}
          maxLength={4000}
          placeholder="Descreva brevemente a instalação ou problema."
          aria-invalid={state.fieldErrors?.mensagem ? true : undefined}
          aria-describedby={state.fieldErrors?.mensagem ? "mensagem-erro" : undefined}
          className="mt-2 w-full border border-line bg-white px-3 py-3 text-base text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-brand"
        />
        {state.fieldErrors?.mensagem ? (
          <p id="mensagem-erro" className="mt-2 text-sm text-brand">
            {state.fieldErrors.mensagem}
          </p>
        ) : null}
      </div>

      {state.message ? (
        <p
          role={state.status === "success" ? "status" : "alert"}
          className="border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-ink"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-deep disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "A enviar…" : "Enviar pedido"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  required = false,
  defaultValue,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}) {
  const errorId = `${name}-erro`;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        minLength={required && name === "nome" ? 2 : undefined}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        maxLength={name === "mensagem" ? 4000 : 160}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full border border-line bg-white px-3 py-3 text-base text-ink outline-none transition-colors focus:border-brand"
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-brand">
          {error}
        </p>
      ) : null}
    </div>
  );
}
