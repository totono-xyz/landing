import { Page } from '@/components/page'

export default function AboutPage() {
  return (
    <Page label="About" title="An agentic software factory, and the harness to control it.">
      <p>
        We plug into your codebase and tooling. Agents ship, our engineers review. You control it
        all through the harness.
      </p>

      <h2>The harness</h2>
      <ul>
        <li>For agents: a map of your code, so they don't break what matters.</li>
        <li>For developers: rules for what agents can touch, and what needs a human.</li>
        <li>For stakeholders: the state of the app, without reading code.</li>
      </ul>
      <p>
        The map lives in your repo. It works with Claude Code, Codex, Cursor and Grok. Our own tool,
        early and improving every week.
      </p>

      <h2>Who's behind it</h2>
      <p>
        Antonio Tralice: software engineer, Y Combinator alum (S20), a decade building web
        platforms. TOTONO LLC is a Delaware company working with clients in the Americas and Europe,
        on US Eastern Time.
      </p>

      <p>
        Want agents shipping on your codebase? <a href="/contact">Get in touch</a>.
      </p>
    </Page>
  )
}
