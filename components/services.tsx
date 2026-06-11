"use client"

import { Wrench, Settings, Zap, Gauge, Lightbulb, Car } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    icon: Wrench,
    title: "Vente de Pièces Détachées",
    desc: "Toutes marques, toutes références disponibles en stock ou sur commande.",
  },
  {
    icon: Settings,
    title: "Réparation Moteur",
    desc: "Diagnostic et réparation complète du moteur par des techniciens experts.",
  },
  {
    icon: Zap,
    title: "Diagnostic Électronique",
    desc: "Lecture de codes, analyse des calculateurs et résolution des pannes.",
  },
  {
    icon: Gauge,
    title: "Entretien Régulier",
    desc: "Vidange, filtres, freins et pneumatiques pour rouler en toute sécurité.",
  },
  {
    icon: Lightbulb,
    title: "Installation Équipements",
    desc: "Écrans tactiles, caméras de recul, éclairage LED et jantes sport.",
  },
  {
    icon: Car,
    title: "Location de Véhicules",
    desc: "Location de véhicules courte et longue durée selon vos besoins.",
  },
]

export function Services() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Ce que nous faisons
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Une expertise complète en mécanique moderne, de la pièce détachée à
            l'installation d'équipements haut de gamme.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl border-t-4 border-primary bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-secondary">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
