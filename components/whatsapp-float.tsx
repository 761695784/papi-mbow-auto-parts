"use client"

import { BUSINESS, waLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/navbar"

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Bonjour Papi Mbow Auto Parts, je souhaite passer une commande.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Commander sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="relative size-7" />
      <span className="sr-only">Contacter {BUSINESS.name} sur WhatsApp</span>
    </a>
  )
}
