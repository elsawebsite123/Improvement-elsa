'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { FloatingWhatsAppWidget } from '@/components/floating-whatsapp-widget'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function VagoricPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Helps maintain a healthy vaginal pH",
    "Supports the natural vaginal microbiome",
    "Promotes vaginal comfort and freshness",
    "Provides soothing hydration to the vaginal mucosa",
    "Helps relieve dryness and discomfort",
    "Supports feminine intimate wellness"
  ]

  const ingredients = [
    { name: "Boric Acid", amount: "600 mg" },
    { name: "Inulin", amount: "120 mg" },
    { name: "Aloe Vera Extract", amount: "50 mg" },
    { name: "Hyaluronic Acid", amount: "5 mg" }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/3 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">
              Intimate Wellness
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
              Vagoric Gel
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Advanced Vaginal Care for Comfort, Balance & Intimate Wellness
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Vagoric Gel is an advanced vaginal gel formulated to support intimate wellness by combining boric acid with prebiotic, moisturizing, and soothing ingredients. The unique formulation is designed to help maintain a healthy vaginal environment while promoting comfort and supporting the natural vaginal microbiome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Image & Overview */}
      <section className="py-16 lg:py-24 bg-background relative" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260520-WA0003-IohnUfXewGifZuTF3gWVBrtKfwsWgR.jpg"
                  alt="Vagoric Gel"
                  width={300}
                  height={400}
                  className="object-contain h-full w-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-serif">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-2" />
                    <p className="text-base text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Formula */}
      <section className="py-16 lg:py-24 bg-card relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 font-serif text-center">
              Advanced Formula
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-background border border-border/40 hover:border-accent/30 transition-all"
                >
                  <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
                    {ingredient.name}
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {ingredient.amount}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-serif">
              Why use Vagoric?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Vagoric Gel combines boric acid with the nourishing benefits of inulin, aloe vera, and hyaluronic acid to provide comprehensive support for vaginal health. The formulation is designed to help maintain microbial balance while delivering soothing hydration for enhanced comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suggested Use */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 border border-border/20"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 font-serif">
              Suggested Use
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use 2/3 of the given applicator intravaginally at bedtime or as directed by your healthcare professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              This product is intended for vaginal use only. Use only as directed by a qualified healthcare professional. If symptoms persist, worsen, or recur frequently, seek medical advice. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <FloatingWhatsAppWidget />
    </main>
  )
}
