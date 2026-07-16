"use client"

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  isLoading?: boolean
  minDuration?: number
}

export function LoadingScreen({ isLoading = true, minDuration = 2000 }: LoadingScreenProps) {
  const [showLoader, setShowLoader] = useState(isLoading)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowLoader(false), minDuration)
      return () => clearTimeout(timer)
    }
    setShowLoader(true)
  }, [isLoading, minDuration])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Subtle molecules */}
            <svg className="absolute top-20 left-[15%] w-16 h-16 text-primary/10 animate-float" viewBox="0 0 100 100">
              <circle cx="30" cy="30" r="6" fill="currentColor" />
              <circle cx="70" cy="70" r="4" fill="currentColor" />
              <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <svg className="absolute bottom-20 right-[15%] w-12 h-12 text-accent/10 animate-float-slow" viewBox="0 0 100 100">
              <circle cx="50" cy="20" r="5" fill="currentColor" />
              <circle cx="20" cy="70" r="4" fill="currentColor" />
              <circle cx="80" cy="70" r="4" fill="currentColor" />
              <line x1="50" y1="20" x2="20" y2="70" stroke="currentColor" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="80" y2="70" stroke="currentColor" strokeWidth="1.5" />
              <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Logo and Brand */}
          <div className="flex flex-col items-center gap-6 relative z-10">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow ring animation */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
              />
              
              {/* Logo with pulse */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Elsa Core Industry Logo"
                  width={120}
                  height={120}
                  className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 drop-shadow-md relative z-10"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-1 max-w-fit mx-auto">
                Elsa Core Industry
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest max-w-fit mx-auto">
                Innovation for Wellness
              </p>
            </motion.div>

            {/* Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mt-4"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 rounded-full bg-primary/70"
              />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 rounded-full bg-primary/40"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
