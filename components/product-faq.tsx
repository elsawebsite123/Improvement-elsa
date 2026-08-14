import Link from 'next/link'

type ProductFaqProps = {
  name: string
  slug: string
  description: string
  image: string
  regularPrice: string
  salePrice: string
  priceNumber: number
  faqs: { question: string; answer: string }[]
  related: { name: string; href: string }[]
}

export function ProductFaq({ name, slug, description, image, regularPrice, salePrice, priceNumber, faqs, related }: ProductFaqProps) {
  const url = `https://elsacoreindustry.pk/products/${slug}`
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: { '@type': 'Brand', name: 'Elsa Core Industry' },
    url,
    offers: {
      '@type': 'Offer',
      price: priceNumber,
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
      url,
      seller: { '@type': 'Organization', name: 'Elsa Core Industry' },
    },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <section aria-labelledby={`${slug}-faq`} className="py-12 lg:py-16 bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 id={`${slug}-faq`} className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-serif">Frequently Asked Questions</h2>
          <p className="text-sm text-muted-foreground mb-6">{name} price: <strong className="text-foreground">PKR {salePrice}</strong> (regular price PKR {regularPrice}). Order online through Elsa Core Industry&apos;s existing WhatsApp ordering service with free doorstep delivery.</p>
          <div className="flex flex-col gap-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="rounded-2xl border border-border/40 bg-card px-5 py-4">
                <summary className="cursor-pointer font-semibold text-foreground">{question}</summary>
                <p className="pt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
          <nav aria-label="Related products" className="mt-6 flex flex-wrap gap-4 text-sm">
            {related.map((product) => <Link key={product.href} href={product.href} className="text-accent underline-offset-4 hover:underline">{product.name}</Link>)}
          </nav>
        </div>
      </div>
    </section>
  )
}
