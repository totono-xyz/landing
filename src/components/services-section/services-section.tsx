const SERVICES = [
  [
    'You talk to Antonio',
    'One conversation. Tell him what you need, and he finds the right engineer for your project.',
  ],
  [
    'He sets them up on his AI harness',
    'Engineers work on an AI system and tooling Antonio designs and controls for quality and velocity.',
  ],
  ['They do the work', 'The engineer delivers. Antonio stays close enough to support them.'],
  [
    'He handles the business side',
    'Contract, payments, coordination. One invoice, one point of contact.',
  ],
]

function ServicesSection() {
  return (
    <section className="relative z-10 mt-32 max-w-4xl">
      <span className="text-secondary mb-8 block font-sans text-[0.6875rem] font-bold tracking-[0.2em] uppercase">
        How it works
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
