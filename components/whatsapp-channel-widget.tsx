'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppChannelWidget() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="pointer-events-none fixed bottom-0 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isVisible && (
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-3xl border border-accent/20 bg-card shadow-2xl shadow-primary/15 max-sm:max-h-28 max-sm:translate-y-6"
          >
            <div className="flex items-start justify-between gap-4 bg-primary px-5 py-4 text-primary-foreground sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15" aria-hidden="true">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">Daily wellness</p>
                  <h2 className="mt-1 font-serif text-lg font-bold">Daily Health Tips</h2>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://whatsapp.com/channel/0029VbD6dnR3wtbGmJBSbB3P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary-foreground/15 px-3 py-2 text-xs font-semibold sm:hidden"
                >
                  Join
                </a>
                <button
                  onClick={() => setIsVisible(false)}
                  className="rounded-full p-1.5 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground"
                  aria-label="Close health tips banner"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="hidden text-sm leading-6 text-muted-foreground sm:block">Join our official WhatsApp Channel and receive daily evidence-based health tips, healthy lifestyle guidance, nutrition recommendations, wellness education, and preventive healthcare updates.</p>
              <a
                href="https://whatsapp.com/channel/0029VbD6dnR3wtbGmJBSbB3P"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0 hidden w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 sm:mt-5 sm:inline-flex"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Join Our WhatsApp Channel
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsVisible(true)}
          className="pointer-events-auto flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/25"
          aria-label="Open daily health tips banner"
        >
          <MessageCircle className="size-6" />
        </motion.button>
      )}
    </div>
  )
}
