import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elsa Core Industry | Innovation for Wellness',
  description: 'Elsa Core Industry is a premium nutraceutical and wellness company dedicated to innovation in healthcare. Based in Karachi, Pakistan.',
  keywords: ['nutraceutical', 'wellness', 'pharmaceutical', 'healthcare', 'supplements', 'Pakistan', 'Karachi'],
  authors: [{ name: 'Elsa Core Industry' }],
  creator: 'Elsa Core Industry',
  openGraph: {
    title: 'Elsa Core Industry | Innovation for Wellness',
    description: 'Premium nutraceutical and wellness solutions for a healthier tomorrow.',
    url: 'https://elsacoreindustry.pk',
    siteName: 'Elsa Core Industry',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elsa Core Industry | Innovation for Wellness',
    description: 'Premium nutraceutical and wellness solutions for a healthier tomorrow.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a365d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
