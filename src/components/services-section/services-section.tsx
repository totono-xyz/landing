const SERVICES = [
  [
    'We plug into your stack',
    'Repo, CI, issue tracker, deploys. We connect to what you already use and start shipping in days, not months.',
  ],
  [
    'Agents understand your code',
    'A map of features, decisions and critical paths lives in your repo. Agents read it before they change anything.',
  ],
  [
    'Developers stay in control',
    'Your team decides what agents may touch, which tools they can use, and which decisions go through a human.',
  ],
  [
    'Everyone sees the state',
    'Stakeholders get a plain view of features, owners, what changed this week and where the risk is.',
  ],
]

function ServicesSection() {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
      <span className="text-secondary mb-3.5 block font-mono text-xs tracking-[0.14em] uppercase">
        How it works
      </span>
      <h2 className="font-display text-primary mb-14 max-w-[620px] text-[clamp(32px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
        Hire us, and agents ship on your codebase within days.
      </h2>
      <ol className="border-primary grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t-2">
        {SERVICES.map(([name, description], i) => (
          <li key={name} className="flex flex-col gap-3 pt-7 pr-7 pb-2">
            <span aria-hidden="true" className="text-secondary font-mono text-sm">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-primary text-[22px] leading-tight font-extrabold">
              {name}
            </h3>
            <span className="sr-only">: </span>
            <p className="text-on-surface-variant leading-relaxed">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ServicesSection
