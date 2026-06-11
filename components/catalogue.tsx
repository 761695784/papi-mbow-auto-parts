"use client"

import { useMemo, useState } from "react"
import {
  Search,
  Droplet,
  Disc3,
  Wrench,
  Waves,
  BatteryCharging,
  Lightbulb,
  Zap,
  Cog,
} from "lucide-react"
import { waLink } from "@/lib/site"
import { useReveal } from "@/hooks/use-reveal"

type Category =
  | "Moteur"
  | "Freinage"
  | "Suspension"
  | "Électricité"
  | "Carrosserie"
  | "Accessoires"

const products: {
  name: string
  price: string
  category: Category
  icon: React.ComponentType<{ className?: string }>
}[] = [
  { name: "Filtre à huile universel", price: "3 500 FCFA", category: "Moteur", icon: Droplet },
  { name: "Plaquettes de frein ABS", price: "12 000 FCFA", category: "Freinage", icon: Disc3 },
  { name: "Kit de vidange complet", price: "18 500 FCFA", category: "Moteur", icon: Wrench },
  { name: "Amortisseur avant", price: "35 000 FCFA", category: "Suspension", icon: Waves },
  { name: "Courroie de distribution", price: "22 000 FCFA", category: "Moteur", icon: Cog },
  { name: "Batterie 60Ah", price: "45 000 FCFA", category: "Électricité", icon: BatteryCharging },
  { name: "Kit LED phares H7", price: "15 000 FCFA", category: "Accessoires", icon: Lightbulb },
  { name: "Jeu de bougies NGK", price: "8 000 FCFA", category: "Moteur", icon: Zap },
]

const tabs = [
  "Tous",
  "Moteur",
  "Freinage",
  "Suspension",
  "Électricité",
  "Carrosserie",
  "Accessoires",
] as const

export function Catalogue() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Tous")
  const [query, setQuery] = useState("")
  const ref = useReveal<HTMLDivElement>()

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = active === "Tous" || p.category === active
      const matchQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQuery
    })
  }, [active, query])

  return (
    <section id="catalogue" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Notre stock
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Catalogue Pièces Détachées
          </h2>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 shadow-sm">
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par marque, modèle ou référence..."
            aria-label="Rechercher une pièce"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Filter tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === tab
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative flex h-40 items-center justify-center bg-secondary">
                <p.icon className="size-14 text-accent/80" aria-hidden="true" />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-heading text-lg font-bold leading-tight text-secondary">
                  {p.name}
                </h3>
                <div className="mt-1 font-heading text-xl font-bold text-primary">
                  {p.price}
                </div>
                <a
                  href={waLink(`Bonjour, je souhaite commander : ${p.name} (${p.price}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Commander
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Aucune pièce ne correspond à votre recherche. Contactez-nous, nous la
            trouverons pour vous.
          </p>
        )}

        <div className="mt-12 text-center">
          <a
            href={waLink("Bonjour Papi Mbow Auto Parts, je souhaite demander un devis complet.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            Demander un devis complet
          </a>
        </div>
      </div>
    </section>
  )
}
