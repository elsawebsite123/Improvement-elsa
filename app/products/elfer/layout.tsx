import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elfer Tablet - Iron & Micronutrient Support | Elsa Core Industry',
  description: 'Elfer Tablet offers advanced iron support with Ferrous Bisglycinate, L-Methylfolate, and B vitamins. Perfect for preconception, pregnancy, and daily wellness with enhanced iron absorption.',
  keywords: ['Elfer', 'iron supplement', 'Ferrous Bisglycinate', 'pregnancy wellness', 'preconception', 'B vitamins', 'nutraceutical'],
  openGraph: {
    title: 'Elfer Tablet - Iron & Micronutrient Support | Elsa Core Industry',
    description: 'Premium iron and micronutrient formula for healthy pregnancy and daily wellness.',
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
