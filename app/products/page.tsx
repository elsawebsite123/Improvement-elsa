import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ProductsPageContent } from '@/components/products-page-content'

export const metadata = {
  title: 'Products | Elsa Core Industry',
  description: 'Explore our premium line of nutraceutical and wellness products scientifically formulated for optimal health.',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProductsPageContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
