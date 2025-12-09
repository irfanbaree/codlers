import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Codlers - AI & SaaS Development Agency | Custom AI Solutions',
  description: 'Award-winning AI and SaaS development agency. We build intelligent, scalable solutions for modern businesses. Expert in machine learning, cloud architecture, and enterprise software.',
  keywords: ['AI development', 'SaaS development', 'AI agency', 'machine learning', 'cloud solutions', 'software development', 'enterprise software', 'AI solutions', 'custom development'],
  authors: [{ name: 'Codlers' }],
  creator: 'Codlers',
  publisher: 'Codlers',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codlers.com',
    siteName: 'Codlers',
    title: 'Codlers - AI & SaaS Development Agency',
    description: 'Award-winning AI and SaaS development agency. We build intelligent, scalable solutions for modern businesses.',
    images: [
      {
        url: 'https://codlers.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Codlers - AI & SaaS Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codlers - AI & SaaS Development Agency',
    description: 'Award-winning AI and SaaS development agency. We build intelligent, scalable solutions for modern businesses.',
    images: ['https://codlers.com/og-image.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://codlers.com',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Codlers',
              description: 'AI and SaaS development agency',
              url: 'https://codlers.com',
              logo: 'https://codlers.com/logo.svg',
              sameAs: [
                'https://twitter.com/codlers',
                'https://linkedin.com/company/codlers',
                'https://github.com/codlers',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-XXX-XXX-XXXX',
                contactType: 'Sales',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
