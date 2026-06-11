"use client"

import { Quote } from "lucide-react"
import Image from "next/image"
import { BUSINESS } from "@/lib/site"
import { useReveal } from "@/hooks/use-reveal"

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="a-propos" className="bg-background py-20 md:py-28">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2"
      >
        <div>
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Qui sommes-nous
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Notre Expertise
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Basé à Hann Maristes, Dakar, depuis plus de 10 ans,{" "}
            <strong className="text-secondary">{BUSINESS.name}</strong> s'est imposé
            comme un acteur de référence de la mécanique moderne au Sénégal. Notre
            atelier allie la passion du métier à des outils de diagnostic de dernière
            génération.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            De la vente de pièces détachées toutes marques à l'installation
            d'équipements haut de gamme, notre équipe accompagne particuliers et
            professionnels avec rigueur, transparence et un vrai sens du service.
          </p>

          <blockquote className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-5">
            <Quote className="size-6 text-primary" aria-hidden="true" />
            <p className="mt-2 font-heading text-lg font-bold text-primary">
              « Meilleur garage en mécanique moderne au Sénégal »
            </p>
          </blockquote>

          <p className="mt-6 font-heading text-2xl italic text-accent">
            {BUSINESS.slogan}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="size-44 overflow-hidden rounded-full border-4 border-primary bg-secondary shadow-xl sm:size-52">
            <Image
              src="/images/papa-mbow.jpg"
              alt={`Portrait de ${BUSINESS.owner}`}
              width={208}
              height={208}
              className="size-full object-cover object-top"
            />
          </div>
          <div className="mt-5 text-center">
            <div className="font-heading text-xl font-bold text-secondary">
              {BUSINESS.owner}
            </div>
            <div className="text-sm font-medium text-primary">{BUSINESS.ownerRole}</div>
            <div className="mt-1 text-sm text-muted-foreground">{BUSINESS.location}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
