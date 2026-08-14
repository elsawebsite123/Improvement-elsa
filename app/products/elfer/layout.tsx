import type { Metadata } from 'next'

const url = 'https://elsacoreindustry.pk/products/elfer'
const title = 'Elfer Tablet Price in Pakistan – PKR 795 | Order Online'
const description = 'Elfer Tablet price in Pakistan is PKR 795. Order online from Elsa Core Industry through WhatsApp and get free delivery to your doorstep.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Elfer Tablet', 'Elfer Tablet price in Pakistan', 'buy Elfer Tablet online', 'Elfer Tablet free delivery', 'iron supplement Pakistan'],
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: 'Elsa Core Industry', type: 'website', locale: 'en_PK' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function ElferLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
