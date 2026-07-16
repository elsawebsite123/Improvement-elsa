'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppChannelWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 relative pointer-events-auto cursor-pointer"
        aria-label="WhatsApp Channel"
      >
        {/* Pulse animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-500/20 -z-10 pointer-events-none"
        />
        <MessageCircle size={24} className="drop-shadow-sm relative z-10" />
      </motion.button>

      {/* Widget Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-80 bg-white rounded-3xl shadow-2xl shadow-green-500/20 border border-green-500/20 overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">🌿 Daily Health Tips</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600/50 p-1 rounded transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Join our official WhatsApp Channel for daily evidence-based health tips, healthy lifestyle recommendations, nutrition guidance, preventive healthcare advice, and patient education to help you and your family live healthier.
              </p>
              
              {/* Button */}
              <a
                href="https://whatsapp.com/channel/0029VbD6dnR3wtbGmJBSbB3P"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle size={18} />
                Join Our WhatsApp Channel
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
