"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Store navbar state for external access
let navbarStateRef: { openProducts: () => void } | null = null

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { label: 'Products', submenu: true },
  { href: '/#values', label: 'Our Values' },
  { href: '/#contact', label: 'Contact' },
]

const productLinks = [
  { href: '/products/fertelsa', label: 'Fertelsa Sachet' },
  { href: '/products/elfer', label: 'Elfer Tablet' },
  { href: '/products/vagoric', label: 'Vagoric Gel' },
]

// Subtle DNA/Molecule pattern component
function BiotechPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating molecules */}
      <svg className="absolute top-1/2 left-8 -translate-y-1/2 w-16 h-16 opacity-[0.04]" viewBox="0 0 100 100">
        <circle cx="20" cy="50" r="6" fill="currentColor" className="text-primary" />
        <circle cx="50" cy="30" r="4" fill="currentColor" className="text-accent" />
        <circle cx="80" cy="50" r="5" fill="currentColor" className="text-primary" />
        <circle cx="50" cy="70" r="4" fill="currentColor" className="text-accent" />
        <line x1="20" y1="50" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-primary/60" />
        <line x1="50" y1="30" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" className="text-primary/60" />
        <line x1="80" y1="50" x2="50" y2="70" stroke="currentColor" strokeWidth="1.5" className="text-primary/60" />
        <line x1="50" y1="70" x2="20" y2="50" stroke="currentColor" strokeWidth="1.5" className="text-primary/60" />
      </svg>
      
      {/* DNA helix hint on right */}
      <svg className="absolute top-1/2 right-32 -translate-y-1/2 w-20 h-12 opacity-[0.03] hidden xl:block" viewBox="0 0 120 60">
        <path d="M10 30 Q30 10 50 30 Q70 50 90 30 Q110 10 130 30" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent" />
        <path d="M10 30 Q30 50 50 30 Q70 10 90 30 Q110 50 130 30" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        {/* Connection bars */}
        <line x1="30" y1="20" x2="30" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
        <line x1="50" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
        <line x1="70" y1="20" x2="70" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
        <line x1="90" y1="30" x2="90" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
      </svg>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.02] to-transparent" />
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)

  // Store state ref for external access
  useEffect(() => {
    navbarStateRef = {
      openProducts: () => setIsProductsDropdownOpen(true)
    }
    return () => {
      navbarStateRef = null
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-gray-100/50' 
            : 'bg-gradient-to-b from-white/95 via-white/90 to-white/80 backdrop-blur-md'
        }`}
      >
        {/* Biotech background pattern */}
        <BiotechPattern />
        
        <nav className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo Section with Company Name and Tagline */}
            <Link 
              href="/" 
              className="flex items-center gap-3 lg:gap-4 z-50 group py-2"
            >
              {/* Logo Image - Larger and Dominant */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Elsa Core Industry Logo"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full drop-shadow-sm"
                    priority
                  />
                </div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
              
              {/* Company Name and Tagline - Smaller than logo */}
              <div className="flex flex-col">
                <span className="text-sm lg:text-base font-semibold text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                  Elsa Core Industry
                </span>
                <span className="text-[9px] lg:text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                  Innovation for Wellness
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.submenu ? (
                  <div key="products" className="relative group">
                    <button
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative py-2 flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" style={{transform: isProductsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setIsProductsDropdownOpen(true)}
                          onMouseLeave={() => setIsProductsDropdownOpen(false)}
                          className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-xl border border-border/20 py-2 min-w-max z-50"
                        >
                          {productLinks.map((product, index) => (
                            <motion.div
                              key={product.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={product.href}
                                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 flex items-center gap-2 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                              >
                                {product.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group py-2"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                )
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100/80 text-foreground hover:bg-gray-200 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header with Logo - Logo Dominant */}
                <div className="flex items-center gap-3 p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50/50 to-white">
                  <Image
                    src="/images/logo.png"
                    alt="Elsa Core Industry"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-foreground">Elsa Core Industry</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Innovation for Wellness</span>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  <nav className="px-4 space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.submenu ? 'products' : link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        {link.submenu ? (
                          <div>
                            <button
                              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                              className="w-full flex items-center justify-between px-4 py-3.5 text-base font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 rounded-xl transition-all duration-200"
                            >
                              {link.label}
                              <ChevronDown className="w-4 h-4 transition-transform duration-300" style={{transform: isMobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                            </button>
                            <AnimatePresence>
                              {isMobileProductsOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ps-6 space-y-1 pt-2">
                                    {productLinks.map((product) => (
                                      <Link
                                        key={product.href}
                                        href={product.href}
                                        onClick={() => {
                                          setIsMobileMenuOpen(false)
                                          setIsMobileProductsOpen(false)
                                        }}
                                        className="flex items-center px-4 py-3.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 rounded-lg transition-all duration-200"
                                      >
                                        {product.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center px-4 py-3.5 text-base font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 rounded-xl transition-all duration-200"
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Bottom Section */}
                <div className="p-4 border-t border-gray-100 bg-gradient-to-t from-gray-50/80 to-white">
                  {/* CTA Button */}
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-4 py-3.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 mb-4"
                  >
                    Get in Touch
                  </Link>

                  {/* Quick Contact */}
                  <div className="space-y-2">
                    <a
                      href="https://wa.me/923233297883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-white transition-colors"
                    >
                      <Phone size={14} />
                      <span>+92 323 329 7883</span>
                    </a>
                    <a
                      href="mailto:info@elsacoreindustry.pk"
                      className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-white transition-colors"
                    >
                      <Mail size={14} />
                      <span>info@elsacoreindustry.pk</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export function openProductsDropdown() {
  navbarStateRef?.openProducts()
}
