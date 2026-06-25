"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923233297883"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact Elsa Core Industry on WhatsApp"
    >
      {/* Tooltip with logo on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.9 }}
        whileHover={{ opacity: 1, x: 0, scale: 1 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 whitespace-nowrap"
      >
        <Image
          src="/images/logo.png"
          alt="Elsa Core Industry"
          width={24}
          height={24}
          className="object-contain"
        />
        <span className="text-sm font-medium text-foreground">Chat with us</span>
      </motion.div>

      {/* Main Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow">
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </div>
    </motion.a>
  )
}
