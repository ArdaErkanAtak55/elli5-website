"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, PhoneCall } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { submitLead } from "@/lib/contact";
import { cn } from "@/lib/utils";

/* Tek alanlı "Sizi arayalım" geri-arama formu. */
export function CallbackForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length < 10) {
      setErr("Geçerli bir telefon numarası girin.");
      return;
    }
    setErr("");
    setStatus("sending");
    try {
      await submitLead("Elli5 — Geri arama talebi", {
        "Ad": name,
        "Telefon": phone,
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 rounded-card border border-line bg-mist p-4 text-sm text-ink">
        <CheckCircle2 className="size-5 shrink-0 text-brand" aria-hidden />
        Talebiniz alındı — en kısa sürede sizi arayacağız.
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "rounded-card border border-line bg-white p-5",
        !compact && "shadow-soft",
      )}
    >
      <p className="flex items-center gap-2 text-sm font-semibold text-carbon">
        <PhoneCall className="size-4 text-brand" aria-hidden />
        Sizi arayalım
      </p>
      <p className="mt-1 text-xs text-ink-soft">
        Numaranızı bırakın; uygun bir saatte biz arayalım.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          aria-label="Adınız (isteğe bağlı)"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-carbon outline-none transition-colors placeholder:text-ink-soft/60 focus:border-carbon sm:w-28"
        />
        <input
          type="tel"
          aria-label="Telefon"
          placeholder="Telefon *"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (err) setErr("");
          }}
          aria-invalid={!!err}
          className={cn(
            "w-full flex-1 rounded-xl border bg-white px-3.5 py-2.5 text-sm text-carbon outline-none transition-colors placeholder:text-ink-soft/60 focus:border-carbon",
            err ? "border-brand" : "border-line",
          )}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonClasses("primary", "md", "shrink-0")}
        >
          {status === "sending" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            "Beni arayın"
          )}
        </button>
      </div>
      {err ? <p className="mt-1.5 text-xs text-brand">{err}</p> : null}
      {status === "error" ? (
        <p className="mt-1.5 text-xs text-brand">
          Gönderilemedi. Lütfen doğrudan bizi arayın.
        </p>
      ) : null}
    </form>
  );
}
