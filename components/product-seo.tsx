'use client'

import Link from 'next/link'

type ProductSeoProps = {
  name: string
  slug: string
  description: string
  image: string
  regularPrice: string
  salePrice: string
  priceNumber: number
  faqs: Array<{ question: string; answer: string }>
  related: Array<{ name: string; href: string }>
}

export function ProductSeoBlock({ name, slug, description, image, regularPrice, salePrice, priceNumber, faqs, related }: ProductSeoProps) {
  const url = `https://elsacoreindustry.pk/products/${slug}`
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: [image],
    brand: { '@type': 'Brand', name: 'Elsa Core Industry' },
    url,
    offers: {
      '@type': 'Offer',
      url,
      price: priceNumber,
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Elsa Core Industry' },
      priceSpecification: [
        { '@type': 'PriceSpecification', price: priceNumber, priceCurrency: 'PKR', name: 'Current sale price' },
        { '@type': 'PriceSpecification', price: Number(regularPrice.replaceAll(',', '')), priceCurrency: 'PKR', name: 'Regular price' },
      ],
    },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section id="order" className="py-16 lg:py-24 bg-card" aria-labelledby="order-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto rounded-3xl border border-border/40 bg-background p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Available to order online in Pakistan</p>
            <h2 id="order-heading" className="mt-3 text-3xl lg:text-4xl font-bold text-foreground font-serif">Order {name} Online</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{name} is available from Elsa Core Industry for online ordering through WhatsApp. Get free delivery directly to your doorstep.</p>
            <div className="mt-8 flex flex-wrap items-end gap-4" aria-label={`${name} price`}>
              <div>
                <p className="text-sm text-muted-foreground">Regular price</p>
                <p className="text-lg text-muted-foreground line-through">PKR {regularPrice}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-accent">Current sale price</p>
                <p className="text-3xl font-bold text-foreground">PKR {salePrice}</p>
              </div>
            </div>
            <p className="mt-5 text-base text-muted-foreground">Message us on WhatsApp to order {name} online, confirm your delivery details, and receive free doorstep delivery.</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-background" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-serif">{name} FAQs</h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-border/40 bg-card p-6">
                  <summary className="cursor-pointer font-semibold text-foreground">{faq.question}</summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
            <nav className="mt-10 border-t border-border/40 pt-6" aria-label="Related products">
              <p className="text-sm font-semibold text-foreground">Explore related products</p>
              <div className="mt-3 flex flex-wrap gap-4">
                {related.map((product) => <Link key={product.href} href={product.href} className="text-accent underline-offset-4 hover:underline">{product.name}</Link>)}
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export const productImages = {
  elfer: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260520-WA0007-RYiAbmxYeMNxqUFP99rLR7z6Travax.jpg',
  fertelsa: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260520-WA0004-fVVBdLg4IXP535VWB0RBjdtGYNAu4I.jpg',
  vagoric: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260520-WA0003-IohnUfXewGifZuTF3gWVBrtKfwsWgR.jpg',
}
