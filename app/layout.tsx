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
  title: 'PorpamTech | Automação, Inteligência Artificial e Software à Medida',
  description:
    'A PorpamTech oferece soluções premium de automação, inteligência artificial e desenvolvimento de software à medida para empresas que procuram inovação e eficiência.',
  keywords: [
    'automação',
    'inteligência artificial',
    'software à medida',
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
    title: 'PorpamTech | Automação, Inteligência Artificial e Software à Medida',
    description:
      'Soluções premium de automação, inteligência artificial e desenvolvimento de software à medida.',
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
    title: 'PorpamTech | Automação, Inteligência Artificial e Software à Medida',
    description:
      'Soluções premium de automação, inteligência artificial e desenvolvimento de software à medida.',
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
                'Soluções premium de automação, inteligência artificial e desenvolvimento de software à medida.',
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Service',
                  position: 1,
                  name: 'Desenvolvimento Web',
                  description: 'Aplicações web modernas e responsivas com as tecnologias mais recentes do mercado.',
                  provider: { '@type': 'Organization', name: 'PorpamTech' },
                },
                {
                  '@type': 'Service',
                  position: 2,
                  name: 'Inteligência Artificial',
                  description: 'Soluções de IA personalizadas que automatizam processos e geram insights valiosos.',
                  provider: { '@type': 'Organization', name: 'PorpamTech' },
                },
                {
                  '@type': 'Service',
                  position: 3,
                  name: 'Automação de Processos',
                  description: 'Workflows automatizados que eliminam tarefas repetitivas e aumentam a produtividade.',
                  provider: { '@type': 'Organization', name: 'PorpamTech' },
                },
                {
                  '@type': 'Service',
                  position: 4,
                  name: 'Aplicações Mobile',
                  description: 'Apps nativos e multiplataforma com experiências de utilizador excepcionais.',
                  provider: { '@type': 'Organization', name: 'PorpamTech' },
                },
                {
                  '@type': 'Service',
                  position: 5,
                  name: 'Cloud & DevOps',
                  description: 'Infraestrutura escalável e pipelines de CI/CD para entregas contínuas e confiáveis.',
                  provider: { '@type': 'Organization', name: 'PorpamTech' },
                },
                {
                  '@type': 'Service',
                  position: 6,
                  name: 'Cibersegurança',
                  description: 'Proteção avançada dos seus sistemas e dados com as melhores práticas de segurança.',
                  provider: { '@type': 'Organization', name: 'PorpamTech' },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
