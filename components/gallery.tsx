"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const photos = [
  { src: "/images/garage-1.jpg", label: "Atelier principal — Hann Maristes" },
  { src: "/images/upgrade.jpg", label: "Réalisation Upgrade — Avant / Après" },
  { src: "/images/garage-2.jpg", label: "Parc véhicules en intervention" },
  { src: "/images/salon-tires.jpg", label: "Salon auto — Stand pneumatiques" },
  { src: "/images/garage-3.jpg", label: "Entretien sous abri" },
  { src: "/images/salon-parts.jpg", label: "Sourcing pièces détachées (Dubai)" },
  { src: "/images/team-1.jpg", label: "Notre équipe & partenaires" },
  { src: "/images/garage-4.jpg", label: "Entrée du garage" },
  { src: "/images/salon-film.jpg", label: "Films & équipements — Salon international" },
]

export function Gallery() {
  const ref = useReveal<HTMLDivElement>()
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="galerie" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            En images
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Galerie & Réalisations
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Découvrez nos interventions, notre atelier et nos réalisations.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-xl shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.label}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-70 transition-opacity group-hover:from-accent/70 group-hover:opacity-90" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-left font-heading text-sm font-semibold text-white">
                {photo.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={photos[open].label}
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setOpen(null)}
          >
            <X className="size-6" />
          </button>
          <figure className="max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[open].src || "/placeholder.svg"}
              alt={photos[open].label}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center font-heading text-lg text-white">
              {photos[open].label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
