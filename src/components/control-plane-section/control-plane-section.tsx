import type { ReactNode } from 'react'

function Card({
  label,
  title,
  body,
  children,
}: {
  label: string
  title: string
  body: string
  children: ReactNode
}) {
  return (
    <article className="border-line bg-background flex flex-col gap-4.5 rounded-[10px] border p-7">
      <div className="text-muted font-mono text-xs tracking-[0.12em] uppercase">{label}</div>
      <h3 className="font-display text-primary text-2xl leading-tight font-extrabold">{title}</h3>
      <span className="sr-only">: </span>
      <p className="text-on-surface-variant leading-relaxed">{body}</p>
      <div className="mt-auto">{children}</div>
    </article>
  )
}

const RULES = [
  ['db:write', 'Owner only', 'text-secondary'],
  ['onboarding/**', 'Agents ship', 'text-ok'],
]

const STATE = [
  ['Checkout', '1 decision waiting'],
  ['Onboarding', 'Shipped'],
  ['Reports', 'No owner yet'],
]

function ControlPlaneSection() {
  return (
    <section id="control-plane" className="border-line bg-surface scroll-mt-20 border-y">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <span className="text-secondary mb-3.5 block font-mono text-xs tracking-[0.14em] uppercase">
          The control plane
        </span>
        <h2 className="font-display text-primary mb-4 text-[clamp(32px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
          One map of your app. For agents, developers and stakeholders.
        </h2>
        <p className="text-on-surface-variant mb-14 max-w-[620px] text-lg leading-relaxed">
          It lives in your repo. Agents read it, developers control it, everyone sees it.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          <Card
            label="For agents"
            title="Understand the code before changing it"
            body="A small, high-signal slice of the map: features, decisions, owners and critical paths. Less rediscovery, fewer broken things."
          >
            <div className="bg-dark text-on-dark rounded-md p-4 font-mono text-[13px] leading-[1.7]">
              <div>
                <span className="text-dark-muted">$</span> map pack checkout
              </div>
              <div className="text-dark-muted">feature checkout · critical</div>
              <div className="text-dark-muted">owner @payments-lead</div>
              <div className="text-dark-muted">rule no schema changes w/o review</div>
            </div>
          </Card>

          <Card
            label="For developers"
            title="Decide what agents can do"
            body="Set which zones agents may touch, which tools they may run, and which decisions block until a human signs off."
          >
            <ul className="flex flex-col gap-2 text-sm">
              <li className="border-attention/50 bg-attention/5 shadow-attention/20 flex items-center justify-between gap-3 rounded-md border px-3.5 py-2.5 shadow-[0_0_24px_-6px]">
                <span className="font-mono">auth/**</span>
                <span className="bg-attention relative inline-flex items-center gap-2 overflow-hidden rounded-full px-3 py-1 text-xs font-semibold text-white">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full rounded-full bg-white opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-white" />
                  </span>
                  Human decides
                  <span
                    aria-hidden="true"
                    className="motion-safe:animate-shimmer absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)]"
                  />
                </span>
              </li>
              {RULES.map(([scope, rule, color]) => (
                <li
                  key={scope}
                  className="border-line bg-surface flex justify-between gap-3 rounded-md border px-3.5 py-3"
                >
                  <span className="font-mono">{scope}</span>
                  <span className={`font-semibold ${color}`}>{rule}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card
            label="For stakeholders"
            title="Know the state of the app"
            body="Features, owners, what changed this week and where the risk is. No code, no standups to decode."
          >
            <table className="border-line bg-surface w-full border-collapse border text-sm">
              <thead>
                <tr className="text-muted text-left text-xs">
                  <th scope="col" className="border-line border-b px-3.5 py-2.5 font-medium">
                    Feature
                  </th>
                  <th scope="col" className="border-line border-b px-3.5 py-2.5 font-medium">
                    This week
                  </th>
                </tr>
              </thead>
              <tbody>
                {STATE.map(([feature, status]) => (
                  <tr key={feature} className="border-line-soft border-b last:border-0">
                    <td className="px-3.5 py-2.5">{feature}</td>
                    <td className="px-3.5 py-2.5">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        <p className="text-muted mt-10 flex items-center gap-2.5 font-mono text-[13px]">
          <span className="bg-accent size-2 shrink-0 rounded-full" />
          Our own tool. Early, and improving every week.
        </p>
      </div>
    </section>
  )
}

export default ControlPlaneSection
