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
  ['auth/**', 'Human decides', 'text-secondary'],
  ['db:write', 'Owner only', 'text-secondary'],
  ['onboarding/**', 'Agents ship', 'text-ok'],
]

const STATE = [
  ['Checkout', '1 decision waiting'],
  ['Onboarding', 'Shipped'],
  ['Reports', 'No owner yet'],
]

function HarnessSection() {
  return (
    <section id="harness" className="border-line bg-surface scroll-mt-20 border-y">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <span className="text-secondary mb-3.5 block font-mono text-xs tracking-[0.14em] uppercase">
          The harness
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
            title="Context before changes"
            body="Features, decisions, owners, critical paths. Fewer broken things."
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
            title="Rules for agents"
            body="Zones, tools, and which decisions need a human."
          >
            <ul className="flex flex-col gap-2 text-sm">
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
            title="The state of the app"
            body="Features, owners, changes, risk. No code."
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

export default HarnessSection
