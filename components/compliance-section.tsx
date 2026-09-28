const certifications = [
  {
    title: 'GMP Certified',
    image: '/images/gmp-certified-stamp.png',
  },
  {
    title: 'Halal Certified',
    image: '/images/halal-certified-stamp.png',
  },
  {
    title: 'DRAP Enlisted',
    image: '/images/drap-enlisted-stamp.png',
  },
]

export function ComplianceSection() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {certifications.map(({ title, image }, index) => (
            <div
              key={title}
              className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center gap-3 text-center"
            >
              <img
                src={image}
                alt={title}
                className="h-28 w-28 object-contain animate-float-slow"
                style={{ animationDelay: `${index * 0.8}s` }}
              />
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                {title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
