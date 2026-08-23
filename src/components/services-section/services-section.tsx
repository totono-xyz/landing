const SERVICES = [
  [
    'Custom web applications',
    'From first prototype to production, on a stack your team can maintain.',
  ],
  [
    'Backend systems & APIs',
    'Services, integrations and data pipelines built for reliability under load.',
  ],
  ['Learning platforms & ed-tech', 'Courses, cohorts, assessments and the tooling behind them.'],
  ['Architecture & fractional CTO', 'Technical due diligence and senior guidance, part-time.'],
]

function ServicesSection() {
  return (
    <section className="relative z-10 mt-32 max-w-4xl">
      <span className="text-secondary mb-8 block font-sans text-[0.6875rem] font-bold tracking-[0.2em] uppercase">
        Services
      </span>
      <dl className="grid gap-8 md:grid-cols-2">
        {SERVICES.map(([name, description]) => (
          <div key={name}>
            <dt className="font-display text-primary mb-2 text-xl font-bold">{name}</dt>
            <dd className="text-on-surface-variant font-sans leading-relaxed">{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default ServicesSection
