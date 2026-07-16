import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ValuesSection } from '@/components/values-section'
import { WhatsAppChannelWidget } from '@/components/whatsapp-channel-widget'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <WhatsAppChannelWidget />
    </main>
  )
}
