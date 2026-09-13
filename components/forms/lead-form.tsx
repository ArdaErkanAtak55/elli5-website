"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { submitLead, FORM_ENDPOINT } from "@/lib/contact";
import { cn } from "@/lib/utils";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean; // grid'de tam genişlik
};

type Props = {
  subject: string;
  fields: Field[];
  submitLabel?: string;
  note?: string;
};

function validate(fields: Field[], values: Record<string, string>) {
  const errors: Record<string, string> = {};
  for (const f of fields) {
    const v = (values[f.name] ?? "").trim();
    if (f.required && !v) {
      errors[f.name] = "Bu alan gerekli.";
      continue;
    }
    if (v && f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      errors[f.name] = "Geçerli bir e-posta girin.";
    }
    if (v && f.type === "tel" && v.replace(/\D/g, "").length < 10) {
      errors[f.name] = "Geçerli bir telefon girin.";
    }
  }
  return errors;
}

export function LeadForm({ subject, fields, submitLabel = "Gönder", note }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: "" } : e));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields, values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const labeled: Record<string, string> = {};
      for (const f of fields) labeled[f.label] = values[f.name] ?? "";
      await submitLead(subject, labeled);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-card border border-line bg-mist p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-brand" aria-hidden />
        <h3 className="mt-4 text-xl">Talebiniz alındı</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
          {FORM_ENDPOINT
            ? "En kısa sürede size dönüş yapacağız. Teşekkürler!"
            : "E-posta uygulamanız açıldı — mesajı göndermeniz yeterli. Açılmadıysa bize doğrudan yazabilirsiniz."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={cn(f.full || f.type === "textarea" ? "sm:col-span-2" : "")}>
          <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-carbon">
            {f.label}
            {f.required ? <span className="text-brand"> *</span> : null}
          </label>

          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              name={f.name}
              rows={4}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) => set(f.name, e.target.value)}
              aria-invalid={!!errors[f.name]}
              className={fieldClass(!!errors[f.name])}
            />
          ) : f.type === "select" ? (
            <select
              id={f.name}
              name={f.name}
              value={values[f.name] ?? ""}
              onChange={(e) => set(f.name, e.target.value)}
              aria-invalid={!!errors[f.name]}
              className={fieldClass(!!errors[f.name])}
            >
              <option value="">Seçiniz…</option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) => set(f.name, e.target.value)}
              aria-invalid={!!errors[f.name]}
              className={fieldClass(!!errors[f.name])}
            />
          )}

          {errors[f.name] ? (
            <p className="mt-1 text-xs text-brand">{errors[f.name]}</p>
          ) : null}
        </div>
      ))}

      <div className="sm:col-span-2">
        {status === "error" ? (
          <p className="mb-3 text-sm text-brand">
            Bir şeyler ters gitti. Lütfen tekrar deneyin veya doğrudan bize yazın.
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonClasses("primary", "lg", "w-full sm:w-auto")}
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Gönderiliyor…
            </>
          ) : (
            submitLabel
          )}
        </button>
        {note ? <p className="mt-3 text-xs text-ink-soft">{note}</p> : null}
      </div>
    </form>
  );
}

function fieldClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-carbon outline-none transition-colors placeholder:text-ink-soft/60 focus:border-carbon",
    hasError ? "border-brand" : "border-line",
  );
}
