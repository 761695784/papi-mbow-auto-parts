"use client"

import { Star } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const testimonials = [
  {
    name: "Moustapha Diallo",
    text: "Service rapide et professionnel. J'ai commandé mes pièces le matin, livrées l'après-midi. Je recommande vivement !",
  },
  {
    name: "Fatou Ndiaye",
    text: "Diagnostic électronique précis, panne résolue en 2h. L'équipe est compétente et honnête sur les prix.",
  },
  {
    name: "Ibrahima Sarr",
    text: "Pièces de qualité à bon prix. Papi Mbow Auto Parts est désormais mon garage de confiance à Dakar.",
  },
]

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Avis clients
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Ce que disent nos clients
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-4 font-heading font-bold text-secondary">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
