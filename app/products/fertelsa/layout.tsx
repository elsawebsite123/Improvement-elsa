import type { Metadata } from 'next'

const url = 'https://elsacoreindustry.pk/products/fertelsa'
const title = 'Fertelsa Sachet Price in Pakistan – PKR 1,770 | Order Online'
const description = 'Fertelsa Sachet price in Pakistan is PKR 1,770. Order online from Elsa Core Industry through WhatsApp and get free delivery to your doorstep.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Fertelsa Sachet', 'Fertelsa price in Pakistan', 'buy Fertelsa online', 'Fertelsa free delivery', 'myo inositol sachet Pakistan', 'PCOS supplement Pakistan'],
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: 'Elsa Core Industry', type: 'website', locale: 'en_PK' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function FertelsaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
