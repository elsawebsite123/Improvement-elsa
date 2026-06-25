"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Award, Shield, Star, HandHeart, Beaker, Atom, Dna } from 'lucide-react'
import Image from 'next/image'

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering wellness solutions through science-driven formulations",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising premium standards in every product",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency and ethics",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for perfection from formulation to delivery",
  },
  {
    icon: HandHeart,
    title: "Trust",
    description: "Genuine care for your health and wellbeing",
  },
]

const healthTips = [
  "Hydration supports daily wellness",
  "Balanced nutrition supports immunity",
  "Quality sleep improves recovery",
  "Regular movement enhances vitality",
  "Mindfulness reduces daily stress",
  "Vitamins support cellular health",
  "Omega-3 aids cognitive function",
  "Probiotics improve gut health",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const duplicatedTips = [...healthTips, ...healthTips]

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Main About Content */}
      <div className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-secondary/40 relative">
        {/* Biotech Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* DNA Helix Pattern */}
          <svg className="absolute top-20 left-10 w-32 h-64 opacity-[0.04]" viewBox="0 0 100 200">
            <path d="M20 0 Q80 50 20 100 Q-40 150 20 200" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <path d="M80 0 Q20 50 80 100 Q140 150 80 200" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            {[0, 25, 50, 75, 100, 125, 150, 175].map((y) => (
              <line key={y} x1="20" y1={y} x2="80" y2={y} stroke="currentColor" strokeWidth="1" className="text-primary" />
            ))}
          </svg>

          {/* Molecule Structure */}
          <svg className="absolute top-40 right-20 w-48 h-48 opacity-[0.03]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <circle cx="150" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <circle cx="50" cy="150" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <circle cx="150" cy="150" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <line x1="100" y1="80" x2="62" y2="62" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <line x1="100" y1="80" x2="138" y2="62" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <line x1="100" y1="120" x2="62" y2="138" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <line x1="100" y1="120" x2="138" y2="138" stroke="currentColor" strokeWidth="2" className="text-accent" />
          </svg>

          {/* Floating Atoms */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 left-[15%] opacity-[0.05]"
          >
            <Atom className="w-24 h-24 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-60 right-[10%] opacity-[0.04]"
          >
            <Dna className="w-20 h-20 text-accent" />
          </motion.div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-6"
            >
              <Beaker className="w-4 h-4" />
              About Us
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Innovation for Wellness
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
            {/* Left: Laboratory Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glassmorphism Card */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-900/80 dark:to-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl overflow-hidden">
                  {/* Inner Content - Lab Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <svg className="w-full h-full max-w-xs" viewBox="0 0 300 300">
                      {/* Beaker */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                      >
                        <path 
                          d="M100 60 L100 180 Q100 220 140 230 L160 230 Q200 220 200 180 L200 60" 
                          fill="none" 
                          stroke="oklch(0.35 0.12 240)" 
                          strokeWidth="3"
                          className="opacity-70"
                        />
                        <ellipse cx="150" cy="60" rx="50" ry="12" fill="none" stroke="oklch(0.35 0.12 240)" strokeWidth="3" className="opacity-70" />
                        
                        {/* Liquid with Animation */}
                        <motion.path 
                          d="M105 160 Q105 200 140 210 L160 210 Q195 200 195 160 L195 140 L105 140 Z" 
                          fill="oklch(0.65 0.12 185)" 
                          className="opacity-30"
                          animate={{ d: [
                            "M105 160 Q105 200 140 210 L160 210 Q195 200 195 160 L195 140 L105 140 Z",
                            "M105 155 Q105 200 140 210 L160 210 Q195 200 195 155 L195 135 L105 135 Z",
                            "M105 160 Q105 200 140 210 L160 210 Q195 200 195 160 L195 140 L105 140 Z"
                          ]}}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        
                        {/* Bubbles */}
                        <motion.circle 
                          cx="130" cy="170" r="6" 
                          fill="oklch(0.65 0.12 185)" 
                          className="opacity-50"
                          animate={{ y: [0, -30], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                        />
                        <motion.circle 
                          cx="160" cy="180" r="4" 
                          fill="oklch(0.65 0.12 185)" 
                          className="opacity-40"
                          animate={{ y: [0, -40], opacity: [0.4, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.circle 
                          cx="145" cy="160" r="5" 
                          fill="oklch(0.65 0.12 185)" 
                          className="opacity-60"
                          animate={{ y: [0, -35], opacity: [0.6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      </motion.g>

                      {/* Flask */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7 }}
                      >
                        <path 
                          d="M240 80 L240 160 L220 240 L260 240 L240 160 Z" 
                          fill="none" 
                          stroke="oklch(0.65 0.12 185)" 
                          strokeWidth="3"
                          className="opacity-70"
                        />
                        <ellipse cx="240" cy="80" rx="20" ry="6" fill="none" stroke="oklch(0.65 0.12 185)" strokeWidth="3" className="opacity-70" />
                        <path 
                          d="M225 200 L232 180 L248 180 L255 200 Q240 210 225 200" 
                          fill="oklch(0.35 0.12 240)" 
                          className="opacity-20"
                        />
                      </motion.g>

                      {/* Molecule Structure */}
                      <motion.g 
                        transform="translate(50, 220)"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 }}
                      >
                        <circle cx="0" cy="0" r="15" fill="oklch(0.35 0.12 240)" className="opacity-50" />
                        <circle cx="45" cy="-25" r="12" fill="oklch(0.65 0.12 185)" className="opacity-50" />
                        <circle cx="45" cy="25" r="12" fill="oklch(0.65 0.12 185)" className="opacity-50" />
                        <circle cx="90" cy="0" r="10" fill="oklch(0.50 0.12 212)" className="opacity-50" />
                        <line x1="15" y1="-5" x2="33" y2="-20" stroke="oklch(0.35 0.12 240)" strokeWidth="3" className="opacity-50" />
                        <line x1="15" y1="5" x2="33" y2="20" stroke="oklch(0.35 0.12 240)" strokeWidth="3" className="opacity-50" />
                        <line x1="57" y1="-15" x2="80" y2="-5" stroke="oklch(0.65 0.12 185)" strokeWidth="3" className="opacity-50" />
                        <line x1="57" y1="15" x2="80" y2="5" stroke="oklch(0.65 0.12 185)" strokeWidth="3" className="opacity-50" />
                      </motion.g>
                    </svg>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 right-8 px-5 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-xl"
                >
                  <span className="text-sm font-semibold text-primary">Science-Driven</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 left-8 px-5 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-xl"
                >
                  <span className="text-sm font-semibold text-accent">Premium Quality</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -left-4 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 shadow-lg"
                >
                  <span className="text-xs font-medium text-primary">Karachi, Pakistan</span>
                </motion.div>

                {/* Decorative Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-6">
                {/* Logo in About Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Elsa Core Industry Logo"
                    width={64}
                    height={64}
                    className="object-contain w-14 h-14 lg:w-16 lg:h-16 drop-shadow-sm"
                  />
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      Elsa Core Industry
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Innovation for Wellness
                    </p>
                  </div>
                </motion.div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Elsa Core Industry is a Karachi-based nutraceutical company focused on delivering 
                  innovative wellness solutions through science-driven formulations and premium quality standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The company specializes in outsourced manufacturing partnerships while building a 
                  future-focused healthcare brand dedicated to integrity, trust, and wellness innovation.
                </p>
              </div>

              {/* Stats/Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"
                >
                  <div className="text-2xl font-bold text-primary mb-1">Karachi</div>
                  <div className="text-sm text-muted-foreground">Headquarters</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/10"
                >
                  <div className="text-2xl font-bold text-accent mb-1">Wellness</div>
                  <div className="text-sm text-muted-foreground">Our Focus</div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make and every product we develop
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative h-full p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/10 group-hover:to-primary/5 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300"
                      >
                        <value.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                      </motion.div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Health Tips Scrolling Banner */}
      <div className="py-10 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border/50 overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-accent">
            Wellness Tips
          </span>
        </motion.div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Content */}
          <div className="flex gap-8 animate-scroll-left hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {duplicatedTips.map((tip, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 whitespace-nowrap cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="text-sm font-medium text-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
