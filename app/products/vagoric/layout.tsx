import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vagoric Gel - Intimate Wellness & Vaginal Health | Elsa Core Industry',
  description: 'Vagoric Gel combines boric acid with prebiotics, aloe vera, and hyaluronic acid for intimate wellness. Supports healthy vaginal pH and microbiome balance with soothing hydration.',
  keywords: ['Vagoric', 'vaginal health', 'intimate wellness', 'pH balance', 'microbiome', 'boric acid', 'nutraceutical'],
  openGraph: {
    title: 'Vagoric Gel - Intimate Wellness & Vaginal Health | Elsa Core Industry',
    description: 'Advanced vaginal care gel for comfort, balance, and intimate wellness.',
    url: 'https://elsacoreindustry.pk/products/vagoric',
    type: 'website',
  },
}

export default function VagoriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
