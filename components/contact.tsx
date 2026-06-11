"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react"
import { BUSINESS, waLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/navbar"
import { useReveal } from "@/hooks/use-reveal"

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Bonjour Papi Mbow Auto Parts,\nNom : ${form.name}\nTéléphone : ${form.phone}\nDemande : ${form.message}`
    window.open(waLink(msg), "_blank")
    setSent(true)
  }

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Parlons-en
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Contactez-nous / Passez votre commande
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: infos */}
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <MapPin className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <div className="font-heading font-bold text-secondary">Adresse</div>
                <p className="text-muted-foreground">{BUSINESS.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <Phone className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <div className="font-heading font-bold text-secondary">Téléphone</div>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {BUSINESS.phone}
                </a>
                <p className="text-sm text-muted-foreground">Fixe : {BUSINESS.landline}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <Clock className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <div className="font-heading font-bold text-secondary">Horaires</div>
                <p className="text-muted-foreground">{BUSINESS.hours}</p>
              </div>
            </div>

            <a
              href={waLink("Bonjour Papi Mbow Auto Parts, je vous contacte depuis votre site.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="size-5" />
              Envoyer un message WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted text-muted-foreground">
              <MapPin className="size-8 text-primary" aria-hidden="true" />
              <span className="font-medium">Hann Maristes, Dakar, Sénégal</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <CheckCircle2 className="size-14 text-[#25D366]" aria-hidden="true" />
                <h3 className="font-heading text-2xl font-bold text-secondary">
                  Merci&nbsp;!
                </h3>
                <p className="text-muted-foreground">
                  Votre demande a été préparée sur WhatsApp. Nous vous répondrons dans
                  les plus brefs délais.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-sm font-semibold text-primary underline underline-offset-4"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-secondary">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-secondary">
                    Numéro de téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="+221 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-secondary">
                    Votre demande
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Décrivez la pièce ou le service recherché..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02]"
                >
                  <Send className="size-4" />
                  Envoyer la demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
