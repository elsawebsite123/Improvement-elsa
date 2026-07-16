"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Globe, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+92 323 329 7883",
      href: "https://wa.me/923233297883",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@elsacoreindustry.pk",
      href: "mailto:info@elsacoreindustry.pk",
    },
    {
      icon: Globe,
      label: "Website",
      value: "elsacoreindustry.pk",
      href: "https://elsacoreindustry.pk",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/elsacoreindustry.pk" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/elsacoreindustry.pk" },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-molecules opacity-30" />
      
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Logo - Prominent placement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/images/logo.png"
              alt="Elsa Core Industry Logo"
              width={80}
              height={80}
              className="object-contain w-16 h-16 md:w-20 md:h-20 drop-shadow-sm"
            />
          </motion.div>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {"Let's"} Connect
          </h2>
          <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground mb-2 max-w-fit mx-auto">Elsa Core Industry</p>
          <p className="text-lg sm:text-lg md:text-lg text-primary uppercase tracking-wider mb-6 max-w-fit mx-auto">Innovation for Wellness</p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our upcoming products or want to learn more? 
            {"We'd"} love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-border/50 hover:border-accent/40 transition-all duration-300 hover-lift group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-6 border-t border-border"
            >
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : submitted ? (
                  <>
                    Message Sent!
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
