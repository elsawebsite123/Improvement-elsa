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
  title: 'Elsa Core Industry - Premium Nutraceutical & Wellness Solutions',
  description: 'Elsa Core Industry delivers premium nutraceutical solutions for reproductive wellness, daily health, and intimate care. Fertelsa, Elfer, and Vagoric - scientifically formulated for better health.',
  keywords: ['nutraceutical', 'wellness', 'pharmaceutical', 'healthcare', 'supplements', 'Pakistan', 'Karachi', 'Fertelsa', 'Elfer', 'Vagoric', 'fertility support', 'iron supplement', 'vaginal health'],
  authors: [{ name: 'Elsa Core Industry' }],
  creator: 'Elsa Core Industry',
  publisher: 'Elsa Core Industry',
  openGraph: {
    title: 'Elsa Core Industry - Premium Nutraceutical & Wellness Solutions',
    description: 'Discover premium nutraceutical products for reproductive wellness, daily health, and intimate care. Trusted by thousands for quality and innovation.',
    url: 'https://elsacoreindustry.pk',
    siteName: 'Elsa Core Industry',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elsa Core Industry - Premium Nutraceutical & Wellness Solutions',
    description: 'Premium nutraceutical and wellness solutions for a healthier tomorrow.',
    creator: '@elsacoreindustry',
  },
  metadataBase: new URL('https://elsacoreindustry.pk'),
  alternates: {
    canonical: 'https://elsacoreindustry.pk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
