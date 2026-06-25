"use client"

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-molecules">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Molecules */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-accent/10 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-[15%] w-48 h-48 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-[20%] w-40 h-40 rounded-full bg-accent/8 blur-2xl"
        />
        
        {/* Molecule Illustrations */}
        <svg className="absolute top-32 right-[25%] w-20 h-20 text-primary/20 animate-float" viewBox="0 0 100 100">
          <circle cx="30" cy="30" r="8" fill="currentColor" />
          <circle cx="70" cy="30" r="6" fill="currentColor" />
          <circle cx="50" cy="70" r="10" fill="currentColor" />
          <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="2" />
          <line x1="70" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="2" />
        </svg>
        
        <svg className="absolute bottom-48 right-[10%] w-16 h-16 text-accent/25 animate-float-slow" viewBox="0 0 100 100">
          <circle cx="20" cy="50" r="6" fill="currentColor" />
          <circle cx="50" cy="20" r="8" fill="currentColor" />
          <circle cx="80" cy="50" r="6" fill="currentColor" />
          <circle cx="50" cy="80" r="7" fill="currentColor" />
          <line x1="20" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="80" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="80" x2="20" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>

        {/* DNA Helix Pattern */}
        <svg className="absolute top-1/2 left-[5%] w-12 h-48 text-primary/15 animate-pulse-glow" viewBox="0 0 50 200">
          <path d="M10 0 Q40 25 10 50 Q40 75 10 100 Q40 125 10 150 Q40 175 10 200" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M40 0 Q10 25 40 50 Q10 75 40 100 Q10 125 40 150 Q10 175 40 200" stroke="currentColor" fill="none" strokeWidth="2" />
          <line x1="10" y1="25" x2="40" y2="25" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="75" x2="40" y2="75" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="125" x2="40" y2="125" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="175" x2="40" y2="175" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Premium Nutraceuticals</span>
          </motion.div>

          {/* Logo - Large and Dominant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="Elsa Core Industry Logo"
                width={140}
                height={140}
                className="object-contain w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 drop-shadow-md"
                priority
              />
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl -z-10" />
            </motion.div>
          </motion.div>

          {/* Company Name - Smaller than logo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3"
          >
            <span className="block">Elsa Core Industry</span>
          </motion.h1>

          {/* Tagline - Even smaller */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-light text-primary mb-4 tracking-wide"
          >
            Innovation for Wellness
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Pioneering the future of healthcare with premium nutraceutical solutions. 
            Committed to quality, innovation, and your wellness journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#products"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex items-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full text-base font-medium hover:bg-secondary/80 transition-all duration-300 border border-border"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
