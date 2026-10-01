import { Page } from '@/components/page'

const FAQ = [
  [
    'What is Totono?',
    'Totono is an agentic software factory. We connect to your codebase and tooling, and agents start shipping. Our engineers run the agents and review the work. You get the harness to control them: it helps agents understand your code so they do not break critical paths, lets your developers decide what agents can do, and shows stakeholders the state of the app. TOTONO LLC is a Delaware limited liability company. We work remotely with clients across the Americas and Europe, on US Eastern Time.',
  ],
  [
    'What is the harness?',
    'Our own tool. A map of features, decisions, owners and critical paths lives in your repo, so any agent (Claude Code, Codex, Cursor and others) can read it before making a change. Developers set what agents may touch, which tools they can use and which decisions need a human. Stakeholders get a dashboard with the state of the app. It is early and changes every week, because we use it on every engagement.',
  ],
  [
    'Who is Antonio Tralice?',
    'Antonio Tralice is a software engineer and ed-tech entrepreneur, and a Y Combinator alumni (S20). He has spent more than a decade building web platforms, backend services and learning products. He built Totono to ship software with agents, without losing control of the code.',
  ],
  [
    'How fast can you start?',
    'We connect to your repo, CI, issue tracker and deploys, and start shipping pull requests in days. Your team reviews and merges them like any other work.',
  ],
  [
    'Do I keep control of my code?',
    'Yes. The map lives in your repo, not with us. Your developers decide what agents can touch, and important decisions (architecture, money, auth, data, security) go through a human. Every decision is recorded.',
  ],
  [
    'What languages and timezone does Totono work in?',
    'Totono works in English and Spanish. The working day is US Eastern Time, which makes real-time collaboration easy for clients in the Americas and Europe.',
  ],
  [
    'How do I start?',
    'Email toni.tralice@totono.xyz with a short description of your product, your stack and tooling, any deadlines or budget constraints, and the best way to reach you. Totono will reply, usually within two business days. After a short call you receive a written proposal with scope, timeline and pricing. The first conversation and proposal are free of charge and obligation.',
  ],
  [
    'How do proposals and pricing work?',
    'Every engagement starts with a free initial conversation and a written proposal. Proposals include scope, timeline, milestones and pricing. There is no public pricing list; pricing depends on the scope, complexity and timeline of each project.',
  ],
]

export default function FAQPage() {
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
      <Page label="FAQ" title="Frequently asked questions.">
        <p>
          Common questions about Totono, the agentic software factory, and the harness that controls
          it. If your question is not answered here, <a href="/contact">get in touch</a>.
        </p>
        {FAQ.map(([question, answer]) => (
          <section key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </section>
        ))}
      </Page>
    </>
  )
}
