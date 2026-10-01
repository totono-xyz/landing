import { Page } from '@/components/page'

export default function AboutPage() {
  return (
    <Page
      label="About"
      title="A nearshore agentic software factory, and the control plane to run it."
    >
      <p>
        One engineer and a fleet of agents, working on your codebase. We connect to your stack and
        start shipping in days. The control plane keeps your team in control.
      </p>

      <h2>Why it works</h2>
      <p>
        Human attention is the scarce asset now. The control plane points it at the decisions that
        matter, and leaves everything else to agents.
      </p>

      <h2>The control plane</h2>
      <ul>
        <li>For agents: a map of your app's features, decisions and critical paths.</li>
        <li>
          For developers: decide what agents may touch, which tools they run, and which decisions
          need a human.
        </li>
        <li>For stakeholders: features, owners, what changed this week and where the risk is.</li>
      </ul>
      <p>
        The map lives in your repo. It works with Claude Code, Codex, Cursor and Grok. Our own tool,
        early and improving every week.
      </p>

      <h2>Nearshore</h2>
      <p>
        Engineers in Argentina, on US Eastern Time. You contract with a US company (TOTONO LLC,
        Delaware). We handle contract, pricing and coordination. One invoice, one point of contact.
      </p>

      <h2>Who's behind it</h2>
      <p>
        Antonio Tralice: software engineer and Y Combinator alum (S20), with more than a decade of
        experience building software.
      </p>

      <p>
        Want your own software factory? <a href="/contact">Get in touch</a>.
      </p>
    </Page>
  )
}
