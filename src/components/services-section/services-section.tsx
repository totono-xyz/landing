import { StepIcon } from './step-icons'

const SERVICES = [
  [
    'One conversation',
    'Then we plug into your stack (repo, CI, issue tracker, deploys) and start shipping in days, not months.',
  ],
  [
    'Agents understand your code',
    "We create a map so agents know your app's features, decisions and critical paths.",
  ],
  [
    'Developers stay in control',
    'Your team decides what agents may touch, which tools they can use, and which critical decisions should go through a human.',
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
      <ol className="border-primary grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-7 border-t-2 pt-7">
        {SERVICES.map(([name, description], i) => (
          <li key={name} className="row-span-3 grid grid-rows-subgrid gap-3 pb-8">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="text-secondary font-mono text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <StepIcon index={i} />
            </div>
            <h3 className="font-display text-primary mt-3 text-[22px] leading-tight font-extrabold">
              {name}
              <span className="sr-only">: </span>
            </h3>
            <p className="text-on-surface-variant leading-relaxed">{description}</p>
          </li>
        ))}
      </ol>

      <div className="border-line mt-16 grid gap-10 border-t pt-12 md:grid-cols-[3fr_2fr]">
        <p className="font-display text-primary text-[clamp(24px,2.6vw,32px)] leading-snug font-extrabold tracking-[-0.02em]">
          Human attention is the scarce asset now. We point it at the decisions that matter, and
          leave everything else to agents.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-secondary font-mono text-xs tracking-[0.14em] uppercase">
            The business side
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            We handle contract, pricing and coordination. One invoice, one point of contact.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
