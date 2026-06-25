"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Heart, Leaf, Sun, Moon, Droplet, Apple, Brain } from 'lucide-react'

const healthTips = [
  { icon: Sparkles, text: "Stay hydrated with 8 glasses of water daily" },
  { icon: Heart, text: "Regular exercise boosts cardiovascular health" },
  { icon: Leaf, text: "Include green vegetables in every meal" },
  { icon: Sun, text: "Get 15 minutes of morning sunlight for Vitamin D" },
  { icon: Moon, text: "Quality sleep is essential for recovery" },
  { icon: Droplet, text: "Omega-3 fatty acids support brain function" },
  { icon: Apple, text: "Eat a variety of colorful fruits daily" },
  { icon: Brain, text: "Mental wellness is as important as physical health" },
  { icon: Sparkles, text: "Probiotics support digestive health" },
  { icon: Heart, text: "Manage stress through mindfulness practices" },
  { icon: Leaf, text: "Antioxidants help fight cellular damage" },
  { icon: Sun, text: "Maintain a balanced diet for optimal nutrition" },
]

export function HealthTipsTicker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Double the tips array for seamless loop
  const duplicatedTips = [...healthTips, ...healthTips]

  return (
    <section ref={ref} className="py-12 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 overflow-hidden relative">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
          <Sparkles className="w-4 h-4" />
          Wellness Tips
        </span>
      </motion.div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {duplicatedTips.map((tip, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-border/50 hover:border-accent/30 transition-all duration-300 whitespace-nowrap group cursor-default"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <tip.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{tip.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
