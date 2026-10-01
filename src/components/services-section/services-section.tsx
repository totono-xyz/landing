const SERVICES = [
  [
    'We plug into your stack',
    'Repo, CI, issue tracker, deploys. We connect to what you already use and start shipping in days, not months.',
  ],
  [
    'Agents understand your code',
    'A map of features, decisions and critical paths lives in your repo. Agents read it before they change anything, so they do not break what matters.',
  ],
  [
    'Developers stay in control',
    'Your team decides what agents may touch, which tools they can use, and which decisions must go through a human.',
  ],
  [
    'Everyone sees the state of the app',
    'Stakeholders get a plain view of features, owners, what changed this week and where the risk is. No need to read code.',
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
      <p className="text-on-surface-variant mt-12 max-w-2xl font-sans text-sm leading-relaxed">
        The harness is our own tool. It is early and it changes every week, because we use it on
        every engagement.
      </p>
    </section>
  )
}

export default ServicesSection
