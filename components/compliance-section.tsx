import { BadgeCheck, ShieldCheck, FileCheck2 } from 'lucide-react'

const certifications = [
  { title: 'GMP Certified', icon: BadgeCheck },
  { title: 'Halal Certified', icon: ShieldCheck },
  { title: 'DRAP Enlisted', icon: FileCheck2 },
]

export function ComplianceSection() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {certifications.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="glass-card rounded-3xl p-6 flex items-center justify-center gap-4 text-center"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
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
