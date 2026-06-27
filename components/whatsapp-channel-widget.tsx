"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, Leaf } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppChannelWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handleJoinChannel = () => {
    window.open('https://whatsapp.com/channel/0029VbD6dnR3wtbGmJBSbB3P', '_blank')
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 right-6 z-40 w-80 md:w-96"
        >
          {/* Expanded Card */}
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl border border-accent/20 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-accent via-emerald-500 to-green-500 px-6 py-6 relative overflow-hidden">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-white text-2xl"
                      >
                        🌿
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-white text-lg font-serif">Daily Health Tips</h3>
                        <p className="text-white/90 text-xs font-medium">Stay informed, stay healthy</p>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-white/80 hover:text-white transition-colors p-1"
                      aria-label="Close widget"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-5 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Join our official WhatsApp Channel for daily evidence-based health tips, healthy lifestyle recommendations, nutrition guidance, preventive healthcare advice, and patient education to help you and your family live healthier.
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 py-2">
                    {[
                      "Daily evidence-based health tips",
                      "Nutrition & wellness guidance",
                      "Preventive healthcare advice",
                      "Patient education resources"
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={handleJoinChannel}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-accent to-green-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Join Our WhatsApp Channel</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.025 0-2.031.313-2.876.893l-.192.12-1.974-.52.529 1.909.034.171c-.726.935-1.142 2.071-1.142 3.311 0 3.366 2.736 6.102 6.102 6.102 1.628 0 3.16-.635 4.307-1.784 1.147-1.147 1.783-2.679 1.783-4.307 0-3.366-2.736-6.102-6.102-6.102zm0-1.081c1.268 0 2.504.408 3.534 1.158l.254.177 1.583-.416-.428 1.542.077.234c.88 1.183 1.38 2.645 1.38 4.205 0 4.015-3.268 7.284-7.284 7.284-1.33 0-2.612-.356-3.71-1.033l-.254-.177-1.606.422.45-1.627-.077-.235C2.35 15.992 1.5 14.19 1.5 12.172 1.5 8.157 4.768 4.889 8.783 4.889z"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                onClick={() => setIsExpanded(true)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white rounded-2xl shadow-lg border border-accent/20 p-4 text-left hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl flex-shrink-0"
                  >
                    🌿
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm font-serif">Daily Health Tips</p>
                    <p className="text-xs text-muted-foreground truncate">Join our WhatsApp Channel</p>
                  </div>
                  <svg className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Pulse indicator */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
