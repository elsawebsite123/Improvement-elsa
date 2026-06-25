"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Award, Shield, Star, HandHeart } from 'lucide-react'

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering breakthrough wellness solutions through continuous research and development",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising commitment to the highest standards in every product we develop",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency, honesty, and ethical business practices",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for perfection in everything we do, from formulation to delivery",
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: HandHeart,
    title: "Trust",
    description: "Earning confidence through reliable products and genuine care for wellbeing",
    color: "from-rose-400 to-pink-500",
  },
]

export function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="values" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-molecules opacity-30" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full border border-accent/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full border border-primary/10"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The principles that guide every decision we make and every product we create
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-6 h-full text-center hover:border-accent/40 transition-all duration-500 hover-lift relative overflow-hidden">
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Animated Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-tl-3xl bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
