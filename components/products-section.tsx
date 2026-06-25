"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const products = [
  {
    name: "Fertelsa",
    subtitle: "Fertility Support",
    description: "Myo Inositol with Probiotics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260520-WA0004-fVVBdLg4IXP535VWB0RBjdtGYNAu4I.jpg",
    highlights: ["Hormonal Balance", "Digestive Microbiome", "Insulin & Glucose Metabolism", "Nutrient Absorption"],
  },
  {
    name: "Elfer",
    subtitle: "Daily Wellness",
    description: "Iron, Folic Acid & B-Complex",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260520-WA0007-RYiAbmxYeMNxqUFP99rLR7z6Travax.jpg",
    highlights: ["Ferrous Bisglycinate", "Folic Acid", "Vitamin B12, B6 & C", "Enhanced Zinc"],
  },
  {
    name: "Vagoric",
    subtitle: "Women Wellness",
    description: "Vaginal Microbiome & pH Support Gel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260520-WA0003-IohnUfXewGifZuTF3gWVBrtKfwsWgR.jpg",
    highlights: ["Microbiome Balance", "pH Support", "Prebiotic Formula", "Gut Health"],
  },
]

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" className="py-24 lg:py-32 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Premium Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/3 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">
            Premium Product Line
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Scientifically formulated nutraceutical solutions designed for optimal wellness 
            and supported by advanced pharmaceutical standards.
          </p>
        </motion.div>

        {/* Products Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-3xl overflow-hidden bg-white border border-border/40 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-primary/8 hover-lift">
                
                {/* Product Image Container with Elegant Background */}
                <div className="relative h-72 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden flex items-center justify-center p-6">
                  {/* Subtle Radial Gradient Behind Product */}
                  <div className="absolute inset-0 bg-radial-gradient from-white via-transparent to-slate-100 opacity-60" />
                  
                  {/* Product Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={280}
                      height={280}
                      className="object-contain h-full w-full filter group-hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />
                  </div>

                  {/* Soft Shadow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="px-6 py-8 bg-white relative">
                  {/* Product Name */}
                  <h3 className="text-2xl font-bold text-foreground mb-1 font-serif">
                    {product.name}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
                    {product.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-3 mb-6">
                    {product.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-xs text-muted-foreground font-medium">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mb-6" />

                  {/* Bottom Label */}
                  <div className="text-xs text-muted-foreground text-center font-medium">
                    Premium Nutraceutical
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Each product is crafted with precision and backed by scientific research to ensure 
            superior quality and efficacy.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
