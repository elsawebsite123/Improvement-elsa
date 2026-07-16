import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fertelsa Sachet - Women\'s Reproductive Wellness | Elsa Core Industry',
  description: 'Fertelsa Sachet provides advanced nutraceutical support for women\'s reproductive wellness with Myo-Inositol, D-Chiro-Inositol, probiotics, and prebiotics. Supports hormonal balance and ovarian function.',
  keywords: ['Fertelsa', 'fertility support', 'women health', 'Myo-Inositol', 'reproductive wellness', 'hormone balance', 'nutraceutical'],
  openGraph: {
    title: 'Fertelsa Sachet - Women\'s Reproductive Wellness | Elsa Core Industry',
    description: 'Advanced support for women\'s reproductive health with scientifically formulated ingredients.',
    url: 'https://elsacoreindustry.pk/products/fertelsa',
    type: 'website',
  },
}

export default function FertelsaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
