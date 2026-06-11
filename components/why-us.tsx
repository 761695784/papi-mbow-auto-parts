"use client"

import { ShieldCheck, Zap, BadgePercent, Truck } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const features = [
  {
    icon: ShieldCheck,
    title: "Pièces Certifiées",
    desc: "Qualité garantie sur toutes les marques que nous distribuons.",
  },
  {
    icon: Zap,
    title: "Intervention Rapide",
    desc: "Diagnostic et réparation réalisés en moins de 24h.",
  },
  {
    icon: BadgePercent,
    title: "Prix Imbattables",
    desc: "Les meilleurs tarifs du marché automobile à Dakar.",
  },
  {
    icon: Truck,
    title: "Livraison à Domicile",
    desc: "Dakar et toutes les régions, commande simple via WhatsApp.",
  },
]

export function WhyUs() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-full w-1/3 bg-primary/20"
        style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Nos engagements
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Pourquoi choisir Papi Mbow Auto Parts&nbsp;?
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-accent/50"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <f.icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-accent">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
