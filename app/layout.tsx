import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Rajdhani, Inter } from 'next/font/google'
import './globals.css'

const rajdhani = Rajdhani({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Papi Mbow Auto Parts — Pièces Détachées & Mécanique Moderne à Dakar',
  description:
    'Papi Mbow Auto Parts : vente de pièces détachées auto, réparation moteur, diagnostic électronique et mécanique moderne à Hann Maristes, Dakar, Sénégal. Passion Mécanique. Précision Moderne.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#1A1A1A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${rajdhani.variable} ${inter.variable} scroll-smooth bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
