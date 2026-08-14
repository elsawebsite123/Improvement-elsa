import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fertelsa Sachet Price in Pakistan – PKR 1,770 | Elsa Core Industry',
  description: 'Fertelsa Sachet price in Pakistan is PKR 1,770. Order online from Elsa Core Industry through WhatsApp with free delivery to your doorstep.',
  keywords: ['Fertelsa Sachet', 'Fertelsa price in Pakistan', 'buy Fertelsa online', 'Fertelsa free delivery', 'myo-inositol sachet Pakistan', 'PCOS supplement Pakistan'],
  alternates: { canonical: 'https://elsacoreindustry.pk/products/fertelsa' },
  openGraph: {
    title: 'Fertelsa Sachet Price in Pakistan – PKR 1,770 | Elsa Core Industry',
    description: 'Fertelsa Sachet price in Pakistan is PKR 1,770. Order online through WhatsApp with free delivery to your doorstep.',
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
