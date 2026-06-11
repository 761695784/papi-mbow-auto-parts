"use client"

import { ArrowDown, Users, Award, Truck, Cpu } from "lucide-react"
import { BUSINESS, waLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/navbar"

const stats = [
  { icon: Users, value: "500+", label: "Clients Satisfaits" },
  { icon: Award, value: "10+", label: "Années d'Expérience" },
  { icon: Truck, value: "Dakar & Régions", label: "Livraison" },
  { icon: Cpu, value: "Diagnostic", label: "Électronique" },
]

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-secondary text-white">
      {/* Red diagonal stripe accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-primary/90"
        style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 12% 100%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-accent/20"
        style={{ clipPath: "polygon(50% 0, 64% 0, 26% 100%, 12% 100%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-32 md:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-40">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            {BUSINESS.taglineLine1}
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Pièces Détachées Auto & Mécanique Moderne à Dakar
          </h1>
          <p className="mt-5 text-balance font-heading text-xl italic text-accent sm:text-2xl">
            {BUSINESS.slogan}
          </p>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-white/70">
            Spécialiste de la vente de pièces détachées toutes marques, du diagnostic
            électronique et de l'entretien automobile à Hann Maristes, Dakar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              Découvrir nos services
              <ArrowDown className="size-4" />
            </a>
            <a
              href={waLink("Bonjour Papi Mbow Auto Parts, je souhaite passer une commande.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="size-5" />
              Commander via WhatsApp
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="overflow-hidden rounded-xl border-4 border-primary/80 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/garage-1.jpg"
              alt="Garage Papi Mbow Auto Parts à Hann Maristes, Dakar"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 md:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 py-5">
              <s.icon className="size-7 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <div className="font-heading text-lg font-bold leading-tight text-white">
                  {s.value}
                </div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
