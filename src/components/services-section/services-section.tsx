const SERVICES = [
  [
    'Antonio vets the engineers',
    'He interviews and selects Argentinian engineers with strong technical backgrounds and AI experience.',
  ],
  [
    'They work on his AI system',
    'Engineers use the AI tooling and harness Antonio designs and controls for quality and velocity.',
  ],
  [
    'You manage them, or Antonio does',
    'Either way works. Totono stays on to support them and handle the business side.',
  ],
  [
    'Zero friction for you',
    'One contract, one invoice, one point of contact. No international hiring overhead.',
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
