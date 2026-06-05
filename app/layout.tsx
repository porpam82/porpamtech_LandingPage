import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  title: 'PorpamTech | Automacao, Inteligencia Artificial e Software a Medida',
  description:
    'A PorpamTech oferece solucoes premium de automacao, inteligencia artificial e desenvolvimento de software a medida para empresas que procuram inovacao e eficiencia.',
  keywords: [
    'automacao',
    'inteligencia artificial',
    'software a medida',
    'desenvolvimento web',
    'AI agents',
    'Portugal',
    'PorpamTech',
  ],
  authors: [{ name: 'PorpamTech' }],
  creator: 'PorpamTech',
  publisher: 'PorpamTech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://porpamtech.com',
    siteName: 'PorpamTech',
    title: 'PorpamTech | Automacao, Inteligencia Artificial e Software a Medida',
    description:
      'Solucoes premium de automacao, inteligencia artificial e desenvolvimento de software a medida.',
    images: [
      {
        url: 'https://porpamtech.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PorpamTech - Tecnologia Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PorpamTech | Automacao, Inteligencia Artificial e Software a Medida',
    description:
      'Solucoes premium de automacao, inteligencia artificial e desenvolvimento de software a medida.',
    images: ['https://porpamtech.com/og-image.png'],
  },
  metadataBase: new URL('https://porpamtech.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT" className={`dark ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PorpamTech',
              url: 'https://porpamtech.com',
              email: 'info@porpamtech.com',
              description:
                'Solucoes premium de automacao, inteligencia artificial e desenvolvimento de software a medida.',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
