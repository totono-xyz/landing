import { Page } from '@/components/page'

const FAQ = [
  [
    'What is a nearshore AI software factory?',
    'A software development team in a nearby time zone that ships with AI coding agents. At Totono, engineers in Argentina run a fleet of agents on your codebase and review every change.',
  ],
  [
    'Is it cheaper than a US agency or in-house team?',
    'Yes. Argentina costs less than a US-based team, and agents do much of the work, so one engineer covers what usually takes several. You get a written price before any work starts.',
  ],
  [
    'Is cheaper also riskier?',
    'No. Your developers decide what agents may touch, critical changes wait for a human, and every pull request is reviewed by an engineer.',
  ],
  [
    'Do I contract with a foreign company?',
    'No. You contract with TOTONO LLC, a Delaware company. One invoice, one point of contact.',
  ],
]

export default function NearshorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map(([name, text]) => ({
              '@type': 'Question',
              name,
              acceptedAnswer: { '@type': 'Answer', text },
            })),
          }),
        }}
      />
      <Page
        label="Nearshore AI software development"
        title="Software development from Argentina, powered by AI agents."
      >
        <p>
          You want software shipped, without paying US agency rates. Totono is a nearshore AI
          software factory: engineers in Argentina run a fleet of AI coding agents on your codebase.
          You get the output of a team at a fraction of the cost.
        </p>

        <h2>Why nearshore</h2>
        <ul>
          <li>Same workday: our engineers work on US Eastern Time.</li>
          <li>Lower cost: Argentina costs less than a US-based team.</li>
          <li>
            US contract: you sign with TOTONO LLC, a Delaware company. One invoice, one point of
            contact.
          </li>
          <li>English and Spanish.</li>
        </ul>

        <h2>Why AI agents</h2>
        <p>
          Agents write most of the code. Our engineers plan the work, run the agents and review
          every change. One engineer with a fleet of agents ships what usually takes a team. We work
          with Claude Code, Codex, Cursor and Grok, or the agent you already use.
        </p>

        <h2>How it compares</h2>
        <ul>
          <li>
            Traditional outsourcing agency: you pay for headcount. With Totono, you pay for an
            engineer whose agents do the work of several.
          </li>
          <li>
            Hiring in-house: months to recruit. We connect to your repo, CI, tracker and deploys,
            and start shipping in days.
          </li>
          <li>
            Using AI agents yourself: someone still has to run them and check their work. Our
            engineers do that, and the <a href="/#control-plane">control plane</a> keeps your team
            in charge of what agents can touch.
          </li>
        </ul>

        {FAQ.map(([question, answer]) => (
          <section key={question} className="space-y-4">
            <h2>{question}</h2>
            <p>{answer}</p>
          </section>
        ))}

        <h2>Get a price</h2>
        <p>
          The first call is free. Then you get a written proposal with scope, timeline and price.{' '}
          <a href="/contact">Get in touch</a>, or read the <a href="/faq">FAQ</a>.
        </p>
      </Page>
    </>
  )
}
