import { Page } from '@/components/page'

export default function AboutPage() {
  return (
    <Page label="About" title="An agentic software factory, and the harness to control it.">
      <p>
        Totono is an agentic software factory. We connect to your codebase and tooling, and agents
        start shipping. Our engineers run the agents and review the work. You get the harness to
        control them.
      </p>
      <p>
        TOTONO LLC is a Delaware limited liability company. We work remotely with clients across the
        Americas and Europe, on US Eastern Time.
      </p>

      <h2>What the harness does</h2>
      <ul>
        <li>
          Helps agents understand the code: a map of features, decisions, owners and critical paths
          lives in your repo. Agents read it before they make a change, so they do not break what
          matters.
        </li>
        <li>
          Gives developers control: your team decides what agents may touch, which tools they can
          use, and which decisions must go through a human. Every decision is recorded.
        </li>
        <li>
          Shows stakeholders the state of the app: features, owners, what changed this week and
          where the risk is, without reading code.
        </li>
      </ul>
      <p>
        The harness is our own tool. It is early and it changes every week, because we use it on
        every engagement. It works with any agent harness (Claude Code, Codex, Cursor and others).
        The map lives in your repo, not with us.
      </p>

      <h2>What you get</h2>
      <ul>
        <li>Fast start: we plug into your repo, CI, issue tracker and deploys in days.</li>
        <li>Shipped work: pull requests against your codebase, reviewed by our engineers.</li>
        <li>Control: your developers set the rules for what agents can do.</li>
        <li>Visibility: one view of the state of your app for everyone who needs it.</li>
        <li>Zero friction: one contract, one invoice, one email thread.</li>
      </ul>

      <h2>Who Antonio is</h2>
      <p>
        Antonio Tralice is a software engineer and ed-tech entrepreneur, and a Y Combinator alumni
        (S20). He has spent more than a decade building web platforms, backend services and learning
        products. He built Totono to ship software with agents, without losing control of the code.
      </p>

      <h2>Who this is for</h2>
      <p>
        Founders and technical leaders who want to ship more with agents, but not at the cost of a
        codebase nobody understands. If you have a product, a backlog and a team that wants to stay
        in control, this is for you.
      </p>
      <p>
        Want agents shipping on your codebase? <a href="/contact">Get in touch</a>.
      </p>
    </Page>
  )
}
