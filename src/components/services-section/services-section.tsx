const SERVICES = [
  ['Plug in', 'Your repo, CI, tracker and deploys.'],
  ['Agents learn the code', 'A map in your repo shows them what matters.'],
  ['You set the rules', 'What agents can touch, and what needs a human.'],
  ['Everyone sees the state', 'Features, owners, changes, risk.'],
]

function ServicesSection() {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
      <span className="text-secondary mb-3.5 block font-mono text-xs tracking-[0.14em] uppercase">
        How it works
      </span>
      <h2 className="font-display text-primary mb-14 max-w-[620px] text-[clamp(32px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
        Shipping in days.
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
