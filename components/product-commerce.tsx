'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Truck } from 'lucide-react'

type ProductCommerceProps = {
  productName: string
  oldPrice: string
  price: string
}

export function ProductCommerce({ productName, oldPrice, price }: ProductCommerceProps) {
  return (
    <div className="mt-12 flex flex-col gap-5">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        aria-label={`${productName} pricing`}
        className="rounded-3xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5 sm:p-8"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Premium care, made accessible</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">Order {productName}</h2>
          </div>
          <div className="flex items-baseline gap-3" aria-label={`Price ${price}`}>
            <span className="text-base text-muted-foreground line-through">{oldPrice}</span>
            <span className="text-3xl font-bold text-primary">{price}</span>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.08 }}
        aria-label="Free delivery"
        className="rounded-3xl border border-accent/20 bg-primary p-6 text-primary-foreground shadow-lg shadow-primary/15 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15" aria-hidden="true">
              <Truck className="size-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/80">Free delivery</p>
              <h2 className="mt-1 font-serif text-2xl font-bold">Get your medicine at your doorstep</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-primary-foreground/80">Order directly through WhatsApp and have your products delivered to your doorstep.</p>
            </div>
          </div>
          <a
            href="https://wa.me/923233297883"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Order on WhatsApp
          </a>
        </div>
      </motion.section>
    </div>
  )
}
