"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

export function FloatingWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappChannelLink = "https://whatsapp.com/channel/0029VbD6dnR3wtbGmJBSbB3P"

  const handleJoinChannel = () => {
    window.open(whatsappChannelLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Widget Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-80 bg-white rounded-3xl shadow-2xl shadow-primary/20 border border-primary/10 overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/5 px-6 py-6 border-b border-primary/10 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  🌿 Daily Health Tips
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join our official WhatsApp Channel for daily evidence-based health tips, healthy lifestyle recommendations, nutrition guidance, preventive healthcare advice, and patient education to help you and your family live healthier.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-3 flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/50 hover:bg-white text-foreground transition-colors duration-200"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Button */}
            <div className="px-6 py-4 bg-white">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleJoinChannel}
                className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Join Our WhatsApp Channel
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 relative group z-50 pointer-events-auto"
        aria-label="WhatsApp Channel"
      >
        {/* Pulse animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-500/20 -z-10 pointer-events-none"
        />
        
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 rounded-full bg-green-500/10 -z-10 pointer-events-none"
        />

        <MessageCircle size={24} className="drop-shadow-sm relative z-10" />

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none"
        >
          Daily Health Tips
        </motion.div>
      </motion.button>
    </div>
  )
}
