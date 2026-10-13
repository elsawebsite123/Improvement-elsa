'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, MessageCircle, X } from 'lucide-react'

export function WhatsAppChannelWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed inset-x-5 bottom-4 z-40 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[360px] pointer-events-none">
      {/* Floating banner */}
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex w-full min-h-[66px] items-center gap-3 rounded-2xl bg-gradient-to-r from-[#58e398] to-[#45d47f] px-4 text-white shadow-xl shadow-green-900/15 transition-all duration-300 pointer-events-auto cursor-pointer"
        aria-label="ELSA CORE INDUSTRY Daily Health Tips Learn more"
        aria-expanded={isOpen}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
          <Leaf size={22} strokeWidth={1.8} />
        </span>
        <span className="flex-1 text-left leading-tight">
          <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90">Elsa Core Industry</span>
          <span className="block whitespace-nowrap font-serif text-base font-bold">Daily Health Tips</span>
        </span>
        <span className="shrink-0 text-sm font-medium text-white/90">Learn more</span>
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
