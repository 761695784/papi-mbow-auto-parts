import Image from "next/image"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { BUSINESS, NAV_LINKS } from "@/lib/site"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Zm0 8.74a3.44 3.44 0 1 1 0-6.88 3.44 3.44 0 0 1 0 6.88Zm6.74-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.01-2.82h-3.3v12.86a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .53.05.78.12V9.9a5.88 5.88 0 0 0-.78-.05A5.89 5.89 0 1 0 15.6 15.7V9.01a7.55 7.55 0 0 0 4.4 1.41V7.12a4.3 4.3 0 0 1-3.4-1.3Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-primary">
              <Image
                src="/images/logo.jpeg"
                alt="Logo Papi Mbow Auto Parts"
                width={44}
                height={44}
                className="size-full object-cover"
              />
            </span>
            <span className="font-heading text-lg font-bold text-white">
              PAPI MBOW <span className="text-primary">AUTO PARTS</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Spécialiste de la vente de pièces détachées et de la mécanique moderne à
            Dakar.
          </p>
          <p className="mt-4 font-heading text-base italic text-accent">
            {BUSINESS.slogan}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={BUSINESS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
            >
              <TikTokIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {BUSINESS.location}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={BUSINESS.phoneHref} className="hover:text-accent">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-accent">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {BUSINESS.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-5 text-center text-xs text-white/50 md:flex-row md:justify-between md:px-6">
          <span>
            © {new Date().getFullYear()} {BUSINESS.name}. Tous droits réservés.
          </span>
          <span>
            Conçu par{" "}
            <a
              href="https://majeliconnect.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Majeli Connect
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
