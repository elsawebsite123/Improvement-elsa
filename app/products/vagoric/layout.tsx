import type { Metadata } from 'next'

const url = 'https://elsacoreindustry.pk/products/vagoric'
const title = 'Vagoric Gel Price in Pakistan – PKR 780 | Order Online'
const description = 'Vagoric Gel price in Pakistan is PKR 780. Order online from Elsa Core Industry through WhatsApp and get free delivery to your doorstep.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Vagoric Gel', 'Vagoric Gel price in Pakistan', 'buy Vagoric Gel online', 'Vagoric free delivery', 'vaginal gel Pakistan', 'women intimate wellness Pakistan'],
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: 'Elsa Core Industry', type: 'website', locale: 'en_PK' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function VagoriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
