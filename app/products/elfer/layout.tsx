import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elfer Tablet Price in Pakistan – PKR 795 | Elsa Core Industry',
  description: 'Elfer Tablet price in Pakistan is PKR 795. Order online from Elsa Core Industry through WhatsApp with free delivery to your doorstep.',
  keywords: ['Elfer Tablet', 'Elfer Tablet price in Pakistan', 'buy Elfer Tablet online', 'Elfer Tablet free delivery', 'iron supplement Pakistan'],
  alternates: { canonical: 'https://elsacoreindustry.pk/products/elfer' },
  openGraph: {
    title: 'Elfer Tablet Price in Pakistan – PKR 795 | Elsa Core Industry',
    description: 'Elfer Tablet price in Pakistan is PKR 795. Order online through WhatsApp with free delivery to your doorstep.',
    url: 'https://elsacoreindustry.pk/products/elfer',
    type: 'website',
  },
}

export default function ElferLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
