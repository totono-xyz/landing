import { AGENT_LOGOS } from './agent-logos'

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

const ZONES = [
  ['checkout', 'critical · owner: you', true],
  ['auth', 'critical · owner: you', true],
  ['onboarding', 'open to agents', false],
] as const

const LOG = [
  ['agent', 'reads map, plans change'],
  ['agent', 'edits checkout/charge.ts'],
  ['gate', 'critical zone: needs a human'],
]

/** Illustrative example of the control plane, not live data. */
function ControlPlanePreview() {
  return (
    <figure
      aria-label="Example of the control plane: an agent change waiting for human approval"
      className="bg-dark text-on-dark m-0 min-w-0 flex-1 basis-[460px] overflow-hidden rounded-xl font-mono text-[13px] shadow-[0_30px_60px_-30px_rgba(20,22,26,0.45)]"
    >
      <div aria-hidden="true">
        <div className="border-dark-line flex items-center justify-between border-b px-4 py-3.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="bg-dark-line-strong size-2.5 rounded-full" />
            <span className="bg-dark-line-strong size-2.5 rounded-full" />
            <span className="bg-dark-line-strong size-2.5 rounded-full" />
          </div>
          <span className="text-dark-muted">control plane · your-app</span>
        </div>

        <div className="flex flex-col gap-4.5 px-4 py-5">
          <div className="flex flex-col gap-2">
            <div className="text-dark-muted text-[11px] tracking-[0.12em] uppercase">Map</div>
            <div className="grid grid-cols-3 gap-2">
              {ZONES.map(([name, label, critical]) => (
                <div
                  key={name}
                  className={`rounded-md border p-2.5 ${critical ? 'border-accent-on-dark' : 'border-dark-line-strong'}`}
                >
                  <div>{name}</div>
                  <div
                    className={`mt-1 text-[11px] ${critical ? 'text-accent-on-dark' : 'text-dark-muted'}`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-raised flex flex-col gap-1.5 rounded-md p-3.5">
            {LOG.map(([who, what]) => (
              <div key={what}>
                <span className={who === 'gate' ? 'text-accent-on-dark' : 'text-[#7fb4e8]'}>
                  {who}
                </span>{' '}
                <span className="text-dark-muted">→</span> {what}
              </div>
            ))}
          </div>

          <div className="border-accent-on-dark flex flex-wrap items-center justify-between gap-3 rounded-md border p-3.5 font-sans text-sm">
            <div>
              <div className="font-semibold">Change retry policy on failed charges?</div>
              <div className="text-dark-muted mt-0.5 text-xs">Decision recorded either way</div>
            </div>
            <div className="flex gap-2">
              <span className="border-dark-line-strong inline-flex min-h-9 items-center rounded-[5px] border px-3.5 font-semibold">
                Reject
              </span>
              <span className="bg-accent inline-flex min-h-9 items-center rounded-[5px] px-3.5 font-semibold text-white">
                Approve
              </span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

function HeroSection() {
  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 pt-14 pb-16 md:pt-16">
        <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-6">
          <div className="border-line bg-surface text-muted inline-flex items-center gap-2.5 self-start rounded-full border px-3 py-1.5 font-mono text-xs tracking-[0.08em] uppercase">
            <span className="bg-accent size-2 rounded-full" />
            v1.1 // {new Date().getFullYear()}
          </div>

          <h1 className="font-display text-primary text-[clamp(38px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.035em]">
            A nearshore
            <span
              aria-hidden="true"
              className="text-accent ml-[0.04em] align-[0.35em] text-[0.55em]"
            >
              *
            </span>{' '}
            agentic software factory,{' '}
            <span className="bg-[linear-gradient(transparent_62%,var(--color-highlight)_62%,var(--color-highlight)_92%,transparent_92%)]">
              and the control plane to run it.
            </span>
          </h1>

          <p className="text-on-surface-variant max-w-[520px] text-lg leading-relaxed">
            We connect to your codebase and agents start shipping. The control plane decides what
            they touch and what needs a human, and shows you the state of your app.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover font-display inline-flex min-h-13 items-center gap-2.5 rounded-md px-6 text-base font-extrabold text-white transition-colors"
            >
              Get in touch
              <ArrowIcon />
            </a>
            <a
              href="#control-plane"
              className="border-primary text-primary font-display hover:bg-surface inline-flex min-h-13 items-center rounded-md border px-5 text-base font-bold transition-colors"
            >
              See the control plane
            </a>
          </div>

          <p id="nearshore" className="text-muted flex items-center gap-2 font-mono text-xs">
            <span aria-hidden="true" className="text-accent">
              *
            </span>
            Engineers in Argentina
            <svg
              role="img"
              aria-label="(flag of Argentina)"
              viewBox="0 0 18 12"
              className="ring-line h-3 w-[18px] rounded-[2px] ring-1"
            >
              <rect width="18" height="12" fill="#74acdf" />
              <rect y="4" width="18" height="4" fill="#fff" />
              <circle cx="9" cy="6" r="1.4" fill="#f6b40e" />
            </svg>{' '}
            · US hours · US contract
          </p>
        </div>

        <ControlPlanePreview />
      </section>

      <section aria-label="Supported agents" className="border-line bg-surface border-y">
        <div className="text-muted mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-6 py-5">
          <span className="font-mono text-xs tracking-[0.12em] uppercase">
            Bring your own agent
          </span>
          <ul className="text-on-surface flex flex-wrap items-center gap-x-9 gap-y-3">
            {AGENT_LOGOS.map(([name, url, path]) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary flex items-center gap-2.5 font-medium transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    fillRule="evenodd"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export { ArrowIcon }
export default HeroSection
