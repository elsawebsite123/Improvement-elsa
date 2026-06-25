"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Values', href: '#values' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ],
  categories: [
    { label: 'Women Wellness', href: '#products' },
    { label: 'Fertility Support', href: '#products' },
    { label: 'PCOS Support', href: '#products' },
    { label: 'Pregnancy Wellness', href: '#products' },
  ],
}

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/elsacoreindustry.pk' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/elsacoreindustry.pk' },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary/50 to-secondary pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-molecules opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column with Logo */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-4 mb-6 group">
              {/* Logo - Large and Dominant */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Elsa Core Industry Logo"
                  width={64}
                  height={64}
                  className="object-contain w-14 h-14 lg:w-16 lg:h-16 drop-shadow-sm"
                />
              </motion.div>
              {/* Company Name - Smaller than logo */}
              <div className="flex flex-col">
                <span className="text-base font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  Elsa Core Industry
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  Innovation for Wellness
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Pioneering premium nutraceutical solutions 
              for a healthier tomorrow.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.label}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">Soon</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="https://wa.me/923233297883" className="text-muted-foreground hover:text-primary transition-colors">
                  +92 323 329 7883
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@elsacoreindustry.pk" className="text-muted-foreground hover:text-primary transition-colors">
                  info@elsacoreindustry.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Elsa Core Industry. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Innovation for Wellness</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
