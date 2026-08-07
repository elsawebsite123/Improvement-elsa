'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Leaf, MessageCircle } from 'lucide-react'

const CHANNEL_URL = 'https://whatsapp.com/channel/0029VbD6dnR3wtbGmJBSbB3P'

export function WhatsAppChannelWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const widgetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-5 sm:bottom-6 sm:justify-end sm:px-6">
      <motion.aside
        ref={widgetRef}
        layout
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="pointer-events-auto w-full max-w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-[20px] border border-white/20 bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30"
      >
        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          aria-controls="whatsapp-health-tips-details"
          className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-white/10 sm:px-5"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[18px] bg-white/15" aria-hidden="true">
            <Leaf className="size-5 text-white" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">Elsa Core Industry</span>
            <span className="mt-0.5 block truncate font-serif text-base font-bold">Daily Health Tips</span>
          </span>
          <span className="shrink-0 text-xs font-medium text-white/75">{isExpanded ? 'Close' : 'Learn more'}</span>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id="whatsapp-health-tips-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/20 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                <p className="text-sm leading-6 text-white/90">
                  Receive free daily health tips, nutrition guidance, wellness recommendations, and preventive healthcare updates from Elsa Core Industry.
                </p>
                <a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#128C7E] transition-colors duration-200 hover:bg-white/90"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Join WhatsApp Channel
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>
    </div>
  )
}
